import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Book from './Book';
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

	// createSlides() {
	// 	// const list = [];
	// 	// let count = 0;
	// 	// for (let item of this.props.books) {
	// 	// 	if (count < 6) {
	// 	// 		list.push(<Book cover={`./img/covers/${item.cover}`} title={item.title} author={item.author} />)
	// 	// 		count++;
	// 	// 	}
	// 	// }
	// 	// return list;
	// 	const slides = Math.ceil(this.props.books.length / 6);
	// 	let counter = 0;
	// }



	render() {
		return (
			<div className="Carousel" >
				<h2>{this.props.title}</h2>
				<div className="carousel-container">
					<div className="carousel__arrow carousel__arrow-left" onClick={this.prevSlide}>
						<img src="./img/next-arrow.svg" alt="previous" />
					</div>
					<div className="carousel__books-area">
						{/* {this.createSlides()} */}
						<div className={`carousel-${this.props.id} carousel__slide carousel__slide--active slide-red`} >A</div>
						<div className={`carousel-${this.props.id} carousel__slide carousel__slide--next slide-green`} >B</div>
						<div className={`carousel-${this.props.id} carousel__slide carousel__slide--prev slide-blue`} >C</div>
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
		books: store.books
	};
}

export default connect(mapStateToProps)(Carousel);