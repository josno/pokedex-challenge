import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [pokemonId, setPokemonId] = useState(1);
	const [currentPokemon, setCurrentPokemon] = useState({
		name: "",
		weight: "",
		height: "",
		imgUrl: "",
	});

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			.then((response) => response.json())
			.then((responseJson) =>
				setCurrentPokemon({
					name: responseJson.name,
					weight: responseJson.weight,
					height: responseJson.height,
					imgUrl: responseJson.sprites.front_default,
				})
			);
	}, [pokemonId]);

	return (
		<div className='App'>
			<div>
				<img
					src={currentPokemon.imgUrl}
					alt={`${currentPokemon.name} Default`}
				/>
				<h1>{currentPokemon.name}</h1>
				<ul>
					<li>Weight: {currentPokemon.weight}</li>
					<li>Height: {currentPokemon.height}</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
