const mongoose = require("mongoose");

const { Schema } = mongoose;

const Student = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  role: { type: String, required: true },
  beforeBootcamp: { type: String, required: true },
  finalWords: { type: String, required: true },
  github: { type: String, required: true },
});

module.exports = mongoose.model("Student", Student);
