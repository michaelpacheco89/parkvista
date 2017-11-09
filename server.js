// set up global variables
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 8000;

// Requiring models for syncing
var db = require("./models");

// set up Express app to handle data parsing
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Static directory
app.use(express.static("public"));

// Routes
// ==========================================
  // ALL API ROUTES GO HERE
// ==========================================

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {  //{ force: true } GOES INSIDE SYNC function
    /*  app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });*/
    server.listen(PORT, function() {
        console.log('Server listening on PORT: ', PORT);
    });
});