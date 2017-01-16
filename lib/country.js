'use strict';

var urlset = require('urlset');
var path = require('path');

var COUNTRY_MAP = {};

var LANGUAGE_MAP = {
	'in': 'en',
	cz: 'cs',
	md: 'ro'
};

var HOST_MAP = {
	portal: {
		md: 'www.click.md',
		ru: 'www.zborg.ru',
		pl: 'www.diez.pl',
		ro: 'www.ournet.ro',
		cz: 'www.ournet.cz',
		hu: 'www.ournet.hu',
		bg: 'www.ournet.bg',
		it: 'www.ournet.it',
		'in': 'www.ournet.in'
	},
	news: {
		md: 'news.click.md',
		ru: 'news.zborg.ru',
		pl: 'news.diez.pl',
		ro: 'news.ournet.ro',
		cz: 'news.ournet.cz',
		hu: 'news.ournet.hu',
		bg: 'news.ournet.bg',
		it: 'news.ournet.it',
		'in': 'news.ournet.in'
	},
	weather: {
		md: 'meteo.click.md',
		ru: 'pogoda.zborg.ru',
		pl: 'pogoda.diez.pl',
		ro: 'meteo.ournet.ro',
		cz: 'pocasi.ournet.cz',
		hu: 'idojaras.ournet.hu',
		bg: 'vremeto.ournet.bg',
		it: 'meteo.ournet.it',
		'in': 'weather.ournet.in'
	},
	exchange: {
		md: 'curs.click.md',
		ru: 'kurs.zborg.ru',
		ro: 'curs.ournet.ro',
		bg: 'valuta.ournet.bg'
	},
	horoscope: {
		ro: 'horoscop.ournet.ro'
	}
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

	var weather = urlset(path.join(__dirname, '../data/weather.json'), {
		params: {
			ul: {
				value: language,
				format: 'q'
			}
		}
	});

	var horoscope = urlset(path.join(__dirname, '../data/horoscope.json'), {
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
		weather: weather,
		horoscope: horoscope
	};

	links.portal.host = HOST_MAP.portal[country];
	links.exchange.host = HOST_MAP.exchange[country];
	links.news.host = HOST_MAP.news[country];
	links.weather.host = HOST_MAP.weather[country];
	links.horoscope.host = HOST_MAP.horoscope[country];

	return links;
}

module.exports = function(country, language) {
	if (!COUNTRY_MAP[country]) {
		COUNTRY_MAP[country] = create(country, language);
	}
	return COUNTRY_MAP[country];
};
