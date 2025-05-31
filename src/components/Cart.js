import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "../styles/cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showNamePrompt, setShowNamePrompt] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [instaInput, setInstaInput] = useState("");
    console.log(cart);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    setShowNamePrompt(true);
  };

  const handleCompleteOrder = () => {
    if (!nameInput || !emailInput || !instaInput) {
      alert("Please fill in all fields.");
      return;
    }

    const orderDetails = {
      customer_name: nameInput,
      customer_email: emailInput,
      insragram_handle: instaInput,
      items: cart.map((item) => ({
        product_type: "bag",
        product_name: item.name,
        product_id: item.id,
        size: item.size || null,
        quantity: 1,
      })),
    };

    fetch("http://localhost:5555/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        setCart([]);
        setShowPopup(true);
        setShowNamePrompt(false);
        setNameInput("");
        setEmailInput("");
        setInstaInput("");
      })
      .catch((err) => {
        console.error("Error placing order:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-grid">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-text">
                  <h3>{item.name}</h3>
                  {item.size && <p className="cart-inspiration">Size: {item.size}</p>}
                  <p className="cart-price">Ksh {item.price}</p>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: Ksh {calculateTotal()}</h3>
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}

        {showNamePrompt && (
          <div className="popup">
            <div className="popup-content">
              <h3>Enter Your Details</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <input
                type="text"
                placeholder="Instagram Handle"
                value={instaInput}
                onChange={(e) => setInstaInput(e.target.value)}
              />
              <button className="complete-button" onClick={handleCompleteOrder}>
                Confirm Order
              </button>
              <button className="close-button" onClick={() => setShowNamePrompt(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Order confirmed! Thank you.</p>
              <button className="close-button" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
