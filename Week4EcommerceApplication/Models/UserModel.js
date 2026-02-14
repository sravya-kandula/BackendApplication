import { Schema, model } from "mongoose";

/* ---------- CART SCHEMA ---------- */
const cartSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

/* ---------- USER SCHEMA ---------- */
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],//if the password is not given also it is taking and hashing so trackin is needed
  },
  cart: {
    type: [cartSchema], // using cartSchema here
    default: [],
  },
});

/* ---------- USER MODEL ---------- */
export const UserModel = model("User", userSchema);
