export const env = {
  NODE_ENV:     process.env.NODE_ENV || 'development',
  PORT:         parseInt(process.env.PORT) || 5000,
  MONGO_URI:    process.env.MONGO_URI,
  REDIS_URL:    process.env.REDIS_URL,
  CLIENT_URL:   process.env.CLIENT_URL || 'http://localhost:3000',
  isDev:        process.env.NODE_ENV === 'development',
  isProd:       process.env.NODE_ENV === 'production',
  isTest:       process.env.NODE_ENV === 'test',
}
