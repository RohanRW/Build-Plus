/** ABOUT US page content. Section keys match the agreed sitemap. */

export const about = {
  hero: {
    eyebrow: "About Us",
    title: "A development partner for landowners",
    body: "Your land, our expertise. From land to landmark.",
  },

  whoWeAre: {
    eyebrow: "Who We Are",
    title: "", // TODO(content)
    // TODO(content): founding year, team size, disciplines in-house,
    // where you operate. 2–3 paragraphs.
    paragraphs: [],
    // TODO(content): leadership. Photos optional.
    // { name, role, bio, photo }
    leadership: [],
    // TODO(content): optional headline numbers, e.g.
    // { value: "20+", label: "Years of development experience" }
    stats: [],
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
