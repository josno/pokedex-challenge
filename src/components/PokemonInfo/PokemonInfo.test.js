import React from "react";
import ReactDOM from "react-dom";

import PokemonInfo from "./PokemonInfo";

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
