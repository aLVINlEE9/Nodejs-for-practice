const WebSocket = require("ws");
const ws = new WebSocket.Server({port:8008});

ws.on("connection", (ws, req) => {
	console.log("NEW USER CONNECT");
})