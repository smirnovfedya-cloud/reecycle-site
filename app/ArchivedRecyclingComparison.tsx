/**
 * Archived on advisor review. Keep this component out of the rendered site
 * until the comparison criteria and third-party claims have supporting evidence.
 */
export default function ArchivedRecyclingComparison() {
  const capabilities = [
    "Site bin setup",
    "Clear labels and stream planning",
    "Physical sorting",
    "Each stream weighed and documented",
    "Material destination tracking",
    "Dashboard and ESG-ready data",
    "Rebates",
    "Local recycled-product fabrication",
  ];

  return (
    <section className="comparison-section section-pad">
      <span className="section-index">THE DIFFERENCE</span>
      <h2>Waste removal tells you what left.<br /><em>REE tells you what happened.</em></h2>
      <div className="comparison-table">
        <div><b>CAPABILITY</b><b>STANDARD COLLECTION</b><b>REE RECYCLING</b></div>
        {capabilities.map((item) => <div key={item}><span>{item}</span><i>—</i><strong>Included</strong></div>)}
      </div>
    </section>
  );
}
