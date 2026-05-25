export const jwtConfig = {
  secret:         process.env.JWT_SECRET,
  expiresIn:      process.env.JWT_EXPIRES_IN || '15m',
  refreshSecret:  process.env.JWT_REFRESH_SECRET,
  refreshExpires: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
}
