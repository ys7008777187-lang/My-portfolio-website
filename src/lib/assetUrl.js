const assetCDN = process.env.NODE_ENV === "development" ? (process.env.NEXT_PUBLIC_ASSET_CDN || "") : (process.env.NEXT_PUBLIC_ASSET_CDN || "https://cdn.yashsrivastava.co.in");

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
