import express from "express";
import Donor from "../models/Donor.js"; // Adjust the path as necessary


const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, email, amount } = req.body;

    if (!fullName || !email || !amount) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newDonor = new Donor({ fullName, email, amount });
    await newDonor.save();

    res.status(201).json({ message: "Donation saved successfully" });

   

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


  

export default router;
