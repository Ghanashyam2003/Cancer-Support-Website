const Volunteer = require("../models/Volunteer");

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully" });
  } catch (error) {
    console.error("Error saving volunteer:", error);
    res.status(500).json({ error: "Server error" });
  }
};
