import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  availability: String,
  skills: String,
  createdAt: { type: Date, default: Date.now },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
