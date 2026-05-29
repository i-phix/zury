/* Zuri — CTA Section src/modules/home/components/CTASection/CTASection.jsx */
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
            See the difference
          </h2>
          
          <div className="cta-actions">
            <button
              className="cta-btn"
             
            >
              <span>GET A DEMO</span> <span className="cta-next"><img className="cta-img" src="/assets/icons/ui/property/greater-than-sign.svg" alt="Manage Property and Portfolio" /></span>
            </button>
            <button
              className="cta-btn"
              
            >
              
              JOIN A WEBINAR <span className="cta-next"><img className="cta-img" src="/assets/icons/ui/property/greater-than-sign.svg" alt="Manage Property and Portfolio" /></span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
