/* ═══════════════════════════════════════════════════════════════
   Zuri — Portals Section
   src/modules/home/components/PortalsSection/PortalsSection.jsx
═══════════════════════════════════════════════════════════════ */
import { useReveal } from "../../hooks/useReveal";
import { PORTALS }   from "../../constants/homeData";

export default function PortalsSection() {
  const headerRef = useReveal();

  return (
    <section id="portals" className="section" style={{ paddingTop: 0 }}>
      <div className="portals-section">

        {/* Header */}
        <div ref={headerRef} className="reveal">
          <p className="section-label">Self-service portals</p>
          <h2 className="section-title">
            Three portals.<br />
            <em>One platform.</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="portals-grid">
          {PORTALS.map((portal, i) => (
            <PortalCard key={portal.title} portal={portal} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PortalCard({ portal, index }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`portal-card reveal reveal-delay-${index + 1}`}
    >
      <div className="portal-card-number">{portal.num}</div>
      <h3 className="portal-card-title">{portal.title}</h3>
      <p className="portal-card-desc">{portal.desc}</p>
      <ul className="portal-card-items">
        {portal.items.map((item) => (
          <li key={item} className="portal-card-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}
