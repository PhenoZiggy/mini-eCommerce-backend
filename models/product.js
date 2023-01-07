import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    SKU: {
      type: String,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      trim: true, // remove whitespace
      required: true,
    },
    QTY: {
      type: Number,
      required: true,
    },
    Description: {
      type: String,
      trim: true, // remove whitespace
      required: false,
    },
    ImageIDs: {
      type: Array,
    },
    //selected Image ID
    selectedImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
