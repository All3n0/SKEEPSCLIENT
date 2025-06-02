import React, { useEffect, useState } from "react";
import "../styles/admin.css";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

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
        <div className="orders-table">
          <div className="table-header">
            <div>Order #</div>
            <div>Name</div>
            <div>Email</div>
            <div>Instagram</div>
            <div>Status</div>
            <div>Items</div>
            <div>Total (Ksh)</div>
            <div>Actions</div>
          </div>

          {orders.map((order) => {
            const total = order.items.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            );

            return (
              <div className="table-row" key={order.order_id}>
  <div data-label="Order #">{order.order_id}</div>
  <div data-label="Name">{order.customer_name}</div>
  <div data-label="Email">{order.customer_email}</div>
  <div data-label="Instagram">{order.instagram_handle || "N/A"}</div>
  <div data-label="Status">{order.completed ? "✅ Completed" : "❌ Pending"}</div>
  <div data-label="Items">
    <ul>
      {order.items.map((item, index) => (
        <li key={index}>
          {item.product_name} — {item.quantity} × Ksh {item.price}
        </li>
      ))}
    </ul>
  </div>
  <div data-label="Total"><strong>Ksh {total}</strong></div>
  <div className="order-actions" data-label="Actions">
    <button
      className="complete-btn"
      onClick={() => toggleComplete(order.order_id, order.completed)}
    >
      {order.completed ? "Unmark" : "Complete"}
    </button>
    <button
      className="delete-btn"
      onClick={() => handleDelete(order.order_id)}
    >
      Delete
    </button>
  </div>
</div>

            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
