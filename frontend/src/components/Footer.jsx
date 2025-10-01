import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="modern-footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <img src="/jec-logo.png" alt="JEC Night Cafe" className="footer-logo" />
                            <h3>JEC Night Cafe</h3>
                        </div>
                        <p className="brand-description">
                            Experience the finest dining with exceptional flavors, 
                            warm hospitality, and unforgettable moments at JEC Night Cafe.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-link" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#reservation">Reservations</a></li>
                            <li><a href="#team">Our Team</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4>Contact Info</h4>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Jaipur, Rajasthan (302028)</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-clock"></i>
                            <span>Open: 11:00 AM - 10:00 PM</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+91 12345 67890</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>info@jecnightcafe.com</span>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for special offers and updates</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            <p>&copy; 2024 JEC Night Cafe. All Rights Reserved.</p>
                        </div>
                        <div className="developer-credit">
                            <p>Developed with ❤️ by <span className="developer-name">Nitish Jha</span></p>
                        </div>
                        <div className="footer-bottom-links">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <Link to="/terms-of-service">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;