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
				onClick={mockClick}
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

describe("Search bar input", () => {
	const fakeNameListProps = ["bulbasaur", "ivysaur", "venusaur"];
	const testInput = "Bulbasaur";
	const fakeFunction = jest.fn();
	const onChange = jest.fn();
	const onClick = jest.fn();
	const fakeSearch = jest.fn();

	//it updates input value when something is typed
	it("updates input value when pokemon name is typed in", () => {
		const wrapper = mount(<Searchbar onClick={onClick} onChange={onChange} />);
		wrapper.find("input").simulate("change", { target: { value: testInput } });
		expect(wrapper.find("input").props().value).toBe(testInput);
	});

	it("input value updates dropdown list with matching characters", () => {
		const partialInput = "bu";
		const wrapper = mount(
			<Searchbar
				onClick={onClick}
				onChange={onChange}
				pokemonNameList={fakeNameListProps}
				handleWarningMessage={fakeFunction}
			/>
		);

		wrapper.find("input").simulate("click");
		expect(wrapper.find("ul").exists()).toBeTruthy();
		expect(wrapper.find("li").length).toBe(fakeNameListProps.length);
		wrapper
			.find("input")
			.simulate("change", { target: { value: partialInput } });
		expect(wrapper.find("ul").exists()).toBeTruthy();
		expect(wrapper.find("li").exists()).toBeTruthy();
		expect(wrapper.find("input").props().value).toBe(partialInput);
	});

	it("updates input value when pokemon name is typed in", () => {
		const wrapper = mount(
			<Searchbar
				onClick={onClick}
				onChange={onChange}
				pokemonNameList={fakeNameListProps}
				handleWarningMessage={fakeFunction}
			/>
		);
		wrapper.find("input").simulate("click");
		expect(wrapper.find("ul").exists()).toBeTruthy();
		expect(wrapper.find("li").length).toBe(3);
		wrapper.find("li").at(1).simulate("click");
		expect(wrapper.find("input").props().value).toBe(
			fakeNameListProps[1].charAt(0).toUpperCase() +
				fakeNameListProps[1].slice(1)
		);
		expect(wrapper.find("ul").exists()).toBeFalsy();
	});

	it("clears input value when x button is clicked", () => {
		const wrapper = mount(
			<Searchbar
				onClick={onClick}
				onChange={onChange}
				pokemonNameList={fakeNameListProps}
				handleWarningMessage={fakeFunction}
			/>
		);
		wrapper.find("input").simulate("click");
		wrapper.find("li").at(1).simulate("click");
		wrapper.find("button").at(0).simulate("click");
		expect(wrapper.find("input").props().value).toBe("");
	});

	it("clears input value when search button is clicked", () => {
		const wrapper = mount(
			<Searchbar
				onClick={onClick}
				onChange={onChange}
				pokemonNameList={fakeNameListProps}
				handleWarningMessage={fakeFunction}
				onSearch={fakeSearch}
			/>
		);
		wrapper.find("input").simulate("click");
		wrapper.find("li").at(1).simulate("click");
		wrapper.find("button").at(1).simulate("click");
		expect(wrapper.find("input").props().value).toBe("");
	});
});
