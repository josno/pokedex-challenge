import React from "react";

import "./Button.css";

const Buttons = ({ handleClick, listError, buttonClassName, label }) => {
	return (
		<button
			className={buttonClassName}
			onClick={() => handleClick()}
			disabled={listError}
		>
			{label}
		</button>
	);
};

export default Buttons;
