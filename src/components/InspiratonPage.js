import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemsByInspiration } from './api'; // Updated API function
import Footer from './Footer';
import Navbar from './navbar';
import '../styles/inspiratipnpage.css';

const InspirationPage = () => {
    const { inspiration, type } = useParams(); // Get the type (bags or tshirts) from the URL
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItemsByInspiration(type, inspiration).then((data) => setItems(data));
    }, [inspiration, type]);

    const addToCart = (item) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify([...currentCart, item]));
        // alert(`${item.name} added to cart!`);
    };

    return (
        <span>
            <Navbar />
            <div className="inspiration-page">
                <h1>{inspiration} {type === 'bags' ? 'Bags' : 'T-Shirts'}</h1>
                <div className={type === 'bags' ? "bags-grid" : "tshirts-grid"}>
                    {items.map((item) => (
                        <div key={item.id} className={type === 'bags' ? "bag-card" : "tshirt-card"}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: {item.price} Ksh</p>
                            <button onClick={() => addToCart(item)} className="add-to-cart-button">
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
