/* ═══════════════════════════════════════════════════════════════
   Zuri — Testimonial Section
   src/modules/home/components/TestimonialSection/TestimonialSection.jsx
═══════════════════════════════════════════════════════════════ */
import { useReveal } from "../../hooks/useReveal";
import { TESTIMONIAL } from "../../constants/homeData";

export default function TestimonialSection() {
  const ref = useReveal();

  return (
    <>
      {/* Gray headline band — sits flush under pricing dots */}
      <div className="quote-headline-band">
        <h2 className="quote-headline-text">
          {TESTIMONIAL.headlineTop}<br />
          <em>{TESTIMONIAL.headlineBottom}</em>
        </h2>
      </div>

      {/* White testimonial row */}
      <section className="quote-section">
        <img
          className="quote-bg-plant"
          src="/assets/icons/ui/property/testimonial-bg.svg"
          alt=""
          aria-hidden="true"
        />

        <div ref={ref} className="quote-inner reveal">
          <span className="quote-mark quote-mark--open" aria-hidden="true">"</span>

          <blockquote className="quote-text">
            {TESTIMONIAL.quote}
          </blockquote>

          <span className="quote-mark quote-mark--close" aria-hidden="true">"</span>

          <div className="quote-author">
            <div className="quote-avatar" aria-hidden="true">
              {TESTIMONIAL.initials}
            </div>
            <div>
              <div className="quote-author-name">{TESTIMONIAL.name}</div>
              <div className="quote-author-role">{TESTIMONIAL.role}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}