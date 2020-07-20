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
		onSearch(pokemon);
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

						{displayAutocomplete && pokemonFilteredList}
					</div>

					<div className='search-buttons-container'>
						<Button
							buttonClassName={"search-buttons"}
							handleClick={() => setSearchbarToggle(!searchbarToggle)}
							renderedButton={
								<AiOutlineClose className='search-button-style' />
							}
						/>
						<Button
							buttonClassName={"search-buttons"}
							renderedButton={
								<AiOutlineSearch className='search-button-style' />
							}
							handleClick={() => handleSearch(pokemon)}
						/>
					</div>
				</div>
			) : (
				<Button
					buttonClassName='open-search-button'
					handleClick={() => setSearchbarToggle(!searchbarToggle)}
					renderedButton='Search Database'
				/>
			)}
		</div>
	);
};

export default Searchbar;
