import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

import { shallow } from "enzyme";

describe("Message", () => {
	it(`renders without crashing`, () => {
		const div = document.createElement("div");
		ReactDOM.render(<Message />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it(`Given props renders passed message`, () => {
		const messageProps = "Something wrong happened.";
		const wrapper = shallow(<Message warningMessage={messageProps} />);
		expect(wrapper.find("p").props().children).toBe(messageProps);
	});
});
