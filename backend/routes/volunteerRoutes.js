import express from "express";
import Volunteer from "../models/Volunteer.js";
;


const router = express.Router();

router.post("/register", async (req, res) => {
    console.log("Received volunteer registration:", req.body);
  try {
    const { fullName, email, phone, availability, skills } = req.body;

    const newVolunteer = new Volunteer({
      fullName,
      email,
      phone,
      availability,
      skills,
    });

    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to register volunteer" });
  }
});

export default router;
