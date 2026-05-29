/* ═══════════════════════════════════════════════════════════════
   Contact Us — Submit Helpers
   src/modules/contact-us/utils/submitHelpers.js
═══════════════════════════════════════════════════════════════ */

/**
 * Extracts a user-friendly error message from a failed API response.
 * @param {unknown} err
 * @returns {string}
 */
export function extractErrorMessage(err) {
  return (
    err?.response?.data?.message ??
    err?.message ??
    "Something went wrong. Please try again."
  );
}

/**
 * Builds a touched map with every field set to true.
 * @param {import("../data/formConfig").FieldDescriptor[]} fields
 * @returns {Record<string, boolean>}
 */
export function touchAll(fields) {
  return Object.fromEntries(fields.map((f) => [f.name, true]));
}