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
    title: "From land to landmark",
    body:
      "BuildPlus is backed by the development experience of Ray White Ltd. — the architectural, engineering, project-management and construction expertise supporting the venture.",
  },

  buildPlusProjects: {
    eyebrow: "BuildPlus Projects",
    title: "BuildPlus Projects",
    body:
      "BuildPlus is a newly launched turnkey development venture of Ray White Ltd. Our directly contracted projects will be documented here as they progress from planning and design through construction and final handover.",
  },

  rayWhiteDevelopments: {
    eyebrow: "The Record Behind BuildPlus",
    title: "Development Experience Behind BuildPlus",
    intro:
      "BuildPlus is backed by the development experience of Ray White Ltd. The following selected developments represent the architectural, engineering, project-management and construction expertise supporting the BuildPlus venture.",
    developerLabel: "A Ray White Ltd. Development",
    developer: "Ray White Ltd.",

    /**
     * Fields left empty are simply not rendered — nothing is invented to
     * keep the cards uniform. `landArea` is only published where a figure
     * is on record.
     *
     * TODO(assets): each project needs Ray White renders and construction
     * photographs. Drop files in /public/images/projects/<slug>/ and list
     * them in `images` as { src, alt }.
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
        images: [],
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
        images: [],
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
        images: [],
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
        images: [],
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
        images: [],
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
        images: [],
      },
    ],
  },
};
