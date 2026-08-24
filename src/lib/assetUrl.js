// Only use a CDN prefix when NEXT_PUBLIC_ASSET_CDN is explicitly provided.
// This avoids forcing a default CDN that may not host the public assets
// (e.g., when deploying to Cloudflare Pages without setting env vars).
const assetCDN = process.env.NEXT_PUBLIC_ASSET_CDN || "";

/**
 * Resolves an asset path to a full CDN URL when available.
 * Falls back to the local path if CDN is not configured.
 *
 * @param {string} path - The asset path (e.g., "/images/project.jpg")
 * @returns {string} The resolved URL
 */
export function getAssetUrl(path) {
  if (!path) return path;

  // Encode spaces in paths for URL safety
  let processedPath = path;
  if (processedPath.includes(' ')) {
    processedPath = encodeURI(processedPath);
  }

  // External URLs pass through unchanged
  if (processedPath.startsWith("http://") || processedPath.startsWith("https://")) return processedPath;

  // Use CDN prefix when configured and not in development mode
  if (!assetCDN || process.env.NODE_ENV === 'development') return processedPath;
  return `${assetCDN.replace(/\/$/, "")}${processedPath}`;
}

// Extensions that have WebP optimized versions
const OPTIMIZABLE_EXTS = /\.(png|jpg|jpeg)$/i;

/**
 * Returns the WebP-optimized version of an image path.
 * For .png/.jpg/.jpeg files, replaces the extension with .webp.
 * Other file types pass through unchanged.
 *
 * @param {string} imagePath - The original image path
 * @param {object} options - Options
 * @param {boolean} options.thumbnail - If true, returns the thumbnail variant (.thumb.webp)
 * @returns {string} The optimized image path
 */
export function getOptimizedUrl(imagePath, { thumbnail = false } = {}) {
  if (!imagePath) return imagePath;

  // Don't touch external URLs or non-optimizable formats
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
  if (!OPTIMIZABLE_EXTS.test(imagePath)) return getAssetUrl(imagePath);

  // Replace extension with .webp or .thumb.webp
  const suffix = thumbnail ? '.thumb.webp' : '.webp';
  const optimizedPath = imagePath.replace(OPTIMIZABLE_EXTS, suffix);

  return getAssetUrl(optimizedPath);
}

/**
 * Returns both the original resolved URL and the optimized WebP URL.
 * Useful for <picture> elements with fallback.
 *
 * @param {string} imagePath - The original image path
 * @param {object} options
 * @param {boolean} options.thumbnail - If true, uses thumbnail variant
 * @returns {{ original: string, webp: string }}
 */
export function getImageSources(imagePath, { thumbnail = false } = {}) {
  return {
    original: getAssetUrl(imagePath),
    webp: getOptimizedUrl(imagePath, { thumbnail }),
  };
}
