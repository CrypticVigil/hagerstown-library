import React from 'react';
import './Book.scss';

function Book(props) {
	return (
		<div className="Book">
			<img src={props.cover} alt={props.title} />
			<a href="/" className="book-overlay">
				<h4>{props.title}</h4>
				<h5>{props.author}</h5>
			</a>
		</div>
	);
}

export default Book;