var express = require("express"); // call express
var app = express();
var sm = require('sitemap');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + "/public"));



// var app = express(),
//     sitemap = sm.createSitemap({
//         hostname: 'http://www.boo-at-the-zoo.nl',
//         cacheTime: 600000, // 600 sec - cache purge period
//         urls: [
//             { url: '/', changefreq: 'daily', priority: 0.3 },

//         ]
//     });

// app.get('/sitemap.xml', function(req, res) {
//     sitemap.toXML(function(err, xml) {
//         if (err) {
//             return res.status(500).end();
//         }
//         res.header('Content-Type', 'application/xml');
//         res.send(xml);
//     });
// });
app.get("/", function(req, res) {
    res.render("index");
});

// app.get('/robots.txt', function(req, res) {
//     res.type('text/plain');
//     res.send("User-agent: *\nDisallow: /");
// });

app.listen(process.env.PORT, process.env.IP, function() { // tell node to listen & define a port to view app
    console.log("Passier server starting...");
});
