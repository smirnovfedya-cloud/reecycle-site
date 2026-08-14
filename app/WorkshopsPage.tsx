"use client";

import {
  ActionLink,
  ClientStrip,
  CredibilityBlock,
  SiteFooter,
  SiteHeader,
  assetHref,
  whatsappHref,
} from "./MarketingBlocks";

const workshopHref = `${whatsappHref}?text=${encodeURIComponent("Hi REE, I would like to plan a hands-on recycling workshop.")}`;

const cycle = [
  ["01", "Collect", "Begin with familiar office plastic and learn why material choice matters.", "recycling-route-v1.webp"],
  ["02", "Sort", "Identify the polymer, remove the wrong items and prepare a clean stream.", "consulting-field-audit-v1.webp"],
  ["03", "Process", "See prepared plastic become flakes on compact equipment at your venue.", "workshop-kit-v1.webp"],
  ["04", "Mould", "Turn the material into a new shape with a facilitator-controlled press.", "workshop-restored-v3.png"],
  ["05", "Keep", "Leave with a coaster, badge, keyring or another agreed small object.", "real/02-arabian_warrior_meda.jpg"],
];

const faqs = [
  ["Will the workshop smell like melting plastic?", "It should not smell like a waste room: the material used for making is washed, sorted and prepared. A light warm-plastic smell can be noticeable close to the machine, so we confirm room size and ventilation before the event."],
  ["Can we use plastic collected in our own office?", "Sometimes. It depends on the polymer, cleanliness, quantity and the object being made. We test the material first. If it is not suitable for live fabrication, the team can still sort it and use prepared feedstock for the making stage."],
  ["Is the plastic washed?", "Yes. Plastic used in the fabrication stage is cleaned and prepared. Material collected during the session only enters the machine when it is the right polymer and already suitable for processing."],
  ["Is the equipment safe in an office?", "The workshop is facilitated throughout. Heated, cutting and pressure stages remain under REE team control, while participants follow a clear station briefing. We confirm the room, access and setup before the event."],
  ["Do you really need only one power outlet?", "The compact setup runs from one suitable standard outlet. We bring the equipment, prepared material, moulds and tools. Table layout, access, ventilation and the final electrical check are covered in the pre-event checklist."],
  ["What can participants make?", "Typical formats include coasters, badges, keyrings and other small objects. The final choice depends on group format, timing and available moulds. Custom moulds can be explored when the brief and lead time allow."],
  ["How many people can take part?", "The format is adapted to the group, venue and time available. Small teams can move through the stations together; larger groups can rotate through parallel learning and making activities."],
];

