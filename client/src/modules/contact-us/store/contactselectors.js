/* ═══════════════════════════════════════════════════════════════
   Contact Us — Selectors
   src/modules/contact-us/store/contactSelectors.js
═══════════════════════════════════════════════════════════════ */

/** @param {import("@app/store").RootState} state */
export const selectSubmitStatus = (state) => state.contact.submitStatus;
export const selectServerError  = (state) => state.contact.serverError;
export const selectLeadId       = (state) => state.contact.leadId;
export const selectIsLoading    = (state) => state.contact.submitStatus === "loading";
export const selectIsSuccess    = (state) => state.contact.submitStatus === "success";
export const selectIsError      = (state) => state.contact.submitStatus === "error";