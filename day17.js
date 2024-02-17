const mongoose = require('mongoose')

require('dotenv').config()

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const userModel = mongoose.model("User",userSchema)

mongoose.connect(
    process.env.MONGO_URL
).then(()=>{
    console.log('Connected to mongo db...')
}).catch((err)=>{
    console.log(`Error: ${err}`)
})

const userObj = userModel({
    name: "Random User",
    email: "randomuser@randomserver.com"
})

userObj.save().then(user=>{
    console.log("Saved to db...")
    console.log(user)
}).catch((err)=>{
    console.log("Error saving user...")
    console.log(err)

})
