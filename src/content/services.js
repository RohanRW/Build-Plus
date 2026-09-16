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
      option: "Option B",
      name: "Complete Turnkey",
      summary:
        "We manage the project from feasibility and design through construction, finishing and final handover.",
      // TODO(content): confirm the inclusion list for each model.
      includes: [],
      bestFor: "", // TODO(content)
    },
    {
      slug: "design-and-build",
      option: "Option A",
      name: "Design & Build",
      summary:
        "We design, engineer and construct the building under an agreed commercial structure.",
      includes: [],
      bestFor: "",
    },
    {
      slug: "development-management",
      option: "Option C",
      name: "Development Management",
      summary:
        "We act as the owner's professional development manager and coordinate consultants, procurement, construction, cost and delivery.",
      includes: [],
      bestFor: "",
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
