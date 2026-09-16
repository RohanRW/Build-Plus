/**
 * EXPERIENCE page content.
 *
 * TODO(content): NOTHING HERE YET — the proposal contains no project data.
 * For each project please supply:
 *   name, location, type (Residential / Commercial / Mixed Use),
 *   landArea, builtUpArea, floors, year, status, a one-line description,
 *   and at least one photo or render (drop files in /public/images/projects).
 */

export const experience = {
  hero: {
    eyebrow: "Experience",
    title: "From land to landmark",
    body: "", // TODO(content)
  },

  buildPlusProjects: {
    eyebrow: "BuildPlus Projects",
    title: "Our developments",
    intro: "", // TODO(content)
    /**
     * Shape of each entry:
     * {
     *   slug: "",
     *   name: "",
     *   location: "",
     *   type: "Residential",         // Residential | Commercial | Mixed Use
     *   landArea: "",                // e.g. "10 Katha"
     *   builtUpArea: "",             // e.g. "42,000 sft"
     *   floors: "",                  // e.g. "Basement + Ground + 8"
     *   year: "",                    // e.g. "2024"
     *   status: "Completed",         // Completed | Ongoing | Upcoming
     *   description: "",
     *   images: [{ src: "/images/projects/…", alt: "" }],
     * }
     */
    projects: [],
  },

  rayWhiteDevelopments: {
    eyebrow: "Selected Ray White Ltd. Developments",
    title: "The track record behind BuildPlus",
    intro: "", // TODO(content)
    projects: [], // same shape as above
  },
};
