# Shree Shyam Sweets website

A responsive React + Vite website with custom CSS, Tailwind configured, local SEO metadata, LocalBusiness structured data, sitemap and robots.txt.

## 1. Requirements
Install Node.js LTS from https://nodejs.org/ and use Terminal.

## 2. Run locally
In Terminal, go to this project folder and run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173.

## 3. Add the real shop images
Put the shop's own photos into `public/images/` using these exact filenames:

- `logo.png` — official Shree Shyam Sweets logo
- `shop-exterior.jpg` — actual shop exterior
- `shop-interior.jpg` — actual shop interior
- `sweet-1.jpg` — actual sweets photo
- `sweet-2.jpg` — actual sweets photo
- `sweet-3.jpg` — actual sweets or gift assortment photo
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gifting.jpg`

These are filenames only; the archive includes a README placeholder, not fake shop photographs. Use real photos. If you have `.webp` images, either convert them to `.jpg` or update the paths in `src/App.jsx` and `index.html`.

## 4. Check the build
```bash
npm run build
npm run preview
```
The production website is created in `dist/`.

## 5. Deploy to Vercel
1. Push this project to your GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Connect `shreeshyamsweets.in` in Vercel's Domains settings and follow the DNS instructions shown there.

## 6. SEO after publishing
1. Verify `https://shreeshyamsweets.in/` loads over HTTPS.
2. Open Google Search Console: https://search.google.com/search-console/
3. Add/verify the domain using the DNS record Google provides.
4. Submit `https://shreeshyamsweets.in/sitemap.xml`.
5. Use URL Inspection on the homepage and request indexing.
6. Keep the shop name, phone, address, opening hours and category accurate and consistent with the real business profile.
7. Do not add unverified ratings, reviews, opening hours, menu items or prices to structured data.

SEO cannot guarantee first position. Google needs to crawl and index the site, and rankings depend on many factors. See Google's JavaScript SEO guide:
https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
