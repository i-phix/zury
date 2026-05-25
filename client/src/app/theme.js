/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],


  theme: {
    extend: {
      //Colors
      colors: {
        gold: {
          DEFAULT: "#C9971A",
          light:   "#DDB84A",
          dark:    "#A67C10",
          pale:    "#FBF6E9",
          border:  "#E8D9A8",
        },
        white: "#FFFFFF",
        surface: {
          DEFAULT: "#F7F4EE",
          paper:   "#FFFFFF",
          input:   "#FAFAF7",
        },
        divider: "#EDE5D0",
        text: {
          primary:   "#111111",
          secondary: "#6B6B6B",
          disabled:  "#B0B0B0",
          gold:      "#C9971A",
        },
        // Semantic — kept minimal for status indicators only
        success: { DEFAULT: "#2E7D32", light: "#4CAF50", dark: "#1B5E20" },
        warning: { DEFAULT: "#ED6C02", light: "#FF9800", dark: "#E65100" },
        error:   { DEFAULT: "#D32F2F", light: "#EF5350", dark: "#C62828" },
        info:    { DEFAULT: "#0288D1", light: "#03A9F4", dark: "#01579B" },
      },

      // ─── Typography ─────────────────────────────────────────────────────
      fontFamily: {
        sans: ["DM Sans", "Helvetica Neue", "Arial", "sans-serif"],
      },

      fontSize: {
        "overline": ["0.6875rem", { lineHeight: "2.5", letterSpacing: "0.10em" }],
        "caption":  ["0.75rem",   { lineHeight: "1.66" }],
        "body2":    ["0.875rem",  { lineHeight: "1.6" }],
        "body1":    ["0.9375rem", { lineHeight: "1.6" }],
        "h6":       ["1rem",      { lineHeight: "1.5",  letterSpacing: "0" }],
        "h5":       ["1.125rem",  { lineHeight: "1.4",  letterSpacing: "0" }],
        "h4":       ["1.25rem",   { lineHeight: "1.35", letterSpacing: "0" }],
        "h3":       ["1.5rem",    { lineHeight: "1.3",  letterSpacing: "-0.01em" }],
        "h2":       ["1.875rem",  { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "h1":       ["2.25rem",   { lineHeight: "1.2",  letterSpacing: "-0.02em" }],
      },

      fontWeight: {
        light:    "300",
        regular:  "400",
        medium:   "500",
        semibold: "600",
        bold:     "700",
      },

      // ─── Border Radius ──────────────────────────────────────────────────
      borderRadius: {
        sm:   "6px",
        DEFAULT: "10px",
        md:   "10px",
        lg:   "14px",
        xl:   "16px",
        "2xl": "20px",
        full: "9999px",
      },

      // ─── Box Shadows — black, light only ───────────────────────────────
      boxShadow: {
        sm:   "0 1px 4px rgba(0,0,0,0.06)",
        DEFAULT: "0 2px 8px rgba(0,0,0,0.08)",
        md:   "0 4px 16px rgba(0,0,0,0.08)",
        lg:   "0 4px 24px rgba(0,0,0,0.10)",
        xl:   "0 8px 32px rgba(0,0,0,0.10)",
        "2xl": "0 12px 48px rgba(0,0,0,0.12)",
        "3xl": "0 20px 60px rgba(0,0,0,0.14)",
        // Gold accent shadow — for primary buttons only
        "gold-sm": "0 4px 18px rgba(201,151,26,0.28)",
        "gold-md": "0 6px 24px rgba(201,151,26,0.36)",
        // Focus ring
        "focus-gold": "0 0 0 3px rgba(201,151,26,0.20)",
        "focus-ring":  "0 0 0 3px rgba(0,0,0,0.10)",
        none: "none",
      },

      // Border widths
      borderWidth: {
        DEFAULT: "1px",
        "0":   "0px",
        "0.5": "0.5px",
        "2":   "2px",
      },

      //Spacing — for padding and margin, using rem units for better scalability
      spacing: {
        "4.5": "1.125rem",
        "13":  "3.25rem",
        "15":  "3.75rem",
        "18":  "4.5rem",
      },

      // Transitions
      transitionDuration: {
        fast:    "150ms",
        DEFAULT: "180ms",
        slow:    "250ms",
      },

      transitionTimingFunction: {
        DEFAULT: "ease",
        smooth:  "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      // Letter Spacing
      letterSpacing: {
        tighter: "-0.02em",
        tight:   "-0.015em",
        snug:    "-0.01em",
        normal:  "0em",
        wide:    "0.02em",
        wider:   "0.07em",
        widest:  "0.10em",
      },
    },
  },

  // Plugins
  plugins: [],
};