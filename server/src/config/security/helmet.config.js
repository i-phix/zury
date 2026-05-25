import helmet from 'helmet'

export const helmetConfig = helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production',
  crossOriginEmbedderPolicy: false,
})
