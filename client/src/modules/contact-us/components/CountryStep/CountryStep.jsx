/* ═══════════════════════════════════════════════════════════════
   Contact Us — CountryStep
   src/modules/contact-us/components/CountryStep/CountryStep.jsx
═══════════════════════════════════════════════════════════════ */
import { useState } from "react";
import { COUNTRY_OPTIONS } from "../../data/formConfig";

export default function CountryStep({ onSelect, currentStep, totalSteps }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const selected = e.target.value;
    setValue(selected);
    if (selected) onSelect(selected);
  }

  return (
    <div className="cs-step">
      <p className="cs-step__eyebrow">Step {currentStep} of {totalSteps}</p>

      <h2 className="cs-step__heading">Where are you based?</h2>

      <p className="cs-step__sub">
        We'll pre-fill your regional contact details.
      </p>

      <div className="cs-step__field-wrap">
        <select
          className={`cs-step__select ${value ? "cs-step__select--filled" : ""}`}
          value={value}
          onChange={handleChange}
          autoFocus
          aria-label="Select your country"
        >
          <option value="" disabled>Select your country…</option>
          {COUNTRY_OPTIONS.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}