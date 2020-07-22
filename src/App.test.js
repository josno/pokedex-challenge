import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const responsejson = [
	{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
	{ name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
	{ name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
	{ name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
	{ name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
	{ name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
	{ name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
	{ name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
	{ name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
	{ name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
];

describe("App", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
