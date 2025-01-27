import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './navbar';
import '../styles/cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // For toggling the popup

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <span>
            <Navbar />
            <div className="cart-page">
                <h1>Your Cart</h1>
                {cart.length > 0 ? (
                    <>
                        <div className="cart-grid">
                            {cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <h3>{item.name}</h3>
                                    <p>Price: Ksh{item.price}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            className="checkout-button"
                            onClick={() => setShowPopup(true)}
                        >
                            Checkout
                        </button>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Checkout Summary</h2>
                        <div className="popup-items">
                            {cart.map((item) => (
                                <div key={item.id} className="popup-item">
                                    <p>
                                        <strong>{item.name}</strong> x1
                                    </p>
                                    <p>Price: Ksh{item.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <h3>Total: Ksh{calculateTotalPrice()}</h3>
                        <button
                            className="complete-button"
                            onClick={() => alert("Complete functionality to be added later")}
                        >
                            Complete
                        </button>
                        <button
                            className="close-button"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </span>
    );
};

export default Cart;
