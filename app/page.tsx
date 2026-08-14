"use client";

import { useRef, useState } from "react";
import DacPhysics from "./DacPhysics";
import RadarMachine from "./RadarMachine";
import { CredibilityBlock, IndependenceBlock, SiteFooter, WasteControlPanel, routeHref, siteVisitHref, whatsappHref } from "./MarketingBlocks";

const whatsapp = whatsappHref;

const services = [
  {
    number: "01",
    slug: "recycling",
    title: "Recycling & reporting",
    copy: "We design the bins, collect, physically sort and document every recoverable stream — with ESG-ready data and rebates.",
    route: ["Set up", "Collect", "Sort", "Report"],
    tags: ["Collection", "ESG data"],
    href: routeHref("recycling"),
  },
  {
    number: "02",
    slug: "consulting",
    title: "Waste reduction consulting",
    copy: "We open the bags, trace the costs and redesign the operation. The output is a practical route to less waste, not another PDF.",
    route: ["Audit", "Diagnose", "Redesign", "Reduce"],
    tags: ["Waste audits", "Implementation"],
    href: routeHref("consulting"),
  },
  {
    number: "03",
    slug: "products",
    title: "Products & workshops",
    copy: "Custom furniture, awards and gifts made in the UAE — plus hands-on workshops that let teams experience the recycling cycle.",
    route: ["Brief", "Design", "Make", "Engage"],
    tags: ["Made in UAE", "Circular engagement"],
    href: routeHref("products"),
  },
];

type Destination = "recycle" | "general" | "compost";

const sortItems: Array<{
  id: string;
  label: string;
  code: string;
  destination: Destination;
  note: string;
}> = [
  { id: "pet", label: "Empty PET bottle", code: "01 · PET", destination: "recycle", note: "Clean PET keeps its material value." },
  { id: "cup", label: "Used coffee cup", code: "MIXED · CUP", destination: "general", note: "The plastic lining makes this cup hard to recover." },
  { id: "can", label: "Aluminium can", code: "41 · ALU", destination: "recycle", note: "Aluminium is highly valuable when separated." },
  { id: "banana", label: "Food scraps", code: "ORGANIC", destination: "compost", note: "Clean organics belong in a dedicated food stream." },
  { id: "box", label: "Greasy takeaway box", code: "PAPER + FOOD", destination: "general", note: "Food contamination destroys fibre recovery." },
  { id: "glass", label: "Empty glass jar", code: "70 · GLASS", destination: "recycle", note: "Clean glass can return to a material stream." },
  { id: "cardboard", label: "Clean cardboard", code: "20 · PAP", destination: "recycle", note: "Dry, clean fibre is widely recoverable." },
  { id: "receipt", label: "Thermal receipt", code: "COATED PAPER", destination: "general", note: "Thermal coating makes receipts unsuitable for paper recycling." },
  { id: "ceramic", label: "Broken ceramic mug", code: "CERAMIC", destination: "general", note: "Ceramic melts differently from container glass." },
  { id: "film", label: "Soft plastic bag", code: "04 · LDPE", destination: "general", note: "Loose film needs a specialist route, not a standard mixed bin." },
  { id: "teabag", label: "Used tea bag", code: "ORGANIC", destination: "compost", note: "Food-soiled organics can join a managed compost stream." },
];

const clients = [
  { id: "ecd", name: "ECD" },
  { id: "croda", name: "Croda" },
  { id: "ihc", name: "IHC" },
  { id: "dwtc", name: "DWTC" },
  { id: "aujan", name: "Aujan" },
  { id: "adib", name: "ADIB" },
];

const cases = [
  { image: "a", client: "AUJAN HOLDING", sector: "FMCG / MANUFACTURING", metric: "95", unit: "%", title: "landfill diversion", copy: "A cleaner segregation route built from mixed office and production waste.", trace: [["Baseline", "One mixed bin"], ["Diagnose", "Composition map"], ["Action", "Segregation route"], ["Result", "95% diverted"]], note: "Site scope, reporting period and measurement window to be confirmed for the final case study." },
  { image: "b", client: "TASTE OF DUBAI", sector: "EVENTS / VENUE", metric: "523", unit: "KG", title: "verified against 19,679 kg reported", copy: "A physical audit replaced an operator-reported total with a measured baseline the client could examine.", trace: [["Reported", "19,679 kg"], ["Diagnose", "Every bag opened"], ["Method", "Sorted + weighed"], ["Verified", "523 kg"]], note: "Audited scope and reporting period to be confirmed before production publication." },
  { image: "c", client: "IFF / SCENTIUM", sector: "FRAGRANCE LAB", metric: "14", unit: "%", title: "engagement at the start", copy: "Real data created the feedback loop that changed staff behaviour.", trace: [["Baseline", "14% engagement"], ["Action", "Weekly data"], ["Control", "Staff feedback"], ["Outcome", "Culture shift"]], note: "Follow-up engagement metric and measurement period to be confirmed for the final case study." },
];

