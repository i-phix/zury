/* ═══════════════════════════════════════════════════════════════
   Contact Us — Contact Validators
   src/modules/contact-us/utils/contactValidators.js
═══════════════════════════════════════════════════════════════ */

export const required = (v) =>
  String(v).trim() ? "" : "This field is required.";

export const validEmail = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim())
    ? ""
    : "Enter a valid email address.";

export const emailValidator = (v) => required(v) || validEmail(v);

/**
 * Runs all field validators and returns a flat errors map.
 * @param {import("../data/formConfig").FieldDescriptor[]} fields
 * @param {Object} values
 * @param {Function} phoneValidate
 * @returns {Record<string, string>}
 */
export function validateAll(fields, values, phoneValidate) {
  const errors = Object.fromEntries(
    fields.map((f) => [f.name, f.validate(values[f.name])])
  );
  errors.phone = phoneValidate(values.phone);
  return errors;
}

/**
 * Returns true if any error string is non-empty.
 * @param {Record<string, string>} errors
 * @returns {boolean}
 */
export function hasErrors(errors) {
  return Object.values(errors).some((e) => e !== "");
}