const WebSocket = require("ws");
const ws = new WebSocket.Server({port:8008});

let user_id = 0;
let ALL_WS = [];
ws.on("connection", (websocket, req) => {
	user_id++;
	console.log("NEW USER CONNECT("+user_id+")");
	ALL_WS.push({"ws": websocket, "user_id": user_id, "user_name":""});
	
	const sendUserId = (user_id) => {
		let data = {"code":"my_user_id", "msg": user_id};
		websocket.send(JSON.stringify(data));
	}
	const sendAllUsers = () => {
		let data = {"code": "all_users", "msg": JSON.stringify(ALL_WS)};

		ALL_WS.forEach((element, index) => {
			element.ws.send(JSON.stringify(data))
		});
	}

	sendUserId(user_id);
	websocket.on("message", (message) => {
		console.log(JSON.parse(message));
		message = JSON.parse(message);
		switch(message.code) {
			case "connect_name" : //사용자 추가
				ALL_WS.forEach((element, index) => {
					if (element.user_id === message.user_id) {
						element.user_name = message.name;
					}
				});
				console.log(ALL_WS);
				sendAllUsers();
			break;
		}
	})
});