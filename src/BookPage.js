import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from './Carousel';
import BookBag from './BookBag';
import './BookPage.scss';

function BookPage(props) {
	let id = useParams().id;
	let book = props.books.find(item => item.id === id);

	let addToBag = () => {
		props.dispatch({ type: "ADD_BOOK", bookID: book.id });
	}

	let removeFromBag = () => {
		props.dispatch({ type: "REMOVE_BOOK", bookID: book.id });
	}

	let placeHold = () => {
		props.dispatch({ type: "ADD_HOLD", bookID: book.id });
	}

	let removeHold = () => {
		props.dispatch({ type: "REMOVE_HOLD", bookID: book.id });
	}

	let available = () => {
		if (book.status === 1) {
			return <div><h4 className="available">{book.due}</h4><button onClick={addToBag}>Add To Book Bag</button></div>
		} else if (book.status === 2) {
			return <div><h4>{book.due}</h4><button onClick={placeHold}>Place Hold</button></div>
		} else if (book.status === 3) {
			return <div><h4 className="in-bookbag">IN BOOK BAG</h4><button onClick={removeFromBag}>Remove From Book Bag</button></div>
		} else if (book.status === 4) {
			return <div><h4 className="on-hold">ON HOLD</h4><button onClick={removeHold}>Remove Hold</button></div>
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
						<BookBag />
					</div>
				</div>
				<Carousel list="NewArrivals" id="01" />
			</div>
		</div>
	)
}

function mapStateToProps(store) {
	return {
		books: store.books,
		bookBag: store.bookBag
	};
}

export default connect(mapStateToProps)(BookPage);
