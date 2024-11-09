import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import morgan from "morgan";
import jobRouter from "./routes/job.routes.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import authRouter from "./routes/auth.routes.js";
import authenticateUser from "./middlewares/authMiddleware.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import cloudinary from "cloudinary";
// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// middlewares
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(express.json());

// routes

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

// connection
const port = process.env.PORT || 5000;
try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
