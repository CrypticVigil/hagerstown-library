import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
		<div className="Header">
			<div className="header-container">
				<img className="header-logo" src="./img/library-logo.svg" alt="HPL Logo" />
				<div className="header-navbar" >
					<Link to="/">Home</Link>
					<Link to="/catalog">Catalog</Link>
					<Link to="/events">Events</Link>
					<Link to="/about">About</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;