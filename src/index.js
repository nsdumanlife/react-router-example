import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Authors from "./components/Authors";
import Books from "./components/Books";
import Author from "./components/Author";
import Book from "./components/Book";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/authors" element={<Authors />}>
        <Route path=":authorId" element={<Author />} />
      </Route>
      <Route path="/books" element={<Books />}>
        <Route path=":bookId" element={<Book />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      ></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
