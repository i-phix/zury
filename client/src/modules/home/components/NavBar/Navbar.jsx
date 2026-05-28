/* ═══════════════════════════════════════════════════════════════
   Zuri — Home Navbar
   src/modules/home/components/NavBar/NavBar.jsx
   Layout: Logo | Nav links | Contact | Get Started
   SEO: React Router <Link>, real hrefs, aria attributes
═══════════════════════════════════════════════════════════════ */
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate }           from "react-router-dom";
import { NAV_LINKS, PROPERTY_TYPES }   from "../../constants/homeData";

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="5" y1="5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="5" x2="5"  y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

/* ── Dropdown Menu ───────────────────────────────────────────── */
function PropertyDropdown({ type }) {
  return (
    <ul className="nav-dropdown" role="menu">
      {PROPERTY_TYPES.map((item) => {
        const href = type === "pricing" ? item.pricingHref : item.featuresHref;
        return (
          <li key={item.slug} role="none">
            <Link
              to={href}
              className="nav-dropdown-item"
              role="menuitem"
              aria-label={`${item.label} ${type === "pricing" ? "pricing" : "features"}`}
            >
              <img
                src={item.icon}
                alt=""
                className="nav-dropdown-icon"
                width="28"
                height="28"
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Nav Link with Dropdown ──────────────────────────────────── */
function NavLink({ label, href, dropdown, dropdownType, highlight }) {
  const [open, setOpen]   = useState(false);
  const ref               = useRef(null);
  const timerRef          = useRef(null);

  const hasDropdown = dropdown && (dropdownType === "property" || dropdownType === "pricing");

  /* close on outside click */
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* close on Escape */
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function handleMouseEnter() {
    clearTimeout(timerRef.current);
    if (hasDropdown) setOpen(true);
  }

  function handleMouseLeave() {
    timerRef.current = setTimeout(() => setOpen(false), 150);
  }

  if (!hasDropdown) {
    return (
      <Link
        to={href}
        className={`nav-link${highlight ? " nav-link--highlight" : ""}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="nav-link-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`nav-link nav-link--btn${highlight ? " nav-link--highlight" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className={`nav-link-chevron${open ? " nav-link-chevron--open" : ""}`}>
          <ChevronIcon />
        </span>
      </button>

      {open && (
        <div className="nav-dropdown-wrapper" role="region" aria-label={`${label} menu`}>
          <PropertyDropdown type={dropdownType} />
        </div>
      )}
    </div>
  );
}

/* ── Mobile Nav Link ─────────────────────────────────────────── */
function MobileNavLink({ label, href, dropdown, dropdownType, highlight }) {
  const [open, setOpen]   = useState(false);
  const hasDropdown = dropdown && (dropdownType === "property" || dropdownType === "pricing");

  if (!hasDropdown) {
    return (
      <Link
        to={href}
        className={`nav-mobile-link${highlight ? " nav-mobile-link--highlight" : ""}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div className="nav-mobile-link-wrapper">
      <button
        className={`nav-mobile-link nav-mobile-link--btn${highlight ? " nav-mobile-link--highlight" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className={`nav-link-chevron${open ? " nav-link-chevron--open" : ""}`}>
          <ChevronIcon />
        </span>
      </button>

      {open && (
        <ul className="nav-mobile-dropdown" role="menu">
          {PROPERTY_TYPES.map((item) => {
            const itemHref = dropdownType === "pricing" ? item.pricingHref : item.featuresHref;
            return (
              <li key={item.slug} role="none">
                <Link
                  to={itemHref}
                  className="nav-mobile-dropdown-item"
                  role="menuitem"
                  aria-label={`${item.label} ${dropdownType === "pricing" ? "pricing" : "features"}`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ── Main NavBar ─────────────────────────────────────────────── */
export default function NavBar() {
  const navigate            = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="home-nav" role="navigation" aria-label="Main navigation">
      <div className="home-nav-inner">

        {/* Logo — far left */}
        <Link to="/" className="nav-logo" aria-label="Zuri — Home">
          <img
            src="/assets/icons/ui/logo/logo.png"
            alt="Zuri Property Management Platform"
            width="28"
            height="28"
          />
          <span className="nav-logo-name">ZURI</span>
        </Link>

        {/* Links */}
        <ul className="nav-links" role="menubar" aria-label="Site navigation">
          {NAV_LINKS.map((link) => (
            <li key={link.label} role="none">
              <NavLink {...link} />
            </li>
          ))}
        </ul>

        {/* CTAs — far right */}
        <div className="nav-cta">
          <Link to="/contact" className="btn-ghost" aria-label="Contact Zuri">
            Contact
          </Link>
          <Link to="/register" className="btn-gold" aria-label="Get started with Zuri">
            Login
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="nav-mobile-menu" className="nav-mobile-menu" role="menu">
          {NAV_LINKS.map((link) => (
            <MobileNavLink key={link.label} {...link} />
          ))}
          <div className="nav-mobile-ctas">
            <Link to="/contact"  className="btn-ghost">Contact</Link>
            <Link to="/register" className="btn-gold">Get Started</Link>
          </div>
        </div>
      )}

    </nav>
  );
}