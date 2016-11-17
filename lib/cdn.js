'use strict';

var WI_HOST = 'http://wi.ournetcdn.net';
var ASSETS_HOST = 'http://assets.ournetcdn.net';

exports.wi = {
	stories: function(size, id) {
		return WI_HOST + '/stories/' + id.substr(0, 4) + '/' + size + '/' + id + '.jpg';
	},

	news: function(size, id) {
		return WI_HOST + '/news/' + id.substr(0, 4) + '/' + size + '/' + id + '.jpg';
	}
};

var COUNTRY_MAP = {
	md: 'click',
	pl: 'diez',
	al: 'moti2',
	ru: 'zborg'
};

exports.assets = {
	img: {
		logo: function(name) {
			if (name && name.length === 2) {
				name = COUNTRY_MAP[name] || 'ournet';
			}
			name = name || 'ournet';

			return ASSETS_HOST + '/ournet/img/logos/' + name + '-logo.png';
		}
	}
};
