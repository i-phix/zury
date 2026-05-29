/* ═══════════════════════════════════════════════════════════════
   Contact Us — SuccessMessage
   src/modules/contact-us/components/SuccessMessage/SuccessMessage.jsx
═══════════════════════════════════════════════════════════════ */
export default function SuccessMessage({ message }) {
  return (
    <div className="cf-success" role="status" aria-live="polite">
      <div className="cf-success__icon" aria-hidden="true">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h3 className="cf-success__title">Thank you!</h3>

      <p className="cf-success__sub">
        {message ?? "We'll be in touch shortly to schedule your personalized demo."}
      </p>
    </div>
  );
}