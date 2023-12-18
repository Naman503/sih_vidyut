import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="path/to/your/logo.png" alt="Ministry of Power Logo" />
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ministry of Power. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
