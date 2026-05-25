// MainLayout.styles.js

export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

  .main-shell {
    display: flex;
    min-height: 100vh;
    background: #F9F8F6;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Sidebar ── */
  .main-sidebar {
    width: 240px;
    min-height: 100vh;
    background: #1a1a18;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .main-sidebar.collapsed {
    transform: translateX(-240px);
  }

  .main-sidebar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 24px 20px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .main-sidebar-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #e4a80f, #FBBF24);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .main-sidebar-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 19px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.04em;
  }

  .main-sidebar-nav {
    flex: 1;
    padding: 16px 10px;
    overflow-y: auto;
  }

  .main-sidebar-section {
    margin-bottom: 24px;
  }

  .main-sidebar-section-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    padding: 0 10px;
    margin-bottom: 6px;
  }

  .main-nav-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px;
    border-radius: 9px;
    font-size: 13.5px;
    font-weight: 400;
    color: rgba(255,255,255,0.55);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.18s;
    margin-bottom: 2px;
  }

  .main-nav-item:hover {
    background: rgba(255,255,255,0.06);
    color: rgba(255,255,255,0.85);
  }

  .main-nav-item.active {
    background: rgba(228, 168, 15, 0.12);
    color: #e4a80f;
    font-weight: 500;
  }

  .main-nav-item.active .nav-icon {
    color: #e4a80f;
  }

  .nav-icon {
    width: 17px;
    height: 17px;
    opacity: 0.7;
    flex-shrink: 0;
  }
  .main-nav-item.active .nav-icon { opacity: 1; }

  .main-sidebar-footer {
    padding: 16px 10px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  /* ── Main content area ── */
  .main-content {
    margin-left: 240px;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .main-content.sidebar-collapsed {
    margin-left: 0;
  }

  .main-page {
    flex: 1;
    padding: 28px 32px;
    max-width: 1440px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .main-sidebar {
      transform: translateX(-240px);
    }
    .main-sidebar.mobile-open {
      transform: translateX(0);
      box-shadow: 4px 0 32px rgba(0,0,0,0.25);
    }
    .main-content {
      margin-left: 0;
    }
    .main-page {
      padding: 20px 16px;
    }
  }
`;