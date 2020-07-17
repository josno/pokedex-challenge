import React, { useState, useEffect } from "react";
import "./PokemonInfo.css";

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
			.then((responseJson) => {
				const capitalizedName =
					responseJson.name.charAt(0).toUpperCase() +
					responseJson.name.slice(1);
				setCurrentPokemon({
					name: capitalizedName,
					weight: responseJson.weight,
					height: responseJson.height,
					imgUrl: responseJson.sprites.front_default,
				});
			});
	}, [props.pokemonId]);

	return (
		<div className='pokemon-details-wrapper'>
			<div className='pokemon-details-container'>
				<div className='image-container'>
					<img
						src={currentPokemon.imgUrl}
						alt={`${currentPokemon.name} Default`}
					/>
				</div>
				<h1 className='details-text'>
					{`#${props.pokemonId}`} {currentPokemon.name}
				</h1>
				<ul className='details-text'>
					<li>Weight: {currentPokemon.weight}</li>
					<li>Height: {currentPokemon.height}</li>
				</ul>
			</div>
		</div>
	);
};

export default PokemonInfo;
