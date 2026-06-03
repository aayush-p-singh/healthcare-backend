const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// ✅ Add new patient
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const patient = new Patient({
  ...req.body,
  doctor: req.doctor.id
});
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Get all patients
router.get("/",authMiddleware, async (req, res) => {
  try {
    const patients = await Patient.find({ doctor: req.doctor.id });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;