const https = require("https");
const express = require("express");
var fs = require("fs");

var privatekey = fs.readFileSync('cert/key.key', 'utf-8');
var certificate = fs.readFileSync('cert/cert.crt', 'utf-8');
var credintials = { key: privatekey, cert: certificate };

var app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
})

var httpsServer = https.createServer(credintials, app);
httpsServer.listen(8443, () => {
    console.log('Listening on ', 8443);
});
