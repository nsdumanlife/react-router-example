import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios(
      "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/authors"
    ).then((res) => setAuthors(res.data));
  }, []);

  return (
    <div style={{ padding: "1rem 0", display: "flex" }}>
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
