import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Ensure correct path
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Update cart count from localStorage whenever the component mounts or localStorage changes
  useEffect(() => {
    const calculateCartCount = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      // Calculate total quantity, defaulting to 1 if 'quantity' is missing
      const totalItems = savedCart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );
      setCartCount(totalItems);
    };

    calculateCartCount();

    // Listen for localStorage changes (optional, for real-time updates)
    const handleStorageChange = () => calculateCartCount();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-4 py-2">
      {/* Left Section: Logo and Brand Name */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="WaveCart" />
        </Link>
      </div>

      {/* Center Section: Search Bar */}
      <div className="navbar-search">
        <div className="input-group search-container">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search for items..."
            onChange={(e) => console.log(`Search Term: ${e.target.value}`)}
          />
          <button
            className="search-button"
            onClick={() => console.log("Search clicked!")}
          >
            Search
          </button>
        </div>
      </div>

      {/* Right Section: About, Toggle Menu, and Cart */}
      <div className="d-flex align-items-center navbar-right">
        <div>
        <Link to="/login" className="navlogin-btn">
                <i
                  className="fa-solid fa-right-to-bracket "
                  style={{ color: "#b3261a", marginRight: "10px" }}
                ></i>
                Sign In
              </Link>
        </div>
        <div className="navbar-about-container">
          <Link to="/about" className="abt-btn">
            About
          </Link>
        </div>
        <div className="cart-btn">
          <Link to="/cart" className="cart-btn position-relative">
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "#b3261a"}}
            ></i>
            {cartCount > 0 && (
              <span className="cart-count-badge">{cartCount}</span>
            )}
          </Link>
        </div>
        <div className="navbar-dropdown-container">
          <div className="dropdown-btn">
            <button className="navbar-dropdown-btn">
              <i className="fa-solid fa-bars" style={{ color: "#b3261a" }}></i>
            </button>
            <div className="dropdown-content">
              <Link to="/bags">
                <i
                  className="fa-solid fa-bag-shopping"
                  style={{ color: "#black", marginRight: "10px" }}
                ></i>
                Tote-bags
              </Link>
              <Link to="/tshirts">
                <i
                  className="fa-solid fa-shirt"
                  style={{ color: "#black", marginRight: "10px" }}
                ></i>
                T-shirts
              </Link>
              <Link to="/caps">
                <i className="fa-brands fa-redhat"
                style={{ color: "#black", marginRight: "10px" }}
                ></i>
                Caps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
