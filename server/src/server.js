import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { serve } from "inngest/express";
import {clerkMiddleware} from "@clerk/express";
import mongoose from "mongoose";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { functions, inngest } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use("/api/", limiter);

app.use(cors({
  origin: ENV.CLIENT_URL,
  credentials: true
}));

app.use(clerkMiddleware());

app.use("/api/inngest",serve({client: inngest,functions}));

app.use("/api/chat",chatRoutes);
app.use("/api/sessions",sessionRoutes);

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "this is the books endpoint" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong on the server!",
    error: ENV.NODE_ENV === "production" ? undefined : err.message
  });
});

const startServer = async () => {
  try {
    await connectDB();
    const server = app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
    
    // Graceful Shutdown
    const shutdown = async () => {
      console.log("Shutting down server gracefully...");
      server.close(() => {
        console.log("HTTP server closed.");
      });
      await mongoose.connection.close(false);
      console.log("MongoDB connection closed.");
      process.exit(0);
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
    
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();