import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    hashtags: [String],
    imageUrl: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Artwork", artworkSchema);
