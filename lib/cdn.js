'use strict';

var wi = exports.wi = {};

wi.stories = function(size, id) {
	return 'http://wi.ournetcdn.net/stories/' + id.substr(0, 4) + '/' + size + '/' + id + '.jpg';
};

wi.news = function(size, id) {
	return 'http://wi.ournetcdn.net/news/' + id.substr(0, 4) + '/' + size + '/' + id + '.jpg';
};
