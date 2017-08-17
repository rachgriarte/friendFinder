// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express App/PORT
var app = express();
var PORT = process.env.PORT || 8080;

// Parse application/JSON
app.use(bodyParser.json());
app.use(express.static("/public"));
    require("./routing/apiRoutes.js")(app);
    require("./data/htmlRoutes.js")(app);

// Checking if PORT is working 
app.listen(PORT, function() {
    console.log("App is listening on PORT: " +PORT);
});