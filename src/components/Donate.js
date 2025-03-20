import React, { useState } from "react";
import "./Donate.css";

const Donate = ({ onClose }) => {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("test");
  const [donationSuccess, setDonationSuccess] = useState(false);

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(e.target.value);
  };

  const handleDonate = () => {
    setDonationSuccess(true);
    setTimeout(onClose, 3000); // Auto-close modal after 3 seconds
  };

  return (
    <div className="donate-container">
      <div className="donate-box">
        <button className="close-btn" onClick={onClose}>❌</button>

        {!donationSuccess ? (
          <>
            <h2>Supporting Pregnant and Parenting Youth</h2>
            <p className="progress-text">
              <span className="raised">$4.94 million</span> of $10,000 raised
            </p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "80%" }}></div>
            </div>
            <div className="notice">
              <strong>Notice:</strong> Test mode is enabled. While in test mode, no live donations are processed.
            </div>
            <div className="donation-amount">
              <span className="currency">$</span>
              <input
                type="number"
                value={customAmount || amount}
                onChange={handleCustomAmountChange}
              />
            </div>
            <div className="amount-buttons">
              {[10, 25, 50, 100, 250].map((value) => (
                <button key={value} onClick={() => handleAmountClick(value)}>
                  ${value}.00
                </button>
              ))}
              <button className="custom-amount">CUSTOM AMOUNT</button>
            </div>
            <h3>Select Payment Method</h3>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="test"
                  checked={paymentMethod === "test"}
                  onChange={() => setPaymentMethod("test")}
                />
                Test Donation
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="offline"
                  onChange={() => setPaymentMethod("offline")}
                />
                Offline Donation
              </label>
            </div>
            <h3>Personal Info</h3>
            <div className="personal-info">
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address *" />
            </div>
            <button className="donate-submit" onClick={handleDonate}>
              Donate Now
            </button>
          </>
        ) : (
          <p className="success-message">
            🎉 Thank you! Your donation has been successfully processed.
          </p>
        )}
      </div>
    </div>
  );
};

export default Donate;
