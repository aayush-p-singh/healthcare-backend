const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// ✅ Add new patient
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const patient = new Patient({
  ...req.body,
  doctor: req.user.id
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
    const patients = await Patient.find({ doctor: req.user.id });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✏️ Update patient
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const patient = await Patient.findOne({
      _id: req.params.id,
      doctor: req.user.id
    });

    if (!patient) {
      return res.status(404).json({ msg: "Patient not found" });
    }

    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🗑️ Delete patient
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const patient = await Patient.findOne({
      _id: req.params.id,
      doctor: req.user.id
    });

    if (!patient) {
      return res.status(404).json({ msg: "Patient not found" });
    }

    await Patient.findByIdAndDelete(req.params.id);

    res.json({ msg: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;