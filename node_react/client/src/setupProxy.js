const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		createProxyMiddleware("/testAPI", {
			target: "http://localhost:9000",
			changeOrigin: true,
		}),
		createProxyMiddleware("/testWs", {
			target: "http://localhost:9000",
			changeOrigin: true,
		}),
	);
};