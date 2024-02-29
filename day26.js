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
 * Executes an aggregation pipeline to calculate product statistics
 * @returns {Object} - Aggregated product statistics
 */
async function getProductStatistics() {
    // Your implementation here
    try{
        const data = await Product.aggregate([
            {
              $group: {
                _id: null,
                totalProducts: { $sum: 1 },
                averagePrice: { $avg: "$price" },
                highestQuantity: { $max: "$quantity" }
              }
            },
            {
              $project: {
                _id: 0,
                totalProducts: 1,
                averagePrice: { $round: ["$averagePrice", 2] },
                highestQuantity: 1
              }
            }
          ]);
        console.log(data)
    }catch(err){
        console.log(`Error Generating aggregrated result: ${err}`)
    }
  }

  getProductStatistics()