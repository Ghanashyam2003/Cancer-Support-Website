// routes/feedbackRoutes.js
import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Define Feedback schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Feedback = mongoose.model("Feedback", feedbackSchema);

// POST /api/feedback
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(200).json({ message: "✅ Feedback submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    res.status(500).json({ message: "❌ Something went wrong. Please try again." });
  }
});

export default router;
