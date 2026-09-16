/**
 * DEVELOPMENT STANDARDS page content.
 *
 * These are indicative specification levels, not fixed construction
 * packages — the disclaimer at the foot of the page is load-bearing and
 * should not be removed. No price-per-sft figures are published.
 */

export const standards = {
  hero: {
    eyebrow: "Development Standards",
    title: "Development Standards",
    body:
      "BuildPlus offers different levels of architectural specification, materials, finishes and building systems depending on the landowner's objectives, project type and investment plan.",
  },

  commercialNote:
    "Commercial proposal available following project assessment and detailed BOQ.",

  // Order here is the order shown on the page and in the enquiry form.
  tiers: [
    {
      slug: "essential",
      name: "Essential",
      positioning:
        "Practical and dependable construction focused on functionality, durability and efficient project delivery.",
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
      positioning:
        "Enhanced materials, finishes and architectural detailing for a more refined residential or commercial development.",
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
      positioning:
        "A higher level of architecture, material selection and building systems for premium developments.",
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
      // TODO(content): confirm whether any tier should be emphasised.
      featured: false,
    },
    {
      slug: "luxury",
      name: "Luxury",
      positioning:
        "Bespoke architectural development with refined materials, premium building systems and custom finishing.",
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
    "Final materials, brands, specifications, systems and scope are determined following land assessment, architectural design, engineering requirements and detailed BOQ. The development standards shown here are indicative specification levels, not fixed construction packages.",
};
