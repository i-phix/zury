/* ═══════════════════════════════════════════════════════════════
   Zuri — Homepage Static Data
   src/modules/home/constants/homeData.jsx
   Centralised so copy changes never touch component logic.
═══════════════════════════════════════════════════════════════ */

/* ── SVG Icons ──────────────────────────────────────────────── */
export const icons = {
  building: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="16" height="11" rx="1"/>
      <path d="M6 18V12h8v6"/>
      <path d="M2 7l8-5 8 5"/>
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 15l4-5 3 3 4-6 3 4"/>
      <path d="M1 15h18"/>
    </svg>
  ),
  file: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2h8l4 4v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z"/>
      <path d="M12 2v4h4"/>
      <path d="M7 9h6M7 12h6M7 15h4"/>
    </svg>
  ),
  wrench: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 2.3a5 5 0 00-6.9 6.9L2 15l3 3 5.8-5.8a5 5 0 006.9-6.9l-2.8 2.8-2-2 2.8-2.8z"/>
    </svg>
  ),
  chat: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10c0 3.866-3.582 7-8 7a8.8 8.8 0 01-4-.95L2 18l1.08-3.77A6.7 6.7 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z"/>
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2l7 3v5c0 4.418-3.134 8.548-7 9.5C6.134 18.548 3 14.418 3 10V5l7-3z"/>
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  ),
};

/* ── Nav Links ──────────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Property Type", href: "#",          dropdown: true,  dropdownType: "property" },
  { label: "Pricing",       href: "#",          dropdown: true,  dropdownType: "pricing"  },
  { label: "FAQ",           href: "#faq",       dropdown: false },
  { label: "Events",        href: "#events",    dropdown: true,  dropdownType: "events"   },
  { label: "Blog",          href: "#blog",      dropdown: false },
  { label: "Contact Us",    href: "#contact",   dropdown: false },
  { label: "Resources",     href: "#resources", dropdown: false, highlight: true },
];

/* ── Hero Stats ─────────────────────────────────────────────── */
export const HERO_STATS = [
  { num: "12k+", label: "Properties managed"  },
  { num: "98%",  label: "Uptime guarantee"     },
  { num: "4.9★", label: "Average rating"       },
  { num: "180+", label: "Countries supported"  },
];

/* ── Features ───────────────────────────────────────────────── */
export const FEATURES = [
  {
    icon:  icons.building,
    title: "Property Management",
    desc:  "Manage every property, unit, and amenity from a single elegant dashboard.",
  },
  {
    icon:  icons.file,
    title: "Leasing & Applications",
    desc:  "Digital leases, e-signatures, background screening — end-to-end.",
  },
  {
    icon:  icons.chart,
    title: "Financial Reporting",
    desc:  "Real-time P&L, owner statements, and one-click tax exports.",
  },
  {
    icon:  icons.wrench,
    title: "Maintenance Tracking",
    desc:  "Work orders, vendor management, and inspection checklists, unified.",
  },
  {
    icon:  icons.chat,
    title: "Tenant Communications",
    desc:  "In-app messaging, SMS broadcasts, and smart announcement templates.",
  },
  {
    icon:  icons.shield,
    title: "Roles & Permissions",
    desc:  "Granular access control for managers, owners, tenants, and vendors.",
  },
];

/* ── Portals ────────────────────────────────────────────────── */
export const PORTALS = [
  {
    num:   "01",
    title: "Tenant Portal",
    desc:  "Give tenants a beautiful self-service experience they'll actually use.",
    items: [
      "Pay rent online",
      "Submit maintenance requests",
      "View lease & documents",
      "Track payment history",
    ],
  },
  {
    num:   "02",
    title: "Owner Portal",
    desc:  "Keep property owners informed and confident in your management.",
    items: [
      "Live occupancy overview",
      "Monthly statements",
      "Maintenance visibility",
      "Payout tracking",
    ],
  },
  {
    num:   "03",
    title: "Vendor Portal",
    desc:  "Streamline contractor workflows and eliminate back-and-forth.",
    items: [
      "View assigned work orders",
      "Submit vendor invoices",
      "Update job status",
      "Communication log",
    ],
  },
];

