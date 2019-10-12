const express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var exphbs = require("express-handlebars");
require('dotenv').config()


var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));

// method override allows form to make a put request
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/donutController");
app.use( "/", routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});