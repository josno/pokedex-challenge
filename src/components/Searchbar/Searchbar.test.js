import React from "react";
import ReactDOM from "react-dom";
import Searchbar from "./Searchbar";

import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("Searchbar render", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<Searchbar />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders the UI as expected and matches the snapshot`, () => {
		const wrapper = shallow(<Searchbar />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it(`renders as empty input field with placeholder text`, () => {
		const wrapper = mount(<Searchbar />);
		expect(wrapper.find("input").props().placeholder).toBe("Search database");
		expect(wrapper.find("input").props().value).toBeFalsy(); //Set as undefined
	});
});

describe("Searchbar pokemon list", () => {
	const fakeNameListProps = ["bulbasaur", "ivysaur", "venusaur"];
	const mockClick = jest.fn();
	const fakeFunction = jest.fn();

	it("renders a dropdown menu and list of Pokemon when input is clicked`", () => {
		const wrapper = mount(
			<Searchbar
				handleWarningMessage={fakeFunction}
				lick={mockClick}
				pokemonNameList={fakeNameListProps}
			/>
		);
		wrapper.find("input").simulate("click");
		expect(wrapper.find("ul")).toBeTruthy();
		expect(wrapper.find("bulbasaur")).toBeTruthy();
		expect(wrapper.find("venusaur")).toBeTruthy();
		expect(wrapper.find("ivysaur")).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("removes dropdown menu on click of cancel button", () => {
		const wrapper = mount(
			<Searchbar
				handleWarningMessage={fakeFunction}
				onClick={mockClick}
				pokemonNameList={fakeNameListProps}
			/>
		);
		wrapper.find("input").simulate("click");
		wrapper.find("button").at(0).simulate("click");
		expect(wrapper.find("ul").exists()).toBeFalsy(); //Pokemon list has been removed
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
