import React from 'react';
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                {/* Left column: Company logo */}
                <div className="footer-column footer-logo">
                    <img src="https://i.pinimg.com/736x/28/65/a6/2865a6694e157b04b74bafaa27e07fe1.jpg" alt="Company Logo" className="company-logo" />
                </div>

                {/* Middle column: Useful links with icons */}
                <div className="footer-column footer-links">
                    <nav>
                        <a href="https://www.instagram.com/skeepscollection/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i> Instagram
                        </a>
                        <a href="https://www.tiktok.com/@skeepscollection/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-tiktok"></i> TikTok
                        </a>
                        <a href="https://www.pinterest.com/skeepscollection/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-pinterest"></i> Pinterest
                        </a>
                        <a href="mailto:skeepscollection@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-envelope-fill"></i> Gmail
                        </a>
                        <a href="https://www.jumia.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-basket3-fill"></i> Jumia
                        </a>
                    </nav>
                </div>

                {/* Right column: Text and policy links */}
                <div className="footer-column footer-content">
                    <p>&copy; {new Date().getFullYear()} SKEEPS. All rights reserved.</p>
                    <nav>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-service">Terms of Service</a>
                        <a href="/contact">Contact Us</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
