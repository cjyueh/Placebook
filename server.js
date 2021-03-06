//require dependencies
var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var path            = require('path');
var app             = express();

//connect db
mongoose.connect("mongodb://localhost/placebook-app");
process.on('exit', function() { mongoose.disconnect(); });

//set static files
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

//use morgan to log errors
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());  //allow bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  //parse application/vnd.api+json as json

//use methodOverride
app.use(methodOverride());

//ROUTES
var routes = require('./app/config/routes');
app.use(routes);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

//CONTROLLERS
var usersController = require("./app/controllers/usersController");

//listen to port
app.listen(port, function() {
  console.log('app is running on port ' + port);
});