/**
 * Site-wide content: brand strings, navigation and contact details.
 *
 * Everything marked TODO is waiting on details from BuildPlus. Nothing in
 * src/app or src/components hardcodes copy — edit it here.
 */

export const site = {
  name: "BuildPlus",
  legalName: "Build Plus",
  parent: "Ray White Ltd.",
  // The logo lockup already carries "Your Land, Our Expertise", so the
  // tagline is never set again in type next to the logo. It stays here
  // only for page titles and social previews.
  tagline: "Your Land, Our Expertise.",
  subTagline: "From Land to Landmark.",

  // TODO(content): confirm the live domain. Used for canonical URLs,
  // sitemap.xml, robots.txt and Open Graph tags.
  url: "https://buildplus.example.com",

  contact: {
    phone: "01843-563338",
    phoneHref: "tel:+8801843563338",
    // TODO(content): confirm WhatsApp is the same number as above.
    whatsapp: "8801843563338",
    whatsappLabel: "Chat with BuildPlus",
    email: "rohan@raywhiteltd.com",
    addressLines: [
      "Level 5, Suit 605 & 606, Rupayan Shopping Square",
      "Plot 02 Sayem Sobhan Anvir Rd",
      "Dhaka 1229, Bangladesh",
    ],
    mapsUrl: "https://maps.app.goo.gl/Fu4qGcMe1MN5M6b46",
    mapsLabel: "Get Directions",
    hours: "Sat – Thu, 10:00 – 19:00", // TODO(content): confirm office hours
  },

  /**
   * Only live profiles are listed. Instagram, LinkedIn and YouTube are
   * deliberately omitted until those pages exist — empty icons look worse
   * than none at all.
   */
  social: [
    {
      name: "Facebook",
      label: "BuildPlus Bangladesh",
      href: "https://www.facebook.com/BuildPlusBD",
    },
  ],
};

export const whatsappUrl = site.contact.whatsapp
  ? `https://wa.me/${site.contact.whatsapp}`
  : "";

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Packages", href: "/packages" },
];

export const primaryCta = {
  label: "Discuss Your Land",
  href: "/discuss-your-land",
};
