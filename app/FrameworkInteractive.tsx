"use client";

import { useState } from "react";
import DacPhysics from "./DacPhysics";

const frameworkSteps = [
  { name: "Diagnose", verb: "Know", copy: "Open every stream. Map the operation. Find the material, behaviour and hidden cost.", broken: "Without diagnosis, action is guesswork. You cannot reduce what you have not measured." },
  { name: "Act", verb: "Change", copy: "Build the bins, routes, training and recovery system that fits the diagnosis.", broken: "Diagnosis without real action is only a report. Nothing changes in the bins, routes or behaviour." },
  { name: "Control", verb: "Prove", copy: "Track contamination, diversion, value and destination — then correct the system.", broken: "Without control, gains disappear. You cannot maintain or prove a system you no longer measure." },
];

export default function FrameworkInteractive() {
  const [framework, setFramework] = useState([true, true, true]);
  const frameworkComplete = framework.every(Boolean);
  const removedFrameworkStep = framework.findIndex((enabled) => !enabled);
  const toggleFramework = (index: number) => setFramework((current) => current.map((enabled, step) => step === index ? !enabled : enabled));

  return (
    <section className="independence section-pad" id="framework">
      <div className="independence-title"><span>INTERACTIVE / THE REE FRAMEWORK</span><h2>Three parts.<br />One system.</h2><p>Remove one and the loop breaks.</p></div>
      <div className="independence-copy">
        <p>Diagnosis gives action a reason. Action gives control something to measure. Control feeds the next diagnosis. Waste reduction only appears when all three work together.</p>
        <div className={`framework-shell${frameworkComplete ? " is-complete" : " is-broken"}`}>
          <div className="framework-caption"><span>REE / PROPRIETARY METHOD</span><b>Tap any layer to test the system</b></div>
          <div className="framework-visual"><DacPhysics framework={framework} onToggle={toggleFramework} /></div>
          <div className={`framework-explanation${frameworkComplete ? " is-ready" : ""}`} aria-live="polite">
            <span>{frameworkComplete ? "SYSTEM STABLE" : `WHY IT BROKE / 0${removedFrameworkStep + 1}`}</span>
            <strong>{frameworkComplete ? "Diagnosis, action and control reinforce one another." : frameworkSteps[removedFrameworkStep]?.broken}</strong>
          </div>
          <div className="framework-details">{frameworkSteps.map((step, index) => <div className={framework[index] ? "" : "muted"} key={step.name}><span>0{index + 1} / {step.verb}</span><p>{step.copy}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}
