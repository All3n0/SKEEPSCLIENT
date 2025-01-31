import React, { useState, useEffect } from "react";
import "../styles/home.css"; // Ensure the path to the CSS file is correct
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event using onscroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Show content after scrolling 100px
    } else {
      setIsVisible(false); // Hide content when scroll is less than 100px
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Attach scroll event listener

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section className="hero-banner">
        <h2>Special Offers - Up to 20% off</h2>
        <Link to="/sale" className="sale-btn">
          Click here
        </Link>
      </section>

      {/* Welcome Section (Video + Text) */}
      <section className="welcome-container" id="welcome">
        <div className="welcome-text">
          <h1>🎨 Wear Your Personality, Carry Your Style! 🛍️</h1>
          <p>
            Shop custom-designed tote bags, shirts, and caps made just for you.
            Whether you're making a statement, gifting a loved one, or elevating
            your style, we've got something unique waiting for you.
          </p>
          <a href="#main-content-section" className="shop-now-btn">
            🛒 Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <p>Featured products list will be added here</p>
      </section>

      {/* Main Content Section (Initially hidden) */}
      <section
        className={`main-content ${isVisible ? "visible" : ""}`}
        id="main-content-section"
      >
        <div className="video-container">
          <video autoPlay muted loop className="background-video">
            <source
              src="https://videos.pexels.com/video-files/7677746/7677746-sd_360_640_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <div className="cards-container">
              {/* Product Categories */}
              <div className="card-img-container">
                <img
                  src="https://i.pinimg.com/236x/7c/ce/9c/7cce9c6c42e19b455860ec240676511d.jpg"
                  alt="T-Shirts"
                  className="card-img"
                />
                <div className="main-content-btn-container btn-1">
                  <Link to="/tshirts" className="main-content-btn">
                    T-Shirts
                  </Link>
                </div>
              </div>

              <div className="card-img-container">
                <img
                  src="https://i.pinimg.com/236x/44/54/46/445446161ebf1ee6c1e32a163f6f6943.jpg"
                  alt="Bags"
                  className="card-img"
                />
                <div className="main-content-btn-container btn-2">
                  <Link to="/bags" className="main-content-btn">
                    Bags
                  </Link>
                </div>
              </div>

              <div className="card-img-container">
                <img
                  src="https://i.pinimg.com/236x/c0/a4/24/c0a42401699dedf10e37bc361b1bb80b.jpg"
                  alt="Caps"
                  className="card-img"
                />
                <div className="main-content-btn-container">
                  <Link to="/caps" className="main-content-btn">
                    Caps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h3>Subscribe to Our Newsletter</h3>
        <p>
          Get updates, discounts, and exclusive offers straight to your inbox!
        </p>
        <input type="email" placeholder="Enter your email" />
        <button className="btn-subscribe">Subscribe</button>
      </section>
    </div>
  );
};

export default Home;
