import React from 'react';
import { server } from '../config2';
import BookList from '../components/BookList';

const books = ({ books }) => {
	return (
		<>
			<div className='container'>
				<BookList books={books} />
			</div>
		</>
	);
	console.log(books);
};

export default books;

export const getStaticProps = async () => {
	const res1 = await fetch(`${server}/wp-json/wp/v2/books`);
	const books = await res1.json();
	console.log(books);
	return {
		props: { books },
	};
};
