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
	var name = COUNTRY_MAP[country];
	if (!name) {
		throw new Error('invalid country: ' + country);
	}

	var data = require('../data/weather.json');

	data.$name = name;

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
