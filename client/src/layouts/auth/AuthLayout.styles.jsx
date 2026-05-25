// AuthLayout.styles.jsx
// All auth-page visual styles live here, keeping AuthLayout.jsx clean.

export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

  .auth-root {
    display: flex;
    min-height: 100vh;
    background: #ffffff;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Left panel — brand / illustration ── */
  .auth-brand {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    padding: 56px 48px;
    background: linear-gradient(160deg, #1a1a18 0%, #2b2410 60%, #1a1a18 100%);
    width: 44%;
    position: relative;
    overflow: hidden;
  }

  @media (min-width: 900px) {
    .auth-brand { display: flex; }
  }

  /* Decorative gold circles */
  .auth-brand::before {
    content: '';
    position: absolute;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    border: 1px solid rgba(228, 168, 15, 0.12);
    top: -120px;
    right: -160px;
  }
  .auth-brand::after {
    content: '';
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 1px solid rgba(228, 168, 15, 0.08);
    bottom: 80px;
    left: -80px;
  }

  .auth-brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 1;
  }

  .auth-brand-icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #e4a80f, #FBBF24);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .auth-brand-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.04em;
  }

  .auth-brand-tagline {
    position: relative;
    z-index: 1;
  }

  .auth-brand-headline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 38px;
    font-weight: 500;
    color: #ffffff;
    line-height: 1.25;
    margin-bottom: 16px;
  }

  .auth-brand-headline span {
    color: #e4a80f;
  }

  .auth-brand-sub {
    font-size: 14px;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
    line-height: 1.65;
    max-width: 300px;
  }

  .auth-brand-footer {
    font-size: 12px;
    color: rgba(255,255,255,0.25);
    position: relative;
    z-index: 1;
    letter-spacing: 0.04em;
  }

  /* ── Right panel — form area ── */
  .auth-form-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
  }

  .auth-form-inner {
    width: 100%;
    max-width: 400px;
  }

  /* Mobile logo (shown when brand panel is hidden) */
  .auth-mobile-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;
  }

  @media (min-width: 900px) {
    .auth-mobile-logo { display: none; }
  }

  .auth-mobile-logo-icon {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #e4a80f, #FBBF24);
    border-radius: 8px;
  }

  .auth-mobile-logo-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-weight: 600;
    color: #1a1a18;
    letter-spacing: 0.04em;
  }
`;