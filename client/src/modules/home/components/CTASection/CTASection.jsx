/* ═══════════════════════════════════════════════════════════════
   Zuri — CTA Section
   src/modules/home/components/CTASection/CTASection.jsx
═══════════════════════════════════════════════════════════════ */
import { useNavigate } from "react-router-dom";
import { useReveal }   from "../../hooks/useReveal";
import { icons }       from "../../constants/homeData";

export default function CTASection() {
  const navigate = useNavigate();
  const ref      = useReveal();

  return (
    <section id="pricing" className="section">
      <div ref={ref} className="cta-section reveal">
        <div className="cta-box">

          <h2 className="cta-title">
            Ready to manage <em>smarter?</em>
          </h2>
          <p className="cta-sub">
            Join thousands of property managers already using Zuri.
            Free 30-day trial. No credit card required.
          </p>

          <div className="cta-actions">
            <button
              className="btn-hero-primary"
              onClick={() => navigate("/register")}
            >
              Start free trial
            </button>
            <button
              className="btn-hero-secondary"
              onClick={() => navigate("/login")}
            >
              {icons.arrow}
              Sign in
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
