import { FOOTER_LINKS } from "../../constants/homeData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="home-footer">

      {/* Top 3-column grid */}
      <div className="footer-grid">

        {/* Column 1 — About */}
        <div className="footer-col footer-col--about">
          <div className="footer-logo">
            <div className="footer-logo-icon" aria-hidden="true" />
            <span className="footer-logo-name">Zuri</span>
          </div>
          <p className="footer-section-label">About</p>
          <p className="footer-about-text">
           Zuri is built to give you complete control with a platform that is simple, powerful, 
           and designed for the way modern teams work. Manage tasks, track progress, collaborate
           seamlessly, and stay connected from anywhere with tools that keep everything organized and efficient.
           Work with confidence knowing your data stays secure, your reports remain accurate, and your team always 
           has access to the information they need to perform at their best.

          </p>
          <p className="footer-tagline">Are you ready to make work a Zuri?</p>
        </div>

        <div className="footer-col-divider" aria-hidden="true" />

        {/* Column 2 — Contact Us */}
        <div className="footer-col footer-col--contact">
          <p className="footer-section-label">Contact Us</p>
          <div className="footer-contact-info">
            <p>(079) 121-6791</p>
            <p>
              <a href="mailto:hello@zuriapp.com">iphix09@gmail.com</a>
            </p>
          </div>
          <hr className="footer-rule" />
          <p className="footer-contact-more">
            Looking for enterprise solutions or custom integrations?
          </p>
          <a href="/enterprise" className="footer-cta-btn">
            See Enterprise Plan
            <span className="footer-cta-arrow" aria-hidden="true">›</span>
          </a>
        </div>

        <div className="footer-col-divider" aria-hidden="true" />

        {/* Column 3 — Connect */}
        <div className="footer-col footer-col--connect">
          <p className="footer-section-label">Connect With Us</p>
          <p className="footer-social-desc">
            Follow us on social media for the latest product updates, tips, and
            industry news.
          </p>
          <ul className="footer-social-list" aria-label="Social media links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                {/* Replace with your icon component, e.g. <FacebookIcon /> */}
                <span className="footer-social-icon footer-social-icon--facebook" />
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X / Twitter">
                <span className="footer-social-icon footer-social-icon--x" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <span className="footer-social-icon footer-social-icon--instagram" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <span className="footer-social-icon footer-social-icon--linkedin" />
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-legal">© {year} Zuri, Inc. All Rights Reserved.</p>
        <p className="footer-legal">
          Zuri, the Zuri logo, and all Zuri product names are trademarks of Zuri, Inc.
        </p>
        <ul className="footer-legal-links">
          {FOOTER_LINKS.map((label) => (
            <li key={label}>
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>
      </div>

    </footer>
  );
}