"use client";

import type { ReactNode } from "react";

export const whatsappNumber = "971528518783";
export const whatsappHref = `https://wa.me/${whatsappNumber}`;
export const siteVisitHref = `${whatsappHref}?text=${encodeURIComponent("Hi REE, I would like to book a free site visit.")}`;

export type RouteKey = "" | "recycling" | "consulting" | "products" | "about";

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
      <span>{children}</span><i><Arrow /></i>
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
        <a className={current === "about" ? "active" : ""} href={routeHref("about", current)}>About</a>
      </div>
      <a className="nav-cta" href={siteVisitHref} target="_blank" rel="noreferrer"><i /> Free site visit <Arrow /></a>
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
      <div className="client-intro"><span>Trusted by teams at</span><b>SELECTED UAE CLIENTS</b></div>
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
        <span className="section-index">FREE SITE VISIT / UAE</span>
        <h2>{title}</h2>
      </div>
      <div>
        <p>We walk the site, look at the bins and waste rooms, check the current contractor setup and identify the first practical opportunities. No pitch deck. No obligation. Just your waste.</p>
        <div className="band-actions"><ActionLink href={siteVisitHref}>Book a free site visit</ActionLink><a href={whatsappHref} target="_blank" rel="noreferrer">Chat with REE <Arrow /></a></div>
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
        <p>Most waste companies are paid to move volume. REE is paid to make the material and the data visible. That difference removes the conflict between disposal and reduction.</p>
        <div className="evidence-compare">
          <article><span>THE USUAL CHAIN</span><strong>Collect → weigh → dispose</strong><small>The report starts with the truck, not the contents.</small></article>
          <article><span>THE REE CHAIN</span><strong>Open → sort → weigh → route → report</strong><small>Each recoverable stream is documented before its next destination.</small></article>
        </div>
        <blockquote>“We are operators who use consulting tools — not desk consultants learning waste from a spreadsheet.”</blockquote>
      </div>
    </section>
  );
}

export function WasteControlPanel({ current = "" }: { current?: RouteKey }) {
  return (
    <section className="wcp-section section-pad" id="control-panel">
      <div className="wcp-copy">
        <span className="section-index">CONTROL / WASTE CONTROL PANEL</span>
        <p className="kicker">One operating view for waste</p>
        <h2>Stop rebuilding the same report every month.</h2>
        <p>Operator PDFs, procurement files, invoices and site spreadsheets rarely agree. The Waste Control Panel brings each stream, collection and outcome into one place — so Sustainability and ESG teams can see what changed and report it without chasing five departments.</p>
        <ul>
          <li>Material weights and contamination by site</li>
          <li>Landfill diversion and verified destinations</li>
          <li>CO₂ avoided, rebates and recovered value</li>
          <li>Month-on-month signals for corrective action</li>
        </ul>
        <a href={routeHref("recycling", current)} className="text-link">See recycling & reporting <Arrow /></a>
      </div>
      <div className="wcp-console" aria-label="Waste Control Panel product preview">
        <div className="wcp-bar"><span>REE / WASTE CONTROL PANEL</span><div><i /> LIVE DATA</div></div>
        <div className="wcp-kpis">
          <article><span>LANDFILL DIVERSION</span><strong>78.4<small>%</small></strong><em>↑ 12.6 this month</em></article>
          <article><span>RECOVERED MATERIAL</span><strong>4,286<small> kg</small></strong><em>6 verified streams</em></article>
          <article><span>DATA COVERAGE</span><strong>100<small>%</small></strong><em>all active collections</em></article>
        </div>
        <div className="wcp-chart">
          <div className="wcp-chart-head"><span>RECOVERY BY MONTH</span><b>JAN — JUN</b></div>
          {[42, 51, 49, 67, 72, 84].map((value, index) => <i key={index} style={{ "--bar": `${value}%` } as React.CSSProperties}><span>{value}</span></i>)}
        </div>
        <div className="wcp-streams">
          {[['Paper & cardboard','1,824 kg','43%'],['PET & mixed plastic','986 kg','23%'],['Metals & cans','644 kg','15%'],['Other verified streams','832 kg','19%']].map(([name, weight, share]) => <div key={name}><span>{name}</span><b>{weight}</b><i>{share}</i></div>)}
        </div>
        <div className="demo-flag">PRODUCT INTERFACE / ILLUSTRATIVE DATA</div>
      </div>
    </section>
  );
}

export function CredibilityBlock({ current = "" }: { current?: RouteKey }) {
  return (
    <section className="credibility-block section-pad">
      <div className="credibility-photo" style={{ backgroundImage: `linear-gradient(0deg,rgba(4,25,18,.38),rgba(4,25,18,.05)),url('${assetHref("real/06-recycling.png", current)}')` }}>
        <span>RAS AL KHOR / DUBAI</span>
      </div>
      <div className="credibility-copy">
        <span className="section-index">THE PEOPLE BEHIND THE DATA</span>
        <p className="kicker">Built inside the waste industry</p>
        <h2>We sort, weigh and make — in our own Dubai facility.</h2>
        <p>REE’s team brings hands-on experience across B2B and B2C recycling, material recovery, collection operations and product fabrication. Every bag we audit comes through a real operating team, not a remote reporting layer.</p>
        <div className="credibility-facts"><span><b>5+</b> years in UAE recycling</span><span><b>Own</b> sorting & fabrication facility</span><span><b>UAE</b> Dubai and Abu Dhabi operations</span></div>
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
        <div><span>EXPLORE</span><a href={routeHref("recycling", current)}>Recycling & reporting</a><a href={routeHref("consulting", current)}>Waste reduction consulting</a><a href={routeHref("products", current)}>Products & workshops</a><a href={routeHref("about", current)}>About REE</a></div>
        <div><span>CONTACT</span><a href={whatsappHref} target="_blank" rel="noreferrer">+971 52 851 8783</a><a href="mailto:jaskaran@reecycle.app">jaskaran@reecycle.app</a><p>Dubai & Abu Dhabi, UAE</p></div>
        <div className="site-footer-cta"><span>YOUR FIRST STEP</span><ActionLink href={siteVisitHref}>Book a free site visit</ActionLink></div>
        <small>© {new Date().getFullYear()} REE Waste Collection and Treatment</small>
      </footer>
      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat with REE on WhatsApp"><i /><span>CHAT WITH REE</span><Arrow /></a>
    </>
  );
}
