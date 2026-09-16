/** ABOUT US page content. Section keys match the agreed sitemap. */

export const about = {
  hero: {
    eyebrow: "About Us",
    title: "A development partner for landowners",
    body: "Your land, our expertise. From land to landmark.",
  },

  whoWeAre: {
    eyebrow: "Who We Are",
    title: "Who We Are",
    paragraphs: [
      "BuildPlus is a turnkey development venture of Ray White Ltd., created to provide landowners with a professionally managed approach to developing their property.",
      "From feasibility and architectural planning to engineering, budgeting, procurement, construction, quality control and final handover, BuildPlus brings the entire development process under one responsible team.",
      "Our approach is supported by the development experience of Ray White Ltd., combining a developer's perspective with structured project management, technical coordination and attention to quality.",
    ],
    /*
     * TODO(content): swap to "Established in 2026 as a Ray White Ltd.
     * venture." once the founding year is formally confirmed.
     */
    established: "A newly launched venture of Ray White Ltd.",
  },

  purpose: {
    eyebrow: "Our Purpose",
    title: "Our Purpose",
    body:
      "To make property development simpler, more transparent and professionally managed for landowners.",
  },

  ourApproach: {
    eyebrow: "Our Approach",
    title: "Our Approach",
    principles: [
      {
        name: "Development-led thinking",
        body:
          "We approach each project as a complete real-estate development, not simply a construction contract.",
      },
      {
        name: "Design with purpose",
        body:
          "Architecture, functionality, long-term use and development value are considered together.",
      },
      {
        name: "Technical control",
        body:
          "Engineering, consultants, contractors and site execution are professionally coordinated.",
      },
      {
        name: "Commercial control",
        body:
          "Budgeting, BOQ, procurement and cost monitoring are structured from the beginning.",
      },
      {
        name: "Transparent reporting",
        body: "Owners remain informed throughout the project.",
      },
      {
        name: "Single responsibility",
        body:
          "One development partner coordinates the process from concept to handover.",
      },
    ],
  },

  leadership: {
    eyebrow: "Leadership & Professional Team",
    title: "Leadership & Professional Team",
    body:
      "BuildPlus works through a multidisciplinary team covering development, architecture, engineering, project management, commercial coordination and quality assurance.",
    /*
     * TODO(content): add confirmed people here, e.g.
     *   { name: "", role: "Managing Director", bio: "", photo: "" }
     * Nothing is invented — the section shows the team statement above
     * until real names are supplied.
     */
    people: [],
  },

  whyWeExist: {
    eyebrow: "Why BuildPlus Exists",
    title: "A valuable land deserves a valuable building",
    paragraphs: [
      "You already own the most important part of the project — the land. But developing a building requires much more than hiring a contractor. It requires architectural planning, engineering, approvals, budgeting, procurement, construction supervision, quality control, finishing and coordination among many different professionals.",
      "Our purpose is simple: from the first concept to final handover, one professional team manages the entire development process for you. You tell us what you want. BuildPlus takes responsibility for delivering the completed building.",
    ],
    ownership: {
      title: "You remain the owner",
      body:
        "This is an important difference from a traditional land-sharing development model. Your land remains yours. You appoint BuildPlus to professionally develop the building on your behalf under the agreed contract structure. You control the project's requirements and investment. We provide the expertise and execution.",
    },
  },

  rayWhiteVenture: {
    eyebrow: "Our Backing",
    title: "A Ray White Ltd. Venture",
    // TODO(content): the fuller version of the Ray White Ltd. story —
    // what the group does, how long, and how BuildPlus sits within it.
    paragraphs: [
      "Backed by the team behind Ray White Ltd.'s luxury-development experience, our approach combines development experience, design focus, engineering control, commercial control and a single point of responsibility.",
    ],
  },

  approach: {
    eyebrow: "Our Development Approach",
    title: "A developer's mindset, not a contractor's",
    // Mirrors the eight phases on the home page; see src/content/home.js.
    intro:
      "From understanding your objectives through to handover, the same team stays accountable for the project.",
  },

  commitment: {
    eyebrow: "Our Commitment",
    title: "What you are really buying",
    intro:
      "You are not simply buying cement, steel, bricks and labour. You are buying:",
    values: [
      "Professional Management",
      "Quality",
      "Transparency",
      "Accountability",
      "Time",
      "Convenience",
      "Peace of Mind",
    ],
    gains: [
      {
        name: "Less Headache",
        body:
          "You don't need to manage workers, contractors, suppliers and everyday site problems.",
      },
      {
        name: "Better Cost Control",
        body:
          "A detailed project budget, BOQ and specifications are prepared before construction so you understand where your investment is going.",
      },
      {
        name: "Professional Design",
        body:
          "Your land is planned carefully to achieve an attractive, functional and valuable building.",
      },
      {
        name: "Quality Control",
        body:
          "Construction is supervised by professional engineers with defined specifications and quality standards.",
      },
      {
        name: "Time Control",
        body:
          "The project follows an agreed construction schedule with defined milestones.",
      },
      {
        name: "Transparency",
        body:
          "You receive progress updates, financial information and project documentation throughout construction.",
      },
      {
        name: "One Point of Accountability",
        body:
          "You don't need to chase different consultants and contractors when a problem occurs. BuildPlus takes responsibility for coordinating the project.",
      },
      {
        name: "Better Long-Term Value",
        body:
          "Professional design, construction and finishing help create a property suitable for family use, rental income and long-term asset value.",
      },
    ],
  },
};
