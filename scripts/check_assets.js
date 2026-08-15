const fs = require('fs');
const path = require('path');

const cdnBase = 'https://pub-5595d92cf36742b8a68ec73826bbecab.r2.dev';

const projects = JSON.parse(fs.readFileSync('./src/data/projects.json', 'utf8'));
const profile = JSON.parse(fs.readFileSync('./src/data/profile.json', 'utf8'));

const testPaths = new Set();

projects.forEach(p => {
  if (p.image) testPaths.add(p.image);
  if (Array.isArray(p.mangaGallery)) {
    p.mangaGallery.forEach(item => {
      if (typeof item === 'string') testPaths.add(item);
      else if (item && item.src) testPaths.add(item.src);
    });
  }
});

// profile images
if (profile.avatar) testPaths.add(profile.avatar);
if (profile.coverImage) testPaths.add(profile.coverImage);
if (profile.image) testPaths.add(profile.image);

// work page & background images
testPaths.add('/images/anime-uiux-comic.jpg');
testPaths.add('/images/anime-graphics-comic.jpg');
testPaths.add('/images/anime-video-comic.jpg');
testPaths.add('/images/work-page-bg.jpg');
testPaths.add('/images/about-me-section-bg.png');
testPaths.add('/images/about-origin-arc.png');
testPaths.add('/images/profile-comic.jpg');
testPaths.add('/images/hero-cyberpunk-cover.png');
testPaths.add('/images/basecamp/dashboard.webp');
testPaths.add('/images/ADT/Home.jpg');
testPaths.add('/images/projects/adt.jpg');
testPaths.add('/images/projects/myrik.png');
testPaths.add('/images/projects/bhaiyaa.png');
testPaths.add('/images/projects/guitar.png');
testPaths.add('/images/projects/wearables.png');
testPaths.add('/images/projects/zoo.png');

async function testAll() {
  console.log('--- CHECKING FILES ---');
  for (const relPath of testPaths) {
    if (relPath.startsWith('http')) {
      console.log(`[EXTERNAL] ${relPath}`);
      continue;
    }
    const cleanPath = relPath.startsWith('/') ? relPath.slice(1) : relPath;
    const localExists = fs.existsSync(path.join('./public', cleanPath));
    const cdnUrl = cdnBase + '/' + encodeURI(cleanPath);
    let cdnStatus = 'N/A';
    try {
      const res = await fetch(cdnUrl, { method: 'HEAD' });
      cdnStatus = res.status;
    } catch(e) {
      cdnStatus = 'ERR: ' + e.message;
    }
    console.log(`[LOCAL: ${localExists ? 'OK' : 'MISSING'}] [CDN: ${cdnStatus}] ${relPath}`);
  }
}

testAll();
