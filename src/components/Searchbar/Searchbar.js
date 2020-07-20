import React, { useState } from "react";
import Button from "../Button/Button";
import "./Searchbar.css";

const Searchbar = ({ onSearch, pokemonNameList = [] }) => {
	const [pokemon, setPokemon] = useState("");
	const [searchbarToggle, setSearchbarToggle] = useState(false);
	const [displayAutocomplete, setDisplayAutocomplete] = useState(false);

	const setAutocompleteInput = (pokemon) => {
		setPokemon(pokemon);
	};

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
								{pokemonNameList
									.filter((p) => p.indexOf(pokemon.toLowerCase().trim()) > -1)
									.map((pokemonName, index) => (
										<li
											className='autocomplete-choice'
											key={index}
											onClick={() => setAutocompleteInput(pokemonName)}
											tabIndex='0'
										>
											{pokemonName}
										</li>
									))}
							</ul>
						)}
					</div>

					<Button
						handleClick={() => setSearchbarToggle(!searchbarToggle)}
						renderedButton={"Cancel"}
					/>
					<Button
						renderedButton={"Search"}
						handleClick={() => onSearch(pokemon)}
					/>
				</div>
			) : (
				<button
					className='open-search-button'
					onClick={() => setSearchbarToggle(!searchbarToggle)}
				>
					Search Database
				</button>
			)}
		</div>
	);
};

export default Searchbar;
