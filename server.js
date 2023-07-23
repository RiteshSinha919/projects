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

app.post("/user/login/", async (req, res) => {
  const { userEmail, userPassword } = req.body;
    try {
      const user = await Resource.findOne({ userEmail, userPassword });
      if(!user){
        return res.status(404).json({message: "The username and/or password you specified are not correct."})
      }
      return res.status(202).json({message: "Login Successful", user});
    } catch (error){
      console.error(error);
      res.status(500).json({error: "internal Server Error"});
    }
});

app.post("/user/register/", (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const existingUser = new Resource({userEmail, userPassword});
    existingUser.save();
    res.status(201).json(existingUser);
  } catch (error){
    res.status(500).json({error: "Internal Server Error"});
  }
})



app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
})

