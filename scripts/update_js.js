const fs = require('fs');
const { glob } = require('glob');
const cdn = 'https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev';

async function main() {
    const files = await glob('src/**/*.{js,jsx}');
    files.forEach(f => {
        let data = fs.readFileSync(f, 'utf8');
        let orig = data;
        data = data.replace(/"\/images\//g, '"' + cdn + '/images/');
        data = data.replace(/"\/videos\//g, '"' + cdn + '/videos/');
        data = data.replace(/'\/images\//g, "'" + cdn + '/images/');
        data = data.replace(/'\/videos\//g, "'" + cdn + '/videos/');
        if (data !== orig) {
            fs.writeFileSync(f, data);
            console.log('Updated ' + f);
        }
    });
}
main().catch(console.error);
