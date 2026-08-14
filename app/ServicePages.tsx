"use client";

import {
  ActionLink,
  Arrow,
  ClientStrip,
  CredibilityBlock,
  IndependenceBlock,
  RouteKey,
  SiteFooter,
  SiteHeader,
  SiteVisitBand,
  WasteControlPanel,
  assetHref,
  routeHref,
  siteVisitHref,
  whatsappHref,
} from "./MarketingBlocks";

type ServiceKey = "recycling" | "consulting" | "products";

const faqContent: Record<ServiceKey, Array<[string, string]>> = {
  recycling: [
    ["What happens to material after collection?", "REE takes the collected material to its facility, opens and sorts it by stream, records the weights and routes each recoverable material to an appropriate next destination."],
    ["Which materials can we collect?", "Common streams include cardboard, paper, PET, mixed plastics, cans, metals, glass, packaging and e-waste. The right list depends on volume, contamination and the available recovery route, so we confirm it during the site visit."],
    ["Can the data support ESG and sustainability reporting?", "The Waste Control Panel provides documented weights, streams, destinations, diversion and related operating metrics. Your reporting team remains responsible for applying the standards and boundaries used in the final disclosure."],
    ["How do we start?", "Start with a free site visit. We review the current bins, waste rooms, collection setup and available data, then recommend a practical first scope."],
  ],
  consulting: [
    ["Is a REE waste audit physical?", "Yes. When the question requires it, our team opens, sorts and weighs the waste rather than relying only on contractor reports or invoice totals."],
    ["Do you only deliver a report?", "No. REE can stay through scope design, supplier coordination, rollout, staff training and ongoing control. The level of implementation support is agreed for each engagement."],
    ["Can you work with our current waste contractor?", "Yes. REE can review the data and operating setup independently while working alongside the existing contractor, facility team, procurement and Sustainability stakeholders."],
    ["Can we begin with one site or one problem?", "Yes. A focused audit or site visit can establish whether a larger programme is justified before the scope expands."],
  ],
  products: [
    ["Can a product be made from our own collected plastic?", "Often, yes. It depends on the polymer, cleanliness, volume and fabrication method. REE will confirm feasibility and whether your material can be kept as a distinct batch."],
    ["What can REE make?", "Typical formats include furniture, awards, trophies, medals, gifts, display pieces and branded objects. A reference image or rough sketch is enough to start a feasibility discussion."],
    ["Is there a minimum order?", "Minimum quantities depend on the product, mould, finish and production method. REE will recommend the most practical route after reviewing the brief."],
    ["Can the workshop come to our office?", "Yes. REE can bring compact equipment, prepared material and moulds to offices and event venues, subject to the group size and site requirements."],
  ],
};

