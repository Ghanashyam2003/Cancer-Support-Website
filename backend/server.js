import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import donationRoutes from "./routes/donationRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js"; 

dotenv.config();  

const app = express(); 
app.use(cors());
app.use(express.json());


app.use("/donation", donationRoutes);
app.use("/api/volunteer", volunteerRoutes); 
app.use("/api/feedback", feedbackRoutes); 


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
