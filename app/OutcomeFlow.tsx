"use client";

import { useState } from "react";

const routes = [
  { name: "Cardboard", value: "15%", y: 92, path: "M535 280 C625 280 675 92 785 92" },
  { name: "Plastic", value: "13%", y: 162, path: "M535 280 C635 280 685 162 785 162" },
  { name: "Food waste", value: "12%", y: 232, path: "M535 280 C640 280 690 232 785 232" },
  { name: "Green waste", value: "11%", y: 312, path: "M535 280 C640 280 690 312 785 312" },
  { name: "Metal", value: "9%", y: 382, path: "M535 280 C635 280 685 382 785 382" },
  { name: "General waste", value: "40%", y: 452, path: "M535 280 C625 280 675 452 785 452", residual: true },
];

function ParticleStream({
  path,
  count,
  duration,
  spread = 12,
  className = "",
}: {
  path: string;
  count: number;
  duration: number;
  spread?: number;
  className?: string;
}) {
  return (
    <g className={`particle-stream ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <circle
          className={`flow-particle particle-${index % 4}`}
          key={index}
          cy={count > 1 ? ((((index * 7) % count) / (count - 1)) - .5) * spread : 0}
          r={index % 5 === 0 ? 2.8 : index % 3 === 0 ? 2.1 : 1.45}
        >
          <animateMotion
            path={path}
            dur={`${duration}s`}
            begin={`${-(index * duration) / count}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </g>
  );
}

export default function OutcomeFlow() {
  const [reeOn, setReeOn] = useState(true);
  const recoveredValue = reeOn ? 70 : 5;

  return (
    <div className={`flow-particles ${reeOn ? "is-on" : "is-off"}`}>
      <header className="flow-particles-head">
        <div><span>REE / WASTE FLOW</span><small>LIVE SYSTEM VIEW</small></div>
        <b>{reeOn ? "MATERIALS ROUTED" : "LINEAR DISPOSAL"}</b>
      </header>

      <div
        className="flow-particles-stage"
        aria-label={reeOn
          ? "REE routes business waste into five recovery streams and a smaller general waste stream."
          : "Without REE, business waste continues as one stream to landfill."}
      >
        <svg className="flow-particle-field" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="particle-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <ParticleStream path="M135 242 C205 242 260 280 315 280" count={32} duration={3.25} spread={44} className="stream-input" />

          <g className="particle-state particle-state-off">
            <ParticleStream path="M535 280 C650 280 750 280 870 280" count={38} duration={4} spread={48} className="stream-blind" />
          </g>

          <g className="particle-state particle-state-on">
            {routes.map((route, index) => (
              <ParticleStream
                path={route.path}
                count={route.residual ? 18 : 12}
                duration={3.5 + index * .18}
                spread={route.residual ? 24 : 18}
                className={route.residual ? "stream-residual" : `stream-recovery stream-${index + 1}`}
                key={route.name}
              />
            ))}
          </g>
        </svg>

        <div className="flow-business-source">
          <div className="flow-bins" aria-hidden="true"><i /><i /><i /></div>
          <span>YOUR BUSINESS WASTE</span>
        </div>

        <button
          className="flow-ree-switch"
          type="button"
          role="switch"
          aria-checked={reeOn}
          aria-label={`REE is ${reeOn ? "on" : "off"}. Switch REE ${reeOn ? "off" : "on"}.`}
          onClick={() => setReeOn((current) => !current)}
        >
          <div className="flow-switch-brand">
            <img src="assets/ree-logo.svg" alt="" />
            <strong>REE {reeOn ? "ON" : "OFF"}</strong>
          </div>
          <div className="flow-engine-motion" aria-hidden="true"><i /><i /><i /><b /></div>
          <div className="flow-switch-control">
            <span>{reeOn ? "ROUTING ACTIVE" : "TURN REE ON"}</span>
            <i><b /></i>
          </div>
          <span className="flow-switch-hint" aria-hidden="true"><i /> CLICK TO ACTIVATE</span>
        </button>

        <div className="flow-route-labels" aria-hidden={!reeOn}>
          {routes.map((route) => (
            <div className={route.residual ? "is-residual" : ""} style={{ top: route.y - 17 }} key={route.name}>
              <span>{route.name}</span><b>{route.value}</b>
              {route.residual && <small>TO LANDFILL</small>}
            </div>
          ))}
        </div>

        <div className="flow-off-destination" aria-hidden={reeOn}>
          <span>GENERAL WASTE</span><b>100%</b><small>TO LANDFILL</small>
        </div>

        <div className="flow-value-meter" aria-label={`${recoveredValue}% value recovered`}>
          <span>VALUE<br />RECOVERED</span>
          <div className="flow-meter-track">
            <i /><b>{recoveredValue}%</b><small className="meter-max">100</small><small className="meter-min">0</small>
          </div>
        </div>
      </div>

      <footer className="flow-particles-foot" aria-live="polite">
        <strong>{reeOn ? "Recoverable materials get a route." : "Value leaves with the waste."}</strong>
        <span>VALUE RECOVERED · {recoveredValue}%</span>
      </footer>
    </div>
  );
}
