import React from 'react';
import './contactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1 className="contact-us-title">Contact Us</h1>
      <div className="contact-us-content">
        <div className="contact-us-info">
          <div className="contact-us-item">
            <i className="fas fa-phone"></i>
            <p className="contact-us-label">Phone</p>
            <p className="contact-us-text">123-456-7890</p>
          </div>
          <div className="contact-us-item">
            <i className="fas fa-envelope"></i>
            <p className="contact-us-label">Email</p>
            <p className="contact-us-text">info@example.com</p>
          </div>
        </div>
        <div className="contact-us-form">
          <h2 className="contact-us-form-title">Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
