import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";

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
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/authors/${author.id}`}
            key={author.id}
          >
            {author.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Authors;
