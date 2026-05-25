import { APP_CONFIG } from '../constants/appConfig'

export const formatCurrency = (amount, currency = APP_CONFIG.CURRENCY) =>
  new Intl.NumberFormat(APP_CONFIG.LOCALE, { style: 'currency', currency }).format(amount ?? 0)

export const formatDate = (date) => {
  if (!date) return '—'
  return new Intl.DateTimeFormat(APP_CONFIG.LOCALE, { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date))
}

export const formatDateTime = (date) => {
  if (!date) return '—'
  return new Intl.DateTimeFormat(APP_CONFIG.LOCALE, {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  }).format(new Date(date))
}

export const formatPhone = (phone) => {
  if (!phone) return '—'
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) return '(' + digits.slice(0,3) + ') ' + digits.slice(3,6) + '-' + digits.slice(6)
  return phone
}

export const formatFileSize = (bytes) => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

export const formatPercent = (value, decimals = 1) =>
  (value ?? 0).toFixed(decimals) + '%'

export const truncate = (str, maxLength = 50) =>
  str?.length > maxLength ? str.slice(0, maxLength) + '...' : str ?? ''

export const titleCase = (str) =>
  str?.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()) ?? ''
