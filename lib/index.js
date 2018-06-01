"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sitemap_1 = require("./sitemap");
const cdn = require("./cdn");
exports.cdn = cdn;
const DATA = require('../ournet-data.json');
const LANGUAGE_SITEMAP = {};
function sitemap(defaultLanguage) {
    if (!LANGUAGE_SITEMAP[defaultLanguage]) {
        LANGUAGE_SITEMAP[defaultLanguage] = sitemap_1.createSitemap(defaultLanguage);
    }
    return LANGUAGE_SITEMAP[defaultLanguage];
}
exports.sitemap = sitemap;
function getSchema(project, country) {
    const data = DATA.projects[project];
    return data && data.schemas && data.schemas[country] || 'http:';
}
exports.getSchema = getSchema;
function getHost(project, country) {
    const data = DATA.projects[project];
    return data && data.hosts && data.hosts[country] || undefined;
}
exports.getHost = getHost;
