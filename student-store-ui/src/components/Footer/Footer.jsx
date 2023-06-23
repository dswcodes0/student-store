import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title">About Us</h3>
          <p className="footer-section-text">
          Discover a wide selection of unique products and accessories to elevate your shopping experience. We strive to provide exceptional quality and customer satisfaction at every step.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact</h3>
          <p className="footer-section-text">Phone: 123-456-7890</p>
          <p className="footer-section-text">Email: info@example.com</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <div className="footer-social-icons">
            <a href="https://example.com">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://example.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://example.com">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
