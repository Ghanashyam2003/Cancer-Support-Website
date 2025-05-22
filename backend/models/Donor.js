import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  amount: Number,
  donatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Donor", donorSchema);
