/* ═══════════════════════════════════════════════════════════════
  src/app/AppRouter.jsx
═══════════════════════════════════════════════════════════════ */
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Home        from "../modules/home/pages/Home/Home";
import ContactUsPage from "../modules/contact-us/pages/ContactUsPage/ContactUsPage";

function PageLoader() {
  return (
    <div style={{
      display:        "flex",
      alignItems:     "center",
      justifyContent: "center",
      minHeight:      "100vh",
      background:     "#ffffff",
    }}>
      <span style={{
        fontFamily:    "'DM Sans', sans-serif",
        fontSize:       13,
        letterSpacing: "0.15em",
        color:         "#e4a80f",
        textTransform: "uppercase",
      }}>
        Loading…
      </span>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"          element={<Home />}        />
        <Route path="/contact-us"   element={<ContactUsPage />} />
        <Route path="*"          element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}