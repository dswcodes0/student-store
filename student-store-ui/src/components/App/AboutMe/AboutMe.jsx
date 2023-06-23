import React from 'react';
import './aboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="about-me-logo">
          <img src="/kimetsu-logo.png" alt="Logo" />
        </div>
        <div className="about-me-text">
          <h2>About Us</h2>
          <p>
          Discover a wide selection of unique products and accessories to elevate your shopping experience. We strive to provide exceptional quality and customer satisfaction at every step.          </p>
          <p>
          Immerse yourself in a world of curated merchandise where every item tells a story. From trendy fashion pieces to must-have collectibles, our store offers something special for every discerning shopper.          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
