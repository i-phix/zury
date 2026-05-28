import 'dotenv/config'
import express from 'express'
import http from 'http'
import { connectDB } from './database/connection.js'
import { initSocket } from './sockets/socket.server.js'
import { corsConfig } from './config/security/cors.config.js'
import { helmetConfig } from './config/security/helmet.config.js'
import { rateLimiter } from './shared/middleware/rateLimiter.js'
import { requestLogger } from './shared/middleware/requestLogger.js'
import { errorHandler } from './shared/middleware/errorHandler.js'
import contactUsRoutes from "./modules/contact-us/routes/contact-us.routes.js";


// Route imports — uncomment as modules are built
// import authRoutes from './modules/auth/routes/auth.routes.js'
// import userRoutes from './modules/users/routes/users.routes.js'
// import propertyRoutes from './modules/properties/routes/properties.routes.js'

const app = express()
const server = http.createServer(app)

app.use("/api/contact-us", contactUsRoutes);
// Security
app.use(helmetConfig)
app.use(corsConfig)


// Body parsing
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Logging
app.use(requestLogger)

// Rate limiting
app.use('/api', rateLimiter)

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok', timestamp: new Date() }))

// API routes
app.use('/api/v1', (_req, res) => res.json({ message: 'PropManager API v1' }))

// Error handler (must be last)
app.use(errorHandler)

// Socket.io
initSocket(server)

// Start
const PORT = process.env.PORT || 5000
connectDB().then(() => {
  server.listen(PORT, () => console.log('Server running on port ' + PORT))
})

export default app
