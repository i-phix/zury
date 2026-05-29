/* ═══════════════════════════════════════════════════════════════
   Contact Us — Form Configuration
   src/modules/contact-us/data/formConfig.js
═══════════════════════════════════════════════════════════════ */
import { COUNTRY_OPTIONS }   from "./countryOptions";
import { PORTFOLIO_OPTIONS } from "./portforlioOptions";
import { required, emailValidator } from "../utils/contactValidators";
import { makePhoneValidator }       from "../utils/phoneUtils";

export { COUNTRY_OPTIONS, PORTFOLIO_OPTIONS, makePhoneValidator };

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
    validate:    emailValidator,
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