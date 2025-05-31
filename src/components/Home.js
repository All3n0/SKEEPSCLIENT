import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Navbar from "./navbar";
import Footer from "./Footer";
import Offers from "./Offers";
import { Link } from "react-router-dom";

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Navbar />

            <div
  className="welcome-container"
  style={{
    backgroundImage: `url(https://i.postimg.cc/x1jsF7pc/WELCOME-TO-SKEEPS-7.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="welcome-overlay">
    <div className="welcome-text">
      <h1 className="top-line">WELCOME TO</h1>
      <h1 className="brand-name">Skeeps<br />Collection.</h1>
      <p className="tagline">WHERE IMAGINATION MEETS REALITY</p>
    </div>
  </div>
</div>



            <div className={`main-content ${isVisible ? "visible" : ""}`}>
                <div className={`main-content ${isVisible ? "visible" : ""}`}>
    <div className="bubble-section">
        <div className="bubbles-container">
            <div className="bubble">
                <img src="https://i.pinimg.com/736x/38/b8/0c/38b80cc18dc396a318719215e29d44c8.jpg" alt="T-Shirts" />
                <Link to="/tshirts" className="bubble-btn">T-Shirts</Link>
            </div>
            <div className="bubble">
                <img src="https://i.pinimg.com/736x/75/c6/0f/75c60f13dbbccec5bfe78a0d84364e7b.jpg" alt="Bags" />
                <Link to="/bags" className="bubble-btn">Bags</Link>
            </div>
        </div>
    </div>
</div>


                {/* Offers Section (Separate file, same page) */}
                <Offers />

                <Footer />
            </div>
        </div>
    );
};

export default Home;
