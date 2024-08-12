// lib/db.js

import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI; // Add your MongoDB URI in .env.local
// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your MongoDB URI to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, we use a global variable to prevent the connection from closing during hot reloads
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's fine to create a new connection
//   client = new MongoClient(uri);
//   clientPromise = client.connect();
// }

// export default clientPromise;
