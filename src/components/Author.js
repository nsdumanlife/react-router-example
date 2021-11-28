import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Author() {
  let params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios(
      `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/authors/${params.authorId}`
    ).then((res) => setUser(res.data));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ margin: "0 1rem" }}>Author:{params.authorId}</h2>
      <h3>Name: {user.name} </h3>
      <h3>Surname: {user.surname} </h3>
      {console.log(params)}
    </div>
  );
}

export default Author;
