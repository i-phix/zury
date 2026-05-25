import { ROLES } from '../constants/roles'

export const hasRole = (user, role) => user?.role === role

export const hasAnyRole = (user, roles) => roles.includes(user?.role)

export const isAdmin = (user) =>
  hasAnyRole(user, [ROLES.SUPER_ADMIN, ROLES.PROPERTY_MANAGER])

export const hasPermission = (user, permission) =>
  user?.permissions?.includes(permission) ?? false

export const hasAnyPermission = (user, permissions) =>
  permissions.some((p) => hasPermission(user, p))
