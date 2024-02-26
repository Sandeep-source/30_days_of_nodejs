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

  const user = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
          return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    password: { type: String, default: "123456789" },
  },{collection: "users"});
  
const userModel = mongoose.model("User",user)


/**
 * Adds a new user to the MongoDB database with validation
 * @param {Object} user - User object with properties username and email
 */
async function addUserWithValidation(user) {
  // Your implementation here
  try{
     const userObj = new userModel(user)
     await userObj.save()
     console.log(`User added successfully: ${userObj}`)
  }catch(err){
    console.log("Error:",err.message)
  }
}
addUserWithValidation({
  username: "Sandeep123",
  email: "hello",
  password: "1234"
})
addUserWithValidation({
  username: "Sandeep123",
  email: "hello@example.com",
  password: "1234"
})

