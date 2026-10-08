import solutions from "../content/solutions.json";
import {
  ActionLink,
  Arrow,
  ClientStrip,
  CredibilityBlock,
  SiteFooter,
  SiteHeader,
  SiteVisitBand,
  assetHref,
  routeHref,
  siteVisitHref,
} from "./MarketingBlocks";

export type SolutionCluster = "diagnose" | "action" | "control";

export type Solution = {
  slug: string;
  cluster: SolutionCluster;
  title: string;
  shortTitle: string;
  eyebrow: string;
  seoTitle: string;
  description: string;
  lede: string;
  challenge: string;
  included: string[];
  outcomes: string[];
  audiences: string[];
  faq: { q: string; a: string }[];
  related: string[];
};

const allSolutions = solutions as Solution[];

const clusters: Record<SolutionCluster, { number: string; name: string; copy: string }> = {
  diagnose: { number: "01", name: "Diagnose", copy: "Find the physical baseline, the data gaps and the operating cause." },
  action: { number: "02", name: "Action", copy: "Put the bins, routes, people and recovery system into operation." },
  control: { number: "03", name: "Control", copy: "Keep the evidence visible and correct the system as it changes." },
};

export function solutionHref(slug: string, fromDetail = false) {
  return fromDetail ? `../${slug}/` : `../${slug}/`;
}

export function SolutionsLibrary() {
  return (
    <section className="solutions-library section-pad" id="solutions-library">
      <div className="solutions-library-head">
        <span className="section-index">THE COMPLETE REE SYSTEM</span>
        <div>
          <p className="kicker">One method. Nineteen practical capabilities.</p>
          <h2>Start with the problem.<br /><em>Enter at the right layer.</em></h2>
          <p>You do not need to buy the whole system at once. Start with a specific decision, site or waste stream; REE connects the work to the wider Diagnose / Action / Control loop.</p>
        </div>
      </div>
      <div className="solution-clusters">
        {(Object.keys(clusters) as SolutionCluster[]).map((key) => {
          const cluster = clusters[key];
          return (
            <section className={`solution-cluster cluster-${key}`} key={key} aria-labelledby={`cluster-${key}`}>
              <header>
                <span>{cluster.number}</span>
                <div><h3 id={`cluster-${key}`}>{cluster.name}</h3><p>{cluster.copy}</p></div>
              </header>
              <div>
                {allSolutions.filter((item) => item.cluster === key).map((item) => (
                  <a href={solutionHref(item.slug)} key={item.slug}>
                    <span>{item.shortTitle}</span><Arrow />
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

function SolutionFaq({ solution }: { solution: Solution }) {
  return (
    <section className="solution-faq section-pad">
      <div><span className="section-index">STRAIGHT ANSWERS</span><p className="kicker">Before the site visit</p><h2>Questions we<br />usually hear.</h2></div>
      <div className="faq-list">
        {solution.faq.map((item, index) => (
          <details key={item.q} open={index === 0}>
            <summary><span>0{index + 1}</span><b>{item.q}</b><i>+</i></summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function SolutionPage({ slug }: { slug: string }) {
  const solution = allSolutions.find((item) => item.slug === slug);
  if (!solution) return null;
  const cluster = clusters[solution.cluster];
  const related = solution.related.map((relatedSlug) => allSolutions.find((item) => item.slug === relatedSlug)).filter(Boolean) as Solution[];

  return (
    <><SiteHeader current="consulting" /><main className="solution-page">
      <section className={`solution-hero solution-hero-${solution.cluster}`}>
        <div className="solution-hero-grid" aria-hidden="true" />
        <div className="solution-hero-copy">
          <span className="eyebrow"><i /> {solution.eyebrow}</span>
          <p className="solution-parent"><a href={routeHref("consulting", "consulting")}>Consulting</a><b>/</b>{cluster.name}</p>
          <h1>{solution.title}</h1>
          <p>{solution.lede}</p>
          <div><ActionLink href={siteVisitHref}>Book a free site visit</ActionLink><a href="#scope">See the scope <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="solution-hero-system" aria-label={`${cluster.name}, stage ${cluster.number} of the REE framework`}>
          {(Object.keys(clusters) as SolutionCluster[]).map((key) => <span className={key === solution.cluster ? "is-active" : ""} key={key}><b>{clusters[key].number}</b>{clusters[key].name}</span>)}
        </div>
      </section>

      <ClientStrip current="consulting" compact />

      <section className="solution-summary section-pad" id="scope">
        <div><span className="section-index">THE OPERATING PROBLEM</span><p className="kicker">Why this capability exists</p><h2>A precise answer starts with a precise gap.</h2></div>
        <div><p>{solution.challenge}</p><blockquote>{solution.lede}</blockquote></div>
      </section>

      <section className="solution-scope section-pad">
        <div className="solution-scope-column">
          <span className="section-index">WHAT REE DOES</span>
          <h2>Inside the scope.</h2>
          <div>{solution.included.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
        </div>
        <div className="solution-scope-column outcome-column">
          <span className="section-index">WHAT THE BUSINESS GETS</span>
          <h2>Useful output.</h2>
          <div>{solution.outcomes.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
        </div>
      </section>

      <section className="solution-audience section-pad">
        <div><span className="section-index">BUILT FOR THE PEOPLE WHO OWN THE RESULT</span><h2>One waste question.<br />Several stakeholders.</h2></div>
        <div>{solution.audiences.map((audience, index) => <span key={audience}><b>0{index + 1}</b>{audience}</span>)}</div>
      </section>

      <CredibilityBlock current="consulting" />
      <SolutionFaq solution={solution} />

      <section className="solution-related section-pad">
        <div><span className="section-index">CONNECTED CAPABILITIES</span><h2>The next useful layer.</h2></div>
        <div>{related.map((item) => <a href={solutionHref(item.slug, true)} key={item.slug}><span>{clusters[item.cluster].name}</span><h3>{item.shortTitle}</h3><p>{item.lede}</p><Arrow /></a>)}</div>
      </section>

      <SiteVisitBand current="consulting" title="Start with the site, the bags and the decision you need to make." />
    </main><SiteFooter current="consulting" /></>
  );
}

export function findSolution(slug: string) {
  return allSolutions.find((item) => item.slug === slug);
}
