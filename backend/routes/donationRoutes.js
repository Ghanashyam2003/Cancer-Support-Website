// routes/donationRoutes.js
import express from "express";
import Donor from "../models/Donor.js";

const router = express.Router();

// Handle donation POST request
router.post("/", async (req, res) => {
  try {
    const { fullName, email, amount } = req.body;

    // Validate required fields
    if (!fullName || !email || !amount) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save donor data to MongoDB
    const newDonor = new Donor({ fullName, email, amount });
    await newDonor.save();

    // Respond with success message
    res.status(201).json({ message: "Donation saved successfully" });

  } catch (err) {
    console.error("Error saving donation:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
