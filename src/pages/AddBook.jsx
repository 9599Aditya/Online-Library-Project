import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", author: "", description: "", rating: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.description || !form.rating || !form.category) return;
    dispatch(addBook({ ...form, id: Date.now().toString() }));
    navigate("/browse");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /><br />
        <input placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} /><br />
        <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} /><br />
        <input placeholder="Rating" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })} /><br />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