const frameworkSteps = [
  { name: "Diagnose", verb: "Know", copy: "Open every stream. Map the operation. Find the material, behaviour and hidden cost.", broken: "Without diagnosis, action is guesswork. You cannot reduce what you have not measured." },
  { name: "Act", verb: "Change", copy: "Build the bins, routes, training and recovery system that fits the diagnosis.", broken: "Diagnosis without real action is only a report. Nothing changes in the bins, routes or behaviour." },
  { name: "Control", verb: "Prove", copy: "Track contamination, diversion, value and destination — then correct the system.", broken: "Without control, gains disappear. You cannot maintain or prove a system you no longer measure." },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ActionLink({ children, href = whatsapp, light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return (
    <a className={`action-link${light ? " action-light" : ""}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <span>{children}</span><i><Arrow /></i>
    </a>
  );
}

export default function Home() {
  const [gameIndex, setGameIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [flight, setFlight] = useState<Destination | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [framework, setFramework] = useState([true, true, true]);
  const caseTrack = useRef<HTMLDivElement>(null);

  const currentItem = sortItems[gameIndex % sortItems.length];
  const frameworkComplete = framework.every(Boolean);
  const removedFrameworkStep = framework.findIndex((enabled) => !enabled);

  const sortTo = (destination: Destination) => {
    if (flight) return;
    const correct = destination === currentItem.destination;
    setFlight(destination);
    setResult(correct ? `Correct · ${currentItem.note}` : `${currentItem.label} belongs in ${currentItem.destination}.`);
    if (correct) setScore((value) => value + 1);
    window.setTimeout(() => {
      setGameIndex((value) => value + 1);
      setFlight(null);
      setResult(null);
    }, 1050);
  };

  const moveCases = (direction: number) => {
    caseTrack.current?.scrollBy({ left: caseTrack.current.clientWidth * .72 * direction, behavior: "smooth" });
  };

  const toggleFramework = (index: number) => {
    setFramework((current) => current.map((enabled, step) => step === index ? !enabled : enabled));
  };

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="REE home">
          <img src="assets/ree-logo.svg" alt="REE" />
          <span>Waste Reduction<br />Company</span>
        </a>
        <div className="nav-links">
          <a href={routeHref("recycling")}>Recycling</a>
          <a href={routeHref("consulting")}>Consulting</a>
          <a href={routeHref("products")}>Products</a>
          <a href={routeHref("about")}>About</a>
        </div>
        <a className="nav-cta" href={siteVisitHref} target="_blank" rel="noreferrer"><i /> Free site visit <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-media"><RadarMachine /></div>
        <div className="hero-sidecode" aria-hidden="true">REE · 25°12′N 55°16′E · UAE</div>
        <div className="hero-chain" aria-label="Waste transformed through data and materials into value">
          {[["01", "Waste"], ["02", "Data"], ["03", "Materials"], ["04", "Value"]].map(([number, label]) => (
            <div key={number}><span>{number}</span><b>{label}</b><i /></div>
          ))}
        </div>
        <div className="hero-content">
          <div className="eyebrow"><span /> Independent waste operators · UAE</div>
          <h1>The Waste<br /><em>Reduction Company.</em></h1>
          <p className="hero-copy">Most waste still has value. We help businesses <strong>find it, recover it and turn it into measurable impact.</strong></p>
          <div className="hero-actions">
            <ActionLink>Chat with REE</ActionLink>
            <a className="impact-jump site-visit-jump" href={siteVisitHref} target="_blank" rel="noreferrer"><b>↗</b><span>Book a free<br />site visit</span></a>
          </div>
        </div>
        <div className="hero-proof"><div><span>95</span><sup>%</sup></div><p>landfill diversion<br />in a UAE operation</p><i>VERIFIED CASE</i></div>
        <div className="scroll-cue"><span>SCROLL</span><i /></div>
      </section>

      <section className="client-strip" aria-label="Selected clients">
        <div className="client-intro"><span>Trusted by teams at</span><b>06 / SELECTED</b></div>
        <div className="client-track">
          {clients.map((client) => <div className="client-logo" key={client.id}><img src={`assets/client-${client.id}.webp`} alt={`${client.name} client logo`} /></div>)}
        </div>
      </section>

      <section className="manifesto section-pad" id="outcome">
        <div className="section-index">01 / THE OUTCOME</div>
        <div className="manifesto-copy">
          <p className="kicker">Waste is only the input</p>
          <h2>One stream.<br /><span>Four returns.</span></h2>
          <p className="manifesto-body">We make the chain visible: what left the site, what material was recovered, what value came back, and which metrics can be used in ESG and sustainability reporting.</p>
        </div>
        <div className="outcome-system" aria-label="Waste to materials to value to data">
          <div className="outcome-head"><span>REE MATERIAL LEDGER</span><b>LIVE ROUTE / UAE</b></div>
          {[
            ["01", "Waste", "Measure what leaves", "waste"],
            ["02", "Data", "Make the baseline visible", "data"],
            ["03", "Materials", "Recover what still has value", "materials"],
            ["04", "Value", "Return products, rebates and proof", "value"],
          ].map(([number, title, copy, image]) => (
            <div className="outcome-step" key={number}>
              <span className="outcome-number">{number}</span>
              <div className={`outcome-thumb thumb-${image}`} />
              <div><strong>{title}</strong><small>{copy}</small></div>
              <i className="outcome-node" />
            </div>
          ))}
          <div className="outcome-result"><span>ULTIMATE OUTCOME</span><strong>LESS WASTE</strong><i>↓</i></div>
        </div>
      </section>

      <section className="solutions section-pad" id="solutions">
        <div className="section-heading">
          <div className="section-index">02 / THE ROUTES</div>
          <div><p className="kicker">A complete waste reduction company</p><h2>Choose a route.<br />Reach the outcome.</h2></div>
        </div>
        <div className="route-grid" id="route-cards">
          {services.map((service) => (
            <article className={`route-card route-${service.slug}`} key={service.number}>
              <div className="route-image">
                <span>{service.number}</span><b>REE / ROUTE {service.number}</b>
              </div>
              <div className="route-content">
                <div className="route-title"><h3>{service.title}</h3><a href={service.href} aria-label={`Explore ${service.title}`}><Arrow /></a></div>
                <p>{service.copy}</p>
                <div className="route-line" aria-label={service.route.join(" then ")}>
                  {service.route.map((step, index) => <span key={step}><i />{step}{index < service.route.length - 1 && <b>→</b>}</span>)}
                </div>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <IndependenceBlock />

      <WasteControlPanel />

      <section className="game-section section-pad">
        <div className="game-copy">
          <div className="section-index">03 / SORT THE STREAM</div>
          <p className="kicker">Eleven objects. Three destinations.</p>
          <h2>Where does it<br />go next?</h2>
          <p>One wrong object can contaminate an entire stream. Some choices are deliberately tricky — just like a real office bin.</p>
          <div className="game-status"><span>ROUND {String(gameIndex + 1).padStart(2, "0")} / 11</span><b>{score} CORRECT</b></div>
          <div className="game-site-visit"><span>Want to test your actual office bins?</span><a href={siteVisitHref} target="_blank" rel="noreferrer">Book a free site visit <Arrow /></a></div>
        </div>
        <div className="sort-arena" aria-live="polite">
          <div className="arena-grid" aria-hidden="true" />
          <div className="item-meta"><span>{currentItem.code}</span><strong>{currentItem.label}</strong></div>
          <div className={`waste-object object-${currentItem.id}${flight ? ` fly-${flight}` : ""}`} aria-label={currentItem.label} />
          <div className={`sort-result${result ? " visible" : ""}`}>{result || "Choose a destination"}</div>
          <div className="bin-row">
            <button className="sort-bin bin-recycle" onClick={() => sortTo("recycle")} disabled={!!flight}><i /><span>RECYCLING</span><small>clean materials</small></button>
            <button className="sort-bin bin-general" onClick={() => sortTo("general")} disabled={!!flight}><i /><span>GENERAL</span><small>residual waste</small></button>
            <button className="sort-bin bin-compost" onClick={() => sortTo("compost")} disabled={!!flight}><i /><span>COMPOST</span><small>clean organics</small></button>
          </div>
        </div>
      </section>

      <section className="workshop-section workshop-home">
        <div className="workshop-image" role="img" aria-label="REE hands-on recycling workshop with compact equipment" />
        <div className="workshop-overlay">
          <div className="section-index">04 / MAKE IT REAL</div>
          <div><p className="kicker">Products & workshops</p><h2>Touch the<br /><em>whole cycle.</em></h2><p>Custom objects make circularity tangible. Hands-on workshops let your team sort, shred, mould and take the result home.</p><ActionLink href={routeHref("products")}>Explore products & workshops</ActionLink></div>
        </div>
      </section>

      <section className="proof section-pad" id="proof">
        <div className="case-carousel-head">
          <div className="section-heading"><div className="section-index">05 / THE PROOF</div><div><p className="kicker">Real waste. Real numbers.</p><h2>Impact made<br />reportable.</h2></div></div>
          <div className="case-controls"><span>DRAG / EXPLORE</span><button onClick={() => moveCases(-1)} aria-label="Previous case">←</button><button onClick={() => moveCases(1)} aria-label="Next case">→</button></div>
        </div>
        <div className="case-track" ref={caseTrack}>
          {cases.map((item) => (
            <article className={`case case-${item.image}`} key={item.client}>
              <div className={`case-image case-image-${item.image}`} aria-hidden="true" />
              <div className="case-evidence" aria-label={`${item.client} case progression`}>{item.trace.map(([label, value], index) => <span key={label}><i>{label}</i><b>{value}</b>{index < item.trace.length - 1 && <em>→</em>}</span>)}</div>
              <div className="case-content"><div className="case-top"><span>{item.client}</span><small>{item.sector}</small></div><div className="case-metric"><strong>{item.metric}</strong><sup>{item.unit}</sup></div><h3>{item.title}</h3><p>{item.copy}</p>{"note" in item && item.note ? <small className="case-note">TO VERIFY / {item.note}</small> : null}</div>
            </article>
          ))}
          <article className="case case-next"><div><span>NEXT CASE</span><h3>Your operation.</h3><p>Measure the baseline. Build the route. Prove the reduction.</p><ActionLink>Start with an audit</ActionLink></div></article>
        </div>
      </section>

      <CredibilityBlock />

      <section className="independence section-pad" id="framework">
        <div className="independence-title"><span>06 / THE REE FRAMEWORK</span><h2>Three parts.<br />One system.</h2><p>Remove one and the loop breaks.</p></div>
        <div className="independence-copy">
          <p>Diagnosis gives action a reason. Action gives control something to measure. Control feeds the next diagnosis. Waste reduction only appears when all three work together.</p>
          <div className={`framework-shell${frameworkComplete ? " is-complete" : " is-broken"}`}>
            <div className="framework-caption"><span>REE / PROPRIETARY METHOD</span><b>Tap any layer to test the system</b></div>
            <div className="framework-visual">
              <DacPhysics framework={framework} onToggle={toggleFramework} />
            </div>
            <div className={`framework-explanation${frameworkComplete ? " is-ready" : ""}`} aria-live="polite">
              <span>{frameworkComplete ? "SYSTEM STABLE" : `WHY IT BROKE / 0${removedFrameworkStep + 1}`}</span>
              <strong>{frameworkComplete ? "Diagnosis, action and control reinforce one another." : frameworkSteps[removedFrameworkStep]?.broken}</strong>
            </div>
            <div className="framework-details">
              {frameworkSteps.map((step, index) => <div className={framework[index] ? "" : "muted"} key={step.name}><span>0{index + 1} / {step.verb}</span><p>{step.copy}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="cta-material" aria-hidden="true" />
        <div className="section-index">07 / YOUR FIRST STEP</div>
        <p className="kicker">No pitch deck. No obligation. Just waste.</p>
        <h2>Book a free<br />site visit.</h2>
        <p>We will look at the bins, waste rooms and current operating setup — then identify the first practical opportunities.</p>
        <div className="final-actions"><ActionLink href={siteVisitHref}>Book the visit</ActionLink><a href={whatsapp}>Chat with REE</a></div>
      </section>
      <SiteFooter />
    </main>
  );
}
