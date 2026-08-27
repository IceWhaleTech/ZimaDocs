/* global hexo */

'use strict';

const { basename } = require('path');
const cheerio = require('cheerio');
const lunr = require('lunr');
const full_url_for = hexo.extend.helper.get('full_url_for').bind(hexo);

function routeInfo(value, languages) {
  const raw = (value || '').replace(/^\/+/, '');
  const landing = /(?:^|\/)index\.html$/.test(raw) || /\/$/.test(raw);
  const parts = raw.replace(/\.html$/, '').replace(/(?:^|\/)index$/, '').split('/').filter(Boolean);
  if (parts.length && languages.includes(parts[0])) parts.shift();
  return {landing, route: parts.join('/')};
}

function pageRouteInfo(context) {
  const languages = Object.keys(context.site.data.languages || {});
  return routeInfo(context.page.canonical_path || context.page.path || '', languages);
}

function normalizeSidebarPath(value) {
  return (value || '').replace(/^\/docs\/?/, '').replace(/^\/+|\/+$/g, '').replace(/\.html$/, '').replace(/\/index$/, '');
}

function parseReleaseVersion(value) {
  const match = /^v-(\d+)-(\d+)-(\d+)$/.exec(value || '');
  if (!match) return null;

  const parts = match.slice(1).map(Number);
  return {
    parts,
    version: 'v' + parts.join('.')
  };
}

function compareReleaseVersions(a, b) {
  for (let index = 0; index < a.parts.length; index += 1) {
    if (a.parts[index] !== b.parts[index]) return b.parts[index] - a.parts[index];
  }
  return 0;
}

function getCategory(context) {
  const route = pageRouteInfo(context).route;
  if (route === 'zimaos/app-store' || route.startsWith('zimaos/app-store/')) return 'app-store';
  const namespace = route.split('/')[0];
  return ['zimaos', 'hardware', 'developer', 'help-center'].includes(namespace) ? namespace : '';
}

function i18nPrefix(context) {
  const translationSection = {
    zimaos: 'guides',
    'app-store': 'playground',
    developer: 'dev',
    'help-center': 'more'
  }[getCategory(context)] || getCategory(context);
  return 'sidebar.' + translationSection + '.';
}

function outputPathForRoute(route, lang, landing) {
  const prefix = lang && lang !== 'en' ? lang + '/' : '';
  if (!route) return prefix + 'index.html';
  return prefix + route + (landing ? '/index.html' : '.html');
}

function pageExists(context, route, lang, landing) {
  const outputPath = outputPathForRoute(route, lang, landing);
  return Boolean(
    context.site.pages.findOne({path: outputPath}) ||
    context.site.pages.findOne({path: '/' + outputPath})
  );
}

function localizedUrl(context, path, lang) {
  const languages = Object.keys(context.site.data.languages || {});
  const info = routeInfo(path, languages);
  const targetLanguage = lang || context.page.lang || 'en';
  const currentLanguage = context.page.lang || 'en';
  let resolvedLanguage = 'en';

  if (pageExists(context, info.route, targetLanguage, info.landing)) {
    resolvedLanguage = targetLanguage;
  } else if (!pageExists(context, info.route, 'en', info.landing) &&
      pageExists(context, info.route, currentLanguage, info.landing)) {
    // Locale-only pages stay on their existing translation when no English fallback exists.
    resolvedLanguage = currentLanguage;
  }

  const prefix = resolvedLanguage !== 'en' ? '/' + resolvedLanguage : '';
  const suffix = info.route ? '/' + info.route + (info.landing ? '/' : '') : '/';
  return context.url_for(prefix + suffix);
}

hexo.extend.helper.register('page_nav', function() {
  const type = getCategory(this);
  const sidebar = this.site.data.sidebar[type];
  const currentPath = pageRouteInfo(this).route;
  const list = {};
  const prefix = i18nPrefix(this);

  if (!sidebar) return '';
  for (const group of Object.values(sidebar)) {
    for (const [label, link] of Object.entries(group)) list[link] = label;
  }

  const links = Object.keys(list);
  const index = links.findIndex(link => normalizeSidebarPath(link) === currentPath);
  const self = this;

  function item(side, link) {
    const arrow = `<span class="doc-pagenav__arrow" aria-hidden="true"></span>`;
    const label = self.__('page.' + side);
    const title = self.__(prefix + list[link]);

    return `<a class="doc-pagenav__item doc-pagenav__item--${side}" href="${self.url_for_lang(link)}">`
      + `<span class="doc-pagenav__label">${side === 'prev' ? arrow + label : label + arrow}</span>`
      + `<span class="doc-pagenav__title">${title}</span>`
      + '</a>';
  }

  let result = '';

  if (index > 0) result += item('prev', links[index - 1]);
  if (index !== -1 && index < links.length - 1) result += item('next', links[index + 1]);

  return result ? `<nav class="doc-pagenav">${result}</nav>` : '';
});

