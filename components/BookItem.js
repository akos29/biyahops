import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Link from 'next/link';
import { server } from '../config2';

export class BookItem extends Component {
	state = {
		imgUrl: '',
		author: '',
		isLoaded: false,
	};

	static propTypes = {
		book: PropTypes.object.isRequired,
	};

	componentDidMount() {
		const { featured_media, author } = this.props.book;
		const getImageUrl = axios.get(
			`${server}/wp-json/wp/v2/media/${featured_media}`
		);
		const getAuthor = axios.get(`${server}/wp-json/wp/v2/users/${author}`);

		Promise.all([getImageUrl, getAuthor]).then((res) =>
			this.setState({
				imgUrl: res[0].data.media_details.sizes.full.source_url,
				author: res[1].data.name,
				isLoaded: true,
			})
		);
	}

	render() {
		const { id, title, excerpt } = this.props.book;
		const { imgUrl, author, isLoaded } = this.state;
		if (isLoaded) {
			return (
				<div>
					<h2>{title.rendered}</h2>
					<small>
						Review by <strong>{author}</strong>
					</small>
					<img src={imgUrl} alt={title.rendered} style={{ width: '100%' }} />
					<div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
					<Link href={`/book/${id}`}>Read Review</Link>
				</div>
			);
		}
		return null;
	}
}

export default BookItem;
