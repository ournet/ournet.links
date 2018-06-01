export declare function createSitemap(defaultLanguage: string): Sitemap;
export declare type Sitemap = {
    portal?: PortalSitemap;
    news?: NewsSitemap;
    weather?: WeatherSitemap;
    exchange?: ExchangeSitemap;
    horoscope?: HoroscopeSitemap;
};
export declare type PortalSitemap = {
    home: SitemapNoParams;
};
export declare type ExchangeSitemap = {
    home: SitemapNoParams;
    constols: {
        mainRates: SitemapOneParams;
        exchangeTable: SitemapOneParams;
    };
    rates: SitemapOneParams;
};
export declare type HoroscopeSitemap = {
    home: SitemapNoParams;
    sign: SitemapOneParams & {
        period: SitemapTwoParams;
    };
};
export declare type NewsSitemap = {
    home: SitemapNoParams;
    item: SitemapTwoParams;
    story: SitemapTwoParams<string, number>;
    topic: SitemapOneParams;
    topicStories: SitemapOneParams;
    topicQuotes: SitemapOneParams;
    quote: SitemapOneParams;
    quotes: SitemapNoParams;
    category: SitemapOneParams;
    search: SitemapNoParams;
    important: SitemapNoParams;
    popular: SitemapNoParams;
    video: SitemapNoParams;
    url: SitemapNoParams & {
        news: SitemapOneParams;
    };
    actions: {
        viewStory: SitemapOneParams;
    };
    sources: SitemapNoParams;
    source: SitemapOneParams;
    controls: {
        videoFrame: SitemapOneParams;
    };
    rss: {
        stories: SitemapNoParams & {
            topic: SitemapOneParams;
            importent: SitemapNoParams;
        };
    };
};
export declare type WeatherSitemap = {
    home: SitemapNoParams;
    search: SitemapNoParams;
    place: SitemapOneParams;
    places: SitemapNoParams & {
        byAdm1: SitemapOneParams;
    };
    placeDetails: SitemapOneParams;
    widget: SitemapNoParams & {
        widgetFrame: SitemapNoParams;
        widgetScript: SitemapNoParams;
    };
    widget2: SitemapNoParams & {
        widgetFrame: SitemapNoParams;
        widgetHtmlScript: SitemapNoParams;
    };
    controls: {
        morePlaces: SitemapTwoParams;
    };
    newsletter: {
        unsubscribe: SitemapOneParams;
    };
};
export interface SitemapTwoParams<P1 = string, P2 = string> {
    (p1: P1, p2: P2, ...params: SitemapExtraParams): string;
}
export interface SitemapOneParams<P1 = string> {
    (p1: P1, ...params: SitemapExtraParams): string;
}
export interface SitemapNoParams {
    (...params: SitemapExtraParams): string;
}
export declare type SitemapExtraParams = {
    [index: string]: number | string;
}[];
