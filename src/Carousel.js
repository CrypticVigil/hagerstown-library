import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import './Carousel.scss';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.createBookList = this.createBookList.bind(this);
	}

	createBookList() {
		const list = [];
		let count = 0;
		for (let item of this.props.books) {
			if (count < 6) {
				list.push(<Book cover={`./img/covers/${item.cover}`} title={item.title} author={item.author} />)
				count++;
			}
		}
		return list;
	}

	render() {
		const bookList = this.createBookList();

		console.log(bookList);

		return (
			<div className="Carousel" >
				<h2>{this.props.title}</h2>
				<div className="carousel-container">{bookList}</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		books: store.books
	};
}

export default connect(mapStateToProps)(Carousel);