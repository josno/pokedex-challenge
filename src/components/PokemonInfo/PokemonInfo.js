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
		<div className='pokedex-wrapper'>
			<div className='pokedex-container'>
				<div className='top-design'>
					<div className='big-blue-light' />
					<div className='pokedex-three-lights'>
						<div className='red-light light-circles' />
						<div className='yellow-light light-circles' />
						<div className='green-light light-circles' />
					</div>
				</div>
				<div className='border-shadow-lines'>
					<div className='border-line-one' />
					<div className='border-line-two' />
					<div className='border-line-three' />
				</div>
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
		</div>
	);
};

export default PokemonInfo;
