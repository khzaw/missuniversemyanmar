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
  },

  getModelBio: function(name, callback) {
    jsdom.env({
      url: this.BASE_URL + '/contestants/' + name,
      scripts: ['http://code.jquery.com/jquery.js'],
      done: function(errors, window) {
        var $ = window.$;
        var info = $('.field-items').children(':first-child').slice(0, -1);
        var modelBio = {
          waistNumber: parseInt($(info[0]).text(), 10),
          name: $(info[1]).text(),
          age: parseInt($(info[2]).text()),
          citizenship: $(info[3]).text(),
          education: $(info[4]).text(),
          otherQualifications: $(info[5]).text(),
          ambition: $(info[6]).text(),
          height: $(info[7]).text(),
          photos: $('.gallery-slide').children('img').map(function() {
            return this.src;
          }).get(),
        };
        callback(modelBio);
      }
    });
  }
};

module.exports = missuniversemyanmar;
