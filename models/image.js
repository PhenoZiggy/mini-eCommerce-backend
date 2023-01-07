import mongoose from "mongoose";

const { Schema } = mongoose;

const ImageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Image", ImageSchema);
