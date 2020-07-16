import React, { useState } from "react";
import "./App.css";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";

function App() {
	const [pokemonId, setPokemonId] = useState(1);

	return (
		<div className='App'>
			<Pokedex>
				<PokemonInfo pokemonId={pokemonId} />
			</Pokedex>
		</div>
	);
}

export default App;
