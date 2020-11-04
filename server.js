// // Dependencies
// // =============================================================
// var express = require("express");
// var path = require("path");
// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = 3011;
// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Star Wars Characters (DATA)
// // =============================================================
// var customers = [
//   {
//     name: "Nou",
//     numberOfPeople: 1,
//     email: "nou@email.com",
//     phoneNumber: 6123344455,
//     waitList: false,
//   },
//   {
//     name: "Brock",
//     numberOfPeople: 1,
//     email: "brock@email.com",
//     phoneNumber: 6124455566,
//     waitList: false,
//   },
//   {
//     name: "Jorge",
//     numberOfPeople: 1,
//     email: "jorge@email.com",
//     phoneNumber: 6125567788,
//     waitList: false,
//   },
//   {
//     name: "Billy",
//     numberOfPeople: 1,
//     email: "billy@email.com",
//     phoneNumber: 6126678899,
//     waitList: true,
//   }
// ];

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3011;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});