import React, { Component } from 'react';
import ResourceCard from './ResourceCard';
import './Resources.scss';

class Resources extends Component {
	constructor(props) {
		super(props)
		this.createResources = this.createResources.bind(this);
	}

	createResources() {
		let resources = [];
		for (let item of this.props.resources) {
			resources.push(<ResourceCard data={item} />);
		}
		return resources;
	}

	render() {
		return (
			<div className="Resources" >
				<h2>{this.props.title}</h2>
				<div className="resources-container" >
					{this.createResources()}
				</div>
			</div>
		);
	}
}

export default Resources;