var express = require('express'),
    logfmt = require('logfmt'),
    path = require('path'),
    missuniversemyanmar = require('./missuniversemyanmar');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logfmt.requestLogger());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(err, req, res, next) {
  res.json(500, {
    status: 'error',
    msg: 'Something broke!'
  });
});

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Miss Universe Myanmar 2014 Competition'
  });
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
  missuniversemyanmar.getModelBio(name, function(result) {
    res.json(200, {
      status: 'ok',
      biography: result
    });
  });
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
