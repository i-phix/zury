/* ═══════════════════════════════════════════════════════════════
   Contact Us — Constants
   src/modules/contact-us/constants/contact.constants.js
═══════════════════════════════════════════════════════════════ */

export const LEAD_STATUS = {
  NEW:       "new",
  CONTACTED: "contacted",
  QUALIFIED: "qualified",
  CLOSED:    "closed",
};

export const LEAD_SOURCE = {
  CONTACT_FORM: "contact_form",
  REFERRAL:     "referral",
  ORGANIC:      "organic",
};

export const SUBMIT_STATUS = {
  IDLE:    "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR:   "error",
};

export const FORM_STEPS = [
  { label: "Region"  },
  { label: "Details" },
  { label: "Confirm" },
];

export const API_ENDPOINT = "/api/contact-us";