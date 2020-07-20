import React from "react";

import "./Button.css";

const Buttons = (props) => {
	return (
		<button
			className={props.buttonClassName}
			onClick={() => props.handleClick()}
		>
			{props.renderedButton}
		</button>
	);
};

export default Buttons;
