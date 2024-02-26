const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://root:root@localhost:27017")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

/**
 * Express route to create a new product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function createProductRoute(req, res) {
  // Your implementation here
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const prod1 = new Product({
    name: name,
    price: price,
    quantity: quantity,
  });

  await prod1.save();
  res.json(prod1)
}

/**
 * Express route to retrieve all products
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getAllProductsRoute(req, res) {
  // Your implementation here
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json(`Error getting product data: ${err}`);
  }
}

/**
 * Express route to update a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function updateProductRoute(req, res) {
  // Your implementation here
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const id = req.body.id;

  const product = await Product.find((id = id));
  product.name = name;
  product.price = price;
  product.quantity = quantity;
  await prod1.save();
}

/**
 * Express route to delete a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function deleteProductRoute(req, res) {
  // Your implementation here
  try {
    const product = await Product.findByIdAndDelete((id = req.body.id));
    console.log("Deleted product:", product);
    return res.json(["Product Deletion Success",product]);
  } catch (err) {
    console.log("Error deleting product:", err);
    return res.json("Product Deletion Failed");
  }
}

const app = express();

app.use(express.json());

const PORT = process.env.PORT | 3000;

app.get("/product", getAllProductsRoute);

app.post("/product", createProductRoute);

app.delete("/product", deleteProductRoute);

app.put("/product", updateProductRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
