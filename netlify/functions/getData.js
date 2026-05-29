const { MongoClient } = require("mongodb");

// Cache connection across warm function calls
let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

exports.handler = async (event, context) => {
  // Prevents function from waiting for MongoDB connection to close
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const client = await connectToDatabase();
    const db = client.db("myDatabase");           // 👈 your DB name
    const collection = db.collection("myCollection"); // 👈 your collection name

    const data = await collection.find({}).limit(10).toArray();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};