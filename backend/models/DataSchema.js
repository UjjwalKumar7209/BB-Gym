import mongoose from "mongoose";
const DataSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

export const Data = mongoose.model("Data", DataSchema);
