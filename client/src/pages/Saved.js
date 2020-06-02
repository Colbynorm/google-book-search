import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

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
              <List>
                {results.map((book) => (
                  <ListItem key={book._id}>
                    <strong>
                      {book.title} by {book.author}
                      {book.synopsis}
                    </strong>
                    <img src={book.image} alt="book cover" />
                    <button onClick={() => deleteBook(book)}>Delete</button>
                  </ListItem>
                ))}
              </List>
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
