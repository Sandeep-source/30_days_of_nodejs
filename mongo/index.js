const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sandeep:sandeep@cluster0.ab8ysr1.mongodb.net/sample_mflix?retryWrites=true&w=majority"
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

