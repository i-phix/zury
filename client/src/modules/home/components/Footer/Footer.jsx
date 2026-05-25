import { FOOTER_LINKS } from "../../constants/homeData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="home-footer">

      {/* Logo */}
      <div className="footer-logo">
        <div className="footer-logo-icon" aria-hidden="true" />
        <span className="footer-logo-name">Zuri</span>
      </div>

      {/* Links */}
      <ul className="footer-links">
        {FOOTER_LINKS.map((label) => (
          <li key={label}>
            <a href="#">{label}</a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="footer-copy">
        © {year} Zuri. All rights reserved.
      </p>

    </footer>
  );
}
