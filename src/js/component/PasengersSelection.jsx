import React from "react";
import SelectionCard from "./SelectionCard.jsx";
import logo from "../../img/logo.png";

const Fares = [
	{ category: "Adult (+16)", fareDescription: "" },
	{ category: "Child (<5)", fareDescription: "Children >5 travel free" },
	{
		category: "Special Fares",
		fareDescription: "Veteran, people with disabilities"
	}
];

const PasengersSelection = () => {
	return (
		<div className="Selection">
			<div className="grid">
				<h2 className="title">
					who is l<img src={logo} alt="" />
					ping
				</h2>
				{Fares.map((Fare, i) => (
					<SelectionCard Fare={Fare} key={i} />
				))}
			</div>
		</div>
	);
};

export default PasengersSelection;
