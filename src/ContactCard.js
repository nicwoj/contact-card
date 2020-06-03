import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
	render() {
		return (
			<div className="contact-card">
				<h1>{this.props.name}</h1>
				<img src="https://via.placeholder.com/100" alt="Card"></img>
				<ul>
					<li>mobile: {this.props.mobile}</li>
					<li>work: {this.props.work}</li>
					<li>email: {this.props.email}</li>
				</ul>
			</div>
		);
	}
}

ContactCard.propTypes = {
	name: PropTypes.string.isRequired,
	mobile: PropTypes.string.isRequired,
	work: PropTypes.string,
	email: PropTypes.string.isRequired,
};

export default ContactCard;