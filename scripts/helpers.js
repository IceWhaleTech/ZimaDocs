/* global hexo */

'use strict';

const { basename } = require('path');
const cheerio = require('cheerio');
const lunr = require('lunr');
const full_url_for = hexo.extend.helper.get('full_url_for').bind(hexo);

const localizedPath = ['docs', 'api'];

hexo.extend.helper.register('page_nav', function() {
  const type = this.page.canonical_path.split('/')[0];
  const sidebar = this.site.data.sidebar[type];
  const path = basename(this.path);
  const list = {};
  const prefix = 'sidebar.' + type + '.';

  for (const i in sidebar) {
    for (const j in sidebar[i]) {
      list[sidebar[i][j]] = j;
    }
  }

  const keys = Object.keys(list);
  const index = keys.indexOf(path);
  let result = '';

  if (index > 0) {
    result += `<a href="${keys[index - 1]}" class="article-footer-prev" title="${this.__(prefix + list[keys[index - 1]])}"><i class="fa fa-chevron-left"></i><span>${this.__('page.prev')}</span></a>`;
  }

  if (index < keys.length - 1) {
    result += `<a href="${keys[index + 1]}" class="article-footer-next" title="${this.__(prefix + list[keys[index + 1]])}"><span>${this.__('page.next')}</span><i class="fa fa-chevron-right"></i></a>`;
  }

  return result;
});

hexo.extend.helper.register('doc_sidebar', function(className) {
  const type = this.page.canonical_path.split('/')[0];
  const sidebar = this.site.data.sidebar[type];
  const path = basename(this.path);
  let result = '';
  const self = this;
  const prefix = 'sidebar.' + type + '.';

  if (typeof sidebar === 'undefined') {
    return '';
  }

  if(type === 'zimaos') {
    result += `
    <h4 class="category-list-link sidebar-title ${path=='index.html'?'current':''}" style="border:none"> 
      <a href="./index.html">${self.__('sidebar.zimaos.whats_zima')}</a>
    </h4>
    `
  }

  result += '<ul class="category-list">'

  for (const [title, menu] of Object.entries(sidebar)) {
    let showChildren = '';
    let childrenContent = '';
    for (const [text, link] of Object.entries(menu)) {
      let itemClass = '';
      if (link === path){
        itemClass += ' current';
        showChildren = 'show-children';
      }
      if( !(type=='zimaos' && link == 'index.html') ){ 
        childrenContent += `<li class="sidebar-link ${itemClass}"><a href="./${link}">${self.__(prefix + text)}</a></li>`;
      }
    }
    result += `
    <li class="${showChildren}">
      <h4 class="category-list-link sidebar-title"> 
        <span>${self.__(prefix + title)}</span>
        <i class="fa fa-chevron-right"></i>
      </h4>
      <ul class="category-list-children">
      ${childrenContent}
      </ul>
    </li>`;
  }
  result += '</ul>';
  // for (const [title, menu] of Object.entries(sidebar)) {
  //   result += '<strong class="' + className + '-title">' + self.__(prefix + title) + '</strong>';

  //   for (const [text, link] of Object.entries(menu)) {
  //     let itemClass = className + '-link';
  //     if (link === path) itemClass += ' current';

  //     result += '<a href="' + link + '" class="' + itemClass + '">' + self.__(prefix + text) + '</a>';
  //   }
  // }

  return result;
});

hexo.extend.helper.register('header_menu', function(className) {
  const menu = this.site.data.menu;
  let result = '';
  const self = this;
  const lang = this.page.lang;
  const isEnglish = lang === 'en';
  for (const [title, path] of Object.entries(menu)) {
    let langPath = path;
    let active = '';
    // if (!isEnglish && ~localizedPath.indexOf(title)) langPath = lang + path;
    if (!isEnglish) langPath = lang + path;
    if (this.page.permalink.includes(langPath)) active = 'current_page_item';
    result += `<li class="menu-item ${active}"><a href="${title==='forum'?path: self.url_for(langPath)}" class="${className}-link ">${self.__('menu.' + title)}</a></li>`;
  }

  return result;
});

hexo.extend.helper.register('canonical_url', function(lang) {
  let path = this.page.path;
  if (lang && lang !== 'en') path = lang + '/' + path;

  return full_url_for(path);
});

hexo.extend.helper.register('url_for_lang', function(path) {
  const lang = this.page.lang;
  let url = this.url_for(path);

  if (lang !== 'en' && url[0] === '/') url = '/' + lang + url;

  return url;
});

hexo.extend.helper.register('raw_link', path => `https://github.com/IceWhaleTech/ZimaDocs/edit/main/source/${path}`);

hexo.extend.helper.register('page_anchor', str => {
  const $ = cheerio.load(str, { decodeEntities: false });
  const headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function() {
    const id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append(`<a class="article-anchor" href="#${id}" aria-hidden="true"></a>`);
  });

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

// Will be replace with full_url_for after hexo v4 release
hexo.extend.helper.register('canonical_path_for_nav', function() {
  const path = this.page.canonical_path;
  return path
  if (path.startsWith('docs/') || path.startsWith('api/')) return path;
  return '';
});

hexo.extend.helper.register('lang_name', function(lang) {
  const data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('lang_url', (lang, url) => {
  let path = '/';
  if (lang !== 'en') {
    path += lang + '/';
  }
  return path + url;
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
