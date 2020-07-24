import React, { useState } from "react";
import Button from "../Button/Button";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import "./Searchbar.css";

const Searchbar = ({
	handleWarningMessage,
	onSearch,
	pokemonNameList = [],
}) => {
	const [pokemon, setPokemon] = useState("");
	const [displayAutocomplete, setDisplayAutocomplete] = useState(false);

	const setSelection = (pokemon) => {
		setPokemon(pokemon);
		setDisplayAutocomplete(!displayAutocomplete);
	};

	const handleDisplayAutocomplete = () => {
		if (pokemonNameList.length <= 0) {
			return;
		}
		//Remain open until a Pokemon is selected
		setDisplayAutocomplete(true);
		//Gets rid of existing message to avoid confusion
		handleWarningMessage();
	};

	const resetInputMenu = () => {
		setPokemon("");
		//Should be closed, not toggled
		setDisplayAutocomplete(false);
	};

	const handleSearch = () => {
		if (!pokemon) {
			return;
		}

		resetInputMenu();
		onSearch(pokemon);
	};

	const pokemonFilteredList = (
		<ul className='pokemon-autocomplete-list'>
			{pokemonNameList
				.filter((p) => p.indexOf(pokemon.toLowerCase().trim()) > -1)
				.map((pokemonName, index) => {
					//Format name with multiple words or that have '-'
					const capitalizedName = pokemonName
						.split("-")
						.map(
							(splitName) =>
								splitName.charAt(0).toUpperCase() + splitName.slice(1)
						)
						.join(" ");
					return (
						<li
							className='autocomplete-choice'
							key={index}
							onClick={() => setSelection(capitalizedName)}
							tabIndex='0'
						>
							{capitalizedName}
						</li>
					);
				})}
		</ul>
	);

	return (
		<>
			<section className='search-bar-container'>
				<div className='search-input-container'>
					<input
						className='search-input'
						value={pokemon}
						onChange={(e) => setPokemon(e.target.value)}
						placeholder='Search database'
						onClick={() => handleDisplayAutocomplete()}
					/>
					{displayAutocomplete && pokemonFilteredList}
				</div>

				<Button
					buttonClassName={"search-buttons"}
					handleClick={() => resetInputMenu()}
					label={<AiOutlineClose className='search-button-style' />}
				/>
				<Button
					buttonClassName={"search-buttons"}
					label={<AiOutlineSearch className='search-button-style' />}
					handleClick={() => handleSearch(pokemon)}
				/>
			</section>
		</>
	);
};

export default Searchbar;
