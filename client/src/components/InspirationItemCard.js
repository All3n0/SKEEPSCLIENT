import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/InspirationItemCard.css';

const InspirationItemCard = ({ item, addToCart }) => {
    
    return (
        <div className="inspiration-item-card">
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-details">
                <h3>{item.name}</h3>
                <p>Price: {item.price} Ksh</p>
                {/* <p>Inspiration: {item.inspiration}</p> */}
                <button onClick={() => addToCart(item)} className="add-to-cart-button">
                    <FaShoppingCart /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default InspirationItemCard;
