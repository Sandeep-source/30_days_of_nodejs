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
  name: {type: String,required: true},
  email: String,
  password: { type: String, default: "123456789" },
},{collection: "users"});

const courseModel = mongoose.model("User",course)

async function createCourse(){
    const c1 = courseModel({
        name:"Raju",
        email:"Raju@kaju.com"
    })
    const res = await c1.save()
    console.log(res)
}

createCourse()

