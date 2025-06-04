import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';
import '../styles/tshirtspage.css';
import InspirationCard from './InspirationCard';

const TshirtsPage = () => {
    const [tshirts, setTshirts] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://skeepsserver.onrender.com/tshirts')
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
        <InspirationCard
            key={tshirt.inspiration}
            image={tshirt.image}
            inspiration={tshirt.inspiration}
            onClick={() => navigate(`/tshirts/inspiration/${tshirt.inspiration}`)}
        />
    ))}
</div>
            </div>
            <Footer />
        </span>
    );
};

export default TshirtsPage;
