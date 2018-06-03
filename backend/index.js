/*
	Server startup file
*/

// Imports the implemented RESTful API
var fleet = require('./fleet');

// Starts server
fleet().listen(process.env.PORT || 3000);
console.log('Server up and running...');
