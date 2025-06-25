import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./FeedbackForm.css"; // Make sure this is in the same folder

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://cancer-support-website-backend.onrender.com/api/feedback", formData);
      setSuccessMessage("✅ Your feedback has been submitted successfully!");
      setErrorMessage("");

      // Redirect to homepage after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("❌ Something went wrong. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="feedback-container">
      <h2>We Value Your Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
