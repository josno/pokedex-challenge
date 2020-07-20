import React from "react";

import "./Buttons.css";

const Buttons = (props) => {
	return (
		<div className='button-container'>
			<button className={props.buttonClassName} onClick={() => props.goBack()}>
				{props.goBackIcon}
			</button>
			<button className={props.buttonClassName} onClick={() => props.goTo()}>
				{props.goToIcon}
			</button>
		</div>
	);
};

export default Buttons;
