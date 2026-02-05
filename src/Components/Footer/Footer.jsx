import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  // Smooth scroll link component
  const ScrollLink = ({ to, children }) => {
    const navigate = useNavigate();
    return (
      <Link
        to={to}
        onClick={() => {
          navigate(to);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="footer-link"
      >
        {children}
      </Link>
    );
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Morison Insurance</h2>
          <p>Protecting what matters most</p>
        </div>

        <div className="footer-links">
          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/other/our-story" className="footer-link">Our Story</Link></li>
              <li><Link to="/other/our-team" className="footer-link">Our Team</Link></li>
              <li><Link to="/other/our-values" className="footer-link">Our Values</Link></li>
              <li><Link to="/other/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>

          {/* Insurance */}
          <div className="footer-section">
            <h4>Insurance</h4>
            <ul>
              <li><ScrollLink to="/home">Home Insurance</ScrollLink></li>
              <li><ScrollLink to="/auto">Auto Insurance</ScrollLink></li>
              <li><ScrollLink to="/high-value">High-Value Assets</ScrollLink></li>
              <li><ScrollLink to="/business">Business Insurance</ScrollLink></li>
              <li><ScrollLink to="/recreation">Recreation Insurance</ScrollLink></li>
              <li><ScrollLink to="/other">Other Insurance</ScrollLink></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link to="/other/contact-us" className="footer-link">Contact Us</Link></li>
              <li><Link to="/other/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/other/claims" className="footer-link">Claims</Link></li>
              <li><Link to="/other/resources" className="footer-link">Resources</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/other/terms-of-service" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/other/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/other/cookie-policy" className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter">
            <h4>Subscribe</h4>
            <p>Get the latest updates and offers</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Morison Insurance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
