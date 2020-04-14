import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
		<div className="Header">
			<div className="header-container">
				<Link to="/"><img className="header-logo" src="/img/library-logo.svg" alt="HPL Logo" /></Link>

				<div className="header-navbar" >
					<Link to="/">Home</Link>
					<NavLink to="/catalog">Catalog</NavLink>
					<NavLink to="/events">Events</NavLink>
					<NavLink to="/about">About</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Header;