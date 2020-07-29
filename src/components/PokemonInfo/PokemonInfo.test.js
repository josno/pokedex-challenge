import React from "react";
import ReactDOM from "react-dom";

import PokemonInfo from "./PokemonInfo";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("PokemonInfo", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<PokemonInfo />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders the UI as expected`, () => {
		const wrapper = mount(<PokemonInfo />);
		expect(wrapper.find("div").props().children).toBe("Loading...");
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

describe.only("PokemonInfo - Testing Hooks", () => {
	let container = null;
	beforeEach(() => {
		// setup a DOM element as a render target
		container = document.createElement("div");
		document.body.appendChild(container);
	});

	afterEach(() => {
		// cleanup on exiting
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it("renders pokemon info", async () => {
		const pokemon = {
			id: 25,
			name: "pikachu",
			weight: 60,
			height: 4,
			sprites: {
				front_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
			},
		};

		jest.spyOn(global, "fetch").mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(pokemon),
			})
		);

		const testUrlProp = "https://pokeapi.co/api/v2/pokemon/25";

		await act(async () => {
			render(<PokemonInfo pokeUrl={testUrlProp} />, container);
		});

		expect(container.querySelector("h3").textContent).toBe(
			`#${pokemon.id.toString()}`
		);
		expect(container.querySelector("ul").textContent).toContain(
			`Weight: ${pokemon.weight / 10} kg`
		);
		expect(container.querySelector("ul").textContent).toContain(
			`Height: ${pokemon.height / 10} m`
		);
		expect(container.querySelector("ul").textContent).toContain(
			`Name: ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`
		);
		// expect(container.querySelector("img").textContent).toBe(
		// 	"https://pokeapi.co/api/v2/pokemon/25"
		// );
		expect(container.querySelector("img").src).toBe(
			pokemon.sprites.front_default
		);
	});
});
