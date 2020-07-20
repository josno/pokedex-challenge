import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";

const Searchbar = (props) => {
	const [pokemon, setPokemon] = useState("");
	const [searchbarToggle, setSearchbarToggle] = useState(false);

	return (
		<div className='search-bar-wrapper'>
			{searchbarToggle ? (
				<div className='search-bar-container'>
					<input
						className='search-input'
						value={pokemon}
						onChange={(e) => setPokemon(e.target.value)}
					/>
					<Buttons
						goBack={() => setSearchbarToggle(!searchbarToggle)}
						goTo={() => props.onSearch(pokemon)}
						goToIcon={"Search"}
						goBackIcon={"Cancel"}
					/>
				</div>
			) : (
				<button onClick={() => setSearchbarToggle(!searchbarToggle)}>
					Search Database
				</button>
			)}
		</div>
	);
};

export default Searchbar;
