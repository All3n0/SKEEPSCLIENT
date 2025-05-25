// src/components/ErrorPage.js
import React from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import '../styles/errorpage.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <Navbar />
            <div className="error-content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for doesn't exist or has been moved.</p>
                <a href="/" className="home-button">Go Back Home</a>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;
