// frontend/src/components/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';  // Updated import path

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register');
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Discover and Share Your Travel Experiences</h1>
        <p>Upload and Explore Travel Content from Around the World</p>
        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
      <div className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Upload Your Travel Content</h3>
            <p>Share your travel experiences with the world.</p>
          </div>
          <div className="feature">
            <h3>Explore Destinations</h3>
            <p>Discover new places through others' stories and photos.</p>
          </div>
          <div className="feature">
            <h3>Connect with Fellow Travelers</h3>
            <p>Meet and interact with other travel enthusiasts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;