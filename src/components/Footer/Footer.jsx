import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import "./Footer.css";
import images from "../../constants/images";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-img">
              <img src={images.nobglogo} alt="" />
            </div>
            <h1>Jalebi</h1>
          </div>
          <p className="brand-description">
            Discover culinary delights recipes and inspiration in our food
            haven.
          </p>
          <div className="business-hours">
            <div className="hours-row">
              <span className="day">MON - FRI</span>
              <span className="time">8:00 AM - 6:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="day">SATURDAY</span>
              <span className="time">9:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <div className="explore">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/about#about">About</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={20} />
              <p>
                155/H/18 Kesab Chandra Sen Street
                <br />
                Beside Jama Masjid, Raja Bazar
                <br/>Kolkata 7000 09
              </p>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <div>
                <p>+91 6207135511</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <p>jj@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>
            Join our subscribers list to get the latest news and special offers.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">→</button>
          </div>
          <div className="privacy-checkbox">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">I agree to the Privacy Policy</label>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© Copyright 2025 Jalebi. All Rights Reserved</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Youtube">
            <Youtube size={20} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
