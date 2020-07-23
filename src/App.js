import React, { useState, useEffect } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Searchbar from "./components/Searchbar/Searchbar";
import Message from "./components/Message/Message";

import Button from "./components/Button/Button";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

function App() {
	const initialUrl = "https://pokeapi.co/api/v2/pokemon/1/";
	const [currentPokemonUrl, setCurrentPokemonUrl] = useState(initialUrl);
	const [listIndex, setListIndex] = useState(0);
	const [pokemonList, setPokemonList] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
			.then((res) => res.json())
			.then((resjson) => {
				// We will keep track of where we are on the list by using listIndex starting at 0
				setPokemonList(resjson.results);
			})
			.catch((err) => {
				setError("Unable to load Pokemon.");
			});
	}, []);

	const setPreviousPokemon = () => {
		if (listIndex === 0) {
			setError("You can't go less than #1.");
		} else {
			error && setError(null);
			setCurrentPokemonUrl(pokemonList[listIndex - 1].url);
			setListIndex(listIndex - 1);
		}
	};

	const setNextPokemon = () => {
		if (listIndex === pokemonList.length - 1) {
			setError("You reached the end of the list.");
		} else {
			error && setError(null);
			setCurrentPokemonUrl(pokemonList[listIndex + 1].url);
			setListIndex(listIndex + 1);
		}
	};

	const pokemonNameList = pokemonList.map((p) => p.name);

	const lookUpPokemon = (str) => {
		const newIndex = pokemonList.findIndex((p) => p.name === str);

		if (newIndex === listIndex) {
			setError("You are already on that Pokemon.");
		} else if (newIndex < 0) {
			setError("No Pokemon found. Try again.");
		} else {
			error && setError(null);
			setCurrentPokemonUrl(pokemonList[newIndex].url);
			setListIndex(newIndex);
		}
	};

	return (
		<>
			<Pokedex>
				<Searchbar onSearch={lookUpPokemon} pokemonNameList={pokemonNameList} />
				{error && <Message errorMessage={error} />}
				<PokemonInfo listError={error} pokeUrl={currentPokemonUrl} />

				{/* For Navigation Buttons */}
				<nav className='nav-button-container'>
					<Button
						listError={error}
						handleClick={setPreviousPokemon}
						label={<AiOutlineCaretLeft className='arrow-style' />}
						buttonClassName={"arrow-button-box"}
					/>
					<Button
						listError={error}
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
