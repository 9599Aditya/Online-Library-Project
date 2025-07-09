import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");
  const books = useSelector(state => state.books.items);

  const filteredBooks = books.filter(book => {
    const inCategory = category ? book.category === category : true;
    const inSearch = book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());
    return inCategory && inSearch;
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{category ? `${category} Books` : "All Books"}</h2>
      <input placeholder="Search by title or author" value={search} onChange={e => setSearch(e.target.value)} />
      {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
}

export default BrowseBooks;
