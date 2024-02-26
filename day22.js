const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@localhost:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
})

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
  });

const Category = mongoose.model('Category', categorySchema);

const Product = mongoose.model('Product', productSchema);

async function getProductsPopulatedWithCategory() {
    try {
      const products = await Product.find().populate('category');
      return products;
    } catch (err) {
      console.error(err);
      return null;
    }
}

async function createdProducts(){
    const cat1 = new Category({
        name: "Software",
        description: "Non tengible product"
    })
    
    await cat1.save()
    
    const prod1 = new Product({
        name: "Windows - 10",
        price: 10000,
        quantity: 5,
        category: cat1._id
    })
    
    await prod1.save()
    
    const cat2 = new Category({
        name: "Hardware",
        description: "Tengible product"
    })
         
    await cat2.save()
    
    const prod2 = new Product({
        name: "Ram 10 GB",
        price: 1000,
        quantity: 3,
        category: cat2._id
    })
    
    await prod2.save()
}

/**
 * Retrieves all products with populated category details from MongoDB
 * @returns {Array} - Array of product objects with populated category details
 */
async function getProductsPopulatedWithCategory() {
    try{
        const products = await Product.find().populate('category')
        console.log(products)
    }catch(err){
        console.log(`Error getting product data: ${err}`)
    } 
}

createdProducts()

getProductsPopulatedWithCategory()