import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5000;

connectDB();

export default app;

if (process.env.NODE_ENV !== "production") {
  console.log(`Server running on port ${PORT}`);
}
