import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Book() {
  let params = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios(
      `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${params.bookId}`
    ).then((res) => setBook(res.data));
  }, [params.bookId]);
  return (
    <div>
      <h3 style={{ margin: "1rem" }}>Book Id: {params.bookId} </h3>
      <h3 style={{ margin: "1rem" }}>Book Title: {book.title} </h3>
      <h3 style={{ margin: "1rem" }}>Pages: {book.pages} </h3>
      <h3 style={{ margin: "1rem" }}>Release Date: {book.releaseDate} </h3>
    </div>
  );
}

export default Book;
