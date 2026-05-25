import { Outlet, NavLink } from "react-router-dom";

/**
 * PortalLayout
 *
 * Lightweight shell used by the three self-service portals:
 *   - Tenant  (/portal/tenant/*)
 *   - Vendor  (/portal/vendor/*)
 *   - Owner   (/portal/owner/*)
 *
 * Receives a `role` prop to customise nav items and accent label.
 */

const ROLE_CONFIG = {
  tenant: {
    label: "Tenant Portal",
    color: "#e4a80f",
    nav: [
      { label: "Home",            path: "/portal/tenant" },
      { label: "Pay Rent",        path: "/portal/tenant/pay-rent" },
      { label: "Submit Request",  path: "/portal/tenant/submit-request" },
      { label: "My Lease",        path: "/portal/tenant/my-lease" },
      { label: "My Documents",    path: "/portal/tenant/my-documents" },
      { label: "Payment History", path: "/portal/tenant/payment-history" },
    ],
  },
  vendor: {
    label: "Vendor Portal",
    color: "#e4a80f",
    nav: [
      { label: "Home",        path: "/portal/vendor" },
      { label: "Work Orders", path: "/portal/vendor/work-orders" },
      { label: "Invoicing",   path: "/portal/vendor/invoicing" },
    ],
  },
  owner: {
    label: "Owner Portal",
    color: "#e4a80f",
    nav: [
      { label: "Home",        path: "/portal/owner" },
      { label: "Properties",  path: "/portal/owner/properties" },
      { label: "Statements",  path: "/portal/owner/statements" },
    ],
  },
};

const portalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

  .portal-root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #F9F8F6;
    font-family: 'DM Sans', sans-serif;
  }

  .portal-header {
    background: #1a1a18;
    padding: 0 32px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .portal-header-brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .portal-header-icon {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #e4a80f, #FBBF24);
    border-radius: 7px;
    flex-shrink: 0;
  }

  .portal-header-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.04em;
  }

  .portal-header-role {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #e4a80f;
    padding: 3px 10px;
    border: 1px solid rgba(228,168,15,0.35);
    border-radius: 20px;
  }

  .portal-nav {
    background: #ffffff;
    border-bottom: 1px solid #E5E7EB;
    padding: 0 32px;
    display: flex;
    gap: 4px;
    overflow-x: auto;
  }

  .portal-nav-link {
    font-size: 13px;
    font-weight: 400;
    color: #6B7280;
    padding: 14px 12px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    transition: all 0.18s;
  }

  .portal-nav-link:hover {
    color: #1a1a18;
  }

  .portal-nav-link.active {
    color: #e4a80f;
    border-bottom-color: #e4a80f;
    font-weight: 500;
  }

  .portal-page {
    flex: 1;
    padding: 32px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    .portal-header { padding: 0 16px; }
    .portal-nav    { padding: 0 16px; }
    .portal-page   { padding: 20px 16px; }
  }
`;

export default function PortalLayout({ role = "tenant" }) {
  const config = ROLE_CONFIG[role] ?? ROLE_CONFIG.tenant;

  return (
    <>
      <style>{portalStyles}</style>

      <div className="portal-root">

        {/* Header */}
        <header className="portal-header">
          <div className="portal-header-brand">
            <div className="portal-header-icon" />
            <span className="portal-header-name">PropManager</span>
          </div>
          <span className="portal-header-role">{config.label}</span>
        </header>

        {/* Sub-nav */}
        <nav className="portal-nav">
          {config.nav.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path.split("/").length === 3} // exact match for index routes
              className={({ isActive }) =>
                `portal-nav-link${isActive ? " active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Page content */}
        <main className="portal-page">
          <Outlet />
        </main>

      </div>
    </>
  );
}