const express = require('express')
const categories = require('./routes/categories')
const mongoose = require('mongoose')
const students = require('./routes/students')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://root:root@localhost:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


const PORT = process.env.PORT | 3000;

app.use(categories)

app.use('/api/students',students)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}..`)
})