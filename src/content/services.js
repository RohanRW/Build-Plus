/** SERVICES page content. The three commercial models plus the process. */

export const services = {
  hero: {
    eyebrow: "Services",
    title: "The project can be structured around your requirements",
    body:
      "The appropriate structure will be recommended after understanding your project.",
  },

  // Order here is the order shown on the page.
  models: [
    {
      slug: "complete-turnkey",
      option: "Option A",
      name: "Complete Turnkey",
      summary:
        "We handle the entire project from concept to final handover — feasibility, survey, design, approvals, construction, quality control and completion. You receive a fully completed building.",
      includes: [
        "Feasibility cost & BOQ",
        "Digital survey",
        "Soil test",
        "Architectural & structural design",
        "Drawing approval",
        "Construction & site management",
        "Quality assurance & quality control",
        "Construction procurement",
        "Snagging",
        "Commissioning",
        "Final inspection",
        "Completion & final handover",
      ],
      bestFor:
        "Landowners who want one accountable partner managing the entire process, start to finish.",
    },
    {
      slug: "construction",
      option: "Option B",
      name: "Construction & Development",
      summary:
        "You already have the design, approvals and plans in place. We take over from site mobilization through to completion, managing construction, procurement and quality at every stage.",
      includes: [
        "Construction & site management",
        "Quality assurance & quality control",
        "Construction procurement",
        "Snagging",
        "Commissioning",
        "Final inspection",
        "Completion & final handover",
      ],
      bestFor:
        "Landowners with an approved design who need professional construction execution.",
    },
  ],

  process: {
    eyebrow: "Development Process",
    title: "Eight phases, one accountable team",
    // Phase data is shared with the home page — see src/content/home.js.
    note:
      "Final cost, specifications and timeline are established following feasibility, design development, site investigation and detailed BOQ.",
  },
};
