import express from "express";
import { updateProfile } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// 🔥 Update bio + avatar
router.put(
  "/profile",
  authMiddleware,
  upload.single("avatar"),
  updateProfile
);

export default router;
