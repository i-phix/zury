import 'dotenv/config'
import { connectDB } from '../connection.js'

// Import seeders as they are built:
// import { seedUsers } from './dev/users.seeder.js'
// import { seedProperties } from './dev/properties.seeder.js'
// import { seedRoles } from './production/roles.seeder.js'

const env = process.argv[2] || 'dev'

async function run() {
  await connectDB()
  console.log('Running seeders for:', env)

  if (env === 'production') {
    // await seedRoles()
  } else {
    // await seedRoles()
    // await seedUsers()
    // await seedProperties()
  }

  console.log('Seeding complete')
  process.exit(0)
}

run().catch((err) => { console.error(err); process.exit(1) })
