const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const user = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { collection: "test" }
);

const userModel = mongoose.model("User", user);

async function getUsers() {
  const users = await userModel.find();
  return users;
}

const app = express();

const PORT = process.env.PORT | 3000;

app.get("/users", async (req, res) => {
  const user = await getUsers();
  res.send(user);
});

app.get("/average-age", async (req, res) => {
  const user = await userModel.aggregate([
    {
      $group: {
        _id: null,
        avgAge: {
          $avg: "$age",
        },
      },
    },
  ]);
  res.send(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
