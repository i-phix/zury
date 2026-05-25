import { useState, useCallback } from 'react'

let _id = 0

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = useCallback((message, type = 'info', duration = 4000) => {
    const id = ++_id
    setToasts((prev) => [...prev, { id, message, type, duration }])
    setTimeout(() => dismiss(id), duration)
    return id
  }, [])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const success = useCallback((msg) => toast(msg, 'success'), [toast])
  const error   = useCallback((msg) => toast(msg, 'error'),   [toast])
  const warning = useCallback((msg) => toast(msg, 'warning'), [toast])
  const info    = useCallback((msg) => toast(msg, 'info'),    [toast])

  return { toasts, toast, dismiss, success, error, warning, info }
}
