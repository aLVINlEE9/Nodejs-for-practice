var express = require("express");
var enableWs = require('express-ws')
enableWs(express());
var router = express.Router();


router.get("/", (req, res, next) => {
	res.end();
});

router.ws("/", (ws, req) => {
	ws.on('connection', function connect(ws, req){
		console.log("NEW USER CONNECT");
	});
});

module.exports = router;
