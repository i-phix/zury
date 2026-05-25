import { Outlet } from "react-router-dom";
import { styles } from "./AuthLayout.styles";

/**
 * AuthLayout
 *
 * Two-panel layout:
 *   Left  — dark brand panel with logo + headline (hidden on mobile)
 *   Right — white form panel rendered via <Outlet />
 *
 * Used by: Login, Register, ForgotPassword, ResetPassword, TwoFactor
 */
export default function AuthLayout() {
  return (
    <>
      <style>{styles}</style>

      <div className="auth-root">

        {/* ── Left: brand panel ── */}
        <aside className="auth-brand">

          <div className="auth-brand-logo">
            <div className="auth-brand-icon">
              {/* Building icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="8" width="14" height="10" rx="1" stroke="white" strokeWidth="1.5"/>
                <path d="M7 18V13h6v5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M10 2l8 6H2l8-6z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="auth-brand-name">PropManager</span>
          </div>

          <div className="auth-brand-tagline">
            <h2 className="auth-brand-headline">
              Property management,<br />
              <span>refined.</span>
            </h2>
            <p className="auth-brand-sub">
              Everything you need to manage properties, tenants,
              leases, and finances — in one elegant platform.
            </p>
          </div>

          <p className="auth-brand-footer">© {new Date().getFullYear()} PropManager. All rights reserved.</p>
        </aside>

        {/* ── Right: form outlet ── */}
        <main className="auth-form-panel">
          <div className="auth-form-inner">

            {/* Mobile-only logo */}
            <div className="auth-mobile-logo">
              <div className="auth-mobile-logo-icon" />
              <span className="auth-mobile-logo-name">PropManager</span>
            </div>

            {/* Page-specific form rendered here */}
            <Outlet />
          </div>
        </main>

      </div>
    </>
  );
}