import React from "react";
import ReactDOM from "react-dom";
import PokemonInfo from "./PokemonInfo";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("PokemonInfo", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<PokemonInfo />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders the UI as expected`, () => {
		const wrapper = shallow(<PokemonInfo loading={true} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
