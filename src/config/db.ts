import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri =
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_URI_PROD
        : process.env.MONGO_URI_LOCAL;
    const conn = await mongoose.connect(uri as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
