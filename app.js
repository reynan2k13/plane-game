const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();

const indexRoute = require('./routes/index.route');
const port = module.exports = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRoute);

if(process.env.NODE_ENV == 'development'){
	const devServer = require('./dev-server');
	app.use(devServer.WM);
	app.use(devServer.WHM);
}

app.listen(port, () => {
	console.log('listening to port '+port);
});