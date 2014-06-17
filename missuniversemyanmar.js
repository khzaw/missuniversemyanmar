var jsdom = require('jsdom');

var missuniversemyanmar = {
  BASE_URL: 'http://missuniversemyanmar.com',
  getContestants: function(callback) {
    var contestants = [];
    jsdom.env({
      url: this.BASE_URL + '/missunimm/2014contestants',
      scripts: ['http://code.jquery.com/jquery.js'],
      done: function(errors, window) {
        var $ = window.$;
        $('.views-row').each(function() {
          var $girl = $(this);
          var contestant = {
            name: $girl.find('.views-field-title').text().trim(),
            thumbnail: $girl.find('img').attr('src'),
            votes: {
              website: parseInt($girl.find('.alternate-votes-display').text().replace(/,/g, '', 10)),
              facebook: parseInt($girl.find('.views-field-total-count').children(':last').text().replace(/,/g, '', 10))
            },
          };
          contestants.push(contestant);
        });
        callback(contestants);
      }
    });
  }
};

module.exports = missuniversemyanmar;
