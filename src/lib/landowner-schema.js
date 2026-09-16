import { z } from "zod";

/**
 * Landowner enquiry form.
 *
 * Fields are exactly the six agreed in the sitemap, plus a hidden honeypot.
 * TODO(content): confirm whether an optional Email and a free-text
 * "Tell us about your project" field should be added — both are one entry
 * here plus one field in src/components/landowner-form.jsx, and one extra
 * column in the Google Sheet.
 */

export const LAND_TYPES = ["Residential", "Commercial", "Mixed Use"];

export const PACKAGE_OPTIONS = [
  "Essential",
  "Standard",
  "Premium",
  "Luxury",
  "Custom",
];

// TODO(content): confirm which units landowners should be offered.
// Bangladesh land is usually quoted in Katha; the proposal uses Katha.
export const LAND_SIZE_UNITS = ["Katha", "Decimal", "Bigha", "Acre", "Sq ft"];

// TODO(content): confirm whether to accept international numbers or
// restrict to Bangladesh (+880).
const phoneRegex = /^[+()\d][\d\s()+-]{6,19}$/;

export const landownerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "That name looks too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number we can reach you on.")
    .max(20, "That phone number looks too long.")
    .regex(phoneRegex, "Please enter a valid phone number."),

  landLocation: z
    .string()
    .trim()
    .min(3, "Please tell us roughly where the land is.")
    .max(200, "Please keep the location under 200 characters."),

  landSize: z
    .string()
    .trim()
    .min(1, "Please enter the land size.")
    .max(20, "Please enter a valid land size.")
    .regex(/^\d+(\.\d+)?$/, "Please enter the size as a number."),

  landSizeUnit: z.enum(LAND_SIZE_UNITS, {
    message: "Please choose a unit.",
  }),

  landType: z.enum(LAND_TYPES, {
    message: "Please choose the type of development.",
  }),

  packageLevel: z.enum(PACKAGE_OPTIONS, {
    message: "Please choose a package.",
  }),

  // Hidden field. Real people leave it empty; bots fill it in.
  website: z.string().max(0).optional().or(z.literal("")),
});

export const landownerDefaults = {
  name: "",
  phone: "",
  landLocation: "",
  landSize: "",
  landSizeUnit: "Katha",
  landType: "",
  packageLevel: "",
  website: "",
};
