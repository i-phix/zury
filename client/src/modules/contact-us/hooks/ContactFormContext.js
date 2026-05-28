/* ═══════════════════════════════════════════════════════════════
   Contact Us — Form Context
   src/modules/contact-us/hooks/ContactFormContext.js
═══════════════════════════════════════════════════════════════ */
import { createContext, useContext } from "react";

export const ContactFormContext = createContext(null);

export function useContactFormContext() {
  const ctx = useContext(ContactFormContext);
  if (!ctx) throw new Error("useContactFormContext must be used inside ContactFormProvider");
  return ctx;
}