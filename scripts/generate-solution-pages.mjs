import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://reecycle.app";
const root = process.cwd();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function generateSolutionPages() {
  const solutions = JSON.parse(await readFile(path.join(root, "content", "solutions.json"), "utf8"));

  for (const solution of solutions) {
    const canonical = `${siteUrl}/${solution.slug}/`;
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: solution.title,
          serviceType: solution.title,
          description: solution.description,
          url: canonical,
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
          provider: { "@type": "Organization", name: "REE — The Waste Reduction Company", url: `${siteUrl}/` },
        },
        {
          "@type": "FAQPage",
          mainEntity: solution.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
            { "@type": "ListItem", position: 2, name: "Consulting", item: `${siteUrl}/consulting/` },
            { "@type": "ListItem", position: 3, name: solution.title, item: canonical },
          ],
        },
      ],
    };
    const fallbackItems = solution.included.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(solution.seoTitle)}</title>
  <meta name="description" content="${escapeHtml(solution.description)}" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href="${canonical}" />
  <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="REE — The Waste Reduction Company" />
  <meta property="og:title" content="${escapeHtml(solution.seoTitle)}" />
  <meta property="og:description" content="${escapeHtml(solution.description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${siteUrl}/og.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>
</head>
<body>
  <div id="root"><main><h1>${escapeHtml(solution.title)}</h1><p>${escapeHtml(solution.lede)}</p><ul>${fallbackItems}</ul><p>REE serves businesses across the United Arab Emirates. Call +971 52 851 8783 or email jaskaran@reecycle.app.</p></main></div>
  <noscript><main><h1>${escapeHtml(solution.title)}</h1><p>${escapeHtml(solution.lede)}</p><ul>${fallbackItems}</ul><p>Call +971 52 851 8783 or email jaskaran@reecycle.app.</p></main></noscript>
  <script type="module" src="../main.tsx"></script>
</body>
</html>`;
    const directory = path.join(root, "static-site", solution.slug);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html, "utf8");
  }

  const primaryRoutes = [
    ["", "monthly", "1.0"],
    ["recycling", "monthly", "0.9"],
    ["consulting", "monthly", "0.9"],
    ["products", "monthly", "0.9"],
    ["workshops", "monthly", "0.9"],
    ["about", "monthly", "0.8"],
  ];
  const sitemapRoutes = [
    ...primaryRoutes,
    ...solutions.map((solution) => [solution.slug, "monthly", "0.7"]),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map(([slug, frequency, priority]) => `  <url><loc>${siteUrl}/${slug ? `${slug}/` : ""}</loc><changefreq>${frequency}</changefreq><priority>${priority}</priority></url>`).join("\n")}
</urlset>\n`;
  await writeFile(path.join(root, "public", "sitemap.xml"), sitemap, "utf8");
}

