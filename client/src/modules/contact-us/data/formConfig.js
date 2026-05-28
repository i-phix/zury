/* ═══════════════════════════════════════════════════════════════
   Contact Us — Form Configuration
   src/modules/contact-us/data/formConfig.js
═══════════════════════════════════════════════════════════════ */

export const COUNTRY_OPTIONS = [
  { value: "ke", label: "Kenya",    dialCode: "254", validStarts: ["1", "7"], localLength: 9 },
  { value: "ug", label: "Uganda",   dialCode: "256", validStarts: ["7"],      localLength: 9 },
  { value: "tz", label: "Tanzania", dialCode: "255", validStarts: ["6", "7"], localLength: 9 },
];

export const PORTFOLIO_OPTIONS = [
  { value: "residential",         label: "Residential"       },
  { value: "commercial",          label: "Commercial"        },
  { value: "hoa",                 label: "HOA / Condo"       },
  { value: "affordable",          label: "Affordable Housing"},
  { value: "industrial",          label: "Industrial"        },
  { value: "office",              label: "Office"            },
  { value: "studio",              label: "Studio"            },
  { value: "retail",              label: "Retail"            },
  { value: "self_storage",        label: "Self-Storage"      },
  { value: "single_family_homes", label: "Single Family Homes" },
  { value: "mixed_use",           label: "Mixed Use"         },
];

/* ── Validators ─────────────────────────────────────────────── */
const required   = (v) => v.trim() ? "" : "This field is required.";
const validEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
  ? "" : "Enter a valid email address.";

/**
 * Builds a phone validator scoped to the selected country.
 * @param {string[]} validStarts – allowed first digits after the dial code
 * @returns {(v: string) => string}
 */
export function makePhoneValidator(validStarts = [], exactLength = 9) {
  return (v) => {
    if (!v.trim()) return "This field is required.";

    const normalized = v.trim().replace(/^0+/, "");

    if (!/^\d+$/.test(normalized))
      return "Enter a valid phone number.";

    if (normalized.length !== exactLength)
      return `Enter a valid phone number`;

    if (validStarts.length && !validStarts.includes(normalized[0]))
      return `Number must start with ${validStarts.join(" or ")}.`;

    return "";
  };
}

/* ── Field descriptors ──────────────────────────────────────── */
export const FORM_FIELDS = [
  {
    name:        "firstName",
    type:        "text",
    placeholder: "First Name",
    required:    true,
    row:         "name",
    validate:    required,
  },
  {
    name:        "lastName",
    type:        "text",
    placeholder: "Last Name",
    required:    true,
    row:         "name",
    validate:    required,
  },
  {
    name:        "email",
    type:        "email",
    placeholder: "Business Email",
    required:    true,
    row:         "contact",
    validate:    (v) => required(v) || validEmail(v),
  },
  {
    name:        "phone",
    type:        "tel",
    placeholder: "Phone Number",
    required:    true,
    row:         "contact",
    validate:    () => "",   // dynamic — handled by makePhoneValidator in the hook
  },
  {
    name:        "company",
    type:        "text",
    placeholder: "Company",
    required:    true,
    validate:    required,
  },
  {
    name:        "country",
    type:        "select",
    placeholder: "Country / Region",
    required:    true,
    options:     COUNTRY_OPTIONS,
    validate:    required,
  },
  {
    name:        "portfolio",
    type:        "select",
    placeholder: "Primary Portfolio (Select One)",
    required:    true,
    options:     PORTFOLIO_OPTIONS,
    validate:    required,
  },
  {
    name:        "comments",
    type:        "textarea",
    placeholder: "Questions / Comments",
    required:    false,
    rows:        4,
    validate:    () => "",
  },
];

/* ── Initial state ──────────────────────────────────────────── */
export const INITIAL_FORM_STATE = Object.fromEntries(
  FORM_FIELDS.map((f) => [f.name, ""])
);