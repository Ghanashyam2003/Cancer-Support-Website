import React from "react";
import "./PopularCauses.css";

function PopularCauses() {
  return (
    <div className="popular-causes">
      <h2 className="title">Popular Causes</h2>
      <div className="causes-container">
        <div className="cause-card">
          <div className="image-container">
            <img src="/images/cause1.jpg" alt="Cause 1" />
            <span className="tag">Cancer</span>
          </div>
          <div className="progress">
            <p>Current: <strong>$3,370</strong></p>
            <p>Target: <strong>$6,000</strong></p>
            <div className="progress-bar"><div className="progress-fill" style={{ width: "56%" }}></div></div>
          </div>
          <h3>Support Learning Disabilities Association of WNY</h3>
          <p>The fundraiser would support the current Learning Disabilities Association of Western NY programs...</p>
        </div>

        <div className="cause-card">
          <div className="image-container">
            <img src="/images/cause2.jpg" alt="Cause 2" />
            <span className="tag">Cancer</span>
          </div>
          <div className="progress">
            <p>Current: <strong>$2,030</strong></p>
            <p>Target: <strong>$7,000</strong></p>
            <div className="progress-bar"><div className="progress-fill" style={{ width: "29%" }}></div></div>
          </div>
          <h3>New American Riders: Bicycles for Refugees</h3>
          <p>With our partners at the Jewish Family Service of Western Massachusetts...</p>
        </div>

        <div className="cause-card">
          <div className="image-container">
            <img src="/images/cause3.jpg" alt="Cause 3" />
            <span className="tag">Cancer</span>
          </div>
          <div className="progress">
            <p>Current: <strong>$13,950</strong></p>
            <p>Target: <strong>$6,000</strong></p>
            <div className="progress-bar"><div className="progress-fill" style={{ width: "233%" }}></div></div>
          </div>
          <h3>Supporting Pregnant and Parenting Youth</h3>
          <p>I'm raising money for a cause I care about, but I need your help...</p>
        </div>
      </div>
    </div>
  );
}

export default PopularCauses;
