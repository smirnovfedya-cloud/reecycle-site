"use client";

import { useEffect, useState } from "react";
import { audienceContent, industries, type AudienceKey } from "./IndustryContent";

export default function IndustrySelector({
  value,
  onChange,
}: {
  value: AudienceKey;
  onChange: (value: AudienceKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(0);

  useEffect(() => {
    if (value !== "businesses" || open) return;
    const interval = window.setInterval(() => setPreview((current) => (current + 1) % industries.length), 2600);
    return () => window.clearInterval(interval);
  }, [open, value]);

  const visible = value === "businesses" ? industries[preview] : audienceContent[value];

  return (
    <span className={`industry-selector${open ? " is-open" : ""}`} onKeyDown={(event) => {
      if (event.key === "Escape") setOpen(false);
    }}>
      <button
        type="button"
        className="industry-selector-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Choose an industry. Current option: ${visible.slotLabel}`}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="industry-slot-window"><b className="industry-slot-word" key={visible.slug}>{visible.slotLabel}</b></span>
        <i aria-hidden="true">⌄</i>
      </button>
      <span className="industry-selector-menu" role="listbox" aria-label="Industries REE works with">
        <button type="button" role="option" aria-selected={value === "businesses"} onClick={() => { onChange("businesses"); setOpen(false); }}>All businesses</button>
        {industries.map((industry) => (
          <button type="button" role="option" aria-selected={value === industry.slug} key={industry.slug} onClick={() => { onChange(industry.slug); setOpen(false); }}>
            {industry.name}<span>↗</span>
          </button>
        ))}
      </span>
      <small className="industry-selector-hint">CLICK TO CHOOSE YOUR INDUSTRY</small>
    </span>
  );
}
