import React from "react";

const Buttons = (props) => {
	return (
		<div className='button-container'>
			<button onClick={() => props.goToPreviousPokemon()}>{"<<"}</button>
			<button onClick={() => props.goToNextPokemon()}>{">>"}</button>
		</div>
	);
};

export default Buttons;
