import exp from "express";
import { ProductModel } from "../Models/ProductModel.js";  // <-- note ../Models
export const productApi = exp.Router();

// GET ALL PRODUCTS
productApi.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ message: "products", payload: products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE PRODUCT
productApi.post("/products", async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
