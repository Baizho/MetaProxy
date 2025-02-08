// utils/db.ts
import mongoose from "mongoose"

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
// console.log("MONGODB_URI", process.env.NEXT_PUBLIC_MONGODB_URI);

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

/**
 * Global is used here to maintain a cached connection across hot reloads in development.
 * This prevents connections growing exponentially during API Route usage.
 */

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        // Assign the promise to cached.promise
        cached.promise = mongoose.connect(MONGODB_URI!, opts);

        // Resolve the promise and assign the connection to cached.conn
        cached.conn = await cached.promise;
    }

    // Return the cached connection
    return cached.conn;
}

export default dbConnect;