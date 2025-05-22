import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import donationRoutes from "./routes/donationRoutes.js";

dotenv.config(); // ✅ Load environment variables

const app = express();

app.use(cors()); // ✅ Enable CORS
app.use(express.json()); // ✅ Parse JSON bodies
app.use("/donation", donationRoutes); // ✅ Set up routes

// ✅ Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
