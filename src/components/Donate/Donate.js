import React, { useState } from "react";
import "../Donate/Donate.css";

const Donate = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    amount: "",
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.amount) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      const res = await fetch("http://localhost:5000/donation", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


      const data = await res.json();

      if (res.ok) {
        setMessage("Thank you for your donation! Redirecting...");
        setTimeout(() => {
          onClose();
          window.open("https://imjo.in/X2TQpN", "_blank");
        }, 1500);
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donate-form-popup">
      <div className="donate-form">
        <h3>Donate to BraveHearts</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount (₹)"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Continue to Donate"}
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Donate;
