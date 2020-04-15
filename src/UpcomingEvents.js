import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.scss';

class UpcomingEvents extends Component {
	constructor(props) {
		super(props)
		this.setUpEvents = this.setUpEvents.bind(this);
	}

	setUpEvents() {
		let events = [];
		for (let i = 0; i < 2; i++) {
			let item = this.props.events[i];
			events.push(<div className="home__events-card">
				<Link to="/events">
					<h3>{item.title}</h3>
					<h4>{item.time}</h4>
				</Link>
				<img src={item.img} alt="" />
			</div>)
		}
		return events;
	}

	render() {
		return (
			<div className="UpcomingEvents" >
				<h2>Upcoming Events</h2>
				<div className="upcoming-container" >
					{this.setUpEvents()}
				</div>
			</div>
		);
	}
}

export default UpcomingEvents;