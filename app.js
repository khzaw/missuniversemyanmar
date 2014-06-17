var express = require('express'),
    logger = require('morgan'),
    logfmt = require('logfmt'),
    jsdom = require('jsdom'),
    cookieParser = require('cookie-parser');

var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.redirect('https://github.com/emoosx/missuniversemyanmar');
});

app.get('/contestants', function(req, res) {
  getContestants(function(result) {
    res.json(200, {
      status: 'ok',
      contestants: result
    });
  });
});

function getContestants(callback) {
  var contestants = [];
  jsdom.env({
    url: 'http://missuniversemyanmar.com/missunimm/2014contestants',
    scripts: ['http://code.jquery.com/jquery.js'],
    done: function(errors, window) {
      var $ = window.$;
      $('.views-row').each(function() {
        var $girl = $(this);
        var contestant = {
          name: $girl.find('.views-field-title').text().trim(),
          votes: {
            facebook: 12,
            website: 100
          }
        };
        contestants.push(contestant);
      });
      callback(contestants);
    }
  });
}

var port = Number(process.env.PORT || 5000);
app.listen(port);
