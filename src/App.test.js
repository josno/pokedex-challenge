import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import Searchbar from "./components/Searchbar/Searchbar";
import Message from "./components/Message/Message";

import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("App", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders child components correctly`, () => {
		const wrapper = mount(<App />);
		expect(wrapper.find("Pokedex").exists()).toBeTruthy();
		expect(wrapper.find("Searchbar").exists()).toBeTruthy();
		expect(wrapper.find("Buttons").exists()).toBeTruthy();
		expect(wrapper.find("PokemonInfo").exists()).toBeTruthy();
	});
});
