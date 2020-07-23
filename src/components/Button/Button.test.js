import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import { mount } from "enzyme";

describe("Button", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<Button />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`renders button label props`, () => {
		const labelProps = "Click";
		const container = mount(<Button label={labelProps} />);
		expect(container.find("button").props().children).toBe(labelProps);
	});
});
