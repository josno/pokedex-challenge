import React from "react";
import "./Message.css";

const Message = ({ errorMessage }) => {
	return (
		<>
			<p className='error-message-text'>{errorMessage}</p>
		</>
	);
};

export default Message;
