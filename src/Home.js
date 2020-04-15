import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Resources from './Resources';
import Carousel from './Carousel';
import UpcomingEvents from './UpcomingEvents';
import './Home.scss';

function Home(props) {
	return (
		<div className="Home">
			<div className="home-container" >
				<div className="home-jumbotron" >
					<Link href="/" className="home-jumbotron__message">
						<h2>Summer Reading Program</h2>
						<p>Starting in May, your child can earn fun rewards through our summer reading program. Find out more and sign up today!</p>
						<img src="./img/arrow-right.svg" alt="" />
					</Link>
					<img className="home-jumbotron__main-image" src="./img/robyn-budlender-3jRGSA2IH0c-unsplash.jpg" alt="a row of children's books" />
					<a className="home-jumbotron__caption" href="https://unsplash.com/@robzy_m">Image from Robyn Budlender</a>
				</div>
				<Resources title="Featured Resources" resources={props.resources} />
				<Carousel list="NewArrivals" id="01" />
				<UpcomingEvents events={props.events} />
			</div>
		</div>
	);
}

function mapStateToProps(store) {
	return {
		resources: store.resources,
		events: store.events
	};
}

export default connect(mapStateToProps)(Home);