//Friends List route
var friends = require ("../data/friends.js");

//Using module.expert to connect to JS
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        rest.json(friends);
    });
}

