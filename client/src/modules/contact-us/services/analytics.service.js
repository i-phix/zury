/* ═══════════════════════════════════════════════════════════════
   Contact Us — Analytics Service
   src/modules/contact-us/services/analytics.service.js
═══════════════════════════════════════════════════════════════ */

export const analyticsService = {
  trackFormViewed() {
    fire("contact_form_viewed");
  },

  trackCountrySelected(country) {
    fire("contact_country_selected", { country });
  },

  trackFormSubmitted(country, portfolio) {
    fire("contact_form_submitted", { country, portfolio });
  },

  trackSubmitError(reason) {
    fire("contact_form_error", { reason });
  },
};

function fire(eventName, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch (err) {
    // Never let analytics crash the app
  }
}