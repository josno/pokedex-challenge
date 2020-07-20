import React, { useState } from "react";

const Searchbar = (props) => {
	const [pokemon, setPokemon] = useState("");
	return (
		<div className='search-bar-wrapper'>
			<div className='search-bar-container'>
				<input
					className='search-input'
					value={pokemon}
					onChange={(e) => setPokemon(e.target.value)}
				/>
				<button onClick={() => props.onSearch(pokemon)}>Search</button>
			</div>
		</div>
	);
};

export default Searchbar;
