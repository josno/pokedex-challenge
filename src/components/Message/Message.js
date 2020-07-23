import React from "react";
import "./Message.css";

const Message = ({ warningMessage }) => {
	return (
		<>
			<p className='error-message-text'>{warningMessage}</p>
		</>
	);
};

export default Message;
