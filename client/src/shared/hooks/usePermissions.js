import { useSelector } from 'react-redux'
import { hasPermission, hasAnyPermission, hasRole, isAdmin } from '../utils/permissions'

export function usePermissions() {
  // Will read from auth slice once that module is built
  const user = useSelector((state) => state.auth?.user ?? null)

  return {
    user,
    can:       (permission)   => hasPermission(user, permission),
    canAny:    (permissions)  => hasAnyPermission(user, permissions),
    hasRole:   (role)         => hasRole(user, role),
    isAdmin:   ()             => isAdmin(user),
  }
}
