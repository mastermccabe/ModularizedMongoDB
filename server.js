// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
var path = require('path');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname + '/client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Use native promises
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./server/config/mongoose_setup.js');
require('./server/config/routes.js')(app);
//*************

app.listen(8000, function() {
  console.log("listening on port 8000");
});
