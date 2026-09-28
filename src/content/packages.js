/**
 * PACKAGES page content (previously "Development Standards").
 *
 * These are indicative specification levels, not fixed construction
 * packages — the disclaimer at the foot of the page is load-bearing and
 * should not be removed. No price-per-sft figures are published.
 */

export const packages = {
  hero: {
    eyebrow: "Packages",
    title: "Three packages. One standard of delivery.",
    body:
      "Build Plus offers different levels of architectural specification, materials, finishes and building systems depending on the landowner's objectives, project type and investment plan.",
  },

  commercialNote:
    "Commercial proposal available following project assessment and detailed BOQ.",

  /**
   * Shown above the package grid. Every package carries the same
   * professional scope — only the specification level changes.
   */
  constants: {
    eyebrow: "In Every Package",
    title: "The scope never changes. Only the specification does.",
    items: [
      "Architectural and engineering coordination",
      "Detailed BOQ and material specification",
      "Approval and pre-construction coordination",
      "Procurement and contractor management",
      "Professional site supervision",
      "QA/QC at every stage",
      "Agreed monthly progress reporting",
      "Snagging, commissioning and handover",
    ],
  },

  // Order here is the order shown on the page and in the enquiry form.
  tiers: [
    {
      slug: "standard",
      name: "Standard",
      tagline: "A more refined address",
      positioning:
        "Enhanced materials, finishes and architectural detailing for a more refined residential or commercial development.",
      bestFor:
        "Developments that need to stand out in their neighbourhood without moving into premium budgets.",
      featured: false,
    },
    {
      slug: "premium",
      name: "Premium",
      tagline: "Designed to hold its value",
      positioning:
        "A higher level of architecture, material selection and building systems for premium developments.",
      bestFor:
        "Premium residential and commercial buildings in established locations where design and finish drive value.",
      featured: false,
    },
    {
      slug: "luxury",
      name: "Luxury",
      tagline: "Bespoke, from façade to fittings",
      positioning:
        "Bespoke architectural development with refined materials, premium building systems and custom finishing.",
      bestFor:
        "Signature buildings and private residences where the architecture is intended to be one of a kind.",
      featured: false,
    },
  ],

  disclaimer:
    "Final materials, brands, specifications, systems and scope are determined following land assessment, architectural design, engineering requirements and detailed BOQ. The packages shown here are indicative specification levels, not fixed construction packages.",
};
