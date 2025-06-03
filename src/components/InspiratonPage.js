import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemsByInspiration } from './api';
import Footer from './Footer';
import Navbar from './navbar';
import InspirationItemCard from './InspirationItemCard';
import '../styles/inspiratipnpage.css';

const InspirationPage = () => {
    const { inspiration, type } = useParams();
    const [items, setItems] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        fetchItemsByInspiration(type, inspiration).then((data) => setItems(data));
    }, [inspiration, type]);

    const addToCart = (item) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify([...currentCart, item]));

        // Show the popup
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000); // Popup disappears after 2 seconds
    };

    return (
        <span>
            <Navbar />

            {showPopup && (
                <div className="cart-popup">
                    <span className="checkmark">✔</span> Added to cart
                </div>
            )}

            <div className="inspiration-page">
                <h1>{inspiration} {type === 'bags' ? 'Bags' : 'T-Shirts'}</h1>
                <div className="inspiration-items-container">
                    {items.map((item) => (
                        <InspirationItemCard
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </span>
    );
};

export default InspirationPage;
