import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import "./style.css";

function Saved() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    API.getBooks()
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteBook(book) {
    API.deleteBook(book._id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            {results.length ? (
              <nav>
                {results.map((book) => (
                  <div className="eachBook">
                    <ul key={book._id}>
                      <img src={book.image} alt="bookCover" />

                      <br></br>

                      <h1>{book.title}</h1>
                      <p>by</p>
                      <h2>{book.authors}</h2>
                      <h3>{book.synopsis}</h3>

                      <button onClick={() => deleteBook(book)}>Delete</button>
                    </ul>
                  </div>
                ))}
              </nav>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;
