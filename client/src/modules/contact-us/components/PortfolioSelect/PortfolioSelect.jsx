/* ═══════════════════════════════════════════════════════════════
   Contact Us — PortfolioSelect
   src/modules/contact-us/components/PortfolioSelect/PortfolioSelect.jsx
═══════════════════════════════════════════════════════════════ */
import { PORTFOLIO_OPTIONS } from "../../data/portforlioOptions";

/**
 * Reusable portfolio <select> — used inside FormField when type === "select"
 * and the field name is "portfolio".
 */
export default function PortfolioSelect({ value, onChange, onBlur, disabled, error }) {
  return (
    <select
      className={`cf-field${error ? " cf-field--error" : ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      disabled={disabled}
      aria-invalid={error ? "true" : "false"}
    >
      <option value="" disabled>Primary Portfolio (Select One) *</option>
      {PORTFOLIO_OPTIONS.map((p) => (
        <option key={p.value} value={p.value}>{p.label}</option>
      ))}
    </select>
  );
}