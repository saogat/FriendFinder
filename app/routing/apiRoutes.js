// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var FriendsData = require("../data/friends");
var questionsData = require("../data/questions");

var friendData = new FriendsData();

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin...)
    // ---------------------------------------------------------------------------

    app.get("/api/survey", function (req, res) {
        res.json(questionsData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/survey", function (req, res) {
         // req.body is available since we're using the body-parser middleware

        var found = friendData.findWith(req.body);
        friendData.add(req.body);
        res.json(found.friend);
    });

    app.get("/api/friends", function (req, res) {
     
        res.json(friendData.friendsArray);
    });

};

