/*

This is the production server code
Using express, it will serve the HTML + JS bundle without the redux debugger
Also uses hot reloading.

*/
/*
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/pki/tls/private/custom.key', 'utf8');
var certificate = fs.readFileSync('/etc/pki/tls/certs/mikhaylovsergey_me.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
// end ssl custom config
*/

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.prod');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 7070;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Production Server Listening at http://localhost:' + port);
});



/*
// tried aws https

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
console.log('Production Server Listening at http://localhost:' + 8443);
*/