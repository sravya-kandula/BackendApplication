import express from "express";
import mongoose from "mongoose";
import { userApi } from "../API/UserApi.js";
import { productApi } from "./API/ProductApi.js";

const app = express();

// middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Ecommerce")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err.message));

// routes
app.use("/user-api", userApi);
app.use("/product-api", productApi);

// centralized error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: "error", reason: err.message });
});

// server start
app.listen(3000, () => console.log("Server running on port 3000"));
