import express from "express";
import { Data } from "./models/DataSchema.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/gym")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

app.get("/", (req, res) => {
  let user = "user"
  const pass = 1234
  res.send([{
    user: user,
    pass: pass,
  }]);
});

app.post("/enroll", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newData = new Data({
      name: name,
      age: age,
      email: email,
    });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
