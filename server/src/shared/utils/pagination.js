export function getPagination(query) {
  const page     = Math.max(1, parseInt(query.page)  || 1)
  const pageSize = Math.min(100, parseInt(query.limit) || 25)
  const skip     = (page - 1) * pageSize
  return { page, pageSize, skip }
}

export function buildPaginationMeta(total, page, pageSize) {
  const totalPages = Math.ceil(total / pageSize)
  return {
    total,
    page,
    pageSize,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  }
}
