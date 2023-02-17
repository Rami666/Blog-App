const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/User");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://rami:1234@cluster0.uhay0n1.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch(e) {
    res.status(400).json(e);
  }
});
app.listen(4000);

// mongodb+srv://rami:1234@cluster0.uhay0n1.mongodb.net/?retryWrites=true&w=majority
