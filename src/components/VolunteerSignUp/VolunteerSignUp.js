import React, { useState } from "react";
import "./VolunteerSignUp.css";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Icon for close button

function VolunteerSignUp({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/volunteer/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.name,
            email: formData.email,
            phone: formData.phone,
            availability: "Weekends", // Customize as needed
            skills: formData.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        onClose(); // Close form after success message
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="volunteer-Hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="signup-header">
        <h2 className="signup-title">Volunteer Now, Empower a Future</h2>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
      </div>

      {!isSubmitted ? (
        <>
          <p className="signup-text">
            Join our mission to support those battling cancer. Sign up today and
            make a difference!
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
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
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Why do you want to volunteer / Your eductaion Details"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <motion.button
              className="Sumbit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Sumbit Your Form"}
            </motion.button>
          </form>
        </>
      ) : (
        <motion.div
          className="success-message"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Form submitted successfully!</h3>
          <p>Thank you for Sumbit as a volunteer. We will contact you soon.</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default VolunteerSignUp;
