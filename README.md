# Yash Srivastava — Comic Book Design Portfolio

Personal UI/UX design and creative engineering portfolio website for **Yash Srivastava** ([yashsrivastava.co.in](https://yashsrivastava.co.in)).

## Tech Stack
- **Framework**: Next.js (App Router, Static Export `output: 'export'`)
- **Styling**: CSS Modules, Neobrutalist Comic Design System
- **Typography**: 3-Font Comic Stack (`Bangers`, `Comic Neue`, `Inter`)
- **Motion**: Framer Motion, Lenis Smooth Scroll
- **3D / Canvas**: Three.js / React Three Fiber
- **CDN / Storage**: Cloudflare R2 & Custom Domain CDN (`cdn.yashsrivastava.co.in`)

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build static production export (out/)
npm run build

# Sync assets to Cloudflare R2 CDN
npm run sync-cdn
```
