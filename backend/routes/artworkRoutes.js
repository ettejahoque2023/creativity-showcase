import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  uploadArtwork,
  getFeaturedArtworks,
  getAllArtworks,
  getUserArtworks,
  getArtworkById,   // 👈 NEW
  updateArtwork,
  deleteArtwork,
} from "../controllers/artworkController.js";

const router = express.Router();

router.get("/", getFeaturedArtworks);
router.get("/home", getAllArtworks);
router.get("/my", authMiddleware, getUserArtworks);
// 🔥 SINGLE ARTWORK DETAILS
router.get("/:id", getArtworkById);
router.post("/upload", authMiddleware, upload.any(), uploadArtwork);
router.put("/:id", authMiddleware, updateArtwork);
router.delete("/:id", authMiddleware, deleteArtwork);

export default router;
