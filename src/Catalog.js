import React, { Component } from 'react';
import Carousel from './Carousel';
import './Catalog.scss';

class Catalog extends Component {
	render() {
		window.scrollTo(0, 0);
		return (
			<div className="Catalog">
				<div className="catalog-container" >
					<div className="catalog__header">
						<img src="/img/CatalogHeader.jpg" alt="" />
						<h2>Browse Our Collection</h2>
					</div>
					<Carousel list="Classics" id="01" />
					<Carousel list="FantasySci" id="02" />
					<Carousel list="StaffPicks" id="03" />
					<Carousel list="Classics" id="04" />
				</div>
			</div>
		);
	}
}

export default Catalog;