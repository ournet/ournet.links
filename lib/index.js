'use strict';

var country = require('./country');

exports.country = country.build;
exports.getHost = country.getHost;
exports.getSchema = country.getSchema;
exports.cdn = require('./cdn');

var PROJECTS = {
	ro: 'Ournet.ro',
	bg: 'Ournet.bg',
	'in': 'Ournet.in',
	cz: 'Ournet.cz',
	hu: 'Ournet.hu',
	it: 'Ournet.it',
	md: 'Click.md',
	pl: 'Diez.pl',
	al: 'Moti2.al',
	tr: 'Hava.one'
};

exports.projectName = function(country) {
	return PROJECTS[country];
};
