const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  gender: String,
  disease: String,
  prescription: String,

  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true
  }

}, { timestamps: true }); // ✅ auto adds createdAt & updatedAt

module.exports = mongoose.model("Patient", patientSchema);