# REE — The Waste Reduction Company

Marketing website for REE’s UAE waste reduction, recycling, consulting, circular-product and workshop services.

## Pages

- `/` — company overview and primary conversion path
- `/recycling/` — recycling, physical sorting, reporting and Waste Control Panel
- `/consulting/` — waste audits and implementation-led consulting
- `/products/` — locally made circular products
- `/workshops/` — hands-on office recycling workshops
- `/about/` — team, facility and operating approach

## Local development

```bash
npm install
npm run build:pages
npx vite --config vite.pages.config.ts
```

The static production build is written to `pages-dist/`.

## Deployment

Pushes to `main` run `.github/workflows/deploy-pages.yml`, build the multi-page Vite site and publish it to GitHub Pages.

Production SEO canonicals point to `https://reecycle.app/`. Case-study lines marked `TO VERIFY` are staging content and should be confirmed before the production-domain launch.
