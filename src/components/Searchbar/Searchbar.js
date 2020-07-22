import React, { useState } from "react";
import Button from "../Button/Button";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import "./Searchbar.css";

const Searchbar = ({ onSearch, pokemonNameList = [] }) => {
	const [pokemon, setPokemon] = useState("");
	const [searchbarToggle, setSearchbarToggle] = useState(false);
	const [displayAutocomplete, setDisplayAutocomplete] = useState(false);

	const setAutocompleteInput = (pokemon) => {
		setPokemon(pokemon);
		setDisplayAutocomplete(!displayAutocomplete);
	};

	const handleSearch = () => {
		if (!pokemon) {
			return;
		}
		onSearch(pokemon);
		setPokemon("");
	};

	const setSearchDatabaseButton = () => {
		setSearchbarToggle(!searchbarToggle);
		setPokemon("");
	};

	const pokemonFilteredList = (
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
	);

	return (
		<>
			{searchbarToggle ? (
				<section className='search-bar-container'>
					<div className='search-input-container'>
						<input
							className='search-input'
							value={pokemon}
							onChange={(e) => setPokemon(e.target.value)}
							onClick={() => setDisplayAutocomplete(!displayAutocomplete)}
						/>

						{displayAutocomplete && pokemonFilteredList}
					</div>

					<Button
						buttonClassName={"search-buttons"}
						handleClick={() => setSearchbarToggle(!searchbarToggle)}
						renderedButton={<AiOutlineClose className='search-button-style' />}
					/>
					<Button
						buttonClassName={"search-buttons"}
						renderedButton={<AiOutlineSearch className='search-button-style' />}
						handleClick={() => handleSearch(pokemon)}
					/>
				</section>
			) : (
				<section className='open-search-button-container'>
					<Button
						buttonClassName='open-search-button'
						handleClick={() => setSearchDatabaseButton()}
						renderedButton='Search Database'
					/>
				</section>
			)}
		</>
	);
};

export default Searchbar;
