'use strict';

var urlset = require('urlset');
var path = require('path');
var weather = require('./weather');

var COUNTRY_MAP = {};

var LANGUAGE_MAP = {
	'in': 'en',
	cz: 'cs',
	md: 'ro'
};

function create(country, language) {

	language = language || LANGUAGE_MAP[country] || country;

	var portal = urlset(path.join(__dirname, '../data/portal.json'), {
		params: {
			ul: {
				value: language,
				format: 'q'
			}
		}
	});

	var exchange = urlset(path.join(__dirname, '../data/exchange.json'), {
		params: {
			ul: {
				value: language,
				format: 's'
			}
		}
	});

	var news = urlset(path.join(__dirname, '../data/news.json'), {
		params: {
			ul: {
				value: language,
				format: 's'
			}
		}
	});

	var links = {
		portal: portal,
		exchange: exchange,
		news: news,
		weather: weather(country, language)
	};

	return links;
}

module.exports = function(country, language) {
	if (!COUNTRY_MAP[country]) {
		COUNTRY_MAP[country] = create(country, language);
	}
	return COUNTRY_MAP[country];
};
