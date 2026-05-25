export const getErrorMessage = (error) => {
  if (typeof error === 'string') return error
  return (
    error?.response?.data?.message ||
    error?.message ||
    'An unexpected error occurred'
  )
}

export const isAuthError = (error) =>
  error?.response?.status === 401

export const isNotFoundError = (error) =>
  error?.response?.status === 404

export const isValidationError = (error) =>
  error?.response?.status === 422

export const parseValidationErrors = (error) =>
  error?.response?.data?.errors ?? {}
