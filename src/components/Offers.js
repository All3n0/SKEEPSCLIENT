import React, { useEffect, useRef, useState } from "react";
import "../styles/offer.css";

const Offers = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        { id: 0, image: "https://i.postimg.cc/PJp2rbJL/entergalactic.png" },
        { id: 1, image: "https://i.postimg.cc/15Pp5FQF/ROCKY.png" },
        { id: 2, image: "https://i.postimg.cc/sX7h3jHK/CHROMAKOPIA-design-1.png" },
        { id: 3, image: "https://i.postimg.cc/15JNmYMx/burna-design.png" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % products.length;
            setCurrentIndex(nextIndex);
            scrollToIndex(nextIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const scrollToIndex = (index) => {
        const carousel = carouselRef.current;
        if (carousel) {
            const cardWidth = carousel.offsetWidth;
            carousel.scrollTo({ left: index * cardWidth, behavior: "smooth" });
        }
    };

    return (
        <div className="offer-section">
            <div className="offer-carousel" ref={carouselRef}>
                {products.map(product => (
                    <div className="offer-card" key={product.id}>
                        <img src={product.image} alt={`Slide ${product.id + 1}`} />
                        <div className="carousel-indicators">
                            {products.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`dot ${idx === currentIndex ? "active" : ""}`}
                                    onClick={() => {
                                        setCurrentIndex(idx);
                                        scrollToIndex(idx);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offers;
