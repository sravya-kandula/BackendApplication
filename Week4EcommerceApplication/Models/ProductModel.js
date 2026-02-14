import { Schema, model } from "mongoose";

/* ---------- PRODUCT SCHEMA ---------- */
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  brand: {
    type: String,
    required: [true, "brand is required"],
  },
  quantity:{
    
  }
});

/* ---------- PRODUCT MODEL ---------- */
export const ProductModel = model("Product", productSchema);
