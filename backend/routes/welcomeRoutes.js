import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Email function
const sendWelcomeEmail = async (name, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use Gmail App Password
    },
  });

  const mailOptions = {
  from: `"BraveHearts" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Welcome to BraveHearts – Let’s Fight Cancer Together 💪",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto;">
      <h2 style="color: #d63384;">Hi ${name},</h2>

      <p>Welcome to <strong>BraveHearts</strong> – where compassion meets action. We're so glad you've joined us. 💖</p>

      <p><strong>Why we exist:</strong><br>
      Every day, people are fighting a battle against cancer. Our mission is to stand by them, offering emotional, financial, and social support – and we can't do it without heroes like you.</p>

      <h3 style="color: #20c997;">🤝 How You Can Help</h3>
      <ul>
        <li><strong>Volunteer:</strong> Sign up to help us organize events, offer support to families, and bring hope to patients.</li>
        <li><strong>Donate:</strong> Your donations help us fund treatment, provide essential supplies, and run our support programs.</li>
        <li><strong>Share Stories:</strong> Read and submit inspiring real-life cancer journeys that uplift and give hope.</li>
        <li><strong>Stay Updated:</strong> Follow the latest <a href="https://your-site.com/news" target="_blank">news, events, and breakthroughs</a> in our community.</li>
      </ul>

      <h3 style="color: #0d6efd;">💡 Real Impact</h3>
      <p>From providing urgent aid to patients who can't afford chemotherapy, to connecting lonely survivors with support groups, BraveHearts is making a difference. <strong>With your support, we can help even more.</strong></p>

      <h3 style="color: #fd7e14;">📢 Hear from Our Warriors</h3>
      <p>Explore powerful testimonials and success stories from those who found strength and healing through BraveHearts. Their journeys will inspire you to keep going and give more. <a href="https://your-site.com/stories" target="_blank">Read Stories →</a></p>

      <p>If you have any questions, ideas, or just want to say hi, reply to this email – we’d love to hear from you.</p>

      <br/>
      <p>With love and gratitude,</p>
      <strong style="color: #6610f2;">– The BraveHearts Team</strong>
      <br/><br/>
      <hr/>
      <p style="font-size: 12px; color: #888;">You’re receiving this email because you signed in to BraveHearts. We’re honored to have you.</p>
    </div>
  `,
};


  await transporter.sendMail(mailOptions);
  console.log("📨 Welcome email sent to:", email);
};

// Route to trigger welcome email
router.post("/send-welcome-email", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    await sendWelcomeEmail(name, email);
    res.status(200).json({ message: "Welcome email sent successfully" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ error: "Failed to send welcome email" });
  }
});

export default router;
