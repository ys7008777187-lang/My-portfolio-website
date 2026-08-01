const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(process.cwd(), '.env.local');
const envFile = fs.existsSync(envPath) ? envPath : path.resolve(process.cwd(), '.env');
dotenv.config({ path: envFile });

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN;
const BUCKET = process.env.CLOUDFLARE_R2_BUCKET || process.env.CF_R2_BUCKET || 'assets';

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('Missing Cloudflare credentials. Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN.');
  process.exit(1);
}

const contentTypes = {
  '.mp4': 'video/mp4',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
};

const walkDir = (dir) => {
  const dirPath = path.resolve(process.cwd(), dir);
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const collected = [];

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      collected.push(...walkDir(path.join(dir, entry.name)));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (contentTypes[ext]) {
        const localPath = path.normalize(path.join(dir, entry.name));
        const r2Key = path.posix.join(path.relative(path.resolve(process.cwd(), 'public'), entryPath).split(path.sep).join('/'));
        collected.push({ localPath, r2Key });
      }
    }
  }

  return collected;
};

const files = [
  ...walkDir('public/videos'),
  ...walkDir('public/images'),
];

const uploadFile = async ({ localPath, r2Key }) => {
  const filePath = path.resolve(process.cwd(), localPath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Local file not found: ${filePath}`);
  }

  const body = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = contentTypes[ext] || 'application/octet-stream';

  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(r2Key)}`;

  console.log(`Uploading ${localPath} → ${BUCKET}/${r2Key}`);

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': contentType,
    },
    body,
  });

  const result = await res.json();
  if (!res.ok || !result.success) {
    throw new Error(`Upload failed for ${r2Key}: ${res.status} ${JSON.stringify(result)}`);
  }

  return {
    key: r2Key,
    url: `https://${BUCKET}.${ACCOUNT_ID}.r2.cloudflarestorage.com/${encodeURIComponent(r2Key)}`,
    size: result.result?.size || body.length,
  };
};

const main = async () => {
  const uploaded = [];

  for (const file of files) {
    try {
      const info = await uploadFile(file);
      uploaded.push(info);
      console.log(`Uploaded: ${info.url} (${info.size} bytes)`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  console.log('\nUpload complete.');
  uploaded.forEach((item) => console.log(item.url));
};

main();
