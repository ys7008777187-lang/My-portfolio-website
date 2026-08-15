const fs = require('fs');
const { glob } = require('glob');
const cdn = 'https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev';

async function main() {
    const files = await glob('src/**/*.{js,jsx,json,css}');
    files.forEach(f => {
        let data = fs.readFileSync(f, 'utf8');
        let orig = data;
        
        // Add /public before /images, /videos, and /models if it's missing in the CDN url
        const regexImages = new RegExp(cdn.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '/images/', 'g');
        const regexVideos = new RegExp(cdn.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '/videos/', 'g');
        const regexModels = new RegExp(cdn.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '/models/', 'g');
        
        data = data.replace(regexImages, cdn + '/public/images/');
        data = data.replace(regexVideos, cdn + '/public/videos/');
        data = data.replace(regexModels, cdn + '/public/models/');
        
        if (data !== orig) {
            fs.writeFileSync(f, data);
            console.log('Fixed ' + f);
        }
    });
}
main().catch(console.error);
