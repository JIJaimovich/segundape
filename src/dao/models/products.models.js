import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
        type: String,
        required: true,
      },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
        type: Boolean,
        required: true,
        unique: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
  },
  {
    timestamps: true,
  },
);

schema.plugin(mongooseDelete, { deletedAt: true });

export const ProductModel = mongoose.model("Product", schema);