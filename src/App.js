import React, { useState, useEffect } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

function App() {
	const [currentPokemon, setCurrentPokemon] = useState("");
	const [listIndex, setListIndex] = useState(0);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
			.then((res) => res.json())
			.then((resjson) => {
				setPokemonList(resjson.results);
				setCurrentPokemon(resjson.results[0].url);
				//Comment - listIndex will be loaded for current Pokemon after useEffect runs
			});
	}, []);

	const setPreviousPokemon = () => {
		if (listIndex === 0) {
			alert("You can't go less than #1");
		} else {
			setCurrentPokemon(pokemonList[listIndex - 1].url);
			setListIndex(listIndex - 1);
		}
	};

	const moveToNextPokemon = () => {
		if (listIndex === 963) {
			alert("You reached the end of the list.");
		} else {
			setCurrentPokemon(pokemonList[listIndex + 1].url);
			setListIndex(listIndex + 1);
		}
	};

	return (
		<div className='App'>
			<Pokedex>
				<PokemonInfo pokeUrl={currentPokemon} />
			</Pokedex>
		</div>
	);
}

export default App;
