"use client";

import { useMemo, useState } from "react";

// Preserved for a future measured-data redesign. Intentionally not rendered on the live page.
export default function ArchivedImpactCalculator() {
  const [bins, setBins] = useState(18);
  const [collections, setCollections] = useState(3);
  const [cost, setCost] = useState(620);
  const [reduction, setReduction] = useState(28);
  const impact = useMemo(() => {
    const annualCollections = collections * 52;
    const projectedCollections = Math.round(annualCollections * (1 - reduction / 100));
    return {
      annualCollections,
      projectedCollections,
      savings: annualCollections * cost * (reduction / 100),
      lifts: annualCollections - projectedCollections,
      volume: bins * .24 * annualCollections * (reduction / 100),
    };
  }, [bins, collections, cost, reduction]);
  const afterBars = Math.max(2, Math.round(20 * (1 - reduction / 100)));

  return <section className="compressor section-pad" id="impact">
    <div className="compressor-copy">
      <div className="section-index">WASTE REDUCTION MODEL</div>
      <p className="kicker">Turn volume into a business case</p>
      <h2>Move <em>{reduction}% less.</em><br />See what changes.</h2>
      <p className="section-lede">A directional model for the first conversation. A REE waste audit replaces every assumption with measured data.</p>
      <div className="controls">
        <label><span><b>Bins per collection</b><output>{bins}</output></span><input aria-label="Bins per collection" type="range" min="4" max="60" value={bins} onChange={(event)=>setBins(Number(event.target.value))}/></label>
        <label><span><b>Collections per week</b><output>{collections}</output></span><input aria-label="Collections per week" type="range" min="1" max="7" value={collections} onChange={(event)=>setCollections(Number(event.target.value))}/></label>
        <label><span><b>Cost per collection</b><output>AED {cost}</output></span><input aria-label="Cost per collection" type="range" min="250" max="2500" step="10" value={cost} onChange={(event)=>setCost(Number(event.target.value))}/></label>
        <label className="orange-range"><span><b>Reduction target</b><output>{reduction}%</output></span><input aria-label="Reduction target" type="range" min="10" max="45" value={reduction} onChange={(event)=>setReduction(Number(event.target.value))}/></label>
      </div>
    </div>
    <div className="impact-console">
      <div className="console-head"><span><i/> LIVE MODEL</span><b>REE / WR-01</b></div>
      <div className="flow-readout">
        <div className="flow-label"><span>Current collection load</span><strong>{impact.annualCollections}<small> / YEAR</small></strong></div>
        <div className="load-bars" aria-hidden="true">{Array.from({length:20},(_,index)=><i key={index}/>)}</div>
        <div className="reduction-slash"><span>−{reduction}%</span></div>
        <div className="flow-label flow-after"><span>Projected after reduction</span><strong>{impact.projectedCollections}<small> / YEAR</small></strong></div>
        <div className="load-bars bars-after" aria-hidden="true">{Array.from({length:20},(_,index)=><i className={index>=afterBars?"off":""} key={index}/>)}</div>
      </div>
      <div className="impact-stats">
        <div><span>Potential annual saving</span><strong>AED {Math.round(impact.savings).toLocaleString()}</strong></div>
        <div><span>Collections avoided</span><strong>{Math.round(impact.lifts)}<small> / YR</small></strong></div>
        <div><span>Volume not handled</span><strong>{Math.round(impact.volume)}<small> M³</small></strong></div>
      </div>
    </div>
  </section>;
}
