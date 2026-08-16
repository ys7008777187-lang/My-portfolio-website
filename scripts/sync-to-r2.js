/**
 * Sync all public assets to Cloudflare R2 CDN bucket.
 *
 * Features:
 * - Walks public/ recursively for media files
 * - Skips files already uploaded (HEAD check)
 * - Sets Cache-Control for long-term caching
 * - Batched uploads with progress reporting
 * - --dry-run flag to preview without uploading
 * - --force flag to re-upload everything
 *
 * Usage:
 *   node scripts/sync-to-r2.js
 *   node scripts/sync-to-r2.js --dry-run
 *   node scripts/sync-to-r2.js --force
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(process.cwd(), '.env.local');
const envFile = fs.existsSync(envPath) ? envPath : path.resolve(process.cwd(), '.env');
dotenv.config({ path: envFile });

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN;
const BUCKET = process.env.CLOUDFLARE_R2_BUCKET || process.env.CF_R2_BUCKET || 'assets';
const CDN_BASE = process.env.NEXT_PUBLIC_ASSET_CDN || '';

const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');
const CONCURRENCY = 5; // parallel uploads

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('❌ Missing Cloudflare credentials. Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN in .env.local');
  process.exit(1);
}

const CONTENT_TYPES = {
  '.mp4': 'video/mp4',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.json': 'application/json',
};

// Long-term caching for immutable assets
const CACHE_CONTROL = 'public, max-age=31536000, immutable';
// Shorter cache for mutable files
const MUTABLE_EXTENSIONS = ['.json'];
const MUTABLE_CACHE = 'public, max-age=3600, s-maxage=86400';

function walkDir(dir) {
  const dirPath = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) return [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const collected = [];

  for (const entry of entries) {
    // Skip hidden files and directories
    if (entry.name.startsWith('.')) continue;

    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      // Skip non-asset directories
      const skipDirs = [
        'node_modules', '.git', '.next', '.vercel', '.wrangler',
        'Basecamp Assignment', 'Campusbite', 'Comic Magazine',
        'Fifth Layer foundation post → carousel', 'Graphics and artworks',
        'Nexus point issue 3', 'The Nexus Point', 'Video Edits',
        'uploads', // test uploads
      ];
      if (skipDirs.includes(entry.name)) continue;
      collected.push(...walkDir(path.join(dir, entry.name)));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CONTENT_TYPES[ext]) {
        const r2Key = path.relative(path.resolve(process.cwd(), 'public'), entryPath)
          .split(path.sep).join('/');
        collected.push({
          localPath: entryPath,
          r2Key,
          ext,
          size: fs.statSync(entryPath).size,
        });
      }
    }
  }

  return collected;
}

async function checkExists(r2Key) {
  if (FORCE) return false;

  try {
    const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(r2Key)}`;
    const res = await fetch(url, {
      method: 'HEAD',
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function uploadFile({ localPath, r2Key, ext }) {
  const body = fs.readFileSync(localPath);
  const contentType = CONTENT_TYPES[ext] || 'application/octet-stream';
  const cacheControl = MUTABLE_EXTENSIONS.includes(ext) ? MUTABLE_CACHE : CACHE_CONTROL;

  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(r2Key)}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': contentType,
      'Cache-Control': cacheControl,
    },
    body,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Upload failed for ${r2Key}: ${res.status} ${text}`);
  }

  return true;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function processInBatches(items, fn, concurrency) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.allSettled(batch.map(fn));
    results.push(...batchResults);
  }
  return results;
}

async function main() {
  console.log('🔍 Scanning public/ for assets...\n');

  const files = walkDir('public');
  const totalSize = files.reduce((sum, f) => sum + f.size, 0);

  console.log(`Found ${files.length} asset files (${formatSize(totalSize)} total)\n`);

  if (DRY_RUN) {
    console.log('🏃 DRY RUN — no files will be uploaded\n');
    files.forEach(f => console.log(`  ${f.r2Key} (${formatSize(f.size)})`));
    console.log(`\n📊 Would upload ${files.length} files (${formatSize(totalSize)})`);
    return;
  }

  // Check which files need uploading
  console.log('⏳ Checking existing files on R2...');
  let toUpload = [];
  let skipped = 0;

  for (const file of files) {
    const exists = await checkExists(file.r2Key);
    if (exists) {
      skipped++;
    } else {
      toUpload.push(file);
    }
  }

  if (skipped > 0) {
    console.log(`  ⏭️  Skipping ${skipped} files already on R2`);
  }

  if (toUpload.length === 0) {
    console.log('\n✅ All files are already synced to R2!');
    return;
  }

  const uploadSize = toUpload.reduce((sum, f) => sum + f.size, 0);
  console.log(`\n📤 Uploading ${toUpload.length} files (${formatSize(uploadSize)})...\n`);

  let uploaded = 0;
  let failed = 0;

  const results = await processInBatches(toUpload, async (file) => {
    try {
      await uploadFile(file);
      uploaded++;
      const pct = Math.round((uploaded / toUpload.length) * 100);
      process.stdout.write(`\r  [${pct}%] ${uploaded}/${toUpload.length} uploaded — ${file.r2Key}`);
      return { status: 'ok', key: file.r2Key };
    } catch (error) {
      failed++;
      console.error(`\n  ❌ ${file.r2Key}: ${error.message}`);
      return { status: 'error', key: file.r2Key, error: error.message };
    }
  }, CONCURRENCY);

  console.log('\n');

  if (failed > 0) {
    console.log(`⚠️  ${failed} file(s) failed to upload`);
  }

  console.log(`✅ Sync complete: ${uploaded} uploaded, ${skipped} skipped, ${failed} failed`);

  if (CDN_BASE) {
    console.log(`\n🌐 CDN Base: ${CDN_BASE}`);
    console.log(`   Example: ${CDN_BASE}/images/work-page-bg.jpg`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