hexo.extend.helper.register('doc_sidebar', function(className) {
  const type = getCategory(this);
  const sidebar = this.site.data.sidebar[type];
  const currentPath = pageRouteInfo(this).route;
  const prefix = i18nPrefix(this);
  let result = '';

  if (!sidebar) return '';
  if (sidebar._overview) {
    for (const [text, link] of Object.entries(sidebar._overview)) {
      const current = normalizeSidebarPath(link) === currentPath ? 'is-current' : '';
      result += `<h4 class="doc-sidebar__overview"><a class="${current}" href="${this.url_for_lang(link)}">${this.__(prefix + text)}</a></h4>`;
    }
  }

  for (const [title, menu] of Object.entries(sidebar)) {
    if (title === '_overview') continue;
    let childrenContent = '';
    for (const [text, link] of Object.entries(menu)) {
      const current = normalizeSidebarPath(link) === currentPath ? 'is-current' : '';
      childrenContent += `<li><a class="${current}" href="${this.url_for_lang(link)}">${this.__(prefix + text)}</a></li>`;
    }
    const groupKey = type + ':' + title;
    const listId = className + '-' + type + '-' + title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
    result += `
    <div class="doc-sidebar__group" data-group="${groupKey}">
      <h4 class="doc-sidebar__title">
        <button type="button" class="doc-sidebar__toggle" aria-expanded="true" aria-controls="${listId}">
          <span class="doc-sidebar__toggle-text">${this.__(prefix + title)}</span>
        </button>
      </h4>
      <div class="doc-sidebar__list-motion">
        <ul class="doc-sidebar__list" id="${listId}">${childrenContent}</ul>
      </div>
    </div>`;
  }
  return result;
});

hexo.extend.helper.register('header_menu', function(className) {
  const menu = this.site.data.menu;
  const currentCategory = getCategory(this);
  const isSiteHome = pageRouteInfo(this).route === '';
  let result = '';

  for (const [title, menuPath] of Object.entries(menu)) {
    const active = !isSiteHome && title === currentCategory ? 'current_page_item' : '';
    const href = title === 'forum' ? menuPath : this.url_for_lang(menuPath);
    result += `<li class="menu-item ${active}"><a href="${href}" class="${className}-link">${this.__('menu.' + title)}</a></li>`;
  }
  return result;
});

hexo.extend.helper.register('has_translation', function(lang) {
  const info = pageRouteInfo(this);
  return pageExists(this, info.route, lang, info.landing);
});

hexo.extend.helper.register('canonical_url', function(lang) {
  const info = pageRouteInfo(this);
  const prefix = lang && lang !== 'en' ? lang + '/' : '';
  const localizedPath = prefix + info.route + (info.landing && info.route ? '/' : '');
  return full_url_for(localizedPath);
});

hexo.extend.helper.register('url_for_lang', function(path) {
  return localizedUrl(this, path, this.page.lang);
});

hexo.extend.helper.register('url_for_locale', function(lang, path) {
  return localizedUrl(this, path, lang);
});

hexo.extend.helper.register('latest_release', function() {
  const developerSidebar = this.site.data.sidebar && this.site.data.sidebar.developer;
  const versionLog = developerSidebar && developerSidebar['version-log'];
  const releases = Object.entries(versionLog || {}).map(([key, path]) => {
    const parsed = parseReleaseVersion(key);
    if (!parsed) return null;
    return {
      parts: parsed.parts,
      version: parsed.version,
      path
    };
  }).filter(Boolean).sort(compareReleaseVersions);

  return releases[0] || {version: '', path: '/developer/'};
});

hexo.extend.helper.register('json_ld_string', value => {
  return JSON.stringify(value == null ? '' : String(value)).replace(/</g, '\\u003c');
});

hexo.extend.helper.register('raw_link', path => `https://github.com/IceWhaleTech/ZimaDocs/edit/main/source/${path}`);

function addPageAnchors(str) {
  const $ = cheerio.load(str, { decodeEntities: false });
  const headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function() {
    const id = $(this).attr('id');
    const headerLink = $(this).children('a.headerlink');

    if (headerLink.length) headerLink.replaceWith(headerLink.contents());

    $(this)
      .addClass('article-heading')
      .append(`<a class="article-anchor" href="#${id}" aria-hidden="true"></a>`);
  });

  return $.html();
}

hexo.extend.helper.register('page_anchor', addPageAnchors);

