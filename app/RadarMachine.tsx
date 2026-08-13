"use client";

const Bottle=()=> <span className="waste-icon bottle"><i/><b>01</b><em/></span>;
const Can=()=> <span className="waste-icon can"><i/><b/><em/></span>;
const Box=()=> <span className="waste-icon box"><i/><b>↗</b><em/></span>;
const Cup=()=> <span className="waste-icon cup"><i/><b>♻</b><em/></span>;

export default function RadarMachine() {
  const items=[Bottle,Can,Box,Cup,Bottle,Can,Box,Cup];
  return <div className="machine" aria-label="A stream of waste passes through the REE reduction machine and becomes value">
    <div className="machine-flow">{items.map((Icon,i)=><i className="flow-item" key={i} style={{"--i":i} as React.CSSProperties}><Icon/></i>)}</div>
    <div className="belt belt-in"><i/><i/><i/><i/><i/><i/></div>
    <div className="ree-engine">
      <span className="engine-title">REE <small>REDUCTION ENGINE</small></span>
      <div className="weigh"><b/><i/><small>WEIGH</small></div>
      <div className="scanner"><i/><i/><span>SCAN</span></div>
      <div className="gear gear-one"><i/><i/><i/><i/><i/><i/></div>
      <div className="gear gear-two"><i/><i/><i/><i/><i/><i/></div>
      <div className="sort-gate"><i/><b/><em/><span>SORT</span></div>
      <div className="press"><i/><b/><span>REDUCE</span></div>
      <div className="material-run" aria-hidden="true">{Array.from({length:5},(_,i)=><i key={i} style={{"--i":i} as React.CSSProperties}/>)}</div>
      <div className="data-ticks"><i/><i/><i/><i/><i/></div>
    </div>
    <div className="belt belt-out"><i/><i/><i/><i/></div>
    <div className="coin-chute"><b>VALUE OUT</b><i>→</i></div>
    <div className="coins">{Array.from({length:9},(_,i)=><i key={i} style={{"--i":i} as React.CSSProperties}><b>+</b></i>)}</div>
    <div className="machine-caption"><span>WASTE IN</span><b>WEIGH · SCAN · SORT · REDUCE</b><strong>VALUE OUT</strong></div>
  </div>;
}
