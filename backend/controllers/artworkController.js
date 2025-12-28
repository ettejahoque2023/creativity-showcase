import Artwork from "../models/Artwork.js";
import cloudinary from "../config/cloudinary.js";
import { errorHandler } from "../utils/errorHandler.js";

/* Upload */
export const uploadArtwork = async (req, res) => {
  try {
    const { title, description, hashtags } = req.body;

    // ✅ SAFETY CHECK (VERY IMPORTANT)
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const file = req.files[0];

    const result = await cloudinary.uploader.upload(file.path);

    const artwork = await Artwork.create({
      title,
      description,
      hashtags: hashtags ? hashtags.split(",") : [],
      imageUrl: result.secure_url,
      publicId: result.public_id,
      user: req.user,
    });

    res.status(201).json(artwork);
  } catch (error) {
    errorHandler(res, error);
  }
};


/* Landing Page */
export const getFeaturedArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find()
      .limit(8)
      .sort({ createdAt: -1 })
      .populate("user", "username name");
    res.json(artworks);
  } catch (error) {
    errorHandler(res, error);
  }
};

/* Home Gallery */
export const getAllArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find()
      .sort({ createdAt: -1 })
      .populate("user", "username name");
    res.json(artworks);
  } catch (error) {
    errorHandler(res, error);
  }
};

/* Dashboard */
export const getUserArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find({ user: req.user });
    res.json(artworks);
  } catch (error) {
    errorHandler(res, error);
  }
};

// 🔥 GET SINGLE ARTWORK DETAILS
export const getArtworkById = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id)
      .populate("user", "name email artisticType avatar");

    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    res.status(200).json(artwork);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch artwork",
      error: error.message,
    });
  }
};


/* Update */
export const updateArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) return res.status(404).json({ message: "Not found" });

    artwork.title = req.body.title || artwork.title;
    artwork.description = req.body.description || artwork.description;
    artwork.hashtags = req.body.hashtags
      ? req.body.hashtags.split(",")
      : artwork.hashtags;

    res.json(await artwork.save());
  } catch (error) {
    errorHandler(res, error);
  }
};

/* Delete */
export const deleteArtwork = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    await cloudinary.uploader.destroy(artwork.publicId);
    await artwork.deleteOne();
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    errorHandler(res, error);
  }
};

