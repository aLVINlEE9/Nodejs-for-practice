import React, { useState } from 'react';


const TestWs = () => {
	const [data, setData] = useState("");
	const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
	const echoSocketUrl = socketProtocol + '//' + window.location.hostname + ':9000/testWs';
	const socket = new WebSocket(echoSocketUrl);

	socket.onopen = () => {
	socket.send('Here\'s some text that the server is urgently awaiting!'); 
	}

	socket.onmessage = e => {
		console.log('Message from server:', e.data);
		setData(e.data);
	}
	return (
		<div>
			Testing Websocket
			{data}
		</div>
	);
};
  
export default TestWs;
