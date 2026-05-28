/* ═══════════════════════════════════════════════════════════════
   Contact Us — ContactCopy
   src/modules/contact-us/components/ContactCopy/ContactCopy.jsx
═══════════════════════════════════════════════════════════════ */
export default function ContactCopy({ revealRef }) {
  return (
    <div className="cc-copy reveal visible" ref={revealRef}>

      <h1 className="cc-copy__heading">
        Request a free demo
      </h1>

      <div className="cc-copy__divider" aria-hidden="true" />

      <p className="cc-copy__lead">
        We'd love to show you how Zuri can simplify the way you manage your
        properties while helping you save valuable time and reduce operational
        costs.
      </p>

      <p className="cc-copy__body">
        Complete the form on this page, and our team will get in touch to
        schedule a personalized demo tailored to your portfolio, business
        goals, and property management needs.
      </p>

      <p className="cc-copy__body">
        Or just call us at{" "}
        <a href="tel:0791216791" className="cc-copy__phone">
          (079) 121-6791
        </a>
        .
      </p>

    </div>
  );
}