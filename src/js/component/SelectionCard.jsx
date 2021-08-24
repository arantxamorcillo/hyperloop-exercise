import React, { useState } from "react";
import PropTypes from "prop-types";

const [disable, setDisable] = useState(true);
function clickrest() {
	if (count === 0) {
		setDisable(true);
	} else setDisable(false);
}

const SelectionCard = ({ Fare }) => {
	const [count, setCount] = useState(0);

	const [disable, setDisable] = useState(true);

	function clickRest() {
		setCount(count - 1);
	}
	return (
		<div className="select-card">
			<div className="category">
				<h2 className="fares">{Fare.category}</h2>
				<div className="people">
					<button
						className="btn round minus"
						// disable={disable}
						onClick={clickRest(count)}>
						-
					</button>
					<h2 className="count">{count}</h2>
					<button
						className="btn round plus"
						onClick={() => setCount(count + 1)}>
						+
					</button>
				</div>
			</div>
			<p className="description">{Fare.fareDescription}</p>
		</div>
	);
};

SelectionCard.propTypes = {
	Fare: PropTypes.array
};

export default SelectionCard;
