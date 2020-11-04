
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

module.exports = function(app) {

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    var testpath=path.join(__dirname, "../public/index.html");
    console.log(testpath);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})};    

