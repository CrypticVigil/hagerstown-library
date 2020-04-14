import React from 'react';
import { Link } from 'react-router-dom';
import './Book.scss';

function Book(props) {
	return (
		<Link className="Book" to={`/book/${props.id}`}>
			<img src={props.cover} alt={props.title} />
			<a href="/" className="book-overlay">
				<h4>{props.title}</h4>
				<h5>{props.author}</h5>
			</a>
		</Link>
	);
}

export default Book;