import React from "react";
import logo from "../../img/logo.png";

const Nav = () => {
	return (
		<div className="nav">
			<span className="back">
				<i className="fas fa-arrow-left"></i>
			</span>
			<span className="logo">
				<img src={logo} alt="hyperloop logo" />
			</span>
		</div>
	);
};
export default Nav;
