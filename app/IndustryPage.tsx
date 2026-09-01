"use client";

import { audienceContent, industries, type IndustrySlug } from "./IndustryContent";
import { ActionLink, Arrow, ClientStrip, CredibilityBlock, SiteFooter, SiteHeader, routeHref, siteVisitHref, whatsappHref } from "./MarketingBlocks";

export default function IndustryPage({ slug }: { slug: IndustrySlug }) {
  const content = audienceContent[slug];
  const current = `industries/${slug}` as const;
  const chatHref = `${whatsappHref}?text=${encodeURIComponent(`Hi REE, I would like to discuss waste reduction for ${content.name.toLowerCase()}.`)}`;

  return (
    <><SiteHeader current={current} /><main>
      <section className={`industry-hero industry-hero-${slug}`}>
        <div className="industry-hero-grid" aria-hidden="true" />
        <div className="industry-hero-copy">
          <span className="eyebrow"><i /> {content.eyebrow}</span>
          <h1>{content.heroTitle}</h1>
          <p>{content.heroCopy}</p>
          <div><ActionLink href={siteVisitHref}>Book a free site visit</ActionLink><a href={chatHref} target="_blank" rel="noreferrer">Chat with REE <Arrow /></a></div>
        </div>
        <div className="industry-hero-stream" aria-hidden="true">
          {content.streams.slice(0, 6).map((stream, index) => <span style={{ "--stream": index } as React.CSSProperties} key={stream}><i />{stream}</span>)}
        </div>
      </section>

      <ClientStrip current={current} compact />

      <nav className="industry-page-switcher" aria-label="Explore REE by industry">
        <span>VIEW BY INDUSTRY</span>
        {industries.map((industry) => <a className={industry.slug === slug ? "is-active" : ""} href={routeHref(`industries/${industry.slug}`, current)} key={industry.slug}>{industry.name}</a>)}
        <a href={chatHref} target="_blank" rel="noreferrer">Other <Arrow /></a>
      </nav>

      <section className="industry-page-problem section-pad">
        <div><span className="section-index">THE PROBLEM / IN YOUR LANGUAGE</span><p className="kicker">What the current report cannot answer</p><h2>{content.problemTitle}</h2><p>{content.problemCopy}</p></div>
        <div className="industry-page-frictions">{content.frictions.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="industry-page-method section-pad" id="how-it-works">
        <div><span className="section-index">HOW REE WORKS</span><p className="kicker">Diagnosis before activity</p><h2>Diagnose.<br />Build.<br /><em>Measure.</em></h2></div>
        <div>{content.method.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="industry-streams section-pad">
        <div><span className="section-index">THE OPERATING VIEW</span><p className="kicker">The streams and decisions REE connects</p><h2>One operation.<br />Several recovery flows.</h2></div>
        <div className="industry-stream-map">
          <div className="industry-stream-source"><b>{content.name}</b><span>YOUR OPERATION</span></div>
          <div className="industry-stream-engine"><strong>REE</strong><span>DIAGNOSE<br />BUILD<br />MEASURE</span></div>
          <div className="industry-stream-list">{content.streams.map((stream, index) => <span key={stream}><i>{String(index + 1).padStart(2, "0")}</i>{stream}</span>)}</div>
        </div>
      </section>

      <section className="industry-page-proof section-pad">
        <div><span className="section-index">PROOF / {content.proofLabel}</span><h2>{content.proofTitle}</h2><p>{content.proofCopy}</p></div>
        <div className="industry-page-stats">{content.proofStats.map((stat) => <article key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div>
      </section>

      <section className="industry-objection section-pad">
        <span className="section-index">YOU MAY ALREADY BE THINKING THIS</span>
        <blockquote>“{content.objection}”</blockquote>
        <p>{content.answer}</p>
      </section>

      <CredibilityBlock current={current} />

      <section className="industry-final section-pad">
        <span className="section-index">THE FIRST STEP / FIXED AND PRACTICAL</span>
        <h2>{content.firstStep}</h2>
        <p>We walk the operation, look at the current bins, waste rooms, supplier setup and reporting. You leave with the first questions worth answering.</p>
        <div><ActionLink href={siteVisitHref}>Book a free site visit</ActionLink><ActionLink href={chatHref} light>Chat with REE</ActionLink></div>
      </section>
    </main><SiteFooter current={current} /></>
  );
}
