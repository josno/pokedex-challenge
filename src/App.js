import React, { useState, useEffect } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Searchbar from "./components/Searchbar/Searchbar";

import Button from "./components/Button/Button";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

function App() {
	const [currentPokemonNumber, setCurrentPokemonNumber] = useState(1);
	const [listIndex, setListIndex] = useState(0);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
			.then((res) => res.json())
			.then((resjson) => {
				setPokemonList(resjson.results);
			});
	}, []);

	const setPreviousPokemon = () => {
		if (listIndex === 0) {
			alert("You can't go less than #1");
		} else {
			setCurrentPokemonNumber(currentPokemonNumber - 1);
			setListIndex(listIndex - 1);
		}
	};

	const setNextPokemon = () => {
		if (listIndex === pokemonList.length - 1) {
			alert("You reached the end of the list.");
		} else {
			setCurrentPokemonNumber(currentPokemonNumber + 1);
			setListIndex(listIndex + 1);
		}
	};

	const lookUpPokemon = (str) => {
		const newIndex = pokemonList.findIndex((p) => p.name === str);

		if (newIndex === listIndex) {
			alert("You are already on that pokemon.");
		} else if (!newIndex || newIndex === -1) {
			alert("No pokemon found. Try again.");
		} else {
			setCurrentPokemonNumber(newIndex + 1);
			setListIndex(newIndex);
		}
	};

	return (
		<>
			<Pokedex>
				<Searchbar
					onSearch={lookUpPokemon}
					pokemonNameList={pokemonList.map((p) => p.name)}
				/>
				<PokemonInfo pokeNumber={currentPokemonNumber} />

				{/* For Navigation Buttons */}
				<nav className='button-container'>
					<Button
						handleClick={setPreviousPokemon}
						renderedButton={<AiOutlineCaretLeft className='arrow-style' />}
						buttonClassName={"arrow-button-box"}
					/>
					<Button
						handleClick={setNextPokemon}
						renderedButton={<AiOutlineCaretRight className='arrow-style' />}
						buttonClassName={"arrow-button-box"}
					/>
				</nav>
			</Pokedex>
		</>
	);
}

export default App;
