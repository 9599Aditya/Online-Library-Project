import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.items.find(b => b.id === id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>{book.description}</p>
      <strong>Rating:</strong> {book.rating}
      <br /><br />
      <button onClick={() => navigate("/browse")}>Back to Browse</button>
    </div>
  );
}

export default BookDetails;
