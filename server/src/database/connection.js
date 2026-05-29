import mongoose from 'mongoose'

export async function connectDB() {
  try {
    const uri = process.env.MONGO_URI
    if (!uri) throw new Error('MONGO_URI is not defined')

    await mongoose.connect(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    })

    console.log('MongoDB connected:', mongoose.connection.host)

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB error:', err)
    })

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected')
    })

  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}