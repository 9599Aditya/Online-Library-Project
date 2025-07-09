import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector(state => state.books.items.slice(0, 3));

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Online Library</h1>
      <h3>Categories:</h3>
      <ul>
        <li><Link to="/books/Fiction">Fiction</Link></li>
        <li><Link to="/books/Non-Fiction">Non-Fiction</Link></li>
        <li><Link to="/books/Sci-Fi">Sci-Fi</Link></li>
      </ul>
      <h3>Popular Books:</h3>
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
}

export default Home;
