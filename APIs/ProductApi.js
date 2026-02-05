// products object
import exp from "express";

export const productapp = exp.Router();

let products = [];

// create product
productapp.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);

  res.status(201).json({ message: "product created", payload: newProduct });
});

// read all products
productapp.get("/products", (req, res) => {
  res.status(200).json({ message: "all products", payload: products });
});

// get product by id
productapp.get("/product-id/:productId", (req, res) => {
  const productid = Number(req.params.productId);

  const findProduct = products.find((p) => p.productId === productid);

  if (!findProduct) {
    return res.status(404).json({ message: "product not found" });
  }

  res.status(200).json({ message: "product found", payload: findProduct });
});

// get product by name
productapp.get("/products-name/:productname", (req, res) => {
  const productName = req.params.productname;

  const findName = products.find((p) => p.productname === productName);

  if (!findName) {
    return res.status(404).json({ message: "product name not found" });
  }

  res.status(200).json({ message: "product name found", payload: findName });
});

// update product
productapp.put("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const modifiedProduct = req.body;

  const index = products.findIndex((p) => p.productId === productId);

  if (index === -1) {
    return res.status(404).json({ message: "product not found" });
  }

  products.splice(index, 1, modifiedProduct);

  res
    .status(200)
    .json({ message: "product modified", payload: modifiedProduct });
});

// delete product
productapp.delete("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);

  const index = products.findIndex((p) => p.productId === productId);

  if (index === -1) {
    return res.status(404).json({ message: "product not found" });
  }

  products.splice(index, 1);

  res.status(200).json({ message: "product deleted" });
});
