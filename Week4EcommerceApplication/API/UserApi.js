import exp from "express";
import { UserModel } from "../Models/UserModel.js"; // <-- from API folder, go up one level
import { ProductModel } from "../Models/ProductModel.js"; // <-- same, go up one level
import { hash } from "bcryptjs";

export const userApi = exp.Router();

// GET ALL USERS
userApi.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ message: "users", payload: users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE USER (hash password)
userApi.post("/users", async (req, res) => {
  try {
    let newUser = req.body;
    await new UserModel(newUser).validate();
    newUser.password = await hash(newUser.password, 12);

    const newUserDoc = new UserModel(newUser);
    await newUserDoc.save({ validateBeforeSave: false });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD PRODUCT TO CART
userApi.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  try {
    const { uid, pid } = req.params;

    const user = await UserModel.findById(uid);
    if (!user) return res.status(404).json({ message: "User not found" });

    const product = await ProductModel.findById(pid);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const cartItem = user.cart.find((item) => item.product.toString() === pid);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      user.cart.push({ product: pid, quantity: 1 });
    }

    await user.save();
    await user.populate("cart.product");

    res
      .status(200)
      .json({ message: "Cart updated successfully", payload: user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET USER WITH CART
userApi.get("/users/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const userObj = await UserModel.findById(uid).populate(
      "cart.product",
      "name price brand",
    );
    res.status(200).json({ message: "User", payload: userObj });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

