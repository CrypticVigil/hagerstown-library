import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<div className="Footer">
			<div className="footer-container" >
				<div className="footer-left" >
					<img className="footer-logo" src="./img/library-logo_footer.svg" alt="" />
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/catalog">Catalog</Link></li>
						<li><Link to="/genres">Genres</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
					<ul>
						<li>1234 Bookworm Street</li>
						<li>Hagerstown, MD 21740</li>
						<li>(240) 321-7654</li>
					</ul>
				</div>
				<div className="footer-right">
					<a href="https://twitter.com"><img src="./img/facebook-logo.svg" alt="facebook logo" /></a>
					<a href="https://twitter.com"><img src="./img/twitter-logo.svg" alt="twitter logo" /></a>
					<a href="https://www.instagram.com/"><img src="./img/instagram-logo.svg" alt="instagram logo" /></a>
					<a href="https://www.youtube.com/"><img src="./img/youtube-logo.svg" alt="youtube logo" /></a>
				</div>
			</div>
			<div className="footer-bar"><p>&copy; 2020 Chad Barrows&nbsp;&nbsp;//&nbsp;&nbsp;Created with React & Redux</p></div>
		</div>
	);
}

export default Footer;