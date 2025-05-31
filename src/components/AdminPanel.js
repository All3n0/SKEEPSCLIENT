import React, { useEffect, useState } from "react";
import "../styles/admin.css";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
    console.log(orders);
  useEffect(() => {
    fetch("http://localhost:5555/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to fetch orders:", err));
  }, []);

  const toggleComplete = (orderId, currentStatus) => {
    const endpoint = currentStatus ? "uncomplete" : "complete";
    fetch(`http://localhost:5555/orders/${orderId}/${endpoint}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.order_id === orderId
              ? { ...order, completed: !currentStatus }
              : order
          )
        );
      })
      .catch((err) => console.error("Failed to update order status:", err));
  };

  const handleDelete = (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    fetch(`http://localhost:5555/orders/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.order_id !== orderId)
        );
      })
      .catch((err) => console.error("Failed to delete order:", err));
  };

  return (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel - Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders">No orders yet.</p>
      ) : (
        <div className="orders-container">
          {orders.map((order) => (
            
            <div className="order-card" key={order.order_id}>
                
              <h3>Order #{order.order_id}</h3>
              <p><strong>Name:</strong> {order.customer_name}</p>
              <p><strong>Email:</strong> {order.customer_email}</p>
              <p><strong>Instagram:</strong> {order.instagram_handle || "N/A"}</p>
              <p><strong>Status:</strong> {order.completed ? "✅ Completed" : "❌ Pending"}</p>
              <p><strong>Items:</strong></p>
              <ul className="order-items">
                {order.items.map((item, index,) => (
                  <li key={index}>
                    Product: {item.product_name || "N/A"} — Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
              <div className="order-actions">
                <button
                  className="complete-btn"
                  onClick={() => toggleComplete(order.order_id, order.completed)}
                >
                  {order.completed ? "Unmark as Complete" : "Mark as Complete"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(order.order_id)}
                >
                  Delete Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
