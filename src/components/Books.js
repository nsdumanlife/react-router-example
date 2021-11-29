import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books")
      .then((res) => setBooks(res.data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div style={{ padding: "1rem 0", display: "flex" }}>
      {loading && <div>Loading...</div>}
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {books.map((book) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/books/${book.id}`}
            key={book.id}
          >
            {book.title}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Books;
