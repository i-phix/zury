/* ═══════════════════════════════════════════════════════════════
   Contact Us — CountrySelect
   src/modules/contact-us/components/CountrySelect/CountrySelect.jsx
═══════════════════════════════════════════════════════════════ */
import { COUNTRY_OPTIONS } from "../../data/countryOptions";

/**
 * Reusable country <select> — used inside FormField when type === "select"
 * and the field name is "country".
 */
export default function CountrySelect({ value, onChange, onBlur, disabled, error }) {
  return (
    <select
      className={`cf-field${error ? " cf-field--error" : ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      disabled={disabled}
      aria-invalid={error ? "true" : "false"}
    >
      <option value="" disabled>Country / Region *</option>
      {COUNTRY_OPTIONS.map((c) => (
        <option key={c.value} value={c.value}>{c.label}</option>
      ))}
    </select>
  );
}