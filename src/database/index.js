import mongoose from "mongoose";

const MONGODB_URI = process.env.mongoURL;

if (!MONGODB_URI) {
  throw new Error("mongoURL is not configured");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export default async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => {
        console.log("Connected to DB 🚀");
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("Connection to DB failed ⛔", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}