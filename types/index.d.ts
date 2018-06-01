import { Sitemap } from "./sitemap";
import * as cdn from './cdn';
export { cdn };
export declare function sitemap(defaultLanguage: string): Sitemap;
export declare function getSchema(project: string, country: string): string;
export declare function getHost(project: string, country: string): string;
