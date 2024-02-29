const express = require('express')

const mongoose = require('mongoose')

const router = express.Router()

const categoriesSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:3 , maxlength: 30}
})

const categoryModel = mongoose.model('Category',categoriesSchema)


router.get('/api/categories',async (req,res)=>{
    try{
        let categories = await categoryModel.find()
        res.send(categories)
    }catch(err){
        res.send(`Error getting categories: ${err}`)
    }
})

router.post('/api/categories',async (req,res)=>{
    const p = new categoryModel({name: req.body.name})
    await p.save()
    res.send(p)
})
router.delete('/api/categories',async (req,res)=>{
    const id = req.body.id
    const category = await categoryModel.findByIdAndDelete(id)
    res.send(category)
})

router.put('/api/categories',async (req,res)=>{
    const id = req.body.id
    category = await categoryModel.findById(id)
    category.name = req.body.name
    await category.save()
    res.send(category)
})

module.exports = router