/* ═══════════════════════════════════════════════════════════════
   Contact Us — Phone Utilities
   src/modules/contact-us/utils/phoneUtils.js
═══════════════════════════════════════════════════════════════ */

/**
 * Strips all non-digit characters and leading zeros from a local number.
 * @param {string} value
 * @returns {string}
 */
export function normalizeLocalNumber(value) {
  return String(value).replace(/\D/g, "").replace(/^0+/, "");
}

/**
 * Combines a dial code and local number into a full international number.
 * @param {string} dialCode  - e.g. "254"
 * @param {string} local     - e.g. "791216791"
 * @returns {number}         - e.g. 254791216791
 */
export function buildFullNumber(dialCode, local) {
  const normalized = normalizeLocalNumber(local);
  return Number(`${dialCode}${normalized}`);
}

/**
 * Builds a phone validator scoped to the selected country.
 * @param {string[]} validStarts - allowed first digits
 * @param {number}   exactLength - expected local digit count
 * @returns {(value: string) => string}
 */
export function makePhoneValidator(validStarts = [], exactLength = 9) {
  return (v) => {
    if (!v.trim()) return "This field is required.";

    const normalized = normalizeLocalNumber(v);

    if (!/^\d+$/.test(normalized))
      return "Enter a valid phone number.";

    if (normalized.length !== exactLength)
      return "Enter a valid phone number.";

    if (validStarts.length && !validStarts.includes(normalized[0]))
      return `Number must start with ${validStarts.join(" or ")}.`;

    return "";
  };
}