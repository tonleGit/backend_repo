// core/app.ts
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import authMiddleware from "../middleware/authMiddleware";
import apiRouter from "../controller/api";
import ApiError from "../entities/ApiError";
import cors from "cors";

const app = express();

app.use(cors());
// Middleware
app.use(express.json());

app.use(authMiddleware);
// Routes
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send(
      new ApiError(err.status || 500, err.message || "Internal Server Error")
    );
});

export default app;
