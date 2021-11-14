import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/authors">Authors</Link> | <Link to="/books">Books</Link>
      </nav>
    </div>
  );
}

export default App;
