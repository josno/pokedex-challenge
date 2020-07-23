import React from "react";
import ReactDOM from "react-dom";
import Searchbar from "./Searchbar";

import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe("Searchbar", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<Searchbar />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders the UI as expected and creates a snapshot`, () => {
		const wrapper = mount(<Searchbar />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
