import React from "react";
import BookItems from "./BookItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BookList = ({ books }) => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center g-5">
          {books.map((book) => (
            <BookItems book={book} key={book.id} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BookList;
