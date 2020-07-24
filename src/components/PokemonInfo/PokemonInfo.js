import React, { useState, useEffect } from "react";
import Image from "../../assets/no-image.png";
import "./PokemonInfo.css";

const PokemonInfo = ({ pokeUrl }) => {
	const [currentPokemon, setCurrentPokemon] = useState({
		name: "",
		weight: "",
		height: "",
		imgUrl: "",
	});
	const [loading, setLoading] = useState(true);
	const [loadingMessage, setLoadingMessage] = useState("Loading...");

	useEffect(() => {
		if (!pokeUrl) {
			return;
		} else {
			fetch(`${pokeUrl}`)
				.then((response) => response.json())
				.then((responseJson) => {
					//Formatting JSON before setting it as state
					const capitalizedName =
						responseJson.name.charAt(0).toUpperCase() +
						responseJson.name.slice(1);

					const checkedImageUrl = !responseJson.sprites.front_default
						? Image
						: responseJson.sprites.front_default;

					const formattedWeight = responseJson.weight / 10;
					const formattedHeight = responseJson.height / 10;

					setCurrentPokemon({
						id: responseJson.id,
						name: capitalizedName,
						weight: formattedWeight,
						height: formattedHeight,
						imgUrl: checkedImageUrl,
					});
					setLoading(false);
				})
				.catch((err) => {
					setLoadingMessage("Pokemon unavailable.");
				});
		}
	}, [pokeUrl]);

	return (
		<section className='pokemon-details-container'>
			{loading ? (
				<div className='loading-text details-text'>{loadingMessage}</div>
			) : (
				<>
					<div className='image-container fadeInLoad'>
						<img
							className='poke-image fadeInLoad'
							src={currentPokemon.imgUrl}
							alt={`${currentPokemon.name} Default`}
						/>
					</div>

					<h3 className='title-text details-text fadeInLoad'>
						{`#${currentPokemon.id}`}
					</h3>
					<ul className='details-text'>
						<li>Name: {currentPokemon.name}</li>
						<li>Weight: {currentPokemon.weight} kg</li>
						<li>Height: {currentPokemon.height} m</li>
					</ul>
				</>
			)}
		</section>
	);
};

export default PokemonInfo;
