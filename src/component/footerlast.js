import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_section">
            <h3 className="footer_title">Connect with Us</h3>
            <div className="social_icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <p>Stay connected with us on social media for latest updates.</p>
          </div>
          <div className="footer_section">
            <h3 className="footer_title">Subscribe to Our Newsletter</h3>
            <form className="newsletter_form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <p>Subscribe to our newsletter to receive updates and offers.</p>
          </div>
          <div className="footer_section">
            <h3 className="footer_title">Quick Links</h3>
            <ul className="quick_links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <p>&copy; 2024 Rajlee Innovation Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;