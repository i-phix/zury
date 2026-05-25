import { Server } from 'socket.io'
import { env } from '../config/env.js'

let io

export function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: env.CLIENT_URL,
      credentials: true,
    },
  })

  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id)

    socket.on('join:room', (roomId) => socket.join(roomId))
    socket.on('leave:room', (roomId) => socket.leave(roomId))

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id)
    })
  })

  return io
}

export function getIO() {
  if (!io) throw new Error('Socket.io not initialized')
  return io
}
