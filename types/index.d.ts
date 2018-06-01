import { Sitemap, ExchangeSitemap, HoroscopeSitemap, PortalSitemap, WeatherSitemap, NewsSitemap } from "./sitemap";
import * as cdn from './cdn';
export { cdn, Sitemap, ExchangeSitemap, HoroscopeSitemap, PortalSitemap, WeatherSitemap, NewsSitemap };
export declare function sitemap(defaultLanguage: string): Sitemap;
export declare function getSchema(project: string, country: string): string;
export declare function getHost(project: string, country: string): string;
