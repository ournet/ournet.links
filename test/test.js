'use strict';

var assert = require('assert');
var links = require('../lib');

describe('links', function() {
	it('should exist', function() {
		assert.ok(links);
		assert.ok(links.country);
		assert.ok(links.cdn);
		assert.ok(links.cdn.wi);
	});

	it('should create country links', function() {
		var mdLinks = links.country('md');
		assert.equal('/', mdLinks.weather.home());
		assert.equal('/?ul=ru', mdLinks.weather.home({ ul: 'ru' }));

		assert.equal('/widget/widget_frame', mdLinks.weather.widget.widgetFrame());
		assert.equal('/newsletter/unsubscribe/1', mdLinks.weather.newsletter.unsubscribe(1));

		assert.equal('/1', mdLinks.weather.place(1));

		assert.equal('/', mdLinks.horoscope.home());
		assert.equal('/1/tomorrow', mdLinks.horoscope.sign.period(1, 'tomorrow'));
	});

	it('should create country links and .$host', function() {
		var Links = links.country('md');
		assert.equal('news.click.md', Links.news.$host);
		assert.equal('meteo.click.md', Links.weather.$host);
		Links = links.country('ru');
		assert.equal('news.zborg.ru', Links.news.$host);
		assert.equal('pogoda.zborg.ru', Links.weather.$host);
	});
});
