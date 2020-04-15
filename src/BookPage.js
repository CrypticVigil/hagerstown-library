import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import './BookPage.scss';

function BookPage(props) {
	let id = useParams().id;
	let book = props.books.find(item => item.id === id);
	console.log(book);

	let available = () => {
		if (book.available) {
			return <div><h4 className="available">{book.due}</h4><button>Add To Book Bag</button></div>
		} else {
			return <div><h4>{book.due}</h4><button>Place Hold</button></div>
		}
	}

	return (
		<div className="BookPage" >
			<div className="book-page-container">
				<div className="book-page__main-info">
					<div className="book-page__main-info__left">
						<img src={`/img/covers/${book.cover}`} alt={book.title} />
						<h5>Publisher</h5>
						<p>{book.publisher}</p>
						<p>{book.pages} pages</p>
					</div>
					<div className="book-page__main-info__center">
						<h2>{book.title}</h2>
						<h4 className="book-page__author">{book.author}</h4>
						<p className="book-page__summary">{book.summary}</p>
					</div>
					<div className="book-page__main-info__right">
						{available()}
					</div>
				</div>
				<Carousel list="NewArrivals" id="01" />
			</div>
		</div>
	)
}

function mapStateToProps(store) {
	return {
		books: store.books
	};
}

export default connect(mapStateToProps)(BookPage);
