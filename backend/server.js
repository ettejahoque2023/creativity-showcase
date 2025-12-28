import dotenv from "dotenv";
dotenv.config();

import express from "express";

import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import artworkRoutes from "./routes/artworkRoutes.js";


connectDB();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",               // local frontend
      "https://artgalaxy-git-main-etteja-hoques-projects.vercel.app?_vercel_share=kvvQ78cegnV8hyiCb1KVxow5Pwj4iLFq",    // 🔴 CHANGE THIS
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/artworks", artworkRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req,res)=>{
  res.send ("You app is starting");
})
app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
