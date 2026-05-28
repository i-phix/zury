/* ═══════════════════════════════════════════════════════════════
   Contact Us — Format Payload
   src/modules/contact-us/utils/formatPayload.js
═══════════════════════════════════════════════════════════════ */

/**
 * Shapes form state into the exact payload the API expects.
 * - Strips leading zero from local phone number
 * - Combines dial code + local number into a single integer
 */
export function formatPayload(values, brochure) {
  const { phoneCode, phone, ...rest } = values;

  const localNumber = String(phone).replace(/^0+/, "");

  return {
    ...rest,
    phone:    Number(`${phoneCode}${localNumber}`),
    brochure,
    source:   "contact_form",
  };
}