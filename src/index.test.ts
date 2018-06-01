
import test from 'ava';
import * as links from './index';

test('api', t => {
    t.true(!!links.cdn)
    t.true(!!links.sitemap)
    t.true(!!links.getHost)
    t.true(!!links.getSchema)
})

test('sitemap', t => {
    let sitemap = links.sitemap('ro');
    t.true(!!sitemap);
    t.is(sitemap.weather.home(), '/');
    t.is(sitemap.weather.home({ ul: 'ro' }), '/');
    t.is(sitemap.weather.home({ ul: 'ru' }), '/?ul=ru');
})

test('cdn', t => {
    let cdn = links.cdn;
    t.true(!!cdn);
    t.true(!!cdn.assets);
    t.true(!!cdn.wi);
    t.true(!!cdn.wi.stories('a', 'id'));
})
