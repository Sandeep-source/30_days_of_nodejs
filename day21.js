const mongoose = require('mongoose');

// Define the schema for the Product entity
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});


const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB
mongoose.connect('mongodb://root:root@localhost:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

/**
 * Creates a new product in MongoDB
 * @param {Object} product - Product object with properties name, price, and quantity
 * @returns {Promise<Object>} - Created product object
 */
async function createProduct(product) {
  const newProduct = new Product(product);
  return await newProduct.save();
}

/**
 * Retrieves all products from MongoDB
 * @returns {Promise<Array>} - Array of product objects
 */
async function getAllProducts() {
  return await Product.find();
}

/**
 * Updates a product in MongoDB
 * @param {string} productId - ID of the product to update
 * @param {Object} updatedProduct - Updated product object
 * @returns {Promise<Object>} - Updated product object
 */
async function updateProduct(productId, updatedProduct) {
  return await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
}

/**
 * Deletes a product from MongoDB
 * @param {string} productId - ID of the product to delete
 * @returns {Promise<void>}
 */
async function deleteProduct(productId) {
  await Product.findByIdAndDelete(productId);
}

async function operations() {
  try {
    // Create a product
    const createdProduct = await createProduct({
      name: 'Product 1',
      price: 10,
      quantity: 100
    });
    console.log('Created product:', createdProduct);

    // Retrieve all products
    const allProducts = await getAllProducts();
    console.log('All products:', allProducts);

    // Update a product
    const updatedProduct = await updateProduct(createdProduct._id, {
      name: 'Updated Product 1',
      price: 15,
      quantity: 90
    });
    console.log('Updated product:', updatedProduct);

    // Delete a product
    await deleteProduct(createdProduct._id);
    console.log('Product deleted');

  } catch (err) {
    console.error('Error:', err);
  } finally {
    
    mongoose.connection.close();
  }
}
operations();
