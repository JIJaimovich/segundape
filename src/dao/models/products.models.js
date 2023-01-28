import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import pagination from "mongoose-paginate-v2";

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
        unique: true,
        required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      index: true,
    },
    status: {
        type: Boolean,
        required: true,
        index: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        index: true,
    },
    category: {
        type: String,
        required: true,
        index: true,
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
schema.plugin(pagination);

export const ProductModel = mongoose.model("Products", schema);