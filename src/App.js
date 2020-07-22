import React, { useState, useEffect } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Searchbar from "./components/Searchbar/Searchbar";
import Message from "./components/Message/Message";

import Button from "./components/Button/Button";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

function App() {
	const [currentPokemonNumber, setCurrentPokemonNumber] = useState(1);
	const [listIndex, setListIndex] = useState(0);
	const [pokemonList, setPokemonList] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
			.then((res) => res.json())
			.then((resjson) => {
				setPokemonList(resjson.results);
			})
			.catch((err) => setError(`Search function broken. Use arrows only.`));
	}, []);

	const setPreviousPokemon = () => {
		if (listIndex === 0) {
			setError("You can't go less than #1.");
		} else {
			error && setError(null);
			setCurrentPokemonNumber(currentPokemonNumber - 1);
			setListIndex(listIndex - 1);
		}
	};

	const setNextPokemon = () => {
		if (listIndex === pokemonList.length - 1) {
			setError("You reached the end of the list.");
		} else {
			error && setError(null);
			setCurrentPokemonNumber(currentPokemonNumber + 1);
			setListIndex(listIndex + 1);
		}
	};

	const lookUpPokemon = (str) => {
		const newIndex = pokemonList.findIndex((p) => p.name === str);

		if (newIndex === listIndex) {
			setError("You are already on that pokemon.");
		} else if (newIndex < 0) {
			setError("No pokemon found. Try again.");
		} else {
			error && setError(null);
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
				{error && <Message errorMessage={error} />}
				<PokemonInfo pokeNumber={currentPokemonNumber} />

				{/* For Navigation Buttons */}
				<nav className='nav-button-container'>
					<Button
						handleClick={setPreviousPokemon}
						label={<AiOutlineCaretLeft className='arrow-style' />}
						buttonClassName={"arrow-button-box"}
					/>
					<Button
						handleClick={setNextPokemon}
						label={<AiOutlineCaretRight className='arrow-style' />}
						buttonClassName={"arrow-button-box"}
					/>
				</nav>
			</Pokedex>
		</>
	);
}

export default App;
