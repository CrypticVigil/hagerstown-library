import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Events.scss';

class Events extends Component {
	constructor(props) {
		super(props);
		console.log(props.events);
	}

	setUpEvents() {
		let eventList = [];
		for (let event of this.props.events) {
			eventList.push(<div className="event-card" key={event.title}>
				<img src={event.img} alt="" />
				<div>
					<h2>{event.title}</h2>
					<h4>{event.time}</h4>
					<p>{event.description}</p>
					<h4 className="event-card__location">{event.location}</h4>
				</div>
			</div>)
		}
		return eventList;
	}

	render() {
		window.scrollTo(0, 0);
		return (
			<div className="Events" >
				<div className="events-container">
					<div className="events__header">
						<img src="/img/CatalogHeader.jpg" alt="" />
						<h2>Upcoming Events</h2>
					</div>
					{this.setUpEvents()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		events: store.events
	};
}

export default connect(mapStateToProps)(Events);