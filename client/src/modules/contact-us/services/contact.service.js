/* ═══════════════════════════════════════════════════════════════
   Contact Us — Contact Service
   src/modules/contact-us/services/contact.service.js
═══════════════════════════════════════════════════════════════ */
import { API_ENDPOINT } from "../constants/contact.constants";

export const contactService = {
  async submit(payload) {
    const res = await fetch(API_ENDPOINT, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw { response: { data } };
    }

    return res.json();
  },
};