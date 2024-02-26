const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@localhost:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
})


const Product = mongoose.model('Product', productSchema);

/**
 * Creates an index on the "name" field of the "Product" collection in MongoDB
 */
async function createProductNameIndex() {
    // Your implementation here
    productSchema.index({name:1})
}

createProductNameIndex()

Product.listIndexes().then(val=>{
    console.log(val)
})

