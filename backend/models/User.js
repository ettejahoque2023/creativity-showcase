import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // dashboard e show hobe
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    artisticType: {
      type: String,
      enum: ["Photographer", "Painter", "Writer","Digital Creater","Author","Digital Artist","Illustrator", "other"],
      default: "other",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
