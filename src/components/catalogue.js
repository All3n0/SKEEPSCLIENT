import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/catalogue.css";
import AdminLogin from "./AdminLogin";

const API_BASE = "http://127.0.0.1:5555";

const CatalogueManager = () => {
  const [type, setType] = useState("bags");
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", image: "", inspiration: "" });
  const [createForm, setCreateForm] = useState({ name: "", price: "", image: "", inspiration: "" });
  const [token, setToken] = useState('secret-token-123');
     useEffect(() => {
    if (token) {
      fetchItems();
    }
  }, [type, token]);

  // ✅ If not logged in, show login form
  if (!token) {
    return <AdminLogin onLogin={(token) => setToken(token)} />;
  }
  const fetchItems = async () => {
    try {
      const endpoint = type === "bags" ? "all_bags" : "all_tshirts";
      const res = await axios.get(`${API_BASE}/${endpoint}`);
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const startEdit = (item) => {
    setEditingId(item.id);
    setForm({ name: item.name, price: item.price, image: item.image || item.image_url, inspiration: item.inspiration });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ name: "", price: "", image: "", inspiration: "" });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`${API_BASE}/${type}/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchItems();
      cancelEdit();
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${type}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchItems();
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if(!token) {
      alert("Admin access required.");
      return
    }
    try {
      await axios.post(`${API_BASE}/${type}`, createForm, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchItems();
      setCreateForm({ name: "", price: "", image: "", inspiration: "" });
    } catch (error) {
      console.error("Error creating item", error);
      alert("Admin access required or invalid input.");
    }
  };

  return (
    <div className="catalogue-container">
      <h2>Catalogue Manager</h2>

      <div className="controls">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="bags">Bags</option>
          <option value="tshirts">T-Shirts</option>
        </select>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form onSubmit={handleCreate} className="create-form">
        <input
          name="name"
          placeholder="Name"
          value={createForm.name}
          onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={createForm.price}
          onChange={(e) => setCreateForm({ ...createForm, price: e.target.value })}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={createForm.image}
          onChange={(e) => setCreateForm({ ...createForm, image: e.target.value })}
          required
        />
        <input
          name="inspiration"
          placeholder="Inspiration"
          value={createForm.inspiration}
          onChange={(e) => setCreateForm({ ...createForm, inspiration: e.target.value })}
        />
        <button type="submit">Add {type.slice(0, -1)}</button>
      </form>

      <div className="item-grid">
        {filteredItems.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.image || item.image_url} alt={item.name} />
            {editingId === item.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Name"
                />
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  placeholder="Price"
                />
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="Image URL"
                />
                <input
                  type="text"
                  value={form.inspiration}
                  onChange={(e) => setForm({ ...form, inspiration: e.target.value })}
                  placeholder="Inspiration"
                />
                <button onClick={() => handleUpdate(item.id)} className="save">Save</button>
                <button onClick={cancelEdit} className="cancel">Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{item.name}</h3>
                <p>KES {item.price}</p>
                <p><strong>Inspiration:</strong> {item.inspiration}</p>
                <button onClick={() => startEdit(item)} className="edit">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="delete">Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogueManager;
