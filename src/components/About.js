// src/components/AboutPage.js
import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import '../styles/about.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <Navbar />

            <div className="about-section hero-section">
                <h1>Skeeps Collection</h1>
                <p>Where Imagination Meets Reality</p>
            </div>

            <div className="about-section right-align">
                <div className="about-text">
                    <h2>About Our Products</h2>
                    <p>
                        At our shop, we specialize in creating beautifully crafted custom tote bags and t-shirts that let you express your unique style. Whether you're looking for a bold statement piece, a thoughtful gift, or branded apparel for your team or event, we bring your ideas to life with high-quality materials and vibrant designs. Each item is made with care and creativity, tailored just for you. From minimalist aesthetics to bold artwork, our custom pieces are more than just accessories — they’re an extension of your personality.
                    </p>
                </div>
            </div>

            <div className="about-section left-align">
                <div className="about-text">
                    <h2>Our Offers</h2>
                    <p>
                        We love making your special moments even more memorable with our exclusive offers and themed packages. Celebrate birthdays, Valentine's Day, Mother's Day, and more with our thoughtfully curated bundles, each designed to add a personal and meaningful touch to your gift-giving. Looking to treat yourself or stock up on your favorites? Take advantage of our popular “Buy Five, Get One Free” deal — perfect for sharing with friends or building your custom collection. Our offers are all about giving you more of what you love, for less.
                    </p>
                </div>
            </div>

            <div className="about-section right-align">
                <div className="about-text">
                    <h2>Our Future Plans</h2>
                    <p>
                        We're just getting started! As we grow, we're excited to expand our collection to include custom sweatshirts, hoodies, caps, and a wide range of other customizable merchandise. Our goal is to become your go-to brand for all things personalized — from cozy wearables to stylish accessories that reflect your identity. With the same dedication to quality and creativity, we’re working on bringing you even more ways to express yourself through fashion that’s made just for you. Stay tuned — the best is yet to come!
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
