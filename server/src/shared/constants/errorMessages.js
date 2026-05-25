export const ERRORS = {
  UNAUTHORIZED:      'Authentication required',
  FORBIDDEN:         'You do not have permission to perform this action',
  NOT_FOUND:         (resource) => resource + ' not found',
  DUPLICATE:         (field)    => field + ' already exists',
  VALIDATION:        'Validation failed',
  INVALID_TOKEN:     'Invalid or expired token',
  ACCOUNT_INACTIVE:  'Account is inactive',
  WRONG_PASSWORD:    'Invalid credentials',
}
