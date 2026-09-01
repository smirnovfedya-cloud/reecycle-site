"use client";

import { audienceContent, industries, type AudienceKey, type IndustrySlug } from "./IndustryContent";
import { ActionLink, Arrow, routeHref, siteVisitHref, whatsappHref } from "./MarketingBlocks";

const sectorChatHref = (name: string) => `${whatsappHref}?text=${encodeURIComponent(`Hi REE, I would like to discuss waste reduction for ${name.toLowerCase()}.`)}`;

export default function IndustryExperience({
  audience,
  onChange,
}: {
  audience: AudienceKey;
  onChange: (audience: AudienceKey) => void;
}) {
  const content = audienceContent[audience];
  const selectedIndustry = audience === "businesses" ? null : content;

  return (
    <section className="industry-experience section-pad" id="industries">
      <div className="industry-experience-head">
        <span className="section-index">02 / YOUR OPERATION</span>
        <div>
          <p className="kicker">One method. Different operating realities.</p>
          <h2>Specific waste.<br /><em>Specific route.</em></h2>
        </div>
        <div className="industry-tabs" aria-label="Change industry view">
          <button type="button" className={audience === "businesses" ? "is-active" : ""} onClick={() => onChange("businesses")}>All</button>
          {industries.map((industry) => <button type="button" className={audience === industry.slug ? "is-active" : ""} key={industry.slug} onClick={() => onChange(industry.slug)}>{industry.name}</button>)}
        </div>
      </div>

      <div className="industry-swap" key={audience} data-industry={audience}>
        <div className="industry-problem">
          <span>{content.eyebrow}</span>
          <h3>{content.problemTitle}</h3>
          <p>{content.problemCopy}</p>
          <div className="industry-frictions">
            {content.frictions.slice(0, 3).map((item, index) => <article key={item.title}><i>0{index + 1}</i><div><b>{item.title}</b><p>{item.copy}</p></div></article>)}
          </div>
        </div>

        <div className="industry-proof-card">
          <span>{content.proofLabel}</span>
          <h3>{content.proofTitle}</h3>
          <p>{content.proofCopy}</p>
          <div>{content.proofStats.map((stat) => <article key={stat.label}><strong>{stat.value}</strong><small>{stat.label}</small></article>)}</div>
        </div>

        <div className="industry-method-strip">
          {content.method.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </div>

      <div className="industry-mid-cta">
        <div>
          <span>{selectedIndustry ? `${selectedIndustry.name.toUpperCase()} / FULL VIEW` : "CHOOSE A RELEVANT VIEW"}</span>
          <h3>{selectedIndustry ? `See the complete approach for ${selectedIndustry.name.toLowerCase()}.` : "Select an industry to tailor the page to your operation."}</h3>
          {selectedIndustry
            ? <a href={routeHref(`industries/${selectedIndustry.slug}` as `industries/${IndustrySlug}`)}>Open the industry page <Arrow /></a>
            : <a href={siteVisitHref} target="_blank" rel="noreferrer">Start with a free site visit <Arrow /></a>}
        </div>
        <div className="industry-not-found">
          <span>NOT SEEING YOUR INDUSTRY?</span>
          <h3>Waste behaves differently everywhere. Tell us what you run.</h3>
          <ActionLink href={sectorChatHref(selectedIndustry?.name || "my industry")}>Chat with REE</ActionLink>
        </div>
      </div>
    </section>
  );
}
