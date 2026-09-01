"use client";

import OutcomeFlow from "./OutcomeFlow";
import RadarMachine from "./RadarMachine";
import { CredibilityBlock, SiteFooter, WasteControlPanel, routeHref, siteVisitHref, whatsappHref } from "./MarketingBlocks";

const services = [
  { number: "01", slug: "recycling", title: "Recycling & reporting", copy: "We set up the bins, collect, physically sort and document recoverable materials — with reporting your sustainability team can use.", route: ["Set up", "Collect", "Sort", "Report"], tags: ["Collection", "ESG data"], href: routeHref("recycling") },
  { number: "02", slug: "consulting", title: "Waste reduction consulting", copy: "We open the bags, find the real baseline and redesign the operation around what is actually being thrown away.", route: ["Audit", "Diagnose", "Redesign", "Reduce"], tags: ["Waste audits", "Implementation"], href: routeHref("consulting") },
  { number: "03", slug: "products", title: "Circular products", copy: "We turn locally recovered plastic into furniture, awards and gifts designed and made in the UAE.", route: ["Brief", "Design", "Fabricate", "Deliver"], tags: ["Made in UAE", "Local waste"], href: routeHref("products") },
  { number: "04", slug: "workshops", title: "Hands-on workshops", copy: "We bring a compact recycling line into your office so teams can sort, process and make a finished object themselves.", route: ["Collect", "Sort", "Process", "Make"], tags: ["Team activity", "One power outlet"], href: routeHref("workshops") },
];

const clients = [
  { id: "ecd", name: "ECD" }, { id: "croda", name: "Croda" }, { id: "ihc", name: "IHC" },
  { id: "dwtc", name: "DWTC" }, { id: "aujan", name: "Aujan" }, { id: "adib", name: "ADIB" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function ActionLink({ children, href = whatsappHref }: { children: React.ReactNode; href?: string }) {
  const external = href.startsWith("http");
  return <a className="action-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><span>{children}</span><i><Arrow /></i></a>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="REE home"><img src="assets/ree-logo.svg" alt="REE" /><span>Waste Reduction<br />Company</span></a>
        <div className="nav-links"><a href={routeHref("recycling")}>Recycling</a><a href={routeHref("consulting")}>Consulting</a><a href={routeHref("products")}>Products</a><a href={routeHref("workshops")}>Workshops</a><a href={routeHref("about")}>About</a></div>
        <a className="nav-cta" href={siteVisitHref} target="_blank" rel="noreferrer" aria-label="Book a free site visit at your business on WhatsApp; opens in a new tab"><i /> Free site visit <Arrow /></a>
      </nav>

      <section className="hero hero-positioning" id="top">
        <div className="hero-media"><RadarMachine /></div>
        <div className="hero-sidecode" aria-hidden="true">REE · 25°12′N 55°16′E · UAE</div>
        <div className="hero-chain" aria-label="Waste transformed through data and materials into value">{[["01", "Waste"], ["02", "Data"], ["03", "Materials"], ["04", "Value"]].map(([number, label]) => <div key={number}><span>{number}</span><b>{label}</b><i /></div>)}</div>
        <div className="hero-content">
          <div className="eyebrow"><span /> Who we are / UAE</div>
          <h1>The Waste<br /><em>Reduction Company.</em></h1>
          <p className="hero-copy hero-positioning-copy">We help businesses reduce waste and recover value from what remains.</p>
          <div className="hero-actions"><ActionLink>Chat with REE</ActionLink><a className="impact-jump site-visit-jump" href={siteVisitHref} target="_blank" rel="noreferrer" aria-label="Book a free site visit at your business on WhatsApp; opens in a new tab"><b>↗</b><span>Book a free site visit<br />at your business</span></a></div>
        </div>
        <div className="hero-proof"><div><span>95</span><sup>%</sup></div><p>landfill diversion<br />in a UAE operation</p><i>VERIFIED CASE</i></div>
        <div className="scroll-cue"><span>SCROLL</span><i /></div>
      </section>

      <section className="client-strip" aria-label="Selected clients">
        <div className="client-intro"><span>Trusted by teams at</span><b>UAE CLIENTS</b></div>
        <div className="client-track">{clients.map((client) => <div className="client-logo" key={client.id}><img src={`assets/client-${client.id}.webp`} alt={`${client.name} client logo`} /></div>)}</div>
      </section>

      <section className="manifesto manifesto-how section-pad" id="outcome">
        <div className="section-index">01 / HOW WE DO IT</div>
        <div className="manifesto-copy">
          <p className="kicker">Waste reduction is an operating system</p>
          <h2>Diagnose.<br /><span>Build. Measure.</span></h2>
          <p className="manifesto-body">We diagnose what is actually being thrown away, build practical recovery flows around each operation, and measure the result.</p>
          <div className="home-method-steps"><span><b>01 / DIAGNOSE</b>Find the real baseline.</span><span><b>02 / BUILD</b>Make recovery work on site.</span><span><b>03 / MEASURE</b>Keep the result visible.</span></div>
        </div>
        <OutcomeFlow />
      </section>

      <section className="solutions section-pad" id="solutions">
        <div className="section-heading"><div className="section-index">02 / THE COMMERCIAL ROUTES</div><div><p className="kicker">Four ways to put the method to work</p><h2>Choose a route.<br />Reach the outcome.</h2></div></div>
        <div className="route-grid route-grid-four" id="route-cards">
          {services.map((service) => (
            <article className={`route-card route-${service.slug}`} key={service.number}>
              <div className="route-image"><span>{service.number}</span><b>REE / ROUTE {service.number}</b></div>
              <div className="route-content">
                <div className="route-title"><h3>{service.title}</h3><a href={service.href} aria-label={`Explore ${service.title}`}><Arrow /></a></div>
                <p>{service.copy}</p>
                <div className="route-line" aria-label={service.route.join(" then ")}>{service.route.map((step, index) => <span key={step}><i />{step}{index < service.route.length - 1 && <b>→</b>}</span>)}</div>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <WasteControlPanel compact />
      <CredibilityBlock />

      <section className="final-cta section-pad">
        <div className="cta-material" aria-hidden="true" /><div className="section-index">05 / YOUR FIRST STEP</div>
        <p className="kicker">No pitch deck. No obligation. Just waste.</p><h2>Bring REE to<br />your site.</h2>
        <p>We will come to your business, look at the bins, waste rooms and current operating setup, then identify the first practical opportunities.</p>
        <div className="final-actions"><ActionLink href={siteVisitHref}>Book the free site visit</ActionLink><a href={whatsappHref}>Chat with REE</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
