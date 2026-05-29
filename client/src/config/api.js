// client/src/config/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
export default API_URL

// Usage anywhere in your app
import API_URL from '../config/api.js'

const response = await fetch(`${API_URL}/api/contact-us`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})