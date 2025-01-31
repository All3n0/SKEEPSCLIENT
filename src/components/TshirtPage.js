import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';
import '../styles/tshirtspage.css';

const TshirtsPage = () => {
    const [tshirts, setTshirts] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5555/tshirts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch t-shirts');
                }
                return response.json();
            })
            .then((data) => {
                setTshirts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const inspirations = tshirts.reduce((acc, tshirt) => {
        if (!acc[tshirt.inspiration]) {
            acc[tshirt.inspiration] = tshirt;
        }
        return acc;
    }, {});

    return (
        <span>
            <Navbar />
            <div className="tshirts-page">
                <h1>Choose Your Inspiration</h1>
                <div className="cards-container">
                    {Object.values(inspirations).map((tshirt) => (
                        <div
                            key={tshirt.inspiration}
                            className="inspiration-card"
                            onClick={() => navigate(`/tshirts/inspiration/${tshirt.inspiration}`)}
                        >
                            <img src={tshirt.image} alt={tshirt.name} />
                            <h3>{tshirt.inspiration}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </span>
    );
};

export default TshirtsPage;
