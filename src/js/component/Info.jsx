import React from "react";
import logo from "../../img/logo.png";

const Info = () => {
	return (
		<div className="info-container">
			<h2 className="title">
				Your L<img src={logo} alt="" />p
			</h2>
			<div className="details">
				<div className="From-to">
					<div className="cities-container">
						<h1 className="head">From</h1>
						<p className="City"> MADRID</p>
					</div>
					<span className="arrow-right">
						<i className="fas fa-arrow-right"></i>
					</span>
					<div className="cities-container" id="destination">
						<h1 className="head">To</h1>
						<p className="City">LONDON</p>
					</div>
				</div>
				<div className="date">
					<h1 className="head">Date</h1>
					<div className="date-info">
						<h1 className="date-format">06</h1>
						<h1 className="date-format">/</h1>
						<h1 className="date-format">08</h1>
						<h1 className="date-format">/</h1>
						<h1 className="date-format">2021</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