export default function WorkshopsPage() {
  return (
    <><SiteHeader current="workshops" /><main>
      <section className="workshops-hero">
        <div className="workshops-hero-image" style={{backgroundImage:`linear-gradient(90deg,rgba(3,20,14,.9),rgba(3,20,14,.08)),url('${assetHref("workshop-restored-v3.png","workshops")}')`}} />
        <div className="workshops-hero-copy"><span className="eyebrow"><i /> HANDS-ON RECYCLING WORKSHOPS / UAE</span><h1>Do not just talk about circularity.<br /><em>Make something.</em></h1><p>REE brings a compact recycling line into your office. Your team follows the material from collection and sorting to processing and a finished object they can take home.</p><div><ActionLink href={workshopHref}>Plan a workshop</ActionLink><a href="#full-cycle">See the full cycle <span aria-hidden="true">↓</span></a></div></div>
        <div className="workshops-hero-fact"><b>01</b><span>standard power outlet</span><small>We bring the rest</small></div>
      </section>

      <ClientStrip current="workshops" compact />

      <section className="workshop-cycle section-pad" id="full-cycle">
        <div className="workshop-cycle-heading"><span className="section-index">THE WHOLE LOOP / IN ONE SESSION</span><p className="kicker">Not a lecture with a recycling slide</p><h2>One material.<br />Five physical steps.</h2><p>Participants do more than watch. They make decisions at each station and see how contamination, material quality and processing affect the final object.</p></div>
        <div className="cycle-track">
          {cycle.map(([number, title, copy, image], index) => <article key={number}>
            <div className="cycle-image"><img src={assetHref(image,"workshops")} alt="" /><span>{number}</span></div>
            <div><h3>{title}</h3><p>{copy}</p></div>{index < cycle.length - 1 && <i aria-hidden="true">↘</i>}
          </article>)}
        </div>
      </section>

      <section className="workshop-kit section-pad">
        <figure><img src={assetHref("workshop-kit-v1.webp","workshops")} alt="Compact REE recycling equipment set up on a table in an office" /><figcaption>COMPACT MOBILE SETUP / CLIENT OFFICE</figcaption></figure>
        <div><span className="section-index">THE SETUP</span><p className="kicker">Your office becomes the micro-factory</p><h2>One ordinary outlet.<br /><em>Everything else is on us.</em></h2><p>REE brings the compact equipment, prepared feedstock, moulds, tools and facilitators. We set up, run the stations and pack down after the session.</p><dl><div><dt>REE BRINGS</dt><dd>Machines, material, moulds, tools and facilitation</dd></div><div><dt>YOU PROVIDE</dt><dd>A suitable indoor area, access and one confirmed power outlet</dd></div><div><dt>BEFORE THE DAY</dt><dd>A short venue and safety checklist agreed with your team</dd></div></dl><ActionLink href={workshopHref}>Check my venue</ActionLink></div>
      </section>

      <section className="workshop-participation section-pad">
        <div><span className="section-index">WHAT PEOPLE ACTUALLY DO</span><h2>Hands on the material.<br />Eyes on the system.</h2></div>
        <div className="participation-flow">
          {[['TOUCH','Handle familiar material and compare what belongs in each stream.'],['CHOOSE','Identify the plastic and remove contamination before it reaches the machine.'],['MAKE','Take part at guided stations while REE controls heated and cutting stages.'],['CONNECT','Link one small object back to collection, material value and waste reduction.']].map(([title,copy],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="workshop-outcomes section-pad">
        <div className="workshop-outcomes-copy"><span className="section-index">WHY TEAMS BOOK IT</span><p className="kicker">A useful experience, not sustainability theatre</p><h2>Make the waste story<br />easy to remember.</h2></div>
        <div className="workshop-outcome-panels">
          <article><b>ESG + SUSTAINABILITY</b><h3>Turn an abstract target into a visible material journey.</h3></article>
          <article><b>HR + TEAM BUILDING</b><h3>Give people a shared task with a result they can take away.</h3></article>
          <article><b>CSR + EVENTS</b><h3>Create a live activation that explains the work behind recycling.</h3></article>
          <article><b>CLIENT MATERIAL</b><h3>Explore whether your own suitable plastic can become part of the story.</h3></article>
        </div>
      </section>

      <section className="workshop-gallery section-pad"><div><span className="section-index">ON SITE / IN THE ROOM</span><h2>Small footprint.<br />A complete story.</h2></div><div>
        <figure><img src={assetHref("workshop-restored-v3.png","workshops")} alt="Office team taking part in a REE recycling workshop" /><figcaption>THE TEAM / MAKING STATION</figcaption></figure>
        <figure><img src={assetHref("workshop-kit-v1.webp","workshops")} alt="Compact workshop machines and prepared plastic material" /><figcaption>THE KIT / ONE TABLE</figcaption></figure>
        <figure><img src={assetHref("circular-products-v3.png","workshops")} alt="Finished objects made from recycled plastic" /><figcaption>THE OUTCOME / SOMETHING TO KEEP</figcaption></figure>
      </div></section>

      <section className="workshop-faq section-pad">
        <div><span className="section-index">PRACTICAL QUESTIONS</span><p className="kicker">What Facilities, HR and Sustainability will ask</p><h2>Before we plug in.</h2></div>
        <div>{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary><span>0{index+1}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</div>
      </section>

      <CredibilityBlock current="workshops" />
      <section className="workshop-final section-pad"><span className="section-index">BRING THE LOOP TO YOUR OFFICE</span><h2>Your team.<br />Your venue.<br /><em>One plug.</em></h2><p>Tell us the group, the space and the outcome you want. We will shape the stations, material and finished object around the brief.</p><ActionLink href={workshopHref}>Plan the workshop</ActionLink></section>
    </main><SiteFooter current="workshops" /></>
  );
}
