import React from "react";
import ReactDOM from "react-dom";
import PokemonInfo from "./PokemonInfo";

import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const responseJson = {
	id: 1,
	name: "Bulbasaur",
	weight: 69,
	height: 7,
	sprites: {
		front_default:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
	},
};

describe("PokemonInfo", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<PokemonInfo />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders the UI as expected`, () => {
		const wrapper = mount(<PokemonInfo />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
