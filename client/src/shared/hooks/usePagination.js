import { useState, useCallback } from 'react'
import { APP_CONFIG } from '../constants/appConfig'

export function usePagination(defaultPageSize = APP_CONFIG.PAGE_SIZE) {
  const [page, setPage]         = useState(1)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const [total, setTotal]       = useState(0)

  const totalPages = Math.ceil(total / pageSize)
  const hasNext = page < totalPages
  const hasPrev = page > 1

  const goTo      = useCallback((p) => setPage(Math.max(1, Math.min(p, totalPages))), [totalPages])
  const nextPage  = useCallback(() => goTo(page + 1), [page, goTo])
  const prevPage  = useCallback(() => goTo(page - 1), [page, goTo])
  const resetPage = useCallback(() => setPage(1), [])

  return { page, pageSize, total, totalPages, hasNext, hasPrev,
           setTotal, setPageSize, goTo, nextPage, prevPage, resetPage }
}