function FaqSection({ type }: { type: ServiceKey }) {
  return (
    <section className="faq-section section-pad">
      <div><span className="section-index">COMMON QUESTIONS</span><p className="kicker">Before the first conversation</p><h2>Useful answers.<br />No waste theatre.</h2></div>
      <div className="faq-list">{faqContent[type].map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</div>
    </section>
  );
}

const serviceData = {
  recycling: {
    kicker: "RECYCLING & REPORTING / UAE",
    title: <>Start recycling<br /><em>without guessing.</em></>,
    intro: "We design the setup, collect the material, sort it ourselves and show you what happened next — with data your Sustainability team can actually use.",
    proof: ["Site setup", "Physical sorting", "Verified reporting"],
    image: "real/06-recycling.png",
  },
  consulting: {
    kicker: "WASTE REDUCTION CONSULTING / UAE",
    title: <>We solve waste problems<br /><em>with data.</em></>,
    intro: "From waste audits to implementation, we help businesses understand what they throw away, recover what still has value and reduce waste without hiring another team.",
    proof: ["Bag-level audits", "Operational redesign", "Implementation"],
    image: "consulting-audit-v3.png",
  },
  products: {
    kicker: "CIRCULAR PRODUCTS & WORKSHOPS / MADE IN UAE",
    title: <>Turn local waste<br /><em>into something people keep.</em></>,
    intro: "Custom gifts, awards, furniture and hands-on workshops — designed and made in the UAE from locally collected plastic waste.",
    proof: ["Custom design", "Local fabrication", "A story people can touch"],
    image: "circular-products-v3.png",
  },
} as const;

function ServiceHero({ type }: { type: ServiceKey }) {
  const data = serviceData[type];
  return (
    <section className={`service-hero service-hero-${type}`}>
      <div className="service-hero-image" style={{ backgroundImage: `linear-gradient(90deg,rgba(3,20,14,.88),rgba(3,20,14,.1)),url('${assetHref(data.image, type)}')` }} />
      <div className="service-hero-copy">
        <span className="eyebrow"><i /> {data.kicker}</span>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <div className="service-hero-actions"><ActionLink href={whatsappHref}>Chat with REE</ActionLink><ActionLink href={siteVisitHref} light>Book a free site visit</ActionLink></div>
        <div className="service-proof-line">{data.proof.map((item, index) => <span key={item}><i>0{index + 1}</i>{item}</span>)}</div>
      </div>
      <div className="service-hero-code">REE / {type.toUpperCase()} / UAE</div>
    </section>
  );
}

function RecyclingPage() {
  const capabilities = [
    ["01", "Site setup", "We map the site, choose realistic streams and design bin placement, labels and waste-room flow around how people actually use the space."],
    ["02", "Collection", "Scheduled pickups sized to the location, with a clear route from the internal bin to REE’s sorting facility."],
    ["03", "Sort & document", "Our team opens, separates, weighs and documents the material instead of treating every bag as a single number."],
    ["04", "Data & rebates", "You receive verified material data for sustainability reporting, plus rebates through service credits or products made from recovered plastic."],
    ["05", "Staff training", "Simple, site-specific guidance reduces contamination and gives employees feedback they can act on."],
    ["06", "Fabrication", "Selected plastics can return as branded products, awards, furniture or workshop material through our local fabrication lab."],
  ];
  const materials = ["Cardboard", "Paper", "PET bottles", "Mixed plastic", "Aluminium cans", "Metals", "Glass", "Packaging", "E-waste"];
  return (
    <><SiteHeader current="recycling" /><main><ServiceHero type="recycling" />
      <ClientStrip current="recycling" compact />
      <section className="problem-strip section-pad">
        <div><span className="section-index">THE PROBLEM</span><h2>Putting bins in the office is not a recycling system.</h2></div>
        <div className="problem-list">{["Everything ends in one bag", "Nobody can prove the destination", "Contamination quietly kills recovery", "Labels do not match the real operation", "Reports show collection, not material outcome"].map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
      </section>
      <section className="capability-section section-pad">
        <div className="section-heading"><span className="section-index">WHAT REE RUNS</span><div><p className="kicker">We fix the system, not the symptom</p><h2>From the first bin<br />to the final number.</h2></div></div>
        <div className="capability-grid">{capabilities.map(([number,title,copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <IndependenceBlock compact />
      <WasteControlPanel current="recycling" />
      <section className="material-section section-pad">
        <div><span className="section-index">MATERIALS</span><p className="kicker">Start with what can work at your site</p><h2>Practical streams.<br />Clear destinations.</h2><p>Not every material belongs in every programme. The free site visit identifies which streams are clean enough, valuable enough and operationally realistic for your location.</p><ActionLink href={siteVisitHref}>Assess my site</ActionLink></div>
        <div className="material-grid">{materials.map((item,index)=><span key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</span>)}<span className="future"><i>SOON</i>Food & textiles<small>route development in progress</small></span></div>
      </section>
      <section className="comparison-section section-pad">
        <span className="section-index">THE DIFFERENCE</span><h2>Waste removal tells you what left.<br /><em>REE tells you what happened.</em></h2>
        <div className="comparison-table"><div><b>CAPABILITY</b><b>STANDARD COLLECTION</b><b>REE RECYCLING</b></div>{["Site bin setup", "Clear labels and stream planning", "Physical sorting", "Each stream weighed and documented", "Material destination tracking", "Dashboard and ESG-ready data", "Rebates", "Local recycled-product fabrication"].map(item=><div key={item}><span>{item}</span><i>—</i><strong>Included</strong></div>)}</div>
      </section>
      <FaqSection type="recycling" />
      <SiteVisitBand current="recycling" title="See which streams are worth collecting at your site." />
    </main><SiteFooter current="recycling" /></>
  );
}

function ConsultingPage() {
  const problems = [
    ["You do not know what is in the waste", "We open, sort and quantify it."],
    ["Waste costs keep rising", "We trace cost back to the source and operating decision."],
    ["Segregation is contaminated", "We redesign the bins, routes, labels and feedback loop."],
    ["ESG reporting lacks defensible data", "We build a measured baseline and track the outcome."],
    ["The contractor provides no transparency", "We review the data, route and commercial setup independently."],
    ["A report was delivered but never implemented", "We stay through rollout, training and control."],
  ];
  const process = [
    ["01", "Brief", "Clarify the business decision, sites, stakeholders and current waste setup."],
    ["02", "Diagnose", "Audit the bags, invoices, contractor reports, layouts and behaviour on site."],
    ["03", "Scope", "Prioritise the waste, cost and recovery opportunities that are worth acting on."],
    ["04", "Deliver", "Build a practical plan with owners, routes, timing, cost and measurable outcomes."],
    ["05", "Act", "Support implementation, train the teams and use live data to correct the system."],
  ];
  return (
    <><SiteHeader current="consulting" /><main><ServiceHero type="consulting" />
      <ClientStrip current="consulting" compact />
      <section className="consulting-truth section-pad">
        <div><span className="section-index">NOT A DESK EXERCISE</span><p className="kicker">The bags are part of the brief</p><h2>We do not study waste from a cosy office.</h2></div>
        <div><p>REE was built inside UAE recycling and material recovery. We know why material gets rejected, how contamination appears, what buyers will accept and what the collection route can realistically deliver.</p><blockquote>That means the recommendation survives contact with the waste room.</blockquote></div>
      </section>
      <section className="consulting-problems section-pad">
        <div className="section-heading"><span className="section-index">PROBLEM → DECISION</span><div><p className="kicker">Start with the commercial problem</p><h2>Evidence before<br />recommendation.</h2></div></div>
        <div className="problem-solution-grid">{problems.map(([problem,answer],index)=><article key={problem}><span>0{index+1}</span><h3>{problem}</h3><p>{answer}</p></article>)}</div>
      </section>
      <section className="process-section section-pad">
        <div><span className="section-index">HOW AN ENGAGEMENT WORKS</span><p className="kicker">One route from uncertainty to control</p><h2>Brief. Diagnose.<br />Scope. Deliver. Act.</h2><p>A REE engagement can start with one question or one site. The work expands only when the evidence justifies it.</p></div>
        <div className="process-list">{process.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
      <IndependenceBlock />
      <section className="audience-section section-pad"><span className="section-index">WHERE WE WORK</span><h2>Built for operations<br />that generate real volume.</h2><div>{["Developers & master communities","Business parks & offices","Warehouses & logistics","Retail & hospitality","Events & venues","Education","Industrial operations","Government","ESG & Sustainability teams","FM & property management"].map(item=><span key={item}>{item}</span>)}</div></section>
      <section className="case-detail-band section-pad">
        <div><span className="section-index">CASE / TASTE OF DUBAI</span><h2>19,679 kg reported.<br /><em>523 kg verified.</em></h2></div>
        <div><p>The waste operator’s report showed 19,679 kg. REE’s physical audit found 523 kg in the audited scope. The gap changed the conversation from “how much was collected?” to “what can the business actually prove?”</p><dl><div><dt>Challenge</dt><dd>Reported waste volume could not be reconciled with the event operation.</dd></div><div><dt>Method</dt><dd>Physical bag opening, sorting and weighing by material stream.</dd></div><div><dt>Decision</dt><dd>Use verified material data as the baseline for future reduction and reporting.</dd></div></dl><small>CASE NOTE: audited scope, reporting period and final client-approved wording to be confirmed before production publication.</small></div>
      </section>
      <FaqSection type="consulting" />
      <SiteVisitBand current="consulting" title="The fastest audit starts with a walk through the site." />
    </main><SiteFooter current="consulting" /></>
  );
}

function ProductsPage() {
  const portfolio = [
    ["real/01-jumeirah_furniture_s.jpeg", "Jumeirah Eco Village", "Furniture set", "Recycled-plastic seating and table for Al Qasr Hotel."],
    ["real/02-arabian_warrior_meda.jpg", "Arabian Warrior", "Event medals", "A circular alternative to conventional race merchandise."],
    ["real/04-circular_award_2026_.png", "Circularity Awards", "Custom trophies", "Locally fabricated awards made from recovered plastic."],
    ["real/03-DSC00293.jpeg", "ADIB", "Coffee table", "A product made from waste collected through the bank’s own programme."],
  ];
  return (
    <><SiteHeader current="products" /><main><ServiceHero type="products" />
      <ClientStrip current="products" compact />
      <section className="product-process section-pad">
        <div className="section-heading"><span className="section-index">FROM IDEA TO OBJECT</span><div><p className="kicker">Made locally from local waste</p><h2>Design the story.<br />Then make it tangible.</h2></div></div>
        <div className="three-step-grid">{[["01","Idea","Share the audience, purpose, budget and reference. We turn the brief into feasible product routes."],["02","Design","We define size, material, colour mix, finish, branding and fabrication method — then optimise the design and price."],["03","Fabrication","The product is made in the UAE from locally collected plastic, then finished, assembled and delivered."]].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
      </section>
      <section className="portfolio-section section-pad">
        <div className="portfolio-head"><span className="section-index">SELECTED WORK</span><h2>Waste with a<br />second first impression.</h2></div>
        <div className="portfolio-grid">{portfolio.map(([image,client,title,copy],index)=><article className={index===0?"wide":""} key={client}><div style={{backgroundImage:`url('${assetHref(image,"products")}')`}}/><span>{client}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <p className="content-note">Additional product photography, quantities and material-origin details should be client-approved before the final portfolio launch.</p>
      </section>
      <section className="workshop-landing section-pad">
        <div className="workshop-landing-image" style={{backgroundImage:`linear-gradient(90deg,rgba(4,23,16,.1),rgba(4,23,16,.72)),url('${assetHref("workshop-restored-v3.png","products")}')`}} />
        <div><span className="section-index">HANDS-ON WORKSHOPS</span><p className="kicker">A circularity story people make themselves</p><h2>Sort it. Shred it.<br />Mould it. Keep it.</h2><p>REE brings compact recycling equipment, prepared material and moulds to your office or event. Teams follow the cycle from sorting to a finished trinket — such as a coaster, badge or keyring.</p><ul><li>CSR and sustainability engagement</li><li>Team building with a tangible outcome</li><li>Compact equipment brought to your venue</li><li>Product and format adapted to the group</li></ul><ActionLink href={`${whatsappHref}?text=${encodeURIComponent("Hi REE, I would like to discuss a recycling workshop.")}`}>Plan a workshop</ActionLink></div>
      </section>
      <section className="product-routes section-pad"><span className="section-index">THREE WAYS TO START</span><div>{[["MIDORI CATALOGUE","Choose from existing product formats."],["DIY WORKSHOP","Let your team make the product."],["CUSTOM FABRICATION","Build a product around your brief or material."]].map(([t,c],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{c}</p><a href={whatsappHref} target="_blank" rel="noreferrer">Discuss the route <Arrow /></a></article>)}</div></section>
      <CredibilityBlock current="products" />
      <FaqSection type="products" />
      <section className="product-final section-pad"><span className="section-index">SEND THE BRIEF</span><h2>A sketch, a reference<br />or one rough idea is enough.</h2><p>We will tell you what is feasible, which material and process fit, and what will drive timing and budget.</p><ActionLink href={`${whatsappHref}?text=${encodeURIComponent("Hi REE, I have an idea for a circular product.")}`}>Send your idea</ActionLink></section>
    </main><SiteFooter current="products" /></>
  );
}

export function ServicePage({ type }: { type: ServiceKey }) {
  if (type === "consulting") return <ConsultingPage />;
  if (type === "products") return <ProductsPage />;
  return <RecyclingPage />;
}

export function AboutPage() {
  const team = [
    ["Jas", "CEO / CO-FOUNDER"], ["Fedor", "COO / CO-FOUNDER"], ["Haadi", "OPERATIONS & PRODUCT"], ["Taman", "FACILITY MANAGER"], ["Adil", "COLLECTION & SORTING"],
  ];
  return (
    <><SiteHeader current="about" /><main>
      <section className="about-hero"><div><span className="eyebrow"><i /> ABOUT REE / UAE</span><h1>We work in the second-oldest profession.<br /><em>Waste.</em></h1><p>And in one of the most misunderstood industries in the UAE. REE exists to give businesses a clearer view of what they throw away — and a practical route to less.</p><div><ActionLink href={siteVisitHref}>Visit our facility</ActionLink><ActionLink href={whatsappHref} light>Chat with REE</ActionLink></div></div></section>
      <ClientStrip current="about" compact />
      <section className="founder-story section-pad"><div><span className="section-index">WHY REE EXISTS</span><p className="kicker">The missing information is inside the bags</p><h2>Companies pay for waste management without knowing what they get.</h2></div><div><p>They receive weights without composition, destinations without proof and reports that rarely help the operation improve. REE was built to close that gap.</p><p>We combine physical waste work, operating design and usable data. The goal is not “more recycling activity”. The goal is less waste — with enough evidence to show how it happened.</p></div></section>
      <section className="belief-grid section-pad">{[["01","Waste is often misreported","When one chain owns the truck, facility and disposal route, there is little incentive to inspect the number."],["02","Waste is an asset","A bottle can still contain material value, product value and proof of environmental progress."],["03","You cannot change what you cannot see","Good data creates the feedback loop that changes procurement, operations and behaviour."]].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</section>
      <section className="team-section section-pad"><div><span className="section-index">THE TEAM</span><p className="kicker">Operators, makers and waste people</p><h2>The work is physical.<br />So is the expertise.</h2></div><div className="team-list">{team.map(([name,role],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{role}</p></article>)}</div></section>
      <section className="facility-section section-pad"><div className="facility-image" style={{backgroundImage:`url('${assetHref("real/05-44e0ff4f-8544-4313-9.jpg","about")}')`}}/><div><span className="section-index">RAS AL KHOR INDUSTRIAL ESTATE / DUBAI</span><p className="kicker">The facility is part of the method</p><h2>See the sorting, the data and the products in one visit.</h2><p>Every bag we audit comes here. Materials are opened, separated and weighed. Selected plastics move into the fabrication process. The Waste Control Panel turns the operating record into a view the client can use.</p><blockquote>Thirty minutes at our facility will show you more about your waste than ten years of reports.</blockquote><ActionLink href={siteVisitHref}>Book a free facility visit</ActionLink></div></section>
      <section className="about-framework section-pad"><div><span className="section-index">THE REE FRAMEWORK</span><h2>Diagnose.<br />Action.<br />Control.</h2></div><div><p>Diagnosis gives action a reason. Action gives control something to measure. Control feeds the next diagnosis. Remove one and the waste-reduction loop breaks.</p><div>{[["01","DIAGNOSE","Open every stream and find the real baseline."],["02","ACTION","Build the route, bins, recovery and behaviour change."],["03","CONTROL","Track the result and correct the operation."]].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
      <SiteVisitBand current="about" title="Come and see what happens after the bag leaves your site." />
    </main><SiteFooter current="about" /></>
  );
}
