/* ═══════════════════════════════════════════════════════════════
   Contact Us — Contact Service
   src/modules/contact-us/services/contact.service.js
═══════════════════════════════════════════════════════════════ */

export const contactService = {
  async submit(payload) {
    const res = await fetch("/api/contact-us", {
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