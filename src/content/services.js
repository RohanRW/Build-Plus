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
        "We handle the entire project from concept to final handover — design, planning, engineering, construction, quality control, coordination and completion. You receive a fully completed building.",
      includes: [
        "Concept and architectural design",
        "Engineering and approvals",
        "Construction and site management",
        "Quality control and coordination",
        "Final handover of a completed building",
      ],
      bestFor:
        "Landowners who want one accountable partner managing the entire process, start to finish.",
    },
    {
      slug: "construction",
      option: "Option B",
      name: "Construction",
      summary:
        "You already have the design and plans. We handle the construction and execution, ensuring quality, proper management and completion according to the approved design.",
      includes: [
        "Construction against your approved design",
        "Site and contractor management",
        "Quality assurance and quality control",
        "Schedule and cost monitoring",
        "Completion and handover",
      ],
      bestFor:
        "Landowners with an approved design who need professional construction execution.",
    },
    {
      slug: "consultancy-and-project-management",
      option: "Option C",
      name: "Consultancy & Project Management",
      summary:
        "We do not directly construct the project. We act as your professional consultant — providing guidance, technical advice, coordination, quality monitoring, cost and schedule oversight, and project supervision.",
      includes: [
        "Technical advice and guidance",
        "Coordination of consultants and contractors",
        "Quality monitoring and supervision",
        "Cost and schedule oversight",
      ],
      bestFor:
        "Landowners who have their own contractor but want professional oversight and accountability.",
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
