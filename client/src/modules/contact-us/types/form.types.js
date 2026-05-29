/* ═══════════════════════════════════════════════════════════════
   Contact Us — Form Types (JSDoc)
   src/modules/contact-us/types/form.types.js
═══════════════════════════════════════════════════════════════ */

/**
 * @typedef {"text"|"email"|"tel"|"select"|"textarea"} FieldType
 */

/**
 * @typedef {Object} FieldDescriptor
 * @property {string}       name
 * @property {FieldType}    type
 * @property {string}       placeholder
 * @property {boolean}      required
 * @property {string}       [row]          - Groups fields on the same row
 * @property {number}       [rows]         - For textarea
 * @property {Array}        [options]      - For select
 * @property {Function}     validate       - (value: string) => string (error | "")
 */

/**
 * @typedef {Object} FormValues
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} phone
 * @property {string} phoneCode
 * @property {string} company
 * @property {string} country
 * @property {string} portfolio
 * @property {string} comments
 */

/**
 * @typedef {Partial<Record<keyof FormValues, string>>} FormErrors
 */

/**
 * @typedef {Partial<Record<keyof FormValues, boolean>>} FormTouched
 */

/**
 * @typedef {"idle"|"loading"|"success"|"error"} SubmitStatus
 */

/**
 * @typedef {"country"|"form"} FormStep
 */

/**
 * @typedef {Object} FormState
 * @property {FormStep}     step
 * @property {FormValues}   values
 * @property {FormErrors}   errors
 * @property {FormTouched}  touched
 * @property {boolean}      brochure
 * @property {SubmitStatus} submitStatus
 * @property {string|null}  serverError
 */