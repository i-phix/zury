/* ═══════════════════════════════════════════════════════════════
   Contact Us — Contact Types (JSDoc)
   src/modules/contact-us/types/contact.types.js
═══════════════════════════════════════════════════════════════ */

/**
 * @typedef {Object} Lead
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {number} phone       - Full international number, e.g. 254791216791
 * @property {string} company
 * @property {string} country     - ISO 2-letter code, e.g. "ke"
 * @property {string} portfolio   - Portfolio type value
 * @property {string} [comments]
 * @property {boolean} brochure
 * @property {string} source
 * @property {"new"|"contacted"|"qualified"|"closed"} status
 */

/**
 * @typedef {Object} ContactApiPayload
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {number} phone
 * @property {string} company
 * @property {string} country
 * @property {string} portfolio
 * @property {string} [comments]
 * @property {boolean} brochure
 * @property {string} source
 */

/**
 * @typedef {Object} ContactApiResponse
 * @property {boolean} success
 * @property {string}  id
 */

/**
 * @typedef {Object} CountryOption
 * @property {string}   value
 * @property {string}   label
 * @property {string}   dialCode
 * @property {string[]} validStarts
 * @property {number}   localLength
 */

/**
 * @typedef {Object} PortfolioOption
 * @property {string} value
 * @property {string} label
 */