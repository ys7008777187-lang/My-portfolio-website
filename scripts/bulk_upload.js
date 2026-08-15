const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');
const { glob } = require('glob');
const dotenv = require('dotenv');
const execPromise = util.promisify(exec);

dotenv.config({ path: '.env.local' });

const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const BUCKET = process.env.CLOUDFLARE_R2_BUCKET || 'assets';

if (!API_TOKEN || !ACCOUNT_ID) {
    console.error('Missing CLOUDFLARE_API_TOKEN or CLOUDFLARE_ACCOUNT_ID in .env.local');
    process.exit(1);
}

// Ensure wrangler doesn't prompt for anything
process.env.CI = 'true';

const exts = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg', 'mp4', 'webm', 'glb', 'gltf'];
const pattern = `**/*.{${exts.join(',')}}`;

async function main() {
    console.log('Finding files...');
    // Ignore node_modules, .next, etc
    const files = await glob(pattern, { ignore: ['node_modules/**', '.next/**', 'out/**', '.git/**'] });
    
    console.log(`Found ${files.length} files to upload.`);

    // Run in concurrency of 5
    const concurrency = 5;
    let i = 0;
    
    const worker = async () => {
        while (i < files.length) {
            const file = files[i++];
            const objectName = file.replace(/\\/g, '/'); // normalize for R2 key
            console.log(`Uploading ${objectName}...`);
            const cmd = `npx wrangler r2 object put "${BUCKET}/${objectName}" --file="${file}" --remote`;
            try {
                const { stdout, stderr } = await execPromise(cmd, { env: process.env });
                console.log(`✅ Uploaded ${objectName}`);
            } catch (err) {
                console.error(`❌ Failed to upload ${objectName}: ${err.message}`);
            }
        }
    };

    const workers = [];
    for (let w = 0; w < concurrency; w++) {
        workers.push(worker());
    }

    await Promise.all(workers);
    console.log('Done!');
}

main().catch(console.error);
