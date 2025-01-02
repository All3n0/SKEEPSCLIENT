import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Ensure correct path
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <nav className="navbar">
            {/* Left Section: Dropdown */}
            <div className="d-flex align-items-center">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleDropdown}
                >
                    <div className="toggler-line"></div>
                    <div className="toggler-line"></div>
                    <div className="toggler-line"></div>
                </button>
                {showDropdown && (
                    <ul className="dropdown-menu show position-absolute mt-2">
                        <li>
                            <Link to="/bags" className="dropdown-item">Bags</Link>
                        </li>
                        <li>
                            <Link to="/t-shirts" className="dropdown-item">T-Shirts</Link>
                        </li>
                        <li>
                            <Link to="/caps" className="dropdown-item">Caps</Link>
                        </li>
                    </ul>
                )}
                <Link to="/home" className="ms-2 text-decoration-none skeeps-link">
                    SKEEPS
                </Link>
            </div>

            {/* Center Section: Search Bar */}
            {/* Center Section: Search Bar */}
            <div className="mx-auto search-bar">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for items..."
                        onChange={(e) => console.log(`Search Term: ${e.target.value}`)}
                    />
                    <button className="btn btn-primary" onClick={() => console.log('Search clicked!')}>
                        Search
                    </button>
                </div>
            </div>

            {/* Right Section: About and Cart */}
            <div className="d-flex align-items-center">
                <Link to="/about" className="me-3 text-decoration-none">
                    About
                </Link>
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart size={24} />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
