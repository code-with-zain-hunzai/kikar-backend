import app from "./app";
import connectDB from "./config/db";

connectDB();

export default app;


// for local development, we want to run the server

// import app from "./app";
// import connectDB from "./config/db";

// const PORT = process.env.PORT || 5000;

// connectDB();

// if (process.env.NODE_ENV !== "production") {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }
