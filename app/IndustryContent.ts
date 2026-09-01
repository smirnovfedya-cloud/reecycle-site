export const industrySlugs = ["events", "holding-companies", "hospitality", "banks"] as const;

export type IndustrySlug = (typeof industrySlugs)[number];
export type AudienceKey = "businesses" | IndustrySlug;

export type IndustryContent = {
  slug: AudienceKey;
  slotLabel: string;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroCopy: string;
  problemTitle: string;
  problemCopy: string;
  frictions: Array<{ title: string; copy: string }>;
  method: Array<{ step: string; title: string; copy: string }>;
  streams: string[];
  proofLabel: string;
  proofTitle: string;
  proofCopy: string;
  proofStats: Array<{ value: string; label: string }>;
  objection: string;
  answer: string;
  firstStep: string;
};

export const audienceContent: Record<AudienceKey, IndustryContent> = {
  businesses: {
    slug: "businesses",
    slotLabel: "businesses",
    name: "All businesses",
    eyebrow: "WASTE REDUCTION / UAE",
    heroTitle: "Waste reduction starts with one honest baseline.",
    heroCopy: "REE finds what is actually leaving the operation, builds practical routes for what can be recovered and keeps the result visible.",
    problemTitle: "The waste leaves. The questions stay.",
    problemCopy: "Most businesses receive weights, invoices and collection reports. Few can see what was inside the bags, what should have been recovered or what the operation should change next.",
    frictions: [
      { title: "Nobody checks the composition", copy: "A total weight cannot show which materials, behaviours or costs can be changed." },
      { title: "Every supplier reports differently", copy: "PDFs, spreadsheets and invoices rarely produce one decision-ready record." },
      { title: "Recovery starts too late", copy: "The route is usually decided at collection, after material has already been mixed." },
    ],
    method: [
      { step: "01", title: "Diagnose", copy: "Open the streams, map the operation and establish the real baseline." },
      { step: "02", title: "Build", copy: "Design bins, behaviours and recovery flows around how the business actually works." },
      { step: "03", title: "Measure", copy: "Track material, destination, value and progress in one usable record." },
    ],
    streams: ["Cardboard", "Plastic", "Food", "Metal", "Glass", "General waste"],
    proofLabel: "THE REE METHOD",
    proofTitle: "One accountable chain from bag to boardroom.",
    proofCopy: "Physical diagnosis, practical implementation and ongoing control are delivered as one waste-reduction system.",
    proofStats: [
      { value: "UAE", label: "on-site operations" },
      { value: "LIVE", label: "Waste Control Panel" },
      { value: "REAL", label: "material-level evidence" },
    ],
    objection: "We already have a waste contractor.",
    answer: "Good. A working collector can stay. REE adds the diagnosis, recovery design and control layer that makes the operation reducible.",
    firstStep: "Start with a free walk through the site.",
  },
  events: {
    slug: "events",
    slotLabel: "event organisers",
    name: "Events",
    eyebrow: "EVENTS / FESTIVALS / VENUES",
    heroTitle: "We help large events throw away less — and prove it.",
    heroCopy: "REE keeps the site moving while checking what every stream contains, how people use the bins and whether every supplier claim survives contact with the bags.",
    problemTitle: "Five things nobody could tell them.",
    problemCopy: "Events are fast, temporary and operationally unforgiving. Collection, food waste and recycling can all be contracted — while nobody reconciles one part of the chain against another.",
    frictions: [
      { title: "Was every billed collection real?", copy: "Truck visits and skip movements are rarely counted independently on site." },
      { title: "Was the food stream actually food?", copy: "A weighed bag can still be full of cups, wrappers and general waste." },
      { title: "How were the bins being used?", copy: "Without observation, contamination looks random and the fix stays invisible." },
      { title: "What can improve next year?", copy: "Without a repeatable baseline, every event starts again from a fresh guess." },
    ],
    method: [
      { step: "01", title: "Diagnose on the ground", copy: "Open, sort and document the bags while the event is operating." },
      { step: "02", title: "Control the live flow", copy: "Coordinate collection, food and recycling around gates, peaks and real bin behaviour." },
      { step: "03", title: "Reconcile the result", copy: "Check supplier claims against material evidence and build a baseline that can repeat." },
    ],
    streams: ["Food", "Cups + plastic", "Cans", "Cardboard", "Compostables", "General waste"],
    proofLabel: "MENA LIVE EVENTS / 2025",
    proofTitle: "Taste of Dubai + Taste of Abu Dhabi",
    proofCopy: "Two cities, one repeatable method: bags opened, material checked and behaviour observed instead of inferred from collection totals.",
    proofStats: [
      { value: "38%", label: "of collected waste was recyclable" },
      { value: "34→65%", label: "capture when someone guided the bin" },
      { value: "652→270 kg", label: "reported food checked against real food" },
    ],
    objection: "This is one more line in an event budget that is already tight.",
    answer: "The diagnosis tests whether the collection line you already pay is real, then shows where recovery, purchasing and the next event can improve.",
    firstStep: "Start with one event. Fixed scope, one baseline.",
  },
  "holding-companies": {
    slug: "holding-companies",
    slotLabel: "holding companies",
    name: "Holding companies",
    eyebrow: "GROUP ESG / PORTFOLIO OPERATIONS",
    heroTitle: "Twelve subsidiaries. Twelve waste contracts. No way to compare them.",
    heroCopy: "REE diagnoses each entity around its own operation, then makes every result roll up through one method and one control layer.",
    problemTitle: "The group ESG number is twelve spreadsheets in a trenchcoat.",
    problemCopy: "Different contractors, contracts, units and definitions produce reports that look complete on their own and become incomparable at group level.",
    frictions: [
      { title: "No shared baseline", copy: "One entity reports weight, another diversion and a third only invoices." },
      { title: "No group leverage", copy: "The portfolio cannot see which operation is losing the most material or money." },
      { title: "Nobody owns execution", copy: "Consultants diagnose and leave; contractors are still paid when waste volume grows." },
      { title: "Local operations are genuinely different", copy: "A group method must preserve site depth without losing comparability above it." },
    ],
    method: [
      { step: "01", title: "Diagnose each entity", copy: "Build a physical baseline around that subsidiary's operation and suppliers." },
      { step: "02", title: "Act locally", copy: "Fix generation points, roles and recovery routes without forcing one operating template." },
      { step: "03", title: "Control as a group", copy: "Use the same definitions, units and dataset across the full portfolio." },
    ],
    streams: ["Entity baselines", "Supplier data", "Material composition", "Cost", "CO₂", "Portfolio view"],
    proofLabel: "PORTFOLIO EXPERIENCE / UAE",
    proofTitle: "Local depth. Group line of sight.",
    proofCopy: "REE has worked across holding-company and multi-entity environments where operational differences must feed one decision layer.",
    proofStats: [
      { value: "95%", label: "landfill diversion in a UAE operation" },
      { value: "1", label: "shared reporting method" },
      { value: "LIVE", label: "entity-by-entity control view" },
    ],
    objection: "Every business in our portfolio is completely different.",
    answer: "Correct. The diagnosis and action plan stay specific to each entity. What becomes common is the method, definition and reporting layer above them.",
    firstStep: "Start with one entity. Preferably the one with the least visibility.",
  },
  hospitality: {
    slug: "hospitality",
    slotLabel: "hospitality groups",
    name: "Hospitality",
    eyebrow: "HOTELS / F&B / MULTI-PROPERTY GROUPS",
    heroTitle: "Every property reports waste. Few can explain what is in it.",
    heroCopy: "REE connects kitchens, stewarding, housekeeping, loading bays and suppliers into recovery flows that work through real service peaks.",
    problemTitle: "The sustainability target lives in the report. The waste problem lives back of house.",
    problemCopy: "Food, glass, cardboard, amenities and general waste are generated by different teams, at different times, under pressure. A generic bin plan cannot control that operation.",
    frictions: [
      { title: "Food disappears into general waste", copy: "The stream breaks between preparation, clearing and the loading bay." },
      { title: "Glass and cardboard move differently", copy: "Volume, noise, storage and collection windows shape the viable route." },
      { title: "Property reports do not compare", copy: "Occupancy and outlet mix are missing from the waste number." },
      { title: "Training fades after launch", copy: "Without feedback, contamination returns as teams and shifts change." },
    ],
    method: [
      { step: "01", title: "Diagnose by operation", copy: "Audit kitchens, outlets, rooms and back-of-house routes separately." },
      { step: "02", title: "Build for service", copy: "Design streams, storage and responsibilities around the property's real working rhythm." },
      { step: "03", title: "Measure fairly", copy: "Compare material and cost against covers, occupancy, outlet and reporting period." },
    ],
    streams: ["Food", "Glass", "Cardboard", "Plastic", "Amenities", "General waste"],
    proofLabel: "OPERATIONAL MODEL / UAE",
    proofTitle: "The route begins where the material is generated.",
    proofCopy: "A useful hospitality programme links the kitchen and room to the loading bay — then keeps contamination and supplier performance visible.",
    proofStats: [
      { value: "BOH", label: "back-of-house diagnosis" },
      { value: "SITE", label: "property-specific recovery design" },
      { value: "LIVE", label: "period and location reporting" },
    ],
    objection: "The team is too busy for another sustainability process.",
    answer: "The flow is designed around service, not added on top of it. The aim is fewer ambiguous decisions for the team, not more reporting work.",
    firstStep: "Start with one property and one operating period.",
  },
  banks: {
    slug: "banks",
    slotLabel: "banks",
    name: "Banks",
    eyebrow: "BANKS / BRANCH NETWORKS / HEAD OFFICES",
    heroTitle: "Every branch generates data. Waste should not be the exception.",
    heroCopy: "REE gives Sustainability, Facilities and Procurement one view of what branches and head offices discard, recover and pay to remove.",
    problemTitle: "The waste report stops at collection. The business question starts there.",
    problemCopy: "Paper, pantry packaging, e-waste and fit-out material move through different owners and suppliers. The result reaches ESG as totals that cannot be checked or acted on.",
    frictions: [
      { title: "Branches report inconsistently", copy: "Different spaces and service contracts create numbers that cannot be compared." },
      { title: "Paper needs a trusted route", copy: "Security, chain of custody and material recovery must work together." },
      { title: "E-waste appears in projects", copy: "IT refreshes and fit-outs generate valuable material outside the monthly waste report." },
      { title: "Procurement and ESG see different records", copy: "Invoices describe spend while reporting describes weight; neither explains composition." },
    ],
    method: [
      { step: "01", title: "Diagnose the network", copy: "Sample branch types, head-office operations and project-generated streams." },
      { step: "02", title: "Build controlled routes", copy: "Match paper, packaging, e-waste and residual material to practical owners and destinations." },
      { step: "03", title: "Measure in one view", copy: "Connect site, collection, material, evidence and impact for group reporting." },
    ],
    streams: ["Paper", "Cardboard", "Pantry packaging", "E-waste", "Fit-out material", "General waste"],
    proofLabel: "BRANCH + HQ OPERATING MODEL",
    proofTitle: "One reporting language across a distributed network.",
    proofCopy: "The REE method separates local operational reality from the common definitions the sustainability team needs at group level.",
    proofStats: [
      { value: "HQ", label: "central operating baseline" },
      { value: "SITE", label: "branch-level visibility" },
      { value: "ESG", label: "one usable material record" },
    ],
    objection: "Our FM and confidential-paper suppliers already handle this.",
    answer: "They can remain. REE verifies how the streams connect, exposes the missing composition and gives the business one control layer across suppliers.",
    firstStep: "Start with head office and a representative branch sample.",
  },
};

export const industries: Array<IndustryContent & { slug: IndustrySlug }> = industrySlugs.map((slug) => audienceContent[slug] as IndustryContent & { slug: IndustrySlug });

export function isIndustrySlug(value: string): value is IndustrySlug {
  return industrySlugs.includes(value as IndustrySlug);
}
