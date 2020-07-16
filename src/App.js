import React, { useState } from "react";
import "./App.css";

import PokemonInfo from "./components/PokemonInfo";

function App() {
	const [pokemonId, setPokemonId] = useState(1);

	return (
		<div className='App'>
			<PokemonInfo pokemonId={pokemonId} />
		</div>
	);
}

export default App;
