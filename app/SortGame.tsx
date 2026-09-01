"use client";

import { useState } from "react";
import { Arrow, siteVisitHref } from "./MarketingBlocks";

type Destination = "recycle" | "general" | "compost";

const sortItems: Array<{ id: string; label: string; code: string; destination: Destination; note: string }> = [
  { id: "pet", label: "Empty PET bottle", code: "01 · PET", destination: "recycle", note: "Clean PET keeps its material value." },
  { id: "cup", label: "Used coffee cup", code: "MIXED · CUP", destination: "general", note: "The plastic lining makes this cup hard to recover." },
  { id: "can", label: "Aluminium can", code: "41 · ALU", destination: "recycle", note: "Aluminium is highly valuable when separated." },
  { id: "banana", label: "Food scraps", code: "ORGANIC", destination: "compost", note: "Clean organics belong in a dedicated food stream." },
  { id: "box", label: "Greasy takeaway box", code: "PAPER + FOOD", destination: "general", note: "Food contamination destroys fibre recovery." },
  { id: "glass", label: "Empty glass jar", code: "70 · GLASS", destination: "recycle", note: "Clean glass can return to a material stream." },
  { id: "cardboard", label: "Clean cardboard", code: "20 · PAP", destination: "recycle", note: "Dry, clean fibre is widely recoverable." },
  { id: "receipt", label: "Thermal receipt", code: "COATED PAPER", destination: "general", note: "Thermal coating makes receipts unsuitable for paper recycling." },
  { id: "ceramic", label: "Broken ceramic mug", code: "CERAMIC", destination: "general", note: "Ceramic melts differently from container glass." },
  { id: "film", label: "Soft plastic bag", code: "04 · LDPE", destination: "general", note: "Loose film needs a specialist route, not a standard mixed bin." },
  { id: "teabag", label: "Used tea bag", code: "ORGANIC", destination: "compost", note: "Food-soiled organics can join a managed compost stream." },
];

export default function SortGame() {
  const [gameIndex, setGameIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [flight, setFlight] = useState<Destination | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const currentItem = sortItems[gameIndex % sortItems.length];

  const sortTo = (destination: Destination) => {
    if (flight) return;
    const correct = destination === currentItem.destination;
    setFlight(destination);
    setResult(correct ? `Correct · ${currentItem.note}` : `${currentItem.label} belongs in ${currentItem.destination}.`);
    if (correct) setScore((value) => value + 1);
    window.setTimeout(() => { setGameIndex((value) => value + 1); setFlight(null); setResult(null); }, 1050);
  };

  return (
    <section className="game-section section-pad">
      <div className="game-copy">
        <div className="section-index">INTERACTIVE / SORT THE STREAM</div><p className="kicker">Eleven objects. Three destinations.</p><h2>Where does it<br />go next?</h2>
        <p>One wrong object can contaminate an entire stream. Some choices are deliberately tricky — just like a real office bin.</p>
        <div className="game-status"><span>ROUND {String(gameIndex + 1).padStart(2, "0")} / 11</span><b>{score} CORRECT</b></div>
        <div className="game-site-visit"><span>Want to test your actual office bins?</span><a href={siteVisitHref} target="_blank" rel="noreferrer">Book a free site visit <Arrow /></a></div>
      </div>
      <div className="sort-arena" aria-live="polite">
        <div className="arena-grid" aria-hidden="true" /><div className="item-meta"><span>{currentItem.code}</span><strong>{currentItem.label}</strong></div>
        <div className={`waste-object object-${currentItem.id}${flight ? ` fly-${flight}` : ""}`} aria-label={currentItem.label} />
        <div className={`sort-result${result ? " visible" : ""}`}>{result || "Choose a destination"}</div>
        <div className="bin-row">
          <button className="sort-bin bin-recycle" onClick={() => sortTo("recycle")} disabled={!!flight}><i /><span>RECYCLING</span><small>clean materials</small></button>
          <button className="sort-bin bin-general" onClick={() => sortTo("general")} disabled={!!flight}><i /><span>GENERAL</span><small>residual waste</small></button>
          <button className="sort-bin bin-compost" onClick={() => sortTo("compost")} disabled={!!flight}><i /><span>COMPOST</span><small>clean organics</small></button>
        </div>
      </div>
    </section>
  );
}
