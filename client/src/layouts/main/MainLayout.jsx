import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { styles } from "./MainLayout.styles";
import Navbar from "../../shared/components/navigation/Topbar/Navbar";

/**
 * MainLayout
 *
 * The primary shell for authenticated property-manager users.
 * Structure:
 *   ├── Sidebar  (fixed, collapsible)
 *   └── Content
 *       ├── Navbar (topbar)
 *       └── <Outlet /> (page content)
 */

const NAV = [
  {
    section: "Overview",
    items: [
      { label: "Dashboard",   path: "/dashboard",   icon: <HomeIcon /> },
    ],
  },
  {
    section: "Management",
    items: [
      { label: "Properties",  path: "/properties",  icon: <BuildingIcon /> },
      { label: "Tenants",     path: "/tenants",     icon: <PeopleIcon /> },
      { label: "Leasing",     path: "/leasing",     icon: <FileIcon /> },
    ],
  },
  {
    section: "Finance",
    items: [
      { label: "Payments",    path: "/payments",    icon: <CardIcon /> },
      { label: "Accounting",  path: "/accounting",  icon: <ChartIcon /> },
      { label: "Reports",     path: "/reports",     icon: <ReportIcon /> },
    ],
  },
  {
    section: "Operations",
    items: [
      { label: "Maintenance", path: "/maintenance", icon: <WrenchIcon /> },
      { label: "Documents",   path: "/documents",   icon: <DocIcon /> },
      { label: "Messages",    path: "/communications", icon: <ChatIcon /> },
    ],
  },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <style>{styles}</style>

      <div className="main-shell">

        {/* ── Sidebar ── */}
        <aside className={`main-sidebar ${!sidebarOpen ? "collapsed" : ""}`}>

          {/* Logo */}
          <div className="main-sidebar-logo">
            <div className="main-sidebar-icon">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="8" width="14" height="10" rx="1" stroke="white" strokeWidth="1.5"/>
                <path d="M7 18V13h6v5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M10 2l8 6H2l8-6z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="main-sidebar-name">PropManager</span>
          </div>

          {/* Nav */}
          <nav className="main-sidebar-nav">
            {NAV.map(({ section, items }) => (
              <div className="main-sidebar-section" key={section}>
                <p className="main-sidebar-section-label">{section}</p>
                {items.map(({ label, path, icon }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `main-nav-item${isActive ? " active" : ""}`
                    }
                  >
                    <span className="nav-icon">{icon}</span>
                    {label}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="main-sidebar-footer">
            <NavLink to="/settings" className="main-nav-item">
              <span className="nav-icon"><SettingsIcon /></span>
              Settings
            </NavLink>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className={`main-content ${!sidebarOpen ? "sidebar-collapsed" : ""}`}>
          <Navbar onMenuToggle={() => setSidebarOpen(o => !o)} />
          <main className="main-page">
            <Outlet />
          </main>
        </div>

      </div>
    </>
  );
}

/* ── Inline SVG icons (keep dependency-free) ── */
function HomeIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M8 18v-6h4v6"/></svg>;
}
function BuildingIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="11" rx="1"/><path d="M6 18V12h8v6"/><path d="M2 7l8-5 8 5"/></svg>;
}
function PeopleIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="7" cy="6" r="3"/><path d="M1 18c0-3.314 2.686-6 6-6"/><circle cx="14" cy="6" r="3"/><path d="M19 18c0-3.314-2.686-6-6-6H9"/></svg>;
}
function FileIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2h8l4 4v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z"/><path d="M12 2v4h4"/><path d="M7 9h6M7 12h6M7 15h4"/></svg>;
}
function CardIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="5" width="18" height="12" rx="2"/><path d="M1 9h18"/></svg>;
}
function ChartIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l4-6 4 3 4-8 2 3"/><path d="M1 17h18"/></svg>;
}
function ReportIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="14" height="16" rx="1"/><path d="M7 7h6M7 10h6M7 13h4"/></svg>;
}
function WrenchIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 2.3a5 5 0 00-6.9 6.9L2 15l3 3 5.8-5.8a5 5 0 006.9-6.9l-2.8 2.8-2-2 2.8-2.8z"/></svg>;
}
function DocIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7l-5-5z"/><path d="M13 2v5h5"/></svg>;
}
function ChatIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10c0 3.866-3.582 7-8 7a8.8 8.8 0 01-4-.95L2 18l1.08-3.77A6.7 6.7 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/></svg>;
}
function SettingsIcon() {
  return <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="3"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"/></svg>;
}