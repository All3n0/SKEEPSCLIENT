import React from 'react';
import '../styles/InspirationCard.css';

const InspirationCard = ({ image, inspiration, onClick }) => {
    return (
        <div className="inspiration-card-rect" onClick={onClick}>
            <img src={image} alt={inspiration} className="inspiration-image" />
            <h3 className="inspiration-name">{inspiration}</h3>
        </div>
    );
};

export default InspirationCard;
