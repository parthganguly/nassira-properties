// lib/mongodb.ts

import { MongoClient, MongoClientOptions } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}
const uri = process.env.MONGODB_URI;

// Force TLS 1.2+ and allow invalid certs in dev
const options: MongoClientOptions = {
  tls: true,
  tlsAllowInvalidCertificates: process.env.NODE_ENV !== 'production',
  retryWrites: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // Avoid creating new connections on every HMR
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };
  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise!;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Optional helper
export async function connectToDatabase() {
  const client = await clientPromise;
  const dbName =
    process.env.MONGODB_DB ||
    uri.split('/').pop()?.split('?')[0] ||
    'nassira-db';
  const db = client.db(dbName);
  return { db, client };
}

export default clientPromise;
