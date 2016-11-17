'use strict';

var urlset = require('urlset');

var COUNTRY_MAP = {
	al: 'mot',
	bg: 'prognoza',
	cz: 'pocasi',
	hu: 'elorejelzes',
	'in': 'forecast',
	it: 'tempo',
	md: 'vremea',
	pl: 'prognoza',
	ro: 'vremea',
	ru: 'pogoda'
};

module.exports = function(country, language) {
	var path = COUNTRY_MAP[country];
	if (!path) {
		throw new Error('invalid country: ' + country);
	}

	var data = require('../data/weather.json');

	data.$path = '/' + path;

	var links = urlset(data, {
		params: {
			ul: {
				value: language,
				format: 'q'
			}
		}
	});

	return links;
};
