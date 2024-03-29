//SPDX-License-Identifier: Apache-2.0

// nodejs server setup

// call the packages we need
var express       = require('express');        // call express
var app           = express();                 // define our app using express
var bodyParser    = require('body-parser');
var path          = require('path');
var session       = require('express-session');
var cors          = require('cors');

// instantiate the app
var app = express();

// initialize session
app.use(session({
 secret: 'HyperShield',
 resave: true,
 saveUninitialized: true
}));
app.use(cors())

// Load all of our middleware
// configure app to use bodyParser()
// this will let us get the data from a POST
//interprete the main body contents
// app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); //

// this line requires and runs the code from our routes.js file and passes it app
require('./routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

// Save our port
var port = process.env.PORT || 8010;

// Start the server and listen on port
app.listen(port,function(){
  console.log("Live on port: " + port);
});
