var express = require("express"); // call express
var app = express();
var sm = require('sitemap');

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/ceramic-guard", function(req, res) {
    res.render("ceramic-guard");
});

app.get("/technieken", function(req, res) {
    res.render("technieken");
});

app.get("/contact-opnemen", function(req, res) {
    res.render("contact");
});

app.get("/voorwaarden", function(req, res) {
    res.render("voorwaarden");
});

app.get("/portfolio", function(req, res) {
    res.render("portfolio");
});

app.get("/AVG", function(req, res) {
    res.render("avg");
});

app.listen(process.env.PORT, process.env.IP, function() { // tell node to listen & define a port to view app
    console.log("Passier server starting...");
});
