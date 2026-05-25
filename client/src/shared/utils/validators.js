export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const isPhone = (value) =>
  /^[+]?[\d\s\-().]{7,15}$/.test(value)

export const isRequired = (value) =>
  value !== null && value !== undefined && String(value).trim().length > 0

export const minLength = (min) => (value) =>
  String(value ?? '').length >= min

export const maxLength = (max) => (value) =>
  String(value ?? '').length <= max

export const isPositiveNumber = (value) =>
  !isNaN(value) && Number(value) > 0

export const isMongoId = (value) =>
  /^[a-f\d]{24}$/i.test(value)

export const validateField = (value, rules) => {
  for (const [rule, message] of rules) {
    if (!rule(value)) return message
  }
  return null
}
