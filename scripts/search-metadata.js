/* global hexo */

'use strict';

const CATEGORY_ORDER = ['zimaos', 'app-store', 'hardware', 'developer', 'help-center'];

function normalizeSidebarPath(value) {
  return (value || '')
    .replace(/^\/docs\/?/, '')
    .replace(/^\/+|\/+$/g, '')
    .replace(/\.html$/, '')
    .replace(/\/index$/, '');
}

function categoryForRoute(route) {
  if (route === 'zimaos/app-store' || route.startsWith('zimaos/app-store/')) return 'app-store';
  const namespace = route.split('/')[0];
  return ['zimaos', 'hardware', 'developer', 'help-center'].includes(namespace) ? namespace : '';
}

function translationPrefix(category) {
  const section = {
    zimaos: 'guides',
    'app-store': 'playground',
    developer: 'dev',
    'help-center': 'more'
  }[category] || category;
  return 'sidebar.' + section + '.';
}

function translatorFor(lang) {
  const configured = hexo.theme.i18n.languages || [];
  const available = hexo.theme.i18n.list();
  const languages = [...new Set([lang].concat(configured, available).filter(Boolean))];
  return hexo.theme.i18n.__(languages);
}

hexo.extend.generator.register('search-metadata', function(locals) {
  const sidebarData = locals.data.sidebar || {};
  const languages = Object.keys(locals.data.languages || {en: {}});
  const result = {};

  languages.forEach(lang => {
    const translate = translatorFor(lang);
    const metadata = {};

    CATEGORY_ORDER.forEach(category => {
      const sidebar = sidebarData[category];
      if (!sidebar) return;

      const prefix = translationPrefix(category);
      const categoryLabel = translate('menu.' + category);

      Object.entries(sidebar).forEach(([groupKey, pages]) => {
        const sectionKey = groupKey === '_overview' ? 'overview' : groupKey;
        const sectionLabel = translate(prefix + sectionKey);

        Object.values(pages).forEach(link => {
          const route = normalizeSidebarPath(link);
          if (!route || categoryForRoute(route) !== category) return;

          const path = '/' + route;
          if (!metadata[path]) metadata[path] = categoryLabel + ' › ' + sectionLabel;
        });
      });
    });

    result[lang] = metadata;
  });

  return {
    path: 'search-metadata.json',
    data: JSON.stringify(result)
  };
});
