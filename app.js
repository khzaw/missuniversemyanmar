var express = require('express'),
    logfmt = require('logfmt'),
    cookieParser = require('cookie-parser'),
    missuniversemyanmar = require('./missuniversemyanmar');

var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.redirect('https://github.com/emoosx/missuniversemyanmar');
});

app.get('/contestants', function(req, res) {
  missuniversemyanmar.getContestants(function(result) {
    res.json(200, {
      status: 'ok',
      contestants: result
    });
  });
});

app.get('/model/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  missuniversemyanmar.getModelBio(name, function(result) {
    res.json(200, {
      status: 'ok',
      biography: result
    });
  });
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
