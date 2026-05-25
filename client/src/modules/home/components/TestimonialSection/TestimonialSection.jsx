/* ═══════════════════════════════════════════════════════════════
   Zuri — Testimonial Section
   src/modules/home/components/TestimonialSection/TestimonialSection.jsx
═══════════════════════════════════════════════════════════════ */
import { useReveal }   from "../../hooks/useReveal";
import { TESTIMONIAL } from "../../constants/homeData";

export default function TestimonialSection() {
  const ref = useReveal();

  return (
    <section className="section quote-section">
      <div ref={ref} className="quote-inner reveal">

        {/* Opening quote mark */}
        <span className="quote-mark" aria-hidden="true">"</span>

        {/* Quote */}
        <blockquote className="quote-text">
          {TESTIMONIAL.quote}
        </blockquote>

        {/* Author */}
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
  );
}
