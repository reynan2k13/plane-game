const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

const config = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
const compiler = webpack(config);
const port = require('./app');

config.entry.push(
	`webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr&reload=true`
);

module.exports.WM = webpackMiddleware(compiler, {
	noInfo: true, publicPath: config.output.publicPath
});
module.exports.WHM = webpackHotMiddleware(compiler);
