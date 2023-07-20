const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Resource = require("./userSchema");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1/leetcode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  })
  .catch((error) => {
    console.error("Error establishing connection to DB", error);
  });
