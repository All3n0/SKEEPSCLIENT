import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './navbar';
import '../styles/cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <span>
        <Navbar />
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <div className="cart-grid">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)} className="remove-button">
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
        <Footer />
        </span>
    );
};

export default Cart;
