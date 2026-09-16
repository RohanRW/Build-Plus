/**
 * PACKAGES page content.
 *
 * TODO(content): NOTHING DEFINED YET — the proposal only refers to a
 * "target standard". For each tier please supply: a one-line positioning
 * statement, what is included (structure, finishes, fittings, kitchen,
 * sanitary, lift, generator, security, common areas, landscaping), and
 * either an indicative per-sft range or "Price on request".
 */

export const packages = {
  hero: {
    eyebrow: "Packages",
    title: "Four standards. One accountable partner.",
    body: "", // TODO(content)
    note:
      "Final cost, specifications and timeline will be established following feasibility, design development, site investigation and detailed BOQ.",
  },

  // Order here is the order shown on the page and in the enquiry form.
  tiers: [
    {
      slug: "essential",
      name: "Essential",
      positioning: "", // TODO(content)
      priceNote: "", // e.g. "From BDT X,XXX / sft" or "Price on request"
      highlights: [], // TODO(content): 4–6 short bullets for the card
      inclusions: [], // TODO(content): { group: "Finishes", items: ["…"] }
      featured: false,
    },
    {
      slug: "standard",
      name: "Standard",
      positioning: "",
      priceNote: "",
      highlights: [],
      inclusions: [],
      featured: false,
    },
    {
      slug: "premium",
      name: "Premium",
      positioning: "",
      priceNote: "",
      highlights: [],
      inclusions: [],
      featured: true, // TODO(content): confirm which tier to emphasise
    },
    {
      slug: "luxury",
      name: "Luxury",
      positioning: "",
      priceNote: "",
      highlights: [],
      inclusions: [],
      featured: false,
    },
  ],

  // Used by the comparison table once inclusions are supplied.
  comparisonGroups: [], // TODO(content): e.g. ["Structure", "Finishes", "MEP", "Common Areas"]
};
