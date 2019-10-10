const express = require("express");
var bodyParser = require("body-parser");
const mysql = require("mysql");
var methodOverride = require('method-override')
var exphbs = require("express-handlebars");
require('dotenv').config()


var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Parse application body
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// method override allows form to make a put request
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

var routes = require("./controllers/donutController.js");
app.use( "/", routes);

var connection = require(__dirname + "/config/connection.js");


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});