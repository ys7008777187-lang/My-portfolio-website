/**
 * Generate SVG placeholder images for all missing assets.
 * This creates minimal, styled placeholder files that work as real images.
 */
const fs = require('fs');
const path = require('path');

const PLACEHOLDER_SVG = (label = 'Image Coming Soon', w = 800, h = 600) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="20" stroke="hsl(0,0%,18%)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="hsl(0,0%,13%)"/>
  <rect width="${w}" height="${h}" fill="url(#diag)" opacity="0.4"/>
  <g transform="translate(${w/2},${h/2 - 20})" fill="none" stroke="hsl(0,0%,35%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="-24" y="-24" width="48" height="48" rx="4"/>
    <circle cx="-10" cy="-10" r="4"/>
    <polyline points="24,8 14,-4 -24,24"/>
  </g>
  <text x="${w/2}" y="${h/2 + 40}" text-anchor="middle" fill="hsl(0,0%,40%)" font-family="system-ui,sans-serif" font-size="14" letter-spacing="1">${label}</text>
</svg>`.trim();

const PLACEHOLDER_SVG_MOBILE = (label = 'Image Coming Soon') => PLACEHOLDER_SVG(label, 390, 844);

// All missing files that need placeholder images
const missingFiles = [
  // Placeholder & misc
  { path: 'public/images/placeholder.jpg', label: 'Placeholder', mobile: false },
  
  // Fashion artwork
  { path: 'public/images/artworks/fashion-1.jpg', label: 'Fashion Campaign 1', mobile: false },
  { path: 'public/images/artworks/fashion-2.jpg', label: 'Fashion Campaign 2', mobile: false },
  
  // Coffee table back cover
  { path: 'public/images/artworks/coffee-table-back-cover.png', label: 'Back Cover', mobile: false },
  
  // Comic magazine covers
  { path: 'public/images/artworks/comic-magazine/cover.png', label: 'Comic Magazine Cover', mobile: false },
  { path: 'public/images/artworks/comic-magazine/back-cover.png', label: 'Comic Magazine Back Cover', mobile: false },
  
  // Myrik screens (16 screens)
  { path: 'public/images/myrik/screens/home.png', label: 'Myrik Home', mobile: true },
  { path: 'public/images/myrik/screens/splash_new.png', label: 'Myrik Splash', mobile: true },
  { path: 'public/images/myrik/screens/splash.png', label: 'Myrik Splash Original', mobile: true },
  { path: 'public/images/myrik/screens/onboarding.png', label: 'Myrik Onboarding', mobile: true },
  { path: 'public/images/myrik/screens/login.png', label: 'Myrik Login', mobile: true },
  { path: 'public/images/myrik/screens/verification.png', label: 'Myrik Verification', mobile: true },
  { path: 'public/images/myrik/screens/permissions.png', label: 'Myrik Permissions', mobile: true },
  { path: 'public/images/myrik/screens/home_map.png', label: 'Myrik Map View', mobile: true },
  { path: 'public/images/myrik/screens/booking.png', label: 'Myrik Booking', mobile: true },
  { path: 'public/images/myrik/screens/searching.png', label: 'Myrik Searching', mobile: true },
  { path: 'public/images/myrik/screens/tracking.png', label: 'Myrik Tracking', mobile: true },
  { path: 'public/images/myrik/screens/delivery_welcome.png', label: 'Delivery Welcome', mobile: true },
  { path: 'public/images/myrik/screens/delivery_pickup.png', label: 'Delivery Pickup', mobile: true },
  { path: 'public/images/myrik/screens/delivery_select_ride.png', label: 'Select Ride', mobile: true },
  { path: 'public/images/myrik/screens/delivery_tracking.png', label: 'Delivery Tracking', mobile: true },
  { path: 'public/images/myrik/screens/delivery_orders.png', label: 'Order History', mobile: true },
  
  // Nexus Point Issue 2 (22 pages)
  ...Array.from({ length: 21 }, (_, i) => ({
    path: `public/images/artworks/the-nexus-point-issue-2/${i === 0 ? 'Cover' : i}.png`,
    label: i === 0 ? 'Issue 2 Cover' : `Issue 2 - Page ${i}`,
    mobile: false,
  })),
  { path: 'public/images/artworks/the-nexus-point-issue-2/Back Cover (2).png', label: 'Issue 2 Back Cover', mobile: false },
];

let created = 0;
let skipped = 0;

for (const file of missingFiles) {
  const fullPath = path.resolve(process.cwd(), file.path);
  
  // Create directory if needed
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Skip if file already exists
  if (fs.existsSync(fullPath)) {
    skipped++;
    continue;
  }
  
  const svg = file.mobile ? PLACEHOLDER_SVG_MOBILE(file.label) : PLACEHOLDER_SVG(file.label);
  fs.writeFileSync(fullPath, svg, 'utf8');
  created++;
  console.log(`  ✅ ${file.path}`);
}

console.log(`\nDone: ${created} created, ${skipped} already existed`);
