import React, { useState, useEffect } from "react";
import "./PokemonInfo.css";

const PokemonInfo = (props) => {
	const [currentPokemon, setCurrentPokemon] = useState({
		name: "",
		weight: "",
		height: "",
		imgUrl: "",
	});
	const [loading, setLoading] = useState(true);
	const [loadingMessage, setLoadingMessage] = useState("Loading...");

	useEffect(() => {
		fetch(`${props.pokeUrl}`)
			.then((response) => response.json())
			.then((responseJson) => {
				const capitalizedName =
					responseJson.name.charAt(0).toUpperCase() +
					responseJson.name.slice(1);
				setCurrentPokemon({
					id: responseJson.id,
					name: capitalizedName,
					weight: responseJson.weight,
					height: responseJson.height,
					imgUrl: responseJson.sprites.front_default,
				});
				setLoading(false);
			})
			.catch((err) => {
				setLoadingMessage("Pokemon cannot be loaded.");
			});
	}, [props.pokeUrl]);

	return (
		<section className='pokemon-details-container'>
			{loading ? (
				<div className='loading-text details-text'>{loadingMessage}</div>
			) : (
				<>
					<div className='image-container'>
						<img
							className='poke-image'
							src={currentPokemon.imgUrl}
							alt={`${currentPokemon.name} Default`}
						/>
					</div>

					<h3 className='details-text'>
						{`#${currentPokemon.id}`} <br />
						{currentPokemon.name}
					</h3>
					<ul className='details-text'>
						<li>Weight: {currentPokemon.weight}</li>
						<li>Height: {currentPokemon.height}</li>
					</ul>
				</>
			)}
		</section>
	);
};

export default PokemonInfo;
