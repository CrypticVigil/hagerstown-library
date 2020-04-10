import React, { Component } from 'react';
import Carousel from './Carousel';
import './Catalog.scss';

class Catalog extends Component {
	render() {
		return (
			<div className="Catalog">
				<div className="catalog-container" >
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