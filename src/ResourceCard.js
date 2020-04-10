import React from 'react';
import { Link } from 'react-router-dom';
import './ResourceCard.scss';

function ResourceCard(props) {
	return (
		<Link to="/" className="ResourceCard">
			<img src={`./img/resources/${props.data.img}`} alt={props.data.title} />
			<h3>{props.data.title}</h3>
		</Link>
	);
}

export default ResourceCard;