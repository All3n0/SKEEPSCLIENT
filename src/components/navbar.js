import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = savedCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        setCartCount(totalItems);

        const handleStorageChange = () => {
            const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
            const updatedTotal = updatedCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            setCartCount(updatedTotal);
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setSearchResults([]);
            return;
        }

        try {
            const res = await fetch(`http://127.0.0.1:5555/search?q=${value}`);
            const data = await res.json();
            const merged = [
                ...data.bags.map(item => ({ ...item, type: 'bag' })),
                ...data.tshirts.map(item => ({ ...item, type: 'tshirt' }))
            ];
            setSearchResults(merged);
        } catch (error) {
            console.error('Search failed:', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="d-flex align-items-center">
                <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
                    <div className="toggler-line"></div>
                    <div className="toggler-line"></div>
                    <div className="toggler-line"></div>
                </button>
                {showDropdown && (
                    <ul className="dropdown-menu show position-absolute mt-2">
                        <li><Link to="/bags" className="dropdown-item">Bags</Link></li>
                        <li><Link to="/tshirts" className="dropdown-item">T-Shirts</Link></li>
                    </ul>
                )}
                <Link to="/home" className="ms-2 text-decoration-none skeeps-link">SKEEPS</Link>
                <Link to="/home" id="home-link">Home</Link>
            </div>

            <div className="mx-auto search-bar position-relative">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for items..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-primary" onClick={() => {}}>Search</button>
                </div>

                {searchResults.length > 0 && (
                    <ul className="dropdown-menu show w-100 mt-1">
                        {searchResults.map((item, index) => (
    <li key={index} className="d-flex align-items-center px-2 py-1">
        <img
            src={item.image}
            alt={item.name}
            style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', marginRight: '10px' }}
        />
        <Link
            to={`/${item.type}s/inspiration/${item.inspiration}`}
            className="text-decoration-none text-dark"
            onClick={() => {
                setSearchResults([]);
                setSearchTerm('');
            }}
        >
            {item.name} ({item.type})
        </Link>
    </li>
))}

                    </ul>
                )}
            </div>

            <div className="d-flex align-items-center">
                <Link to="/about" className="me-3 text-decoration-none">About</Link>
                <Link to="/cart" className="cart-icon position-relative">
                    <FaShoppingCart size={24} />
                    {cartCount > 0 && (
                        <span className="cart-count-badge">{cartCount}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
