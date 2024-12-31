import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; // Ensure correct path
import Navbar from "./navbar"; // Navbar component
import Footer from "./Footer"; // Footer component

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Home Content */}
            <div className="home-container">
                <h1 className="home-title">Welcome to Skeeps!</h1>
                <div className="cards-container">
                    {/* Bags Card */}
                    <div className="card">
                        <img
                            src="https://example.com/bags.jpg"
                            alt="Bags"
                            className="card-img"
                        />
                        <h2 className="card-title">Bags</h2>
                        <Link to="/bags" className="btn">Shop Bags</Link>
                    </div>

                    {/* T-Shirts Card */}
                    <div className="card">
                        <img
                            src="https://example.com/tshirts.jpg"
                            alt="T-Shirts"
                            className="card-img"
                        />
                        <h2 className="card-title">T-Shirts</h2>
                        <Link to="/t-shirts" className="btn">Shop T-Shirts</Link>
                    </div>

                    {/* Caps Card */}
                    <div className="card">
                        <img
                            src="https://example.com/caps.jpg"
                            alt="Caps"
                            className="card-img"
                        />
                        <h2 className="card-title">Caps</h2>
                        <Link to="/caps" className="btn">Shop Caps</Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
