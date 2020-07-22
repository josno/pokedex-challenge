import React from "react";
import ReactDOM from "react-dom";
import Searchbar from "./Searchbar";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Searchbar", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<Searchbar />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders the UI as expected and creates a snapshot`, () => {
		const wrapper = shallow(<Searchbar />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
