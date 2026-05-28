/* ═══════════════════════════════════════════════════════════════
   Contact Us — FormField
   src/modules/contact-us/components/FormField/FormField.jsx
═══════════════════════════════════════════════════════════════ */
import { useState } from "react";

export default function FormField({
  field, value, error, touched, onChange, onBlur, phoneCode,
}) {
  const [focused, setFocused] = useState(false);

  const showError = touched && error;

  const baseClass = [
    "cf-field",
    focused   ? "cf-field--focused" : "",
    showError ? "cf-field--error"   : "",
  ].filter(Boolean).join(" ");

  const id        = `cf-${field.name}`;
  const labelText = field.placeholder + (field.required ? " *" : "");

  const sharedProps = {
    id,
    name:               field.name,
    value,
    className:          baseClass,
    "aria-invalid":     showError ? "true" : "false",
    "aria-describedby": showError ? `${id}-error` : undefined,
    onFocus:  () => setFocused(true),
    onBlur:   () => { setFocused(false); onBlur(field.name); },
    onChange: (e) => onChange(field.name, e.target.value),
  };

  let inputEl;

  if (field.type === "select") {
    inputEl = (
      <select {...sharedProps}>
        <option value="" disabled>{labelText}</option>
        {field.options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    );

 } else if (field.type === "tel") {
    inputEl = (
      <div className={`cf-phone-wrap ${showError ? "cf-phone-wrap--error" : ""} ${focused ? "cf-phone-wrap--focused" : ""}`}>
        <span className="cf-phone-code">+{phoneCode}</span>
        <div className="cf-phone-divider" aria-hidden="true" />
        <input
          id={id}
          name={field.name}
          type="tel"
          inputMode="numeric"
          maxLength={13}
          placeholder="712 345 678"
          value={value}
          className="cf-phone-input"
          aria-invalid={showError ? "true" : "false"}
          aria-describedby={showError ? `${id}-error` : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); onBlur(field.name); }}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, "");
            onChange(field.name, digits);
          }}
        />
      </div>
    );
    
  } else if (field.type === "textarea") {
    inputEl = (
      <textarea {...sharedProps} rows={field.rows ?? 4} placeholder={labelText} />
    );

  } else {
    inputEl = (
      <input {...sharedProps} type={field.type} placeholder={labelText} />
    );
  }

  return (
    <div className="cf-field-wrapper">
      <label htmlFor={id} className="cf-field-label sr-only">
        {labelText}
      </label>

      {inputEl}

      {showError && (
        <span id={`${id}-error`} className="cf-field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}