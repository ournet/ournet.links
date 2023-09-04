import {
  Sitemap,
  createSitemap,
  ExchangeSitemap,
  HoroscopeSitemap,
  PortalSitemap,
  WeatherSitemap,
  NewsSitemap
} from "./sitemap";

import * as cdn from "./cdn";
export {
  cdn,
  Sitemap,
  ExchangeSitemap,
  HoroscopeSitemap,
  PortalSitemap,
  WeatherSitemap,
  NewsSitemap
};

const DATA = require("../ournet-data.json");

const LANGUAGE_SITEMAP: { [index: string]: Sitemap } = {};

export function sitemap(defaultLanguage: string) {
  if (!LANGUAGE_SITEMAP[defaultLanguage]) {
    LANGUAGE_SITEMAP[defaultLanguage] = createSitemap(defaultLanguage);
  }
  return LANGUAGE_SITEMAP[defaultLanguage];
}

export function getSchema(project: string, country: string): string {
  const data = DATA.projects[project];
  return (data && data.schemas && data.schemas[country]) || "https:";
}

export function getHost(project: string, country: string): string {
  const data = DATA.projects[project];
  return (data && data.hosts && data.hosts[country]) || undefined;
}

export function toFullUrl(
  project: string,
  country: string,
  path: string
): string {
  const schema = getSchema(project, country);
  const host = getHost(project, country);
  return `${schema}//${host}${path}`;
}
