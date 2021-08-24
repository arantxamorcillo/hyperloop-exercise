import React from "react";
import Nav from "./Nav.jsx";
import Info from "./Info.jsx";
import PasengersSelection from "./PasengersSelection.jsx";

const Home = () => {
	return (
		<div className="main-container">
			<Nav />
			<Info />
			<PasengersSelection />
		</div>
	);
};

export default Home;
