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
  tagline: "Your Land, Our Expertise.",
  subTagline: "From Land to Landmark.",

  // TODO(content): confirm the live domain. Used for canonical URLs,
  // sitemap.xml, robots.txt and Open Graph tags.
  url: "https://buildplus.example.com",

  // TODO(content): real office/contact details.
  contact: {
    phone: "", // e.g. "+880 1XXX XXXXXX"
    whatsapp: "", // digits only, e.g. "8801XXXXXXXXX"
    email: "", // e.g. "hello@buildplus.com.bd"
    addressLines: [], // e.g. ["House 00, Road 00", "Gulshan, Dhaka 1212"]
    mapsUrl: "",
    hours: "", // e.g. "Sun – Thu, 9:00 – 18:00"
  },

  // TODO(content): leave a value empty to hide that icon in the footer.
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
};

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
