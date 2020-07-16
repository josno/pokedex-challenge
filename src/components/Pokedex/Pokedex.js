import React from "react";
import "./Pokedex.css";

const Pokedex = (props) => {
	return (
		<div className='pokedex-wrapper'>
			<div className='pokedex-container'>
				<div className='top-design'>
					<div className='big-blue-light' />
					<div className='pokedex-three-lights'>
						<div className='red-light light-circles' />
						<div className='yellow-light light-circles' />
						<div className='green-light light-circles' />
					</div>
				</div>
				<div className='border-shadow-lines'>
					<div className='border-line-one' />
					<div className='border-line-two' />
					<div className='border-line-three' />
				</div>
				{props.children}
			</div>
		</div>
	);
};

export default Pokedex;
