import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="column">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo1.png`}
              alt="logo"
              className="footer-logo"
            />
          </Link>
          <p>
            SkeepsCollection brings your creativity to life
            with custom tote bags, t-shirts, and trucker hats designed just for
            you. Every piece is crafted with passion, quality, and originality,
            turning your vision into wearable art.
          </p>
          <p>🔹 Custom Designs | 🔹 Premium Quality | 🔹 Made for You</p>
          <p>Let’s create your next masterpiece</p>
          <div className="social-links">
            <a
              href="https://www.tiktok.com/@skeepscollection/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.pinterest.com/skeepscollection/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-pinterest"></i>
            </a>
            <a
              href="https://www.instagram.com/skeepscollection/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.jumia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/wavecart"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="column menu">
          <h3>MENU</h3>
          <nav>
            <ul>
              <li>
                <Link to="/products">Tote Bags</Link>
              </li>
              <li>
                <Link to="/categories">T-shirts</Link>
              </li>
              <li>
                <Link to="/shipping">Caps</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/support">Customer Support</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="column contact">
  <h3>CONTACT</h3>
  <p>Thika, Nairobi</p>
  <p>Phone: +2547 96 078 921</p>
  <p>Email: <a href="mailto:skeepscollection@gmail.com" target="_blank" rel="noopener noreferrer">skeepscollection@gmail.com</a></p>
  <div className="country-badge">
    <span>🇰🇪</span>
  </div>
</div>

      </div>

      <div className="border-top"></div>
      <div className="footer-bottom">
        <div className="copyright">
          &copy; 2024 SkeepsCollection. All Rights Reserved.
        </div>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms" className="termss">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
