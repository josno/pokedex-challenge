import React, { useState, useEffect } from "react";

const PokemonInfo = (props) => {
	const [currentPokemon, setCurrentPokemon] = useState({
		name: "",
		weight: "",
		height: "",
		imgUrl: "",
	});

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}`)
			.then((response) => response.json())
			.then((responseJson) =>
				setCurrentPokemon({
					name: responseJson.name,
					weight: responseJson.weight,
					height: responseJson.height,
					imgUrl: responseJson.sprites.front_default,
				})
			);
	}, [props.pokemonId]);
	return (
		<div>
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
};

export default PokemonInfo;
