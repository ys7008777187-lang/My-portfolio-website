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

  // Use CDN prefix when configured
  if (!assetCDN) return processedPath;
  return `${assetCDN.replace(/\/$/, "")}${processedPath}`;
}
