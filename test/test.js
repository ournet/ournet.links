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
	});
});
