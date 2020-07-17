import React from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import "./Buttons.css";

const Buttons = (props) => {
	return (
		<div className='button-container'>
			<button
				className='arrow-button-box'
				onClick={() => props.goToPreviousPokemon()}
			>
				<AiOutlineCaretLeft className='arrow-style' />
			</button>
			<button
				className='arrow-button-box'
				onClick={() => props.goToNextPokemon()}
			>
				<AiOutlineCaretRight className='arrow-style' />
			</button>
		</div>
	);
};

export default Buttons;
