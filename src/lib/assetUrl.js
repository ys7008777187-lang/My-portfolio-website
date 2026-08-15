const assetCDN = process.env.NEXT_PUBLIC_ASSET_CDN || "";

export function getAssetUrl(path) {
  if (!path) return path;
  
  let processedPath = path;
  if (processedPath.includes(' ')) {
    processedPath = encodeURI(processedPath);
  }

  if (processedPath.startsWith("http://") || processedPath.startsWith("https://")) return processedPath;
  
  // Disable CDN to avoid ISP blocking issues
  if (!assetCDN) return processedPath;
  return `${assetCDN.replace(/\/$/, "")}${processedPath}`;
}
