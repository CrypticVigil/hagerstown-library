import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import './Carousel.scss';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.slides = [];
		this.totalSlides = 0;
		this.currentSlide = 0;
		this.setupSlides = this.setupSlides.bind(this);
		this.nextSlide = this.nextSlide.bind(this);
		this.prevSlide = this.prevSlide.bind(this);
		this.moveToSlide = this.moveToSlide.bind(this);
		this.createSlides = this.createSlides.bind(this);
		// eslint-disable-next-line
		this.filtered = this.props.books.filter(book => {
			if (this.props.lists[this.props.list].books.includes(book.id)) {
				return true;
			}
		});
	}

	componentDidMount() {
		this.setupSlides();
	}

	setupSlides() {
		this.slides = document.getElementsByClassName(`carousel-${this.props.id}`);
		this.totalSlides = this.slides.length;
	}

	nextSlide() {
		if (this.currentSlide === this.totalSlides - 1) {
			this.currentSlide = 0;
		} else {
			this.currentSlide++;
		}
		this.moveToSlide(this.currentSlide);
	}

	prevSlide() {
		if (this.currentSlide === 0) {
			this.currentSlide = this.totalSlides - 1;
		} else {
			this.currentSlide--;
		}
		this.moveToSlide(this.currentSlide);
	}

	moveToSlide(slide) {
		for (let item of this.slides) {
			item.className = `carousel-${this.props.id} carousel__slide`;
		}
		this.slides[slide].className = `carousel-${this.props.id} carousel__slide carousel__slide--active`;
		if (slide === 0) {
			this.slides[this.totalSlides - 1].className = `carousel-${this.props.id} carousel__slide carousel__slide--prev`;
		} else {
			this.slides[slide - 1].className = `carousel-${this.props.id} carousel__slide carousel__slide--prev`;
		}
		if (slide === this.totalSlides - 1) {
			this.slides[0].className = `carousel-${this.props.id} carousel__slide carousel__slide--next`;
		} else {
			this.slides[slide + 1].className = `carousel-${this.props.id} carousel__slide carousel__slide--next`;
		}
	}

	createSlides() {
		// const list = [];
		// let count = 0;
		// for (let item of this.props.books) {
		// 	console.log(item);
		// 	if (count < 6) {
		// 		list.push(<Book cover={`./img/covers/${item.cover}`} title={item.title} author={item.author} key={count} />);
		// 		count++;
		// 	}
		// }
		// return list;
		const slides = Math.ceil(this.filtered.length / 6);
		const list = [];
		for (let i = 0; i < slides; i++) {
			list.push([]);
		}

		let counter = 0;
		for (let item of this.filtered) {
			if (counter < 6) {
				list[0].push(<Book cover={`./img/covers/${item.cover}`} title={item.title} author={item.author} key={counter} />)
				counter++;
			} else if (counter >= 6 && counter < 12) {
				list[1].push(<Book cover={`./img/covers/${item.cover}`} title={item.title} author={item.author} key={counter} />)
				counter++;
			} else if (counter >= 12 && counter < 18) {
				list[2].push(<Book cover={`./img/covers/${item.cover}`} title={item.title} author={item.author} key={counter} />)
				counter++;
			} else if (counter >= 18 && counter < 24) {
				list[3].push(<Book cover={`./img/covers/${item.cover}`} title={item.title} author={item.author} key={counter} />)
				counter++;
			}
		}
		return list;
	}

	checkSlide(slide) {
		if (slide) {
			return <div className={`carousel-${this.props.id} carousel__slide carousel__slide--prev slide-blue`} >{slide}</div>
		}
	}

	render() {
		const slidesArray = this.createSlides();
		return (
			<div className="Carousel" >
				<h2>{this.props.lists[this.props.list].title}</h2>
				<div className="carousel-container">
					<div className="carousel__arrow carousel__arrow-left" onClick={this.prevSlide}>
						<img src="./img/next-arrow.svg" alt="previous" />
					</div>
					<div className="carousel__books-area">
						<div className={`carousel-${this.props.id} carousel__slide carousel__slide--active`} >{slidesArray[0]}</div>
						<div className={`carousel-${this.props.id} carousel__slide carousel__slide--next`} >{slidesArray[1]}</div>
						{this.checkSlide(slidesArray[2])}
						{this.checkSlide(slidesArray[3])}
					</div>
					<div className="carousel__arrow" onClick={this.nextSlide} >
						<img src="./img/next-arrow.svg" alt="next" />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		books: store.books,
		lists: store.lists
	};
}

export default connect(mapStateToProps)(Carousel);