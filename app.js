var express = require("express"); // call express
var app = express();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var sm = require('sitemap');
var path = require('path')
var robots = require('express-robots-txt');
var flash = require('connect-flash')
var session = require('express-session')

app.set('port', (process.env.PORT || 3020))
require('dotenv').config()
app.use(flash());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(robots({ UserAgent: '*', Disallow: '' }))
app.use((req, res, next) => {
    res.header('Cache-Control', 'max-age=2592000000');
    next();
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/IGL-coatings", function(req, res) {
    res.render("IGL-coatings");
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

app.get("/waxguard", function(req, res) {
    res.render("waxguard");
});

app.get("/avg", function(req, res) {
    res.render("avg");
});

app.get("/bedankt", function(req, res) {
    res.render("bedankt");
});

app.get("/:id", function(req, res) {
    res.render("404");
});


app.post("/contact-form", (req, res) => {
    let name = (req.body.name)
    var output = `
    <h3> Nieuw bericht van ${req.body.name}.<h3>
    <h5> Details <h5>
    <ul>
        <li>Naam : ${req.body.name}</li>
        <li>Email : ${req.body.email}</li>
        <li>Telefoon : ${req.body.tel}</li>
    </ul>
    <p>${req.body.bericht}<p>
    `;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'mailserver163@gmail.com',
            pass: process.env.MAIL_PASS
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"www.guchelaarautodetailing.nl" <mailserver163@gmail.com>', // sender address
        to: 'p.guchelaar@gmail.com', // list of receivers
        subject: 'Nieuw bericht van' + name, // Subject line
        text: '', // plain text body
        html: output // html body
    };

    var msg = "Bedankt voor je bericht! Binnen 24 uur zijn we bij je terug."
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.redirect("/bedankt")

    });
});


app.listen(app.get('port'), function() {
    console.log('starting');
});
