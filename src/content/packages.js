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
    title: "Four packages. One standard of delivery.",
    body:
      "BuildPlus offers different levels of architectural specification, materials, finishes and building systems depending on the landowner's objectives, project type and investment plan.",
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
      slug: "essential",
      name: "Essential",
      tagline: "Built to last, built to let",
      positioning:
        "Practical and dependable construction focused on functionality, durability and efficient project delivery.",
      bestFor:
        "Rental-focused buildings and owner-occupied homes where efficient delivery and long service life matter most.",
      inclusions: [
        "Functional architectural design",
        "Standard structural and engineering coordination",
        "Durable floor and wall finishes",
        "Standard-quality doors and windows",
        "Reliable sanitary and plumbing fittings",
        "Standard electrical accessories",
        "Essential common-area finishing",
        "Standard lift provision where required",
        "Generator / backup-power provision as project requires",
        "Fire and life-safety provisions as applicable",
        "Basic landscape treatment",
        "Standard QA/QC and site supervision",
      ],
      featured: false,
    },
    {
      slug: "standard",
      name: "Standard",
      tagline: "A more refined address",
      positioning:
        "Enhanced materials, finishes and architectural detailing for a more refined residential or commercial development.",
      bestFor:
        "Developments that need to stand out in their neighbourhood without moving into premium budgets.",
      inclusions: [
        "Enhanced architectural treatment",
        "Improved façade detailing",
        "Upgraded flooring and wall finishes",
        "Better-quality doors, glazing and hardware",
        "Branded sanitary fittings",
        "Enhanced electrical accessories",
        "Designed entrance and lobby treatment",
        "Branded lift system",
        "Generator / backup-power system",
        "CCTV / access-control provisions",
        "Improved landscape treatment",
        "More detailed common-area finishing",
      ],
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
      inclusions: [
        "Premium architectural and façade design",
        "Higher-grade flooring and finishes",
        "Premium doors, glazing and hardware",
        "Premium sanitary ware and fittings",
        "Higher-spec electrical accessories",
        "Designed reception and common areas",
        "Premium lift system",
        "Enhanced generator / backup-power solution",
        "CCTV and controlled-access provisions",
        "Landscape and rooftop amenity design",
        "Architectural lighting",
        "Higher-level detailing and finish supervision",
        "Enhanced QA/QC",
      ],
      // TODO(content): confirm which package should carry the emphasis.
      featured: true,
    },
    {
      slug: "luxury",
      name: "Luxury",
      tagline: "Bespoke, from façade to fittings",
      positioning:
        "Bespoke architectural development with refined materials, premium building systems and custom finishing.",
      bestFor:
        "Signature buildings and private residences where the architecture is intended to be one of a kind.",
      inclusions: [
        "Bespoke architectural design",
        "Signature façade treatment",
        "Luxury-grade flooring and surface finishes",
        "Premium / custom doors and glazing",
        "Luxury sanitary ware and fittings",
        "Premium electrical and lighting systems",
        "Custom-designed reception / lobby",
        "Premium lift solution",
        "Enhanced backup-power system",
        "Smart-building-ready provisions",
        "Advanced security / access-control provisions",
        "Designed landscape and rooftop amenities",
        "Premium common-area interiors",
        "Extensive material and finish coordination",
        "Higher level of finishing supervision and QA/QC",
      ],
      featured: false,
    },
  ],

  disclaimer:
    "Final materials, brands, specifications, systems and scope are determined following land assessment, architectural design, engineering requirements and detailed BOQ. The packages shown here are indicative specification levels, not fixed construction packages.",
};
