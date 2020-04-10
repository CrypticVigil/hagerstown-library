import React from 'react';
import Carousel from './Carousel';
import './Home.scss';

function Home() {
	return (
		<div className="Home">
			<div className="home-container" >
				<div className="home-jumbotron" >
					<a href="/" className="home-jumbotron__message">
						<h2>Summer Reading Program</h2>
						<p>Starting in May, your child can earn fun rewards through our summer reading program. Find out more and sign up today!</p>
						<img src="./img/arrow-right.svg" alt="" />
					</a>
					<img className="home-jumbotron__main-image" src="./img/robyn-budlender-3jRGSA2IH0c-unsplash.jpg" alt="a row of children's books" />
					<a className="home-jumbotron__caption" href="https://unsplash.com/@robzy_m">Image from Robyn Budlender</a>
				</div>
				<Carousel title="New Arrivals" id="01" />
				<Carousel title="Staff Recommendations" id="02" />
			</div>
		</div>
	);
}

export default Home;