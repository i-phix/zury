/* ═══════════════════════════════════════════════════════════════
   Zuri — Chat Widget
   src/modules/home/components/ChatWidget/ChatWidget.jsx
═══════════════════════════════════════════════════════════════ */
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget">

      {/* Panel */}
      {open && (
        <div className="chat-panel">

          {/* Header */}
          <div className="chat-header">
            <button className="chat-header-back" onClick={() => setOpen(false)} aria-label="Back">
              ‹
            </button>
            <div className="chat-header-avatar">
              <img src="/assets/icons/ui/logo/icon.png" alt="" aria-hidden="true" />
            </div>
            <div className="chat-header-info">
              <div className="chat-header-name">Zuri Support</div>
              <div className="chat-header-sub">The team can also help</div>
            </div>
            <div className="chat-header-actions">
              <button className="chat-icon-btn" aria-label="Options">⋯</button>
              <button className="chat-icon-btn" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-body">
            <div className="chat-bubble">
              <p>Hello there, welcome to Zuri.</p>
              <p>What can I help you with today?</p>
            </div>
            <div className="chat-bubble-meta">Zuri Support • Just now</div>
          </div>

          {/* Footer CTAs */}
          <div className="chat-footer">
            <a href="/contact-sales" className="chat-cta-btn">Contact Sales</a>
            <a href="/support" className="chat-cta-btn">Customer Support</a>
          </div>

        </div>
      )}

      {/* Launcher */}
      <button
        className="chat-launcher"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ee8002" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <img src="/assets/icons/ui/logo/icon.png" alt="" aria-hidden="true" />
        )}
      </button>

    </div>
  );
}