"use client";

import { useEffect, useState } from "react";

type Props = { framework: boolean[]; onToggle: (index: number) => void };

const layers = [
  { name: "DIAGNOSE", detail: "MEASURE · MAP · FIND" },
  { name: "ACT", detail: "DESIGN · TRAIN · ROUTE" },
  { name: "CONTROL", detail: "TRACK · PROVE · IMPROVE" },
];

export default function DacPhysics({ framework, onToggle }: Props) {
  const complete = framework.every(Boolean);
  const missing = framework.findIndex((enabled) => !enabled);
  const [landing, setLanding] = useState(72);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (complete) return;
    const roll = () => {
      setLanding(14 + Math.round(Math.random() * 72));
      setCycle((value) => value + 1);
    };
    roll();
    const timer = window.setInterval(roll, 3900);
    return () => window.clearInterval(timer);
  }, [complete, missing]);

  return (
    <div
      className={`dac-2d ${complete ? "is-stable" : `is-falling missing-${missing}`}`}
      style={{ "--landing": `${landing}%` } as React.CSSProperties}
      aria-label="Interactive two dimensional Diagnose Act Control system"
    >
      <div className="dac-blueprint" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="dac-status"><i />{complete ? "LOOP CLOSED" : "STRUCTURE UNSTABLE"}</div>
      <div className="dac-stack">
        {layers.map((layer, index) => (
          <button
            type="button"
            key={layer.name}
            className={`dac-block block-${index} ${framework[index] ? "present" : "removed"}`}
            onClick={() => onToggle(index)}
            aria-pressed={framework[index]}
          >
            <span>0{index + 1}</span>
            <b>{layer.name}</b>
            <small>{layer.detail}</small>
            <em aria-hidden="true"><i /><i /><i /><i /></em>
          </button>
        ))}
      </div>
      <div className="dac-ball" key={`${missing}-${cycle}`}><span>LESS<br />WASTE</span></div>
      <div className="dac-floor" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="dac-pull-note" aria-hidden="true">CLICK A LAYER<br />TO PULL IT OUT <b>↗</b></div>
    </div>
  );
}
