import React, { Component } from "react";
import { server } from "../config2";
import BookItem from "./BookItem";
import axios from "axios";

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false,
  };
  componentDidMount() {
    axios
      .get(`${server}/wp-json/wp/v2/books`)
      .then((res) =>
        this.setState({
          books: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { books, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <>
          {books.map((book) => (
            <BookItem key={book.id} book={book} />
          ))}
        </>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default Books;
