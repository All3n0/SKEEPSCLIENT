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
        window.addEventListener('scroll', handleScroll); // Attach scroll event listener

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Welcome Section (Video + Text) */}
            <div className="welcome-container">
                <video autoPlay muted loop className="background-video">
                    <source src="https://videos.pexels.com/video-files/19390102/19390102-sd_640_360_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="welcome-text">
                    <h1>Welcome to Skeeps</h1>
                </div>
            </div>

            {/* Main Content Section (Initially hidden) */}
            <div className={`main-content ${isVisible ? "visible" : ""}`}>
                <div className="video-container">
                    <video autoPlay muted loop className="background-video">
                        <source src="https://videos.pexels.com/video-files/7677746/7677746-sd_360_640_25fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay">
                        <div className="cards-container">
                            {/* T-Shirts Section */}
                            <div className="card-img-container">
                                <img
                                    src="https://i.pinimg.com/236x/7c/ce/9c/7cce9c6c42e19b455860ec240676511d.jpg"
                                    alt="T-Shirts"
                                    className="card-img"
                                />
                                <div className="btn-container">
                                    <Link to="/tshirts" className="btn">T-Shirts</Link>
                                </div>
                            </div>

                            {/* Bags Section */}
                            <div className="card-img-container">
                                <img
                                    src="https://i.pinimg.com/236x/44/54/46/445446161ebf1ee6c1e32a163f6f6943.jpg"
                                    alt="Bags"
                                    className="card-img"
                                />
                                <div className="btn-container">
                                    <Link to="/bags"className="btn">Bags</Link>
                                </div>
                            </div>

                            {/* Caps Section */}
                            <div className="card-img-container">
                                <img
                                    src="https://i.pinimg.com/236x/c0/a4/24/c0a42401699dedf10e37bc361b1bb80b.jpg"
                                    alt="Caps"
                                    className="card-img"
                                />
                                <div className="btn-container">
                                    <Link to="/caps" className="btn">Caps</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offer Section */}
                <div className="offer-container">
                    <h2>Special Offers</h2>
                    <p>This is where your offer content will go...</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
