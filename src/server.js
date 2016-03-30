// IMPORTS:
// --------------------------------------------------------------------------------

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var twitterUtil = require('./backend/twitter-util');

// CONFIGURATION:
// --------------------------------------------------------------------------------

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// REST API:
// --------------------------------------------------------------------------------

app.get('/api/tweets', function(req, res) {
    twitterUtil.getLatestTweets(req.query.authorId, req.query.count)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (error) {
            res.json({error: error});
        });
});

// SERVER:
// --------------------------------------------------------------------------------

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
