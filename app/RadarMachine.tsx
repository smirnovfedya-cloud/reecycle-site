"use client";

const Bottle = () => <span className="waste-icon bottle"><i/><b>PET</b><em/></span>;
const Can = () => <span className="waste-icon can"><i/><b/><em>ALU</em></span>;
const Carton = () => <span className="waste-icon carton"><i/><b>PAP</b><em/></span>;
const Jar = () => <span className="waste-icon jar"><i/><b>GL</b><em/></span>;

export default function RadarMachine() {
  const items = [Bottle, Can, Carton, Jar, Bottle, Can, Carton, Bottle, Jar, Can, Bottle, Carton];
  return <div className="machine" aria-label="Bottles, cans, cartons and jars fall into the REE reduction engine and leave as returned value">
    <div className="waste-rain" aria-hidden="true">
      {items.map((Icon,index)=><i className="rain-item" key={index} style={{"--i":index} as React.CSSProperties}><Icon/></i>)}
    </div>
    <div className="intake-funnel"><span>WASTE INPUT</span><i/><b/></div>
    <div className="ree-engine">
      <div className="engine-title"><strong>REE</strong><small>REDUCTION ENGINE / UAE</small><i>LIVE</i></div>
      <div className="process-rail" aria-hidden="true"><i/><i/><i/><i/></div>
      <div className="process-stage stage-weigh"><span>01</span><b/><i/><small>WEIGH</small></div>
      <div className="process-stage stage-scan"><span>02</span><b/><i/><small>SCAN</small></div>
      <div className="process-stage stage-sort"><span>03</span><b/><i/><small>SORT</small></div>
      <div className="process-stage stage-press"><span>04</span><b/><i/><small>REDUCE</small></div>
      <div className="process-material" aria-hidden="true">{Array.from({length:6},(_,index)=><i key={index} style={{"--i":index} as React.CSSProperties}/>)}</div>
      <div className="engine-readout"><span>DATA CAPTURED</span><i/><i/><i/><i/><i/><b>→</b></div>
      <div className="output-port"><span>VALUE OUT</span><i>→</i></div>
    </div>
    <div className="coin-stream" aria-hidden="true">
      {Array.from({length:7},(_,index)=><i key={index} style={{"--i":index} as React.CSSProperties}><b>+</b></i>)}
    </div>
  </div>;
}
