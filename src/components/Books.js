import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios(
      "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
    ).then((res) => setBooks(res.data));
  }, []);
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
