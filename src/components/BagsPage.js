import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBags } from './api';
import '../styles/bagspage.css';
import Navbar from './navbar';
import Footer from './Footer';

const BagsPage = () => {
    const [bags, setBags] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://127.0.0.1:5555/bags')
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
                    <div
                        key={bag.inspiration}
                        className="inspiration-card"
                        onClick={() => navigate(`/bags/inspiration/${bag.inspiration}`)}
                    >
                        <img src={bag.image} alt={bag.name} />
                        <h3>{bag.inspiration}</h3>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </span>
    );
};

export default BagsPage;
