import express from "express";
import Volunteer from "../models/Volunteer.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// 📧 Email sender function
const sendConfirmationEmail = async (volunteer) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use your Gmail App Password here
      },
    });

    const mailOptions = {
      from: `"Cancer Support Team" <${process.env.EMAIL_USER}>`,
      to: volunteer.email,
      subject: "Thank you for volunteering with us!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Hello ${volunteer.fullName},</h2>
          <p>Thank you for signing up to volunteer with us! 🙌</p>
          <p>We're reviewing your information and will contact you shortly.</p>
          <p>If you have any questions, feel free to reply to this email.</p>
          <br/>
          <p>Warm regards,</p>
          <strong>The Cancer Support Team</strong>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Confirmation email sent to:", volunteer.email);
  } catch (err) {
    console.error("❌ Email failed:", err);
  }
};

// 🌟 Register volunteer + send confirmation email
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

    // ✅ Send confirmation email
    await sendConfirmationEmail(newVolunteer);

    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to register volunteer" });
  }
});

export default router;
