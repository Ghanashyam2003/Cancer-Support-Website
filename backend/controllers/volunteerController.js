const Volunteer = require("../models/Volunteer");
const nodemailer = require("nodemailer");

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();

    // Send confirmation email
    await sendConfirmationEmail(newVolunteer.email, newVolunteer.name);

    res.status(201).json({ message: "Volunteer registered successfully !" });
  } catch (error) {
    console.error("Error saving volunteer:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Function to send a thank-you email
const sendConfirmationEmail = async (to, name) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,       // Your Gmail
        pass: process.env.EMAIL_PASS,       // App password (not your regular password)
      },
    });

    const mailOptions = {
      from: `"Cancer Support Team" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🙏 Thank You for Volunteering with Us!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #d6336c;">Hi ${name},</h2>
          <p>Thank you for offering to volunteer with <strong>Cancer Support</strong>.</p>
          <p>We are truly grateful for your willingness to support people battling cancer. Your contribution means a lot to us and to the community.</p>
          <p>Our team will review your details and contact you shortly with the next steps.</p>
          <br/>
          <p>With appreciation,</p>
          <p><strong>The Cancer Support Team</strong></p>
          <hr />
          <p style="font-size: 12px; color: #777;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
