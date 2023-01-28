import mongoose, { Schema } from "mongoose";
import mongooseDelete from "mongoose-delete";

const schema = new mongoose.Schema(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products",
        default: [],
      },  
    ],
    total: [
      {
        productID: {
          type: String, 
        },
        quantity: {
          type: Number,
          min: 1,          
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

schema.plugin(mongooseDelete, { deletedAt: true });

export const CartModel = mongoose.model("Cart", schema);

