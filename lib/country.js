'use strict';

var urlset = require('urlset');
var path = require('path');

var COUNTRY_MAP = {};

var LANGUAGE_MAP = {
	'in': 'en',
	cz: 'cs',
	md: 'ro',
	al: 'sq'
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
		'in': 'weather.ournet.in',
		al: 'moti2.al',
		tr: 'hava.one'
	},
	exchange: {
		md: 'curs.click.md',
		ru: 'kurs.zborg.ru',
		ro: 'curs.ournet.ro',
		bg: 'valuta.ournet.bg'
	},
	horoscope: {
		ro: 'horoscop.ournet.ro',
		ru: 'horoscope.zborg.ru',
		bg: 'horo.ournet.bg',
	}
};

var SCHEMA_MAP = {
	weather: {
		ru: 'https:',
		ro: 'https:'
	},
	horoscope: {
		ro: 'https:',
		ru: 'https:'
	}
};

function create(country, language) {

	language = language || LANGUAGE_MAP[country] || country;

	var projects = { portal: { ul: 'q' }, exchange: { ul: 's' }, news: { ul: 's' }, weather: { ul: 'q' }, horoscope: { ul: 's' } };
	var links = {};

	Object.keys(projects).forEach(function (project) {
		links[project] = urlset(path.join(__dirname, '../data/' + project + '.json'), {
			params: {
				ul: {
					value: language,
					format: projects[project].ul
				}
			}
		});
		links[project]['$host'] = HOST_MAP[project][country];
		links[project]['$schema'] = SCHEMA_MAP[project] && SCHEMA_MAP[project][country] || 'http:';
	});

	return links;
}

exports.build = function (country, language) {
	if (!COUNTRY_MAP[country]) {
		COUNTRY_MAP[country] = create(country, language);
	}
	return COUNTRY_MAP[country];
};

exports.getSchema = function (project, country) {
	return SCHEMA_MAP[project] && SCHEMA_MAP[project][country] || 'http:';
};

exports.getHost = function (project, country) {
	return HOST_MAP[project] && HOST_MAP[project][country];
};
