import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { server } from '../config2';

export class BookPage extends Component {
	state = {
		book: {},
		isLoaded: false,
	};

	componentDidMount() {
		axios
			.get(`${server}/wp-json/wp/v2/books/${this.props.match.params.id}`)
			.then((res) =>
				this.setState({
					book: res.data,
					isLoaded: true,
				})
			)
			.catch((err) => console.log(err));
	}

	render() {
		const { book, isLoaded } = this.state;

		if (isLoaded) {
			return (
				<>
					<Link href='/'>Go Back</Link>
					<h1>{book.title.rendered}</h1>
				</>
			);
		}
		return <h2>Loading ...</h2>;
	}
}

export default BookPage;
