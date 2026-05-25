export const HTTP = {
  OK: 200, CREATED: 201, NO_CONTENT: 204,
  BAD_REQUEST: 400, UNAUTHORIZED: 401, FORBIDDEN: 403,
  NOT_FOUND: 404, CONFLICT: 409, INTERNAL_SERVER_ERROR: 500,
}

export const LEASE_STATUS = {
  DRAFT: 'draft', ACTIVE: 'active',
  EXPIRING: 'expiring_soon', EXPIRED: 'expired', TERMINATED: 'terminated',
}

export const PAYMENT_STATUS = {
  PENDING: 'pending', PAID: 'paid', PARTIAL: 'partial',
  OVERDUE: 'overdue', FAILED: 'failed', REFUNDED: 'refunded',
}

export const WORK_ORDER_STATUS = {
  OPEN: 'open', ASSIGNED: 'assigned', IN_PROGRESS: 'in_progress',
  ON_HOLD: 'on_hold', COMPLETED: 'completed', CANCELLED: 'cancelled',
}

export const UNIT_STATUS = {
  VACANT: 'vacant', OCCUPIED: 'occupied',
  RESERVED: 'reserved', MAINTENANCE: 'maintenance',
}

export const APPLICATION_STATUS = {
  SUBMITTED: 'submitted', SCREENING: 'screening',
  APPROVED: 'approved', DENIED: 'denied', WITHDRAWN: 'withdrawn',
}
