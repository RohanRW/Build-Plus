/**
 * EXPERIENCE page content.
 *
 * No BuildPlus projects are listed yet by design — the venture is newly
 * launched and nothing is invented to fill the page. The substance of this
 * page is the Ray White Ltd. development record behind BuildPlus.
 */

export const experience = {
  hero: {
    eyebrow: "Experience",
    title: "The experience behind BuildPlus",
    body:
      "BuildPlus is backed by the development experience of Ray White Ltd. — the architectural, engineering, project-management and construction expertise supporting the venture.",
  },

  buildPlusProjects: {
    eyebrow: "BuildPlus Projects",
    title: "The first BuildPlus projects are under way",
    body:
      "BuildPlus is a newly launched turnkey development venture of Ray White Ltd. Our directly contracted projects will be documented here as they progress from planning and design through construction and final handover.",
  },

  rayWhiteDevelopments: {
    eyebrow: "The Record Behind BuildPlus",
    title: "Selected developments",
    intro:
      "BuildPlus is backed by the development experience of Ray White Ltd. The following selected developments represent the architectural, engineering, project-management and construction expertise supporting the BuildPlus venture.",
    developerLabel: "A Ray White Ltd. Development",
    developer: "Ray White Ltd.",

    /**
     * Fields left empty are simply not rendered — nothing is invented to
     * keep the cards uniform. `landArea` is only published where a figure
     * is on record.
     *
     * Cover images live in /public/images/projects/<slug>.jpg. To add more
     * shots of a development, append to `images` — the card uses the first
     * entry and the grid stays the same.
     *
     * TODO(content): the one-line `summary` on each project is placeholder
     * copy written from the facts already on record. Replace with the
     * project's own description when it is available.
     */
    projects: [
      {
        slug: "sinfonia",
        name: "Sinfonia",
        location: "Bashundhara R/A, Block K",
        developmentType: "Premium Residential",
        configuration: "G+9",
        unitArea: "2,040 sft and larger configurations",
        landArea: "",
        status: "Ongoing",
        summary:
          "A ten-storey premium residential building with large-format apartments, built around generous floor plates and a designed common-area sequence.",
        images: [
          {
            src: "/images/projects/sinfonia.jpg",
            alt: "Sinfonia — a Ray White Ltd. development",
          },
        ],
      },
      {
        slug: "marvella",
        name: "Marvella",
        location: "Bashundhara R/A, Block M",
        developmentType: "Premium Residential",
        configuration: "G+M+8",
        unitArea: "2,150 sft",
        landArea: "",
        status: "Ongoing",
        summary:
          "A premium residential development with a mezzanine level, planned for an efficient unit mix on a compact Bashundhara plot.",
        images: [
          {
            src: "/images/projects/marvella.jpg",
            alt: "Marvella — a Ray White Ltd. development",
          },
        ],
      },
      {
        slug: "lake-garden",
        name: "Lake Garden",
        location: "Bashundhara R/A, Block M",
        developmentType: "Residential",
        configuration: "G+M+7",
        unitArea: "Approx. 2,478 – 2,570 sft",
        landArea: "",
        status: "Near Completion",
        summary:
          "A residential building nearing completion, with the largest typical unit sizes in the current portfolio.",
        images: [
          {
            src: "/images/projects/lake-garden.jpg",
            alt: "Lake Garden — a Ray White Ltd. development",
          },
        ],
      },
      {
        slug: "centra",
        name: "Centra",
        location: "Bashundhara R/A",
        developmentType: "Commercial",
        configuration: "2B+G+8",
        unitArea: "Floor plates approx. 1,940 – 4,600 sft",
        landArea: "8 Katha",
        status: "Ongoing",
        summary:
          "A commercial development over two basement levels, with flexible floor plates suited to office and retail tenancies.",
        images: [
          {
            src: "/images/projects/centra.jpg",
            alt: "Centra — a Ray White Ltd. development",
          },
        ],
      },
      {
        slug: "espacio",
        name: "Espacio",
        location: "Jolshiri Abashon, Sector 14",
        developmentType: "Premium Residential",
        configuration: "G+M+8",
        unitArea: "2,850 sft",
        landArea: "",
        status: "Ongoing",
        summary:
          "A premium residential building in Jolshiri Abashon, planned around single large units per floor.",
        images: [
          {
            src: "/images/projects/espacio.jpg",
            alt: "Espacio — a Ray White Ltd. development",
          },
        ],
      },
      {
        slug: "rivano",
        name: "Rivano",
        location: "Jolshiri Abashon, Sector 07",
        developmentType: "Residential",
        // TODO(content): building configuration for Rivano, if on record.
        configuration: "",
        unitArea: "Simplex 2,850 sft / Duplex 5,700 sft",
        landArea: "",
        status: "Ongoing",
        summary:
          "A residential development offering both simplex and duplex configurations within the same building.",
        images: [
          {
            src: "/images/projects/rivano.jpg",
            alt: "Rivano — a Ray White Ltd. development",
          },
        ],
      },
    ],
  },
};
