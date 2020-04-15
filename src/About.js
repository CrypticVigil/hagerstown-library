import React from 'react';
import './About.scss';

function About() {
	return (
		<div className="About">
			<div className="about-container">
				<div className="about__center-container">
					<h2>About this website</h2>
					<p>Hi, my name is Chad Barrows. I created this website as a way to practice using React and and a bit of Redux. If you like what you see, there are more examples of my work on <a href="https://www.chadbarrows.com/">my portfolio site</a>.</p>

					<p>The stock images on this site are all from <a href="https://unsplash.com/">Unsplash</a>.</p>
				</div>
			</div>
		</div>
	);
}

export default About;