hexo.extend.helper.register('doc_content', function(str) {
  const $ = cheerio.load(addPageAnchors(str), { decodeEntities: false });

  $('a').not('.article-anchor').addClass('doc-link');
  $('code').not('pre code').addClass('chip');
  $('ul').addClass('doc-dots');
  $('ol').addClass('doc-steps');

  $('table').each(function() {
    const table = $(this);
    if (table.parent().hasClass('doc-table-scroll')) return;

    table.wrap('<div class="doc-table-scroll" tabindex="0"></div>');
  });

  $('p').each(function() {
    const paragraph = $(this);
    const children = paragraph.contents().toArray();
    const directImages = paragraph.children('img');

    if (!directImages.length) return;

    const isFigureGroup = children.length > 0 && children.every(node => {
      if (node.type === 'tag') return node.name === 'img' || node.name === 'br';
      return node.type === 'text' && !node.data.trim();
    });

    if (isFigureGroup) {
      const figureGroup = paragraph.addClass('doc-figures');
      figureGroup.children('img').each(function() {
        $(this).wrap('<span class="doc-figure-frame"></span>');
      });
      return;
    }

    const paragraphAttributes = { ...this.attribs };
    const blocks = [];
    let textNodes = [];

    const flushTextBlock = () => {
      const hasContent = textNodes.some(node => {
        if (node.type === 'text') return Boolean(node.data.trim());
        return node.type === 'tag' && node.name !== 'br';
      });

      if (hasContent) {
        const textBlock = $('<p></p>');
        textNodes.forEach(node => textBlock.append(node));
        blocks.push(textBlock);
      }

      textNodes = [];
    };

    children.forEach((node, index) => {
      const isDirectImage = node.type === 'tag' && node.name === 'img';
      const isAdjacentBreak = node.type === 'tag' && node.name === 'br' && (
        (children[index - 1] && children[index - 1].type === 'tag' && children[index - 1].name === 'img') ||
        (children[index + 1] && children[index + 1].type === 'tag' && children[index + 1].name === 'img')
      );

      if (isAdjacentBreak) return;

      if (isDirectImage) {
        flushTextBlock();
        const figureBlock = $('<p class="doc-figures"></p>');
        const figureFrame = $('<span class="doc-figure-frame"></span>');
        figureFrame.append(node);
        figureBlock.append(figureFrame);
        blocks.push(figureBlock);
        return;
      }

      textNodes.push(node);
    });

    flushTextBlock();
    if (blocks.length) blocks[0].attr(paragraphAttributes);
    blocks.forEach(block => paragraph.before(block));
    paragraph.remove();
  });

  if (basename(this.page.path) === 'how-to-install-zimaos.html') {
    $('.doc-figures').addClass('doc-figures--install-card');
    $('ul').last().find('a').removeClass('doc-link').addClass('doc-link--plain');
  }

  const body = $('body');
  const nodes = body.children().toArray();
  body.empty();

  let block;
  let section;

  function ensureBlock() {
    if (!block) block = $('<div class="doc-block"></div>');
    return block;
  }

  function flushSection() {
    if (!section) return;

    const children = section.children();
    const hasHeading = children.first().is('h1, h2, h3, h4, h5, h6');
    if (hasHeading && children.length > 2) {
      const tightContent = $('<div class="doc-sect doc-sect--tight"></div>');
      children.slice(1).each(function() {
        tightContent.append(this);
      });
      section.append(tightContent);
    }

    ensureBlock().append(section);
    section = null;
  }

  function flushBlock() {
    flushSection();
    if (block && block.children().length) body.append(block);
    block = null;
  }

  nodes.forEach(node => {
    const element = $(node);

    if (element.hasClass('doc-figures')) {
      flushBlock();
      body.append(node);
      return;
    }

    if (element.is('h1, h2, h3, h4, h5, h6')) {
      flushSection();
      section = $('<div class="doc-sect"></div>').append(node);
      return;
    }

    if (!section) section = $('<div class="doc-sect"></div>');
    section.append(node);
  });

  flushBlock();

  return $.html();
});

hexo.extend.helper.register('plugin_list', function() {
  const partial = hexo.extend.helper.get('partial').bind(this);
  let html = '';

  const type = this.page.data;
  const arr = this.site.data[type];

  if (type === 'themes') {
    arr.sort(() => { return Math.random() > 0.5 ? -1 : 1; });
  }

  if (type === 'plugins') {
    arr.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : 1;
    });
  }

  for (const plugin of arr) {
    html += partial('partial/' + this.page.partial, { plugin });
  }

  return html;
});

hexo.extend.helper.register('lunr_index', data => {
  const index = lunr(function() {
    this.field('name', { boost: 10 });
    this.field('tags', { boost: 50 });
    this.field('description');
    this.ref('name');

    data.forEach(this.add, this);
  });

  return JSON.stringify(index);
});

hexo.extend.helper.register('canonical_path_for_nav', function() {
  const info = pageRouteInfo(this);
  return '/' + info.route + (info.landing && info.route ? '/' : '');
});

hexo.extend.helper.register('lang_name', function(lang) {
  const data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('disqus_lang', function() {
  const lang = this.page.lang;
  const data = this.site.data.languages[lang];

  return data.disqus_lang || lang;
});

hexo.extend.filter.register('template_locals', locals => {
  const { page } = locals;
  if (page.archive) page.title = 'News';
});
