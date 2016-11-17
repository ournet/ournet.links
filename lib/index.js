'use strict';

exports.country = require('./country');
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
};

exports.projectName = function(country) {
	return PROJECTS[country];
};
