//requires
const express = require( 'express' ); //server
const morgan = require('morgan'); //middleware
const routes = require( './routes' ); //routes
const routesApi = require( './routes-api' );

const app = express();

//settings
app.set( 'appName', 'My first server');
app.set( 'views', './views' );
app.set( 'view engine', 'ejs' );

//middlewares
app.use(morgan('combined'));

//routing
app.use(routes);
app.use( '/api', routesApi);

app.get('*', ( req, res) => {
	res.end('File not found.');
});

app.listen(3000, () => {
	console.log('Server is up!');
	console.log('Nombre de la app: '+ app.get('appName') );
});
