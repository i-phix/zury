/* ═══════════════════════════════════════════════════════════════
   Contact Us — ContactForm  (step 2)
   src/modules/contact-us/components/ContactForm/ContactForm.jsx
═══════════════════════════════════════════════════════════════ */
import { useMemo }               from "react";
import { useContactFormContext } from "../../hooks/ContactFormContext";
import { FORM_FIELDS }           from "../../data/formConfig";
import { COUNTRY_OPTIONS }       from "../../data/countryOptions";
import FormField                 from "../FormField/FormField";
import SuccessMessage            from "../SuccessMessage/SuccessMessage";

export default function ContactForm() {
  const {
    values,
    errors,
    touched,
    brochure,
    submitStatus,
    serverError,
    successMessage,
    handleChange,
    handleBlur,
    handleToggleBrochure,
    handleSubmit,
    handleBackToCountry,
  } = useContactFormContext();

  if (submitStatus === "success") return <SuccessMessage message={successMessage} />;

  const isLoading = submitStatus === "loading";

  const rows = useMemo(() => {
    const visible = FORM_FIELDS.filter((f) => f.name !== "country");
    return groupFieldsIntoRows(visible);
  }, []);

  const countryLabel = COUNTRY_OPTIONS.find(
    (c) => c.value === values.country
  )?.label ?? "";

  return (
    <div className="cf-form">
      <div className="cf-form__header">
        <p className="section-label cf-form__heading">Get a Demo</p>

        <button
          className="cf-form__country-pill"
          onClick={handleBackToCountry}
          aria-label="Change country"
          type="button"
          disabled={isLoading}
        >
          {countryLabel}
          <span className="cf-form__country-pill-edit" aria-hidden="true">✎</span>
        </button>
      </div>

      {rows.map((group, i) =>
        group.length > 1 ? (
          <div className="cf-row" key={i}>
            {group.map((field) => (
              <FormField
                key={field.name}
                field={field}
                value={values[field.name]}
                error={errors[field.name]}
                touched={touched[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                phoneCode={field.type === "tel" ? values.phoneCode : undefined}
                disabled={isLoading}
              />
            ))}
          </div>
        ) : (
          <FormField
            key={group[0].name}
            field={group[0]}
            value={values[group[0].name]}
            error={errors[group[0].name]}
            touched={touched[group[0].name]}
            onChange={handleChange}
            onBlur={handleBlur}
            phoneCode={group[0].type === "tel" ? values.phoneCode : undefined}
            disabled={isLoading}
          />
        )
      )}

      <label className="cf-checkbox">
        <input
          type="checkbox"
          checked={brochure}
          onChange={handleToggleBrochure}
          disabled={isLoading}
          aria-label="Send me a brochure"
        />
        <span>Send me a brochure</span>
      </label>

      <p className="cf-consent">
        By clicking submit below, you consent to allow the processing of your
        personal data by Zuri as described in the{" "}
        <a href="#" className="cf-consent__link">Privacy Statement</a>.
      </p>

      {serverError && (
        <p className="cf-server-error" role="alert">
          {serverError}
        </p>
      )}

      <div className="cf-submit-row">
        <button
          className="btn-gold"
          onClick={handleSubmit}
          type="button"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? "Submitting…" : "Submit"}
        </button>
      </div>
    </div>
  );
}

/* ── Helpers ─────────────────────────────────────────────────── */
function groupFieldsIntoRows(fields) {
  const groups = [];
  const rowMap = {};

  for (const field of fields) {
    if (field.row) {
      if (!rowMap[field.row]) {
        const group = [];
        rowMap[field.row] = group;
        groups.push(group);
      }
      rowMap[field.row].push(field);
    } else {
      groups.push([field]);
    }
  }

  return groups;
}