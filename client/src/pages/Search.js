import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import "./style.css";

function Search() {
  const [book, setBook] = useState("");
  const [results, setResults] = useState([]);

  function handleSearch(event) {
    console.log(book);
    API.searchBook(book)
      .then((res) => {
        console.log(res);
        setResults(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function saveBook(book) {
    console.log(book);

    let formattedBook = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      synopsis: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
    };

    console.log(formattedBook);

    API.saveBook(formattedBook)
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
            <Jumbotron>
              <input
                value={book}
                placeholder="Search Title or Author"
                onChange={(event) => setBook(event.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </Jumbotron>
            {results.length ? (
              <nav>
                {results.map((book) => (
                  <div className="eachBook">
                  <ul key={book.id}>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="bookCover"/>
                    <br></br>
                    
                    <h1>{book.volumeInfo.title}</h1> 
                    <p>by</p>
                    <h2>{book.volumeInfo.authors}</h2>
                    <h3>{book.volumeInfo.description}</h3>
                    
                    <button onClick={() => saveBook(book)}>Save</button>
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

export default Search;
