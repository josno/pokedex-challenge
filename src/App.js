import React, { useState, useEffect } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
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
		//last index in API is 963
		if (listIndex === 963) {
			alert("You reached the end of the list.");
		} else {
			setCurrentPokemonUrl(pokemonList[listIndex + 1].url);
			setListIndex(listIndex + 1);
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
			</Pokedex>
		</div>
	);
}

export default App;
