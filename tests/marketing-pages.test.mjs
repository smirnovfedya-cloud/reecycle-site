import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const routes = [
  ["static-site/index.html", "https://reecycle.app/"],
  ["static-site/recycling/index.html", "https://reecycle.app/recycling/"],
  ["static-site/consulting/index.html", "https://reecycle.app/consulting/"],
  ["static-site/products/index.html", "https://reecycle.app/products/"],
  ["static-site/workshops/index.html", "https://reecycle.app/workshops/"],
  ["static-site/about/index.html", "https://reecycle.app/about/"],
];

test("every marketing route has a complete SEO head", async () => {
  for (const [file, canonical] of routes) {
    const html = await readFile(new URL(file, root), "utf8");
    assert.match(html, /<title>[^<]{20,70}<\/title>/);
    assert.match(html, /<meta name="description" content="[^\"]{80,180}"/);
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`));
    assert.match(html, /property="og:title"/);
    assert.match(html, /property="og:description"/);
    assert.match(html, /property="og:image"/);
    assert.match(html, /name="twitter:card"/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /<noscript><main><h1>/);
    const jsonLd = html.match(/<script type="application\/ld\+json">(.+?)<\/script>/s)?.[1];
    assert.ok(jsonLd, `${file} is missing JSON-LD`);
    assert.doesNotThrow(() => JSON.parse(jsonLd));
  }
});

test("the sitemap covers every canonical route", async () => {
  const sitemap = await readFile(new URL("public/sitemap.xml", root), "utf8");
  for (const [, canonical] of routes) assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
});

test("commercial priorities are present and the calculator stays archived", async () => {
  const [home, blocks, pages, workshops] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/MarketingBlocks.tsx", root), "utf8"),
    readFile(new URL("app/ServicePages.tsx", root), "utf8"),
    readFile(new URL("app/WorkshopsPage.tsx", root), "utf8"),
  ]);
  assert.match(home, /The Waste/);
  assert.match(home, /Reduction Company/);
  assert.match(home, /Chat with REE/);
  assert.match(blocks, /Book a free site visit/);
  assert.match(blocks, /Waste Control Panel/);
  assert.match(blocks, /We do not own a landfill/);
  assert.match(blocks, /Keep your current provider\. Add independent control\./);
  assert.match(blocks, /WHAT REE IS \/ IS NOT/);
  assert.match(blocks, /WHO DOES WHAT \/ WHERE MATERIAL GOES/);
  assert.match(pages, /19,679 kg reported/);
  assert.match(pages, /523 kg verified/);
  assert.doesNotMatch(pages, /STANDARD COLLECTION/);
  assert.match(workshops, /One ordinary outlet/);
  assert.match(workshops, /Can we use plastic collected in our own office/);
  assert.doesNotMatch(home, /ArchivedImpactCalculator|ImpactCalculator/);
});

test("consulting content follows the approved credibility sequence", async () => {
  const pages = await readFile(new URL("app/ServicePages.tsx", root), "utf8");
  const sequence = [
    "Most businesses are flying blind",
    "We do not study waste from a cosy office",
    "A PRACTICAL ROUTE",
    "REAL WASTE. REAL NUMBERS.",
    "OPERATIONAL FIT",
  ];
  let cursor = -1;
  for (const phrase of sequence) {
    const next = pages.indexOf(phrase);
    assert.ok(next > cursor, `${phrase} is out of sequence`);
    cursor = next;
  }
});

test("public contact details are normalized", async () => {
  const files = ["app/page.tsx", "app/MarketingBlocks.tsx", "app/ServicePages.tsx", ...routes.map(([file]) => file)];
  const text = (await Promise.all(files.map((file) => readFile(new URL(file, root), "utf8")))).join("\n");
  const phoneLike = [...text.matchAll(/\+971[\d\s-]{8,}/g)].map((match) => match[0].trim());
  assert.ok(phoneLike.length > 0);
  for (const value of phoneLike) assert.equal(value.replace(/\D/g, ""), "971528518783");
  assert.doesNotMatch(text, /507\s*330\s*530/);
});

test("the production build contains every direct GitHub Pages route", async () => {
  for (const [file] of routes) {
    const outputFile = file.replace("static-site/", "pages-dist/");
    const html = await readFile(new URL(outputFile, root), "utf8");
    assert.match(html, /assets\/main-[^\"]+\.js/);
    assert.match(html, /assets\/main-[^\"]+\.css/);
  }
});
