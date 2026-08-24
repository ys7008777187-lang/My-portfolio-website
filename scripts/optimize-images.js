/**
 * Optimize all images in public/ by converting to WebP and resizing.
 *
 * Features:
 * - Converts PNG/JPG/JPEG to WebP (quality 85)
 * - Resizes images exceeding max dimensions (1400px wide for full, 400px for thumbnails)
 * - Generates thumbnail variants for gallery cards
 * - Preserves originals — creates .webp files alongside them
 * - Skips already-optimized files (unless --force)
 * - Reports before/after sizes
 *
 * Usage:
 *   node scripts/optimize-images.js
 *   node scripts/optimize-images.js --force
 *   node scripts/optimize-images.js --dry-run
 *   node scripts/optimize-images.js --thumbnails-only
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// ─── Configuration ─────────────────────────────────────────────────
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const QUALITY = 85;
const MAX_WIDTH_FULL = 1400;       // Max width for full-view images
const MAX_WIDTH_THUMBNAIL = 400;   // Thumbnail width for cards/grids
const CONCURRENCY = 4;             // Parallel conversions

const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');
const THUMBNAILS_ONLY = process.argv.includes('--thumbnails-only');

// Extensions to optimize
const OPTIMIZABLE_EXTS = new Set(['.png', '.jpg', '.jpeg']);

// Directories to skip entirely
const SKIP_DIRS = new Set([
  'node_modules', '.git', '.next', '.vercel', '.wrangler',
  'Basecamp Assignment', 'Worq', 'models',
]);

// Directories where we also generate thumbnails (for gallery cards)
const THUMBNAIL_DIRS = [
  'images/artworks',
  'images/projects',
  'images/campusbites',
  'images/ADT',
  'images/basecamp',
  'images/bhaiyaa',
  'images/myrik',
  'images/worq',
  'images/blog',
  'images/skills',
];

// ─── Helpers ────────────────────────────────────────────────────────
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function walkDir(dir, collected = []) {
  if (!fs.existsSync(dir)) return collected;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walkDir(fullPath, collected);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (OPTIMIZABLE_EXTS.has(ext)) {
        // Skip already-generated webp/thumbnail files
        if (entry.name.endsWith('.thumb.webp') || entry.name.endsWith('.thumb.jpg')) continue;

        collected.push({
          absolutePath: fullPath,
          relativePath: path.relative(PUBLIC_DIR, fullPath),
          ext,
          size: fs.statSync(fullPath).size,
        });
      }
    }
  }

  return collected;
}

function getWebpPath(absolutePath) {
  const parsed = path.parse(absolutePath);
  return path.join(parsed.dir, `${parsed.name}.webp`);
}

function getThumbPath(absolutePath) {
  const parsed = path.parse(absolutePath);
  return path.join(parsed.dir, `${parsed.name}.thumb.webp`);
}

function shouldGenerateThumbnail(relativePath) {
  const normalized = relativePath.split(path.sep).join('/');
  return THUMBNAIL_DIRS.some(dir => normalized.startsWith(dir));
}

async function optimizeImage(file) {
  const results = { file: file.relativePath, originalSize: file.size, actions: [] };

  try {
    const image = sharp(file.absolutePath);
    const metadata = await image.metadata();

    // ─── Full WebP conversion ───
    if (!THUMBNAILS_ONLY) {
      const webpPath = getWebpPath(file.absolutePath);

      if (!FORCE && fs.existsSync(webpPath)) {
        results.actions.push({ type: 'skip-webp', reason: 'exists' });
      } else {
        let pipeline = sharp(file.absolutePath);

        // Resize if wider than max
        if (metadata.width && metadata.width > MAX_WIDTH_FULL) {
          pipeline = pipeline.resize({
            width: MAX_WIDTH_FULL,
            withoutEnlargement: true,
            fit: 'inside',
          });
        }

        pipeline = pipeline.webp({ quality: QUALITY, effort: 4 });

        if (!DRY_RUN) {
          const buffer = await pipeline.toBuffer();
          fs.writeFileSync(webpPath, buffer);
          results.actions.push({
            type: 'webp',
            outputSize: buffer.length,
            outputPath: path.relative(PUBLIC_DIR, webpPath),
          });
        } else {
          results.actions.push({ type: 'webp-dryrun' });
        }
      }
    }

    // ─── Thumbnail generation ───
    if (shouldGenerateThumbnail(file.relativePath)) {
      const thumbPath = getThumbPath(file.absolutePath);

      if (!FORCE && fs.existsSync(thumbPath)) {
        results.actions.push({ type: 'skip-thumb', reason: 'exists' });
      } else {
        let thumbPipeline = sharp(file.absolutePath)
          .resize({
            width: MAX_WIDTH_THUMBNAIL,
            withoutEnlargement: true,
            fit: 'inside',
          })
          .webp({ quality: 80, effort: 4 });

        if (!DRY_RUN) {
          const thumbBuffer = await thumbPipeline.toBuffer();
          fs.writeFileSync(thumbPath, thumbBuffer);
          results.actions.push({
            type: 'thumbnail',
            outputSize: thumbBuffer.length,
            outputPath: path.relative(PUBLIC_DIR, thumbPath),
          });
        } else {
          results.actions.push({ type: 'thumb-dryrun' });
        }
      }
    }
  } catch (err) {
    results.error = err.message;
  }

  return results;
}

async function processInBatches(items, fn, concurrency) {
  const allResults = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(fn));
    allResults.push(...batchResults);

    // Progress
    const done = Math.min(i + concurrency, items.length);
    const pct = Math.round((done / items.length) * 100);
    process.stdout.write(`\r  [${pct}%] ${done}/${items.length} processed`);
  }
  process.stdout.write('\n');
  return allResults;
}

// ─── Main ───────────────────────────────────────────────────────────
async function main() {
  console.log('🔍 Scanning public/ for optimizable images...\n');

  const files = walkDir(PUBLIC_DIR);
  const totalOriginalSize = files.reduce((sum, f) => sum + f.size, 0);

  console.log(`  Found ${files.length} images (${formatSize(totalOriginalSize)} total)\n`);

  if (DRY_RUN) {
    console.log('🏃 DRY RUN — no files will be written\n');
  }

  console.log('⚙️  Optimizing images...\n');

  const results = await processInBatches(files, optimizeImage, CONCURRENCY);

  // ─── Report ───
  let totalWebpSize = 0;
  let totalThumbSize = 0;
  let webpCount = 0;
  let thumbCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const r of results) {
    if (r.error) {
      errorCount++;
      console.error(`  ❌ ${r.file}: ${r.error}`);
      continue;
    }

    for (const action of r.actions) {
      if (action.type === 'webp') {
        webpCount++;
        totalWebpSize += action.outputSize;
      } else if (action.type === 'thumbnail') {
        thumbCount++;
        totalThumbSize += action.outputSize;
      } else if (action.type === 'skip-webp' || action.type === 'skip-thumb') {
        skipCount++;
      }
    }
  }

  console.log('\n📊 Optimization Results:');
  console.log(`  ─────────────────────────────────────────`);
  console.log(`  Original images:  ${files.length} files (${formatSize(totalOriginalSize)})`);
  console.log(`  WebP converted:   ${webpCount} files (${formatSize(totalWebpSize)})`);
  console.log(`  Thumbnails:       ${thumbCount} files (${formatSize(totalThumbSize)})`);
  console.log(`  Skipped:          ${skipCount} (already exist)`);
  if (errorCount > 0) {
    console.log(`  Errors:           ${errorCount}`);
  }

  if (webpCount > 0) {
    const savings = totalOriginalSize - totalWebpSize;
    const pct = Math.round((savings / totalOriginalSize) * 100);
    console.log(`\n  💾 WebP savings:  ${formatSize(savings)} (${pct}% reduction)`);
  }

  if (thumbCount > 0) {
    console.log(`  🖼️  Thumbnail total: ${formatSize(totalThumbSize)}`);
  }

  console.log(`\n✅ Done!`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
