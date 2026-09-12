# NiaVexa Website

AI agency website — fast, static, deployed on Cloudflare Pages for free.

## Structure
- `index.html` — single-page site (hero, services, why, process, FAQ, contact)
- `styles.css` — dark theme, Inter font, responsive
- `main.js` — nav, mobile menu, form handler, year auto-update
- `robots.txt` + `sitemap.xml` — SEO basics

## Local Development
Open `index.html` in any browser. No build step needed.

## Deployment
1. Push to GitHub repo
2. Cloudflare Pages → Create project → Connect GitHub repo
3. Build command: (none) | Output directory: `/`
4. Add custom domain (niavexa.com) in Cloudflare Pages settings

## Updating Content
Edit `index.html` directly. All content is in semantic HTML sections.
CSS variables in `:root` at top of `styles.css` control all colors.
