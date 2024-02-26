const express = require('express')

const mongoose = require("mongoose");
require('dotenv').config()
mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

  const course = new mongoose.Schema({
    name: String,
    email: String,
    password: { type: String, default: "123456789" },
  },{collection: "users"});
  
const courseModel = mongoose.model("User",course)

async function getUsers(){
    const users = await courseModel.find()
    return users
}

const app = express()

const PORT = process.env.PORT | 3000

app.get('/users',async (req,res)=>{
    const user = await getUsers()
    res.send(user)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`)
})