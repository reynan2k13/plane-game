const express = require('express');
const indexRoute = express.Router();

indexRoute.get('/', (req, res) => {
	res.render('index', {
		title: 'Learn Canvas'
	});
});

module.exports = indexRoute;