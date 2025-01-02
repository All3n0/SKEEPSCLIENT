import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBagsByInspiration } from './api';
import Footer from './Footer';
import '../styles/inspiratipnpage.css';
import Navbar from './navbar';

const InspirationPage = () => {
    const { inspiration } = useParams();
    const [bags, setBags] = useState([]);

    useEffect(() => {
        fetchBagsByInspiration(inspiration).then((data) => setBags(data));
    }, [inspiration]);

    const addToCart = (bag) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify([...currentCart, bag]));
        // alert(`${bag.name} added to cart!`);
    };

    return (
        <span>
            <Navbar />
            <div className="inspiration-page">
                <h1>{inspiration} Bags</h1>
                <div className="bags-grid">
                    {bags.map((bag) => (
                        <div key={bag.id} className="bag-card">
                            <img src={bag.image} alt={bag.name} />
                            <h3>{bag.name}</h3>
                            <p>Price: {bag.price} Ksh</p>
                            <button onClick={() => addToCart(bag)} className="add-to-cart-button">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </span>
    );
};

export default InspirationPage;
