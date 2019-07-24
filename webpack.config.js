const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

	console.log("#############################")
	console.log("#############################")
	console.log("#############################")
	console.log("#############################")
	console.log(`   DEVELOPMENT MODE RUNNING  `)
	console.log("#############################")
	console.log("#############################")
	console.log("#############################")

module.exports = {
	bail: true,
	devtool: 'source-map',
	entry: [
		'js/main.js',
	],
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'build/main.build.js'
	},
	resolve: {
		extensions: ['.js', '.json', '.css'],
		modules: [path.join(__dirname, 'public'), 'node_modules']
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [['es2015',{"modules": false}]]
				}
			},
			{
				test: /\.(png|jpg|woff|mp3|ogg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
					path: path.join(__dirname, 'public'),
					publicPath: '/build/',
					outputPath: 'build/',
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							query: {
								importLoaders: 1,
								minimize: true,
								sourceMap: true,
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss', //this will be removed in ver 2.3
								plugins: function () {
									return [
										autoprefixer({
											browsers: [
												'>1%',
												'last 4 versions',
												'Firefox ESR',
												'not ie < 9', // React doesn't support IE8 anyway
											]
										})
									];
								}
							}
						}
					]
				}),
				exclude: /node_modules/
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.EnvironmentPlugin(["NODE_ENV"]),
		new ExtractTextPlugin('build/style.css'),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				screw_ie8: true,
				warnings: false,
				drop_console: false
			},
			mangle: {
				screw_ie8: true
			},
			output: {
				comments: false,
				screw_ie8: true
			}
		})
	]
};