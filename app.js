var express = require('express'),
    logfmt = require('logfmt');

var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.redirect('https://github.com/emoosx/missuniversemyanmar');
});

app.get('/contestants', function(req, res) {
  res.send('Contestants');
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
