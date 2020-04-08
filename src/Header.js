import React from 'react';
import './Header.css';

function Header() {
	return (
		<div className="Header">
			<div className="header-container">
				<img className="header-logo" src="./img/library-logo.svg" alt="HPL Logo" />
				<div className="header-navbar" >
					<a href="/" >Home</a>
					<a href="/" >Catalog</a>
					<a href="/" >Genres</a>
					<a href="/" >About</a>
				</div>
			</div>
		</div>
	);
}

export default Header;