/* ── Testimonial ────────────────────────────────────────────── */
export const TESTIMONIAL = {
  quote:    "Zuri transformed how we handle our 400-unit portfolio. What used to take a team of three now runs almost automatically.",
  initials: "SR",
  name:     "Sarah Ruto",
  role:     "Director, Skyline Property Group — Nairobi",
};

/* ── Footer Links ───────────────────────────────────────────── */
export const FOOTER_LINKS = ["Privacy", "Terms", "Support", "Status"];

/* Property Types ─────────────────────────────────────────── */
export const PROPERTY_TYPES = [
  {
    label:       "Residential",
    icon:        "/assets/icons/ui/property/residential.svg",
    slug:        "residential",
    featuresHref: "/residential-features",
    pricingHref:  "/residential-features/#pricing-zuri",
  },
  {
    label:       "Commercial",
    icon:        "/assets/icons/ui/property/commercial.svg",
    slug:        "commercial",
    featuresHref: "/commercial-features",
    pricingHref:  "/commercial-features/#pricing-zuri",
  },
  {
    label:       "Affordable Housing",
    icon:        "/assets/icons/ui/property/affordable-housing.svg",
    slug:        "affordable-housing",
    featuresHref: "/affordable-housing-features",
    pricingHref:  "/affordable-housing-features/#pricing-zuri",
  },
  {
    label:       "Self Storage",
    icon:        "/assets/icons/ui/property/self-storage.svg",
    slug:        "self-storage",
    featuresHref: "/storage-features",
    pricingHref:  "/storage-features/#pricing-zuri",
  },
  {
    label:       "Associations",
    icon:        "/assets/icons/ui/property/associations.svg",
    slug:        "associations",
    featuresHref: "/associations-features",
    pricingHref:  "/associations-features/#pricing-zuri",
  },
  {
    label:       "Manufactured Housing",
    icon:        "/assets/icons/ui/property/manufactured-housing.svg",
    slug:        "manufactured-housing",
    featuresHref: "/manufactured-housing-features",
    pricingHref:  "/manufactured-housing-features/#pricing-zuri",
  },
];

