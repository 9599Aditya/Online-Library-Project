import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#282c34" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
      <Link to="/browse" style={{ color: "white", marginRight: "15px" }}>Browse Books</Link>
      <Link to="/add" style={{ color: "white" }}>Add Book</Link>
    </nav>
  );
}

export default Navbar;
