import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  amount: {
    type: Number,
    required: true,
    min: [1, "Donation amount must be at least ₹1"],
  },
  donatedAt: {
    type: Date,
    default: Date.now,
  },

  // 🚩 Fraud detection fields
  flagged: {
    type: Boolean,
    default: false,
    description: "Marks if this donation is suspicious",
  },
  fraudReason: {
    type: String,
    default: "",
    description: "Reason for marking the donation as suspicious (if any)",
    trim: true,
  },
});

export default mongoose.model("Donor", donorSchema);
