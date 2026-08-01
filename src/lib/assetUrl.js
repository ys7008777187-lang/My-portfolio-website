const assetCDN = process.env.NEXT_PUBLIC_ASSET_CDN || "";

export function getAssetUrl(path) {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!assetCDN) return path;
  return `${assetCDN.replace(/\/$/, "")}${path}`;
}
