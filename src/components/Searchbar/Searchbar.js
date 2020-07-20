import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import "./Searchbar.css";

const Searchbar = ({ onSearch, pokemonOptions = [] }) => {
	const [pokemon, setPokemon] = useState("");
	const [searchbarToggle, setSearchbarToggle] = useState(false);
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [displayAutocomplete, setDisplayAutocomplete] = useState(false);

	return (
		<div className='search-bar-wrapper'>
			{searchbarToggle ? (
				<div className='search-container'>
					<div className='search-input-container'>
						<input
							className='search-input'
							value={pokemon}
							onChange={(e) => setPokemon(e.target.value)}
							onClick={() => setDisplayAutocomplete(!displayAutocomplete)}
						/>

						{displayAutocomplete && (
							<ul className='pokemon-autocomplete-list'>
								{pokemonOptions.map((pokemon, index) => (
									<li key={index}>{pokemon}</li>
								))}
							</ul>
						)}
					</div>

					<Buttons
						goBack={() => setSearchbarToggle(!searchbarToggle)}
						goTo={() => onSearch(pokemon)}
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
