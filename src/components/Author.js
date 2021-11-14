import React from "react";
import { useParams } from "react-router-dom";

function Author() {
  let params = useParams();
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ margin: "0 1rem" }}>Author:{params.authorId}</h2>
      <h3>Name:</h3>
      <h3>Surname: </h3>
    </div>
  );
}

export default Author;
