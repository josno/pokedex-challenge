import React, { useState, useEffect } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Searchbar from "./components/Searchbar/Searchbar";
import Buttons from "./components/Buttons/Buttons";

function App() {
	const [currentPokemonUrl, setCurrentPokemonUrl] = useState("");
	const [listIndex, setListIndex] = useState(0);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=963")
			.then((res) => res.json())
			.then((resjson) => {
				setPokemonList(resjson.results);
				setCurrentPokemonUrl(resjson.results[0].url);
				//Comment - listIndex will be loaded for current Pokemon after useEffect runs
			});
	}, []);

	const setPreviousPokemon = () => {
		if (listIndex === 0) {
			alert("You can't go less than #1");
		} else {
			setCurrentPokemonUrl(pokemonList[listIndex - 1].url);
			setListIndex(listIndex - 1);
		}
	};

	const setNextPokemon = () => {
		if (listIndex === pokemonList.length - 1) {
			alert("You reached the end of the list.");
		} else {
			setCurrentPokemonUrl(pokemonList[listIndex + 1].url);
			setListIndex(listIndex + 1);
		}
	};

	const lookUpPokemon = (str) => {
		const newIndex = pokemonList.findIndex((p) => p.name === str);

		if (!newIndex || newIndex === -1) {
			alert("No pokemon found. Try again.");
		} else {
			setCurrentPokemonUrl(pokemonList[newIndex].url);
			setListIndex(newIndex);
		}
	};

	return (
		<div className='App'>
			<Pokedex>
				<PokemonInfo pokeUrl={currentPokemonUrl} />
				<Buttons
					goToPreviousPokemon={setPreviousPokemon}
					goToNextPokemon={setNextPokemon}
				/>
				<Searchbar onSearch={lookUpPokemon} />
			</Pokedex>
		</div>
	);
}

export default App;
