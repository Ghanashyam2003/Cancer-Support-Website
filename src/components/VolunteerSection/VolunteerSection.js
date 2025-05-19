import React, { useState } from "react";
import "./VolunteerSection.css";
import { motion } from "framer-motion";
import VolunteerSignUp from "../VolunteerSignUp/VolunteerSignUp";

function VolunteerSection() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOpenSignUp = () => {
    setShowSignUp(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <div className="volunteer-section">
      {showSignUp ? (
        <VolunteerSignUp onClose={handleCloseSignUp} />
      ) : (
        <motion.div
          className="volunteer-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="volunteer-title">Join Our Volunteer Team</h2>
          <p className="volunteer-text">
            Make a meaningful impact by giving your time and skills to help those
            in need. Together, we can bring hope and strength to individuals
            battling cancer.
          </p>
          <motion.button
            className="volunteer-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpenSignUp}
          >
            SIGN UP NOW
          </motion.button>
        </motion.div>
      )}
      <motion.div
        className="volunteer-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/images/volunteer.jpg" alt="Volunteer Team" />
      </motion.div>
    </div>
  );
}

export default VolunteerSection;
