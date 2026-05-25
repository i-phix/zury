import { Outlet } from "react-router-dom";

/**
 * PrintLayout
 *
 * Ultra-minimal wrapper for printable pages (invoices, statements, reports).
 * - Hides sidebar / navbar completely
 * - White background, standard print margins
 * - A "Print" button visible only on screen (hidden via @media print)
 */

const printStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

  .print-root {
    background: #ffffff;
    min-height: 100vh;
    font-family: 'DM Sans', sans-serif;
  }

  /* Screen-only toolbar */
  .print-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 32px;
    background: #1a1a18;
    gap: 12px;
  }

  @media print {
    .print-toolbar { display: none; }
  }

  .print-toolbar-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.04em;
  }

  .print-actions {
    display: flex;
    gap: 8px;
  }

  .print-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: 0.04em;
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
  }

  .print-btn-outline {
    background: transparent;
    border: 1.5px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.7);
  }
  .print-btn-outline:hover { border-color: rgba(255,255,255,0.45); color: #fff; }

  .print-btn-gold {
    background: linear-gradient(135deg, #e4a80f, #FBBF24);
    color: #fff;
  }
  .print-btn-gold:hover {
    background: linear-gradient(135deg, #d8a205, #e4a80f);
  }

  /* Document area */
  .print-page {
    max-width: 860px;
    margin: 32px auto;
    padding: 0 24px;
  }

  @media print {
    .print-page {
      max-width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`;

export default function PrintLayout() {
  return (
    <>
      <style>{printStyles}</style>

      <div className="print-root">

        {/* Screen-only toolbar */}
        <div className="print-toolbar">
          <span className="print-toolbar-brand">PropManager</span>
          <div className="print-actions">
            <button
              className="print-btn print-btn-outline"
              onClick={() => window.history.back()}
            >
              ← Back
            </button>
            <button
              className="print-btn print-btn-gold"
              onClick={() => window.print()}
            >
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Printable content */}
        <div className="print-page">
          <Outlet />
        </div>

      </div>
    </>
  );
}