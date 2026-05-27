import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero">
       
      {/* Left — content */}
      <div className="hero-left">
        <div className="hero-inner">

          <h1 className="hero-headline">Surpassingly </h1>
          <h1 className="hero-headline">simple software</h1>
         

          <p className="hero-sub">
            Unlock smarter property management built for complete confidence and control. All-in one place, all for you.
          </p>

          <Link to="/demo" className="hero-cta">
            GET A DEMO <span className="hero-cta-arrow">›</span>
          </Link>

        </div>
      </div>

      {/* Right — image */}
      <div className="hero-right">
        <img
          src="/assets/images/hero-right-bg.webp"
          alt="Zuri property management dashboard on laptop and mobile"
          className="hero-right-img"
          width="900"
          height="700"
        />
      </div>

    </section>
  );
}