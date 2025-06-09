import Donor from "../models/Donor.js";
import axios from "axios";

// Enhanced fraud detection logic
const isSuspicious = (fullName, email, amount) => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return { flagged: true, reason: "Invalid amount format" };
  }

  if (amount > 100000) {
    return { flagged: true, reason: "Amount exceeds ₹1,00,000" };
  }

  const tempEmailDomains = ['mailinator.com', 'tempmail.com', '10minutemail.com'];
  const emailDomain = email.split('@')[1];
  if (tempEmailDomains.includes(emailDomain)) {
    return { flagged: true, reason: "Temporary email domain used" };
  }

  if (!fullName || fullName.length < 2 || /[!@#$%^&*]/.test(fullName)) {
    return { flagged: true, reason: "Suspicious or invalid name" };
  }

  return { flagged: false, reason: "" };
};

export const handleDonation = async (req, res) => {
  let { name, email, amount } = req.body;

  // Convert amount to number
  amount = Number(amount);

  // Use 'fullName' for consistency with schema
  const fullName = name;

  // Run fraud detection
  const { flagged, reason } = isSuspicious(fullName, email, amount);

  // Prepare donor data to save
  const donorData = {
    fullName,
    email,
    amount,
    flagged,
    fraudReason: flagged ? reason : "",
  };

  try {
    await new Donor(donorData).save();
  } catch (err) {
    console.error("Error saving donor:", err);
    return res.status(500).json({ error: "Failed to save donor information" });
  }

  if (flagged) {
    return res.status(400).json({
      error: "Suspicious transaction flagged",
      reason,
    });
  }

  // Initiate payment only if not flagged
  try {
    const response = await axios.post(
      "https://www.instamojo.com/api/1.1/payment-requests/",
      {
        purpose: "Donation for Cancer Support",
        amount,
        buyer_name: fullName,
        email,
        redirect_url: "http://localhost:3000/thankyou",
      },
      {
        headers: {
          "X-Api-Key": process.env.INSTAMOJO_API_KEY,
          "X-Auth-Token": process.env.INSTAMOJO_AUTH_TOKEN,
        },
      }
    );

    return res.status(200).json({
      message: "Donation saved and payment initiated",
      paymentUrl: response.data.payment_request.longurl,
    });
  } catch (err) {
    console.error("Payment initiation failed:", err);
    return res.status(500).json({ error: "Payment initiation failed" });
  }
};
