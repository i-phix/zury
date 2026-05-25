/* ═══════════════════════════════════════════════════════════════
   Zuri — Features Section
   src/modules/home/components/FeaturesSection/FeaturesSection.jsx
═══════════════════════════════════════════════════════════════ */
import { useReveal } from "../../hooks/useReveal";
import { FEATURES }  from "../../constants/homeData";

export default function FeaturesSection() {
  const headerRef = useReveal();

  return (
    <section id="features" className="section">
      <div className="features-section">

        {/* Header */}
        <div ref={headerRef} className="features-header reveal">
          <div>
            <p className="section-label">Platform features</p>
            <h2 className="section-title">
              Everything you need,<br />
              <em>nothing you don't.</em>
            </h2>
          </div>
          <p className="section-sub">
            Built from the ground up for property managers who want power
            without complexity. Every feature earns its place.
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const ref   = useReveal();
  const delay = (index % 3) + 1;

  return (
    <div
      ref={ref}
      className={`feature-card reveal reveal-delay-${delay}`}
    >
      <div className="feature-icon">{feature.icon}</div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-desc">{feature.desc}</p>
    </div>
  );
}
