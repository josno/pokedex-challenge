import React, { useState, useEffect } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Searchbar from "./components/Searchbar/Searchbar";
import Message from "./components/Message/Message";

import Button from "./components/Button/Button";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

function App() {
	const [currentPokemonUrl, setCurrentPokemonUrl] = useState(null);
	const [listIndex, setListIndex] = useState(0);
	const [pokemonList, setPokemonList] = useState([]);
	const [error, setError] = useState(false);
	const [warningMessage, setWarningMessage] = useState(null);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
			.then((res) => res.json())
			.then((resjson) => {
				// We will keep track of where we are on the list by using listIndex starting at 0
				setPokemonList(resjson.results);
				setCurrentPokemonUrl(resjson.results[0].url);
			})
			.catch((err) => {
				setError(true);
				setWarningMessage("Unable to load Pokemon.");
			});
	}, []);

	const setPreviousPokemon = () => {
		if (listIndex === 0) {
			setWarningMessage("You can't go less than #1.");
		} else {
			setWarningMessage(null);
			setCurrentPokemonUrl(pokemonList[listIndex - 1].url);
			setListIndex(listIndex - 1);
		}
	};

	const setNextPokemon = () => {
		if (listIndex === pokemonList.length - 1) {
			setWarningMessage("You reached the end of the list.");
		} else {
			setWarningMessage(null);
			setCurrentPokemonUrl(pokemonList[listIndex + 1].url);
			setListIndex(listIndex + 1);
		}
	};

	const pokemonNameList = pokemonList.map((p) => p.name);

	const lookUpPokemon = (str) => {
		const newIndex = pokemonList.findIndex((p) => p.name === str);

		if (newIndex === listIndex) {
			setWarningMessage("You are already on that Pokemon.");
		} else if (newIndex < 0) {
			setWarningMessage("No Pokemon found. Try again.");
		} else {
			setWarningMessage(null);
			setCurrentPokemonUrl(pokemonList[newIndex].url);
			setListIndex(newIndex);
		}
	};

	return (
		<>
			<Pokedex>
				<Searchbar onSearch={lookUpPokemon} pokemonNameList={pokemonNameList} />
				{warningMessage && <Message warningMessage={warningMessage} />}
				<PokemonInfo pokeUrl={currentPokemonUrl} />

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
