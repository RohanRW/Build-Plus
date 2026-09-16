/**
 * HOME page content. Section keys match the agreed sitemap.
 * Copy sourced from the BuildPlus Turnkey Development Proposal unless
 * marked TODO.
 */

export const home = {
  hero: {
    eyebrow: "A Ray White Ltd. Venture",
    // The logo lockup already reads "Your Land, Our Expertise", so the
    // headline says the next thing rather than repeating it.
    title: "From Land to Landmark.",
    body:
      "You already own the most important part of the project — the land. From the first concept to final handover, one professional team manages the entire development process for you.",
    /*
     * Hero background video.
     *
     * TODO(assets): `src` is a PLACEHOLDER — a free Pexels construction
     * clip hotlinked from their CDN. Replace it with BuildPlus site
     * footage: either a direct .mp4 URL, or drop a file in /public/videos/
     * and point to "/videos/your-file.mp4". `poster` is a frame grabbed
     * from the same clip; swap it whenever the video changes, since it is
     * what shows while the video loads and all that renders for visitors
     * who prefer reduced motion.
     */
    video: {
      src: "https://videos.pexels.com/video-files/855271/855271-hd_1920_1080_25fps.mp4",
      poster: "/images/hero-poster.jpg",
    },
    imageAlt: "Construction of a BuildPlus development in progress",
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
    { value: "06", label: "Developments behind the venture" },
    { value: "02", label: "Growth corridors in Dhaka" },
    { value: "08", label: "Phases from concept to handover" },
    { value: "01", label: "Accountable development partner" },
  ],

  rayWhiteVenture: {
    eyebrow: "Backed By",
    title: "A Ray White Ltd. Venture",
    // TODO(content): confirm the exact wording of the Ray White Ltd.
    // relationship, and whether their logo should appear alongside ours.
    body:
      "Backed by the team behind Ray White Ltd.'s luxury-development experience, BuildPlus brings a developer's mindset to privately owned land.",
    showParentLogo: false, // TODO(assets): supply the Ray White Ltd. logo to enable
  },

  whatWeDo: {
    eyebrow: "What We Do",
    title: "A development partner for landowners",
    body:
      "Developing a building requires much more than hiring a contractor. It requires architectural planning, engineering, approvals, budgeting, procurement, construction supervision, quality control, finishing and coordination among many different professionals.",
    insteadOfManaging: [
      "Architect",
      "Structural Engineer",
      "MEP Consultant",
      "Approval Process",
      "Contractor",
      "Suppliers",
      "Subcontractors",
      "Site Engineers",
      "Interior & Finishing Teams",
    ],
    youDealWith: "One professional development partner — BuildPlus.",
    ownershipNote:
      "Your land remains yours. You appoint BuildPlus to professionally develop the building on your behalf under the agreed contract structure.",
    equation: [
      "Your Land",
      "Your Investment",
      "Our Expertise",
      "Your Completed Building",
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
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
    eyebrow: "Why BuildPlus",
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
    comparison: {
      title: "Traditional construction vs the BuildPlus turnkey model",
      columns: ["Traditional Approach", "BuildPlus Turnkey Development"],
      rows: [
        ["Owner finds architect", "We coordinate design"],
        ["Owner finds engineers", "We coordinate engineering"],
        ["Owner manages contractors", "We manage contractors"],
        ["Owner coordinates suppliers", "We manage procurement"],
        ["Owner monitors quality", "Professional QA/QC"],
        ["Owner follows construction daily", "Professional project management"],
        ["Multiple parties to deal with", "One accountable partner"],
        ["Owner solves site problems", "Our team manages site problems"],
        ["Owner spends significant personal time", "Owner receives structured reporting"],
        ["Responsibilities can become unclear", "Defined contractual responsibility"],
      ],
    },
  },

  developmentExperience: {
    eyebrow: "Development Experience",
    title: "The record behind the venture",
    intro:
      "BuildPlus is backed by the development experience of Ray White Ltd. Selected developments below represent the architectural, engineering, project-management and construction expertise supporting the venture.",
    // Cards pull from src/content/experience.js.
    featuredCount: 3,
    ctaLabel: "View our experience",
    ctaHref: "/experience",
  },

  packagesTeaser: {
    eyebrow: "Packages",
    title: "Four packages, one professional standard of delivery",
    body:
      "BuildPlus offers different levels of architectural specification, materials, finishes and building systems depending on the landowner's objectives, project type and investment plan. The management, engineering and reporting are the same in every one.",
    // Cards pull from src/content/packages.js.
    ctaLabel: "Compare packages",
    ctaHref: "/packages",
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
