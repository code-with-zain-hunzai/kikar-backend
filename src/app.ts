import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/V1/contactRoutes";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["https://kikar-backend-delta.vercel.app/", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Contact Form API");
});

app.use("/api/V1", contactRouter);

export default app;
