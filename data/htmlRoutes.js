// Dependencies
var path = require("path");

//Using module.expert to connect to JS
module.exports = function(app) {

    //Getting the route to the home page
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    //getting the route to the survey page
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "/..public/survey.html"));
    });
}