const express = require("express");

const mongoose = require("mongoose");

require('dotenv').config()

/**
 * Establishes a connection to MongoDB using Mongoose
 */
function connectToMongoDB() {
  // Your implementation here
  return mongoose
    .connect(
      process.env.MONGO_URL
    )
    
}

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/connect", (req, res) => {
   const db = connectToMongoDB();
   db.then(() => {
    console.log("Connection is successful");
    res.send("<h2>Connection to mongodb is successful")
  })
  .catch((err) => {
    console.log(err);
    res.send(err)
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to express server</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
