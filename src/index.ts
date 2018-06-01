import { Sitemap, createSitemap } from "./sitemap";

import * as cdn from './cdn';
export { cdn }

const DATA = require('../ournet-data.json');

const LANGUAGE_SITEMAP: { [index: string]: Sitemap } = {};

export function sitemap(defaultLanguage: string) {
	if (!LANGUAGE_SITEMAP[defaultLanguage]) {
		LANGUAGE_SITEMAP[defaultLanguage] = createSitemap(defaultLanguage);
	}
	return LANGUAGE_SITEMAP[defaultLanguage];
}

export function getSchema(project: string, country: string): string {
	const data = DATA.projects[project];
	return data && data.schemas && data.schemas[country] || 'http:';
}

export function getHost(project: string, country: string): string {
	const data = DATA.projects[project];
	return data && data.hosts && data.hosts[country] || undefined;
}
