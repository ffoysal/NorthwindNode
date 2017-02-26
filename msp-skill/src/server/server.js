var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const topic = require('./controller/topic');
const question = require('./controller/question');

const user = require('./controller/user');

// Set our topic routes
app.use('/topic', topic);

// Set our question routes
app.use('/question', question);


// Set our user routes
app.use('/user', user);


// all other routes are handled by Angular
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/../../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Angular 2 Full Stack listening on port '+app.get('port'));
});

module.exports = app;