import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://my-json-server.typicode.com/dmitrijt9/book-api-mock/authors")
      .then((res) => setAuthors(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "1rem 0", display: "flex" }}>
      {loading && <div>Loading...</div>}
      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        {authors.map((author) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/authors/${author.id}`}
            key={author.id}
          >
            {author.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Authors;
