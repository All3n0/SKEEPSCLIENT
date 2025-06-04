import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBags } from './api';
import '../styles/bagspage.css';
import Navbar from './navbar';
import Footer from './Footer';
import InspirationCard from './InspirationCard';

const BagsPage = () => {
    const [bags, setBags] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://skeepsserver.onrender.com/bags')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch bags');
            }
            return response.json();
          })
          .then((data) => {
            setBags(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);

    const inspirations = bags.reduce((acc, bag) => {
        if (!acc[bag.inspiration]) {
            acc[bag.inspiration] = bag;
        }
        return acc;
    }, {});

    return (
        <span>
        <Navbar />
        <div className="bags-page">
            <h1>Choose Your Inspiration</h1>
            <div className="cards-container">
    {Object.values(inspirations).map((bag) => (
        <InspirationCard
    key={bag.inspiration}
    image={bag.image}
    inspiration={bag.inspiration}
    onClick={() => navigate(`/bags/inspiration/${bag.inspiration}`)}
/>

    ))}
</div>
        </div>
        <Footer />
        </span>
    );
};

export default BagsPage;
