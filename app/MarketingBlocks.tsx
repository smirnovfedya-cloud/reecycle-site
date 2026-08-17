"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

export const whatsappNumber = "971528518783";
export const whatsappHref = `https://wa.me/${whatsappNumber}`;
export const siteVisitHref = `${whatsappHref}?text=${encodeURIComponent("Hi REE, I would like to book a free site visit at my business location.")}`;
export const facilityVisitHref = `${whatsappHref}?text=${encodeURIComponent("Hi REE, I would like to ask about visiting the REE facility.")}`;

export type RouteKey = "" | "recycling" | "consulting" | "products" | "workshops" | "about";

export function routeHref(route: RouteKey, current: RouteKey = "") {
  if (!route) return current ? "../" : "./";
  return current ? `../${route}/` : `${route}/`;
}

export function homeAnchor(anchor: string, current: RouteKey = "") {
  return `${current ? "../" : ""}#${anchor}`;
}

export function assetHref(path: string, current: RouteKey = "") {
  return `${current ? "../" : ""}assets/${path}`;
}

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function ActionLink({
  children,
  href = whatsappHref,
  light = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  light?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a className={`action-link${light ? " action-light" : ""}${className ? ` ${className}` : ""}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span>{children}{external ? <span className="sr-only"> (opens in a new tab)</span> : null}</span><i><Arrow /></i>
    </a>
  );
}

export function SiteHeader({ current = "" }: { current?: RouteKey }) {
  return (
    <nav className="nav-shell nav-marketing" aria-label="Main navigation">
      <a className="brand" href={routeHref("", current)} aria-label="REE home">
        <img src={assetHref("ree-logo.svg", current)} alt="REE" />
        <span>Waste Reduction<br />Company</span>
      </a>
      <div className="nav-links">
        <a className={current === "recycling" ? "active" : ""} href={routeHref("recycling", current)}>Recycling</a>
        <a className={current === "consulting" ? "active" : ""} href={routeHref("consulting", current)}>Consulting</a>
        <a className={current === "products" ? "active" : ""} href={routeHref("products", current)}>Products</a>
        <a className={current === "workshops" ? "active" : ""} href={routeHref("workshops", current)}>Workshops</a>
        <a className={current === "about" ? "active" : ""} href={routeHref("about", current)}>About</a>
      </div>
      <a className="nav-cta" href={siteVisitHref} target="_blank" rel="noreferrer" aria-label="Book a free site visit at your business on WhatsApp; opens in a new tab"><i /> Free site visit <Arrow /></a>
    </nav>
  );
}

const clients = [
  { id: "ecd", name: "ECD" },
  { id: "croda", name: "Croda" },
  { id: "ihc", name: "IHC" },
  { id: "dwtc", name: "DWTC" },
  { id: "aujan", name: "Aujan" },
  { id: "adib", name: "ADIB" },
];

export function ClientStrip({ current = "", compact = false }: { current?: RouteKey; compact?: boolean }) {
  return (
    <section className={`client-strip${compact ? " client-strip-compact" : ""}`} aria-label="Selected REE clients">
      <div className="client-intro"><span>Trusted by teams at</span><b>UAE CLIENTS</b></div>
      <div className="client-track">
        {clients.map((client) => <div className="client-logo" key={client.id}><img src={assetHref(`client-${client.id}.webp`, current)} alt={`${client.name} client logo`} /></div>)}
      </div>
    </section>
  );
}

export function SiteVisitBand({ current = "", title = "Start with what is actually in the bags." }: { current?: RouteKey; title?: string }) {
  return (
    <section className="site-visit-band section-pad">
      <div>
        <span className="section-index">FREE SITE VISIT / AT YOUR BUSINESS</span>
        <h2>{title}</h2>
      </div>
      <div>
        <p>We come to your business, walk the operation, look at the bins and waste rooms, check the current contractor setup and identify the first practical opportunities. No pitch deck. No obligation. Just your waste.</p>
        <div className="band-actions"><ActionLink href={siteVisitHref}>Book a free site visit</ActionLink><a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with REE on WhatsApp; opens in a new tab">Chat with REE <Arrow /></a></div>
      </div>
    </section>
  );
}

export function IndependenceBlock({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`commercial-independence section-pad${compact ? " is-compact" : ""}`}>
      <div className="commercial-independence-title">
        <span className="section-index">WHY INDEPENDENCE MATTERS</span>
        <p className="kicker">We do not own a landfill</p>
        <h2>Your waste company picks up.<br /><em>We show you what was in the bags.</em></h2>
      </div>
      <div className="independence-evidence">
        <p>Your existing collector or FM partner can stay. REE adds the independent material and data layer between what leaves the site and what the business can confidently report.</p>
        <div className="provider-role-map" aria-label="How REE works alongside a client's existing waste providers">
          <article><span>01 / YOUR TEAM</span><strong>Set the goal</strong><small>Sustainability, FM and Procurement keep control of the decision.</small></article>
          <i aria-hidden="true">→</i>
          <article><span>02 / CURRENT PROVIDER</span><strong>Keep collecting</strong><small>The existing FM or collector can continue the agreed operating role.</small></article>
          <i aria-hidden="true">→</i>
          <article className="is-ree"><span>03 / REE</span><strong>Verify the material</strong><small>Open, sort, weigh, route and turn the result into usable data.</small></article>
          <i aria-hidden="true">→</i>
          <article><span>04 / NEXT ROUTE</span><strong>Recover by stream</strong><small>Each suitable material moves to its relevant recovery pathway.</small></article>
        </div>
        <blockquote>Keep your current provider. Add independent control.</blockquote>
      </div>
    </section>
  );
}

export function IdentityBlock() {
  return (
    <section className="identity-block section-pad">
      <div className="identity-heading">
        <span className="section-index">WHAT REE IS / IS NOT</span>
        <p className="kicker">A clear role in a complicated chain</p>
        <h2>Independent control.<br /><em>Practical delivery.</em></h2>
      </div>
      <div className="identity-columns">
        <article>
          <span>REE IS</span>
          <ul>
            <li>An independent waste diagnosis, recovery and reporting layer</li>
            <li>A hands-on operator that opens, sorts and weighs real material</li>
            <li>An implementation partner that can work beside your current providers</li>
          </ul>
        </article>
        <article>
          <span>REE IS NOT</span>
          <ul>
            <li>A landfill owner or a single destination for every waste stream</li>
            <li>A reason to replace a working FM or collection contract by default</li>
            <li>A reporting-only consultant separated from the waste operation</li>
          </ul>
        </article>
      </div>
      <div className="ree-at-glance" aria-label="REE at a glance">
        <span><b>UAE</b>Dubai + Abu Dhabi operations</span>
        <span><b>LIVE</b>Waste Control Panel</span>
        <span><b>PHYSICAL</b>Bag-level sorting and weighing</span>
        <span><b>LOCAL</b>Plastic fabrication in Dubai</span>
      </div>
    </section>
  );
}

export function MaterialPathways() {
  return (
    <section className="pathways-section section-pad">
      <div className="pathways-heading">
        <span className="section-index">WHO DOES WHAT / WHERE MATERIAL GOES</span>
        <p className="kicker">One visible chain, several specialist routes</p>
        <h2>REE controls the record.<br /><em>The right route handles each stream.</em></h2>
        <p>Some work is delivered directly by REE. Final recovery depends on the material, location, volume and agreed programme. The diagram shows the operating model, not named counterparties.</p>
      </div>
      <div className="pathways-map" role="img" aria-label="Material flow from the client site and current collector through REE sorting and reporting to specialist recovery routes">
        <svg viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
          <path className="flow-direct wide" d="M185 278 C310 278 320 278 455 278" />
          <path className="flow-direct" d="M745 278 C855 278 860 88 1010 88" />
          <path className="flow-partner" d="M745 278 C855 278 860 214 1010 214" />
          <path className="flow-partner" d="M745 278 C855 278 860 342 1010 342" />
          <path className="flow-partner" d="M745 278 C855 278 860 470 1010 470" />
        </svg>
        <div className="pathway-node pathway-source"><span>CLIENT + FM</span><strong>Separated material</strong><small>Your current collector can remain in the chain.</small></div>
        <div className="pathway-node pathway-ree"><span>DIRECT / REE</span><strong>Collect where scoped<br />Open · sort · weigh<br />Record · report</strong><small>One material ledger in the Waste Control Panel.</small></div>
        <div className="pathway-destinations">
          <div className="pathway-node is-direct"><span>DIRECT / REE</span><strong>Selected plastics</strong><small>Local products, workshops or prepared feedstock</small></div>
          <div className="pathway-node"><span>SPECIALIST ROUTE</span><strong>Paper + cardboard</strong><small>Paper recovery pathway</small></div>
          <div className="pathway-node"><span>SPECIALIST ROUTE</span><strong>Metals + glass</strong><small>Material-specific recovery pathway</small></div>
          <div className="pathway-node"><span>SPECIALIST ROUTE</span><strong>E-waste + other streams</strong><small>Appropriate specialist pathway where available</small></div>
        </div>
      </div>
      <div className="pathways-legend"><span><i className="direct" /> Delivered directly by REE</span><span><i /> Delivered with a relevant recovery provider</span><small>Specific destinations and evidence are defined for each agreed client programme.</small></div>
    </section>
  );
}

export function WasteControlPanel({ current = "" }: { current?: RouteKey }) {
  const [activeView, setActiveView] = useState<"stats" | "impact" | "map">("stats");
  const materialRows = [
    ["Plastic", "1,246 kg", "72%"],
    ["Cardboard", "938 kg", "55%"],
    ["Paper", "566 kg", "34%"],
    ["Aluminium", "422 kg", "25%"],
  ];

  return (
    <section className="wcp-section section-pad" id="control-panel">
      <div className="wcp-copy">
        <span className="section-index">CONTROL / WASTE CONTROL PANEL</span>
        <p className="kicker">Your waste operation, in one view</p>
        <h2>From every collection to one usable record.</h2>
        <p>Waste data normally arrives as operator PDFs, invoices and site spreadsheets that do not agree. The Waste Control Panel connects what was collected, where it came from, what it contained and the impact it created.</p>
        <div className="wcp-feature-list">
          <article><span>01</span><div><b>Stats</b><p>Recyclable, compostable and general waste — broken down by material, site and collection.</p></div></article>
          <article><span>02</span><div><b>Impact</b><p>CO₂ avoided, energy saved and location-level performance in the same reporting period.</p></div></article>
          <article><span>03</span><div><b>Operations</b><p>Routes, stops, bags and collection records behind the monthly number.</p></div></article>
        </div>
        <div className="wcp-copy-actions">
          <a href={routeHref("recycling", current)} className="text-link">See recycling & reporting <Arrow /></a>
          <a href="https://platform.reecycle.app/" target="_blank" rel="noreferrer" className="wcp-login-link" aria-label="Client login to the external REE Waste Control Panel; opens in a new tab">Client login <small>EXTERNAL PLATFORM</small> <Arrow /></a>
        </div>
      </div>
      <div className="wcp-product" aria-label="Interactive Waste Control Panel product preview">
        <div className="wcp-product-bar">
          <div className="wcp-product-brand"><strong>R<span>EE</span></strong><i /> <b>Waste Control Panel</b></div>
          <div className="wcp-product-status"><i /> DATA CONNECTED</div>
        </div>
        <div className="wcp-product-shell">
          <nav className="wcp-product-nav" aria-label="Waste Control Panel views">
            <span>VIEW</span>
            {(["stats", "impact", "map"] as const).map((view) => (
              <button type="button" key={view} className={activeView === view ? "is-active" : ""} onClick={() => setActiveView(view)} aria-pressed={activeView === view}>
                <i aria-hidden="true">{view === "stats" ? "▥" : view === "impact" ? "◉" : "⌖"}</i>{view}
              </button>
            ))}
            <span>OPERATE</span>
            <button type="button"><i aria-hidden="true">↗</i>Routes</button>
            <button type="button"><i aria-hidden="true">≡</i>Collections</button>
          </nav>
          <div className="wcp-product-screen">
            <div className="wcp-screen-title">
              <div><small>DASHBOARD / {activeView.toUpperCase()}</small><h3>{activeView === "stats" ? "Recycling Dashboard" : activeView === "impact" ? "Environmental Impact" : "Collection Map"}</h3></div>
              <button type="button">EXPORT <span>↓</span></button>
            </div>
            <div className="wcp-filters" aria-label="Dashboard filters">
              <span><small>PERIOD</small>This month <b>⌄</b></span>
              <span><small>CUSTOMER</small>All customers <b>⌄</b></span>
              <span><small>LOCATION</small>All sites <b>⌄</b></span>
            </div>

            {activeView === "stats" && (
              <div className="wcp-stats-view">
                <article className="wcp-waste-card">
                  <div className="wcp-card-label"><span>TOTAL WASTE COLLECTED</span><small>4,286 kg</small></div>
                  <div className="wcp-waste-mix">
                    <div className="wcp-donut"><strong>74<small>%</small></strong><span>RECOVERABLE</span></div>
                    <div className="wcp-legend">
                      <span><i className="recyclable" /><b>Recyclable</b><em>74% / 3,172 kg</em></span>
                      <span><i className="compostable" /><b>Compostable</b><em>8% / 343 kg</em></span>
                      <span><i className="general" /><b>General waste</b><em>18% / 771 kg</em></span>
                    </div>
                  </div>
                </article>
                <article className="wcp-material-card">
                  <div className="wcp-card-label"><span>RECYCLED MATERIAL</span><small>WEIGHT / COLLECTIONS</small></div>
                  {materialRows.map(([name, weight, width]) => <div className="wcp-material-row" key={name}><span>{name}</span><i><b style={{ "--fill": width } as CSSProperties} /></i><strong>{weight}</strong></div>)}
                </article>
                <article className="wcp-log-card">
                  <div className="wcp-card-label"><span>LATEST COLLECTIONS</span><small>VERIFIED RECORDS</small></div>
                  <div className="wcp-log-head"><span>DATE</span><span>SITE</span><span>STREAM</span><span>WEIGHT</span></div>
                  {[["12 AUG", "DUBAI / 03", "Plastic + cans", "184 kg"], ["10 AUG", "DUBAI / 01", "Cardboard", "326 kg"], ["07 AUG", "ABU DHABI / 02", "Mixed recycling", "211 kg"]].map((row) => <div className="wcp-log-row" key={row.join()}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
                </article>
              </div>
            )}

            {activeView === "impact" && (
              <div className="wcp-impact-view">
                <article className="wcp-impact-metric"><span>CO₂ AVOIDED</span><strong>3,840<small> kg CO₂-e</small></strong><div><i style={{ "--fill": "82%" } as CSSProperties} /><b>82% from recyclable streams</b></div></article>
                <article className="wcp-impact-metric"><span>ENERGY SAVED</span><strong>8,612<small> kWh</small></strong><div><i style={{ "--fill": "68%" } as CSSProperties} /><b>68% from material recovery</b></div></article>
                <article className="wcp-location-impact">
                  <div className="wcp-card-label"><span>IMPACT BY LOCATION</span><small>CO₂-E / THIS MONTH</small></div>
                  {[["DUBAI / 01", "1,420", "88%"], ["DUBAI / 03", "1,164", "71%"], ["ABU DHABI / 02", "846", "54%"], ["DUBAI / 05", "410", "28%"]].map(([site, value, width]) => <div key={site}><span>{site}</span><i><b style={{ "--fill": width } as CSSProperties} /></i><strong>{value}</strong></div>)}
                </article>
                <div className="wcp-impact-note"><i>↗</i><p><b>REPORT-READY VIEW</b><br />The same period and site filters apply across waste, CO₂ and energy.</p></div>
              </div>
            )}

            {activeView === "map" && (
              <div className="wcp-map-view">
                <div className="wcp-map-canvas" aria-label="Illustrative collection location map">
                  <svg viewBox="0 0 620 310" role="img" aria-label="Collection locations across Dubai and Abu Dhabi">
                    <path className="wcp-map-coast" d="M24 234C86 215 123 217 171 188c51-31 71-81 120-92 59-13 76 31 134 17 68-17 91-66 170-78" />
                    <path d="M41 260L114 215 181 224 245 171 332 189 403 132 474 145 584 78M84 286L143 239M209 255L280 186M357 226L427 140M459 183L528 110" />
                  </svg>
                  {[["cluster-a","12","DUBAI"],["cluster-b","7","JEBEL ALI"],["cluster-c","5","ABU DHABI"],["cluster-d","3","SHARJAH"]].map(([className,count,label]) => <button type="button" className={className} key={label}><b>{count}</b><span>{label}</span></button>)}
                  <div className="wcp-map-key"><span><i /> ACTIVE COLLECTION SITE</span><b>27 LOCATIONS</b></div>
                </div>
                <article className="wcp-route-summary">
                  <div className="wcp-card-label"><span>ROUTE STATUS</span><small>THIS MONTH</small></div>
                  <strong>96<small>%</small></strong><p>of planned stops completed</p>
                  <div><span>STOPS <b>84 / 87</b></span><span>BAGS LOGGED <b>216</b></span><span>ACTIVE ROUTES <b>12</b></span></div>
                </article>
              </div>
            )}
          </div>
        </div>
        <div className="wcp-demo-flag"><span>PRODUCT PREVIEW</span><b>INTERFACE BASED ON THE LIVE REE PLATFORM / ILLUSTRATIVE DATA</b></div>
      </div>
    </section>
  );
}

export function CredibilityBlock({ current = "" }: { current?: RouteKey }) {
  return (
    <section className="credibility-block section-pad">
      <div className="credibility-photo" style={{ backgroundImage: `linear-gradient(0deg,rgba(4,25,18,.38),rgba(4,25,18,.05)),url('${assetHref("operations-facility-v1.webp", current)}')` }}>
        <span>RAS AL KHOR / DUBAI</span>
      </div>
      <div className="credibility-copy">
        <span className="section-index">THE PEOPLE BEHIND THE DATA</span>
        <p className="kicker">Built inside the waste industry</p>
        <h2>We sort, weigh and make — in our own Dubai facility.</h2>
        <p>REE’s team brings hands-on experience across B2B and B2C recycling, material recovery, collection operations and product fabrication. Every bag we audit comes through a real operating team, not a remote reporting layer.</p>
        <div className="credibility-facts"><span><b>UAE</b> Dubai + Abu Dhabi operations</span><span><b>Live</b> Waste Control Panel</span><span><b>In-house</b> sorting & fabrication</span></div>
        <ActionLink href={routeHref("about", current)}>Meet REE</ActionLink>
      </div>
    </section>
  );
}

export function SiteFooter({ current = "" }: { current?: RouteKey }) {
  return (
    <>
      <footer className="site-footer">
        <a href={routeHref("", current)} className="site-footer-brand"><img src={assetHref("ree-logo.svg", current)} alt="REE" /><span>The Waste Reduction Company</span></a>
        <div><span>EXPLORE</span><a href={routeHref("recycling", current)}>Recycling & reporting</a><a href={routeHref("consulting", current)}>Waste reduction consulting</a><a href={routeHref("products", current)}>Circular products</a><a href={routeHref("workshops", current)}>Hands-on workshops</a><a href={routeHref("about", current)}>About REE</a></div>
        <div><span>CONTACT</span><a href={whatsappHref} target="_blank" rel="noreferrer">+971 52 851 8783</a><a href="mailto:jaskaran@reecycle.app">jaskaran@reecycle.app</a><p>Dubai & Abu Dhabi, UAE</p></div>
        <div className="site-footer-cta"><span>YOUR FIRST STEP / AT YOUR BUSINESS</span><ActionLink href={siteVisitHref}>Book a free site visit</ActionLink></div>
        <small>© {new Date().getFullYear()} REE Waste Collection and Treatment</small>
      </footer>
      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with REE on WhatsApp; opens in a new tab"><i /><span>CHAT WITH REE</span><Arrow /></a>
    </>
  );
}
