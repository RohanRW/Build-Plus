/**
 * HOME page content. Section keys match the agreed sitemap.
 * Copy sourced from the BuildPlus Turnkey Development Proposal unless
 * marked TODO.
 */

const ONGOING_PROJECTS = "12";

export const home = {
  hero: {
    eyebrow: "A Ray White Ltd. Venture",
    // The logo lockup already reads "Your Land, Our Expertise", so the
    // headline says the next thing rather than repeating it. Split so the
    // accent word can take the secondary color; reads "From Land to Landmark."
    title: { lead: "From Land to", accent: "Landmark"},
    body:
      "You already own the most important part of the project — the land. From the first concept to final handover, one professional team manages the entire development process for you.",
    /*
     * Hero slider media, shown in order. Each slide is either
     *   { type: "image", src, alt }
     * or
     *   { type: "video", src, poster, alt }
     * Images show for 5 seconds; videos play muted once through, then the
     * next slide shows. A video's poster shows until it loads
     * (and instead of them for visitors who prefer reduced motion).
     * TODO(assets): these are stock construction photos, not BuildPlus
     * sites — swap in project photography/footage when available.
     */
    slides: [
      {
        type: "video",
        src: "/Video-1.mp4",
        alt: "Tower crane above a building wrapped in scaffolding at sunset",
      },
      {
        type: "video",
        src: "/Video-2.mp4",
        alt: "Two tower cranes over a multi-storey residential building under construction",
      },
      {
        type: "video",
        src: "/Video-3.mp4",
        alt: "Tower cranes beside high-rise buildings against a clear sky",
      },
    ],
    secondaryCtaLabel: "See how it works",
    secondaryCtaHref: "#how-it-works",
  },

  // Scrolling capability strip directly under the hero.
  capabilities: [
    "Feasibility",
    "Architecture",
    "Structural Engineering",
    "MEP Design",
    "Approvals",
    "BOQ & Budgeting",
    "Procurement",
    "Site Management",
    "QA / QC",
    "Finishing",
    "Handover",
  ],

  /*
   * Figures are drawn from what is already on record elsewhere in this
   * repo — six developments, two growth corridors, an eight-phase
   * process, one accountable partner. TODO(content): swap in audited
   * numbers (sft delivered, years active) when they are confirmed.
   */
  stats: [
    { value: "2026", label: "Lake Garden Handover in December 2026" },
    { value: ONGOING_PROJECTS, label: "Ongoing Projects in Bashundhara R/A & Jolshiri Abashon" },
    { value: "40+", label: "Happy Customers" },
    { value: "11+", label: "Upcomming Projects" },
  ],

  rayWhiteVenture: {
    eyebrow: "Backed By",
    title: "A Ray White Ltd. Venture",
    // TODO(content): confirm the exact wording of the Ray White Ltd.
    // relationship, and whether their logo should appear alongside ours.
    body:
      "Backed by the team behind Ray White Ltd.'s luxury development experience, BuildPlus brings a developer's mindset to privately owned land.",
    showParentLogo: false, // TODO(assets): supply the Ray White Ltd. logo to enable
  },

  howItWorks: {
    eyebrow: "What We Do",
    title: "Our complete service",
    intro:
      "From the first concept to final handover, one professional team manages the entire development process for you.",
    phases: [
      {
        number: "01",
        name: "Understand",
        summary: "We discuss your objectives for the land.",
        points: [
          "Family residence",
          "Rental apartments",
          "Commercial property",
          "Mixed-use development",
          "Premium residential building",
        ],
      },
      {
        number: "02",
        name: "Feasibility",
        summary:
          "Before major investment, we evaluate the development opportunity of your land.",
        points: [
          "Land size and location",
          "Development potential",
          "Possible building configuration",
          "Approximate usable / saleable / rentable area",
          "Parking requirements",
          "Target quality level",
          "Indicative project cost",
          "Indicative development timeline",
        ],
      },
      {
        number: "03",
        name: "Design",
        summary: "Our professional team coordinates every discipline.",
        points: [
          "Architecture",
          "Structural engineering",
          "Electrical design",
          "Plumbing",
          "Fire and life-safety requirements",
          "Mechanical systems",
          "Façade",
          "Landscape",
          "Interior / common areas",
        ],
      },
      {
        number: "04",
        name: "Budget & Specification",
        summary: "You know what we are building and what you are paying for.",
        points: [
          "Detailed BOQ",
          "Material specifications",
          "Finishing standards",
          "Project budget",
          "Construction schedule",
          "Payment milestones",
        ],
      },
      {
        number: "05",
        name: "Approval & Pre-Construction",
        summary:
          "We coordinate the required consultants, documentation and applicable authority processes.",
        points: [],
      },
      {
        number: "06",
        name: "Construction",
        summary: "You don't manage the construction team. We do.",
        points: [
          "Procurement",
          "Contractors and subcontractors",
          "Site management",
          "Structural construction",
          "MEP works",
          "Finishing",
          "Quality assurance",
          "Safety",
          "Cost monitoring",
          "Schedule monitoring",
        ],
      },
      {
        number: "07",
        name: "Reporting",
        summary:
          "Turnkey does not mean losing control. You receive agreed monthly reporting.",
        points: [
          "Construction progress and current photographs",
          "Work completed and upcoming work",
          "Budget / payment status",
          "Major procurement status",
          "Key decisions required from the owner",
          "Schedule status",
        ],
      },
      {
        number: "08",
        name: "Handover",
        summary: "Then we hand over your completed building.",
        points: [
          "Testing and commissioning",
          "Quality inspection",
          "Snag identification and rectification",
          "Cleaning",
          "Relevant documentation",
          "Final owner inspection",
        ],
      },
    ],
  },

  whyBuildPlus: {
    eyebrow: "Why Build Plus",
    title: "We don't simply construct your building. We develop it for you.",
    intro:
      "Building a premium property requires a developer's mindset — not simply a contractor's mindset.",
    pillars: [
      {
        name: "Development Experience",
        body: "Understanding the complete lifecycle of a real-estate project.",
      },
      {
        name: "Design Focus",
        body:
          "Creating buildings that are functional, attractive and appropriate for their market.",
      },
      {
        name: "Engineering Control",
        body: "Professional technical supervision throughout construction.",
      },
      {
        name: "Commercial Control",
        body: "Structured budgeting, procurement and cost monitoring.",
      },
      {
        name: "Quality Focus",
        body: "Attention to materials, workmanship and finishing.",
      },
      {
        name: "Single Responsibility",
        body: "One team coordinating the project from concept to completion.",
      },
    ],
  },

  developmentExperience: {
    eyebrow: "Development Experience",
    title: "The record behind the venture",
    intro:
      "Build Plus is backed by the development experience of Ray White Ltd. Selected developments below represent the architectural, engineering, project-management and construction expertise supporting the venture.",
    // Cards pull from src/content/experience.js.
    featuredCount: 3,
    ctaLabel: "View our experience",
    ctaHref: "/experience",
  },

  landownerCta: {
    eyebrow: "The Next Step",
    title: "Your land has potential. Let us show you what it can become.",
    body:
      "Before asking you to commit to construction, we first understand your land and objectives. Our team can then prepare an initial development concept for discussion.",
    ctaLabel: "Discuss Your Land",
    ctaHref: "/discuss-your-land",
  },
};
