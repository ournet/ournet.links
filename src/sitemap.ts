const urlset = require('urlset');
import * as path from 'path';

export function createSitemap(defaultLanguage: string): Sitemap {

    const projects: { [index: string]: any } = { portal: { ul: 'q' }, exchange: { ul: 's' }, news: { ul: 's' }, weather: { ul: 'q' }, horoscope: { ul: 's' } };
    const links: { [index: string]: any } = {};

    Object.keys(projects).forEach(function (project) {
        links[project] = urlset(path.join(__dirname, '..', 'sitemap', project + '.json'), {
            params: {
                ul: {
                    value: defaultLanguage,
                    format: projects[project].ul
                }
            }
        });
    });

    return links as Sitemap;
}

export type Sitemap = {
    portal: PortalSitemap
    news: NewsSitemap
    weather: WeatherSitemap
    exchange: ExchangeSitemap
    horoscope: HoroscopeSitemap
}

export type PortalSitemap = {
    home: SitemapNoParams
}

export type ExchangeSitemap = {
    home: SitemapNoParams
    constols: {
        mainRates: SitemapOneParams
        exchangeTable: SitemapOneParams
    },
    rates: SitemapOneParams
}

export type HoroscopeSitemap = {
    home: SitemapNoParams
    sign: SitemapOneParams & { period: SitemapTwoParams }
    widgets: SitemapNoParams & { widget1Frame: SitemapNoParams }
    api: SitemapNoParams & { reports: SitemapNoParams }
}

export type NewsSitemap = {
    home: SitemapNoParams
    item: SitemapOneParams
    story: SitemapTwoParams
    topic: SitemapOneParams
    topicStories: SitemapOneParams
    topicQuotes: SitemapOneParams
    quote: SitemapOneParams
    quotes: SitemapNoParams
    search: SitemapNoParams
    important: SitemapNoParams
    popular: SitemapNoParams
    video: SitemapNoParams
    url: SitemapNoParams & { news: SitemapOneParams }
    actions: {
        viewStory: SitemapOneParams
        viewItem: SitemapOneParams
    }
    sources: SitemapNoParams
    source: SitemapOneParams
    videoEmbed: SitemapOneParams
    rss: {
        stories: SitemapNoParams & {
            topic: SitemapOneParams
            important: SitemapNoParams
        }
    }
}

export type WeatherSitemap = {
    home: SitemapNoParams
    search: SitemapNoParams
    place: SitemapOneParams
    places: SitemapNoParams & {
        byAdm1: SitemapOneParams
    },
    placeDetails: SitemapOneParams
    widget: SitemapNoParams & {
        widgetFrame: SitemapNoParams
        widgetScript: SitemapNoParams
    },
    widget2: SitemapNoParams & {
        widgetFrame: SitemapNoParams
        widgetHtmlScript: SitemapNoParams
    },
    controls: {
        morePlaces: SitemapTwoParams
    },
    newsletter: {
        unsubscribe: SitemapOneParams
    },
    sitemap: {
        regionIndex: SitemapNoParams
        regionPlaces: SitemapOneParams
    }
}

export interface SitemapTwoParams<P1=string, P2=string> {
    (p1: P1, p2: P2, ...params: SitemapExtraParams): string
}

export interface SitemapOneParams<P1=string> {
    (p1: P1, ...params: SitemapExtraParams): string
}

export interface SitemapNoParams {
    (...params: SitemapExtraParams): string
}

export type SitemapExtraParams = { [index: string]: number | string }[]
