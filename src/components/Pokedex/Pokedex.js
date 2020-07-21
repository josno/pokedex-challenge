import React from "react";
import "./Pokedex.css";

const Pokedex = (props) => {
	return (
		// <div className='pokedex-wrapper'>
		<div className='pokedex-container'>
			<header>
				<h1 className='pokedex-title'>Pokedex 151</h1>
				<div className='top-design'>
					<div className='big-blue-light' />
					<div className='pokedex-three-lights'>
						<div className='red-light light-circles' />
						<div className='yellow-light light-circles' />
						<div className='green-light light-circles' />
					</div>
				</div>
			</header>
			{/* <div className='border-shadow-lines'>
				<div className='border-line-one' />
				<div className='border-line-two' />
				<div className='border-line-three' />
			</div> */}
			<div className='pokemon-details-wrapper'>{props.children}</div>
		</div>
		// </div>
	);
};

export default Pokedex;