export const PRICING_DATA = {
  "residential": {
    cta: { label: "Learn More", href: "/residential-features" },
    plans: [
      {
        label: "Breeze",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "minimums apply",
      },
      {
        label: "Breeze Premier",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "terms & minimums apply",
      },
    ],
    features: [
      { label: "Easy setup", plans: ["Breeze", "Breeze Premier"] },
      { label: "Property accounting", plans: ["Breeze", "Breeze Premier"] },
      { label: "Vacancy & prospect tracking", plans: ["Breeze", "Breeze Premier"] },
      { label: "ILS posting", plans: ["Breeze", "Breeze Premier"] },
      { label: "Online applications", plans: ["Breeze", "Breeze Premier"] },
      { label: "Online payments", plans: ["Breeze", "Breeze Premier"] },
      { label: "Online maintenance", plans: ["Breeze", "Breeze Premier"] },
      { label: "Online leasing*", plans: ["Breeze", "Breeze Premier"] },
      { label: "Email & text communications", plans: ["Breeze", "Breeze Premier"] },
      { label: "Walk-in payments with PayNearMe", plans: ["Breeze", "Breeze Premier"] },
      { label: "Vendor payments", plans: ["Breeze", "Breeze Premier"] },
      { label: "Owner payments & reports", plans: ["Breeze", "Breeze Premier"] },
      { label: "Live chat support", plans: ["Breeze", "Breeze Premier"] },
      { label: "Renters insurance*", plans: ["Breeze", "Breeze Premier"] },
      { label: "Resident screening*", plans: ["Breeze", "Breeze Premier"] },
      { label: "Corporate websites*", plans: ["Breeze", "Breeze Premier"] },
      { label: "Property websites*", plans: ["Breeze Premier"] },
      { label: "AI-powered chatbot*", plans: ["Breeze Premier"] },
      { label: "State-based lease documents*", plans: ["Breeze Premier"] },
      { label: "Maintenance call center*", plans: ["Breeze Premier"] },
      { label: "Rent deferment", plans: ["Breeze Premier"] },
    ],
    footnote: "*Additional fees apply",
  },

  "commercial": {
    cta: { label: "Learn More", href: "/commercial-features" },
    plans: [
      {
        label: "Breeze",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "minimums apply",
      },
      {
        label: "Breeze Premier",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "terms & minimums apply",
      },
    ],
    features: [],
    footnote: "*Additional fees apply",
  },

  "affordable-housing": {
    cta: { label: "Learn More", href: "/affordable-housing-features" },
    plans: [
      {
        label: "Breeze",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "minimums apply",
      },
      {
        label: "Breeze Premier",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "terms & minimums apply",
      },
    ],
    features: [],
    footnote: "*Additional fees apply",
  },

  "self-storage": {
    cta: { label: "Learn More", href: "/storage-features" },
    plans: [
      {
        label: "Breeze Premier",
        priceType: "contact",
        phone: "(800) 866-1144",
        contactHref: "/contact",
      },
    ],
    features: [
      { label: "Easy setup", plans: ["Breeze Premier"] },
      { label: "Access to RentCafe.com storage leads", plans: ["Breeze Premier"] },
      { label: "Online leasing", plans: ["Breeze Premier"] },
      { label: "Online payments", plans: ["Breeze Premier"] },
      { label: "Vacancy & prospect tracking", plans: ["Breeze Premier"] },
      { label: "Security gate integration", plans: ["Breeze Premier"] },
      { label: "Email & text messaging", plans: ["Breeze Premier"] },
      { label: "Vendor payments", plans: ["Breeze Premier"] },
      { label: "Live chat support", plans: ["Breeze Premier"] },
      { label: "Integrated accounting", plans: ["Breeze Premier"] },
      { label: "Owner payments & reports", plans: ["Breeze Premier"] },
      { label: "Role-based security tools", plans: ["Breeze Premier"] },
      { label: "Customer relationship management", plans: ["Breeze Premier"] },
      { label: "Enhanced rent, discount & pricing tools", plans: ["Breeze Premier"] },
      { label: "RV & boat tracking", plans: ["Breeze Premier"] },
      { label: "Auction manager", plans: ["Breeze Premier"] },
      { label: "Job cost tracking", plans: ["Breeze Premier"] },
    ],
    footnote: null,
  },

  "associations": {
    cta: { label: "Learn More", href: "/associations-features" },
    plans: [
      {
        label: "Breeze Premier",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "minimums apply",
      },
    ],
    features: [
      { label: "Easy setup", plans: ["Breeze Premier"] },
      { label: "Property accounting", plans: ["Breeze Premier"] },
      { label: "Owner & board tracking", plans: ["Breeze Premier"] },
      { label: "Violations management", plans: ["Breeze Premier"] },
      { label: "Fee & assessment posting", plans: ["Breeze Premier"] },
      { label: "Online payments", plans: ["Breeze Premier"] },
      { label: "Online maintenance", plans: ["Breeze Premier"] },
      { label: "Email & text messaging", plans: ["Breeze Premier"] },
      { label: "Vendor payments", plans: ["Breeze Premier"] },
      { label: "Owner payments & reports", plans: ["Breeze Premier"] },
      { label: "Live chat support", plans: ["Breeze Premier"] },
      { label: "Menu-level security", plans: ["Breeze Premier"] },
      { label: "Corporate accounting", plans: ["Breeze Premier"] },
      { label: "Batch processing", plans: ["Breeze Premier"] },
      { label: "Invoice approval & processing", plans: ["Breeze Premier"] },
      { label: "Customizable financial statements", plans: ["Breeze Premier"] },
      { label: "Job cost tracking", plans: ["Breeze Premier"] },
      { label: "Corporate websites*", plans: ["Breeze Premier"] },
    ],
    footnote: "*Additional fees apply",
  },

  "manufactured-housing": {
    cta: { label: "Learn More", href: "/manufactured-housing-features" },
    plans: [
      {
        label: "Breeze",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "minimums apply",
      },
      {
        label: "Breeze Premier",
        priceType: "fixed",
        price: "$1",
        priceNote: "per unit / per month",
        disclaimer: "terms & minimums apply",
      },
    ],
    features: [],
    footnote: "*Additional fees apply",
  },
};