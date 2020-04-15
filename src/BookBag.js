import React from 'react';
import { connect } from 'react-redux';
import './BookBag.scss';

function BookBag(props) {
	let createList = () => {
		let list = [];
		for (let bookID of props.bookBag) {
			let bookTitle = () => {
				for (let book of props.books) {
					if (book.id === bookID) {
						return book.title;
					}
				}
			}
			list.push(<li key={bookID}>{bookTitle()}</li>);
		}
		return list;
	}
	return (
		<div className="BookBag">
			<h5>My Book Bag</h5>
			<ul>
				{createList()}
			</ul>
		</div>
	);
}

function mapStateToProps(store) {
	return {
		books: store.books,
		bookBag: store.bookBag
	};
}

export default connect(mapStateToProps)(BookBag);