(function() {
  'use strict';

  var searchdata = [];
  var searchMetadata = {};
  var searchStatus = 'idle';
  var previousFocus = null;
  var searchContainer = document.getElementById('search-container');
  var searchInput = document.getElementById('search-input');
  var resultContent = document.getElementById('resultContent');
  var suggestionData = document.getElementById('search-suggestion-data');
  var currentLang = document.documentElement.lang || 'en';
  var recentStorageKey = 'zima-docs-recent-searches:' + currentLang;
  var recentLimit = 4;
  var resultLimit = 50;
  var labels = searchContainer ? {
    recent: searchContainer.dataset.searchRecent,
    suggested: searchContainer.dataset.searchSuggested,
    noResults: searchContainer.dataset.searchNoResults,
    noResultsHint: searchContainer.dataset.searchNoResultsHint,
    remove: searchContainer.dataset.searchRemove,
    overview: searchContainer.dataset.searchOverview,
    zimaos: searchContainer.dataset.searchZimaos,
    appStore: searchContainer.dataset.searchAppStore,
    hardware: searchContainer.dataset.searchHardware,
    developer: searchContainer.dataset.searchDeveloper,
    helpCenter: searchContainer.dataset.searchHelpCenter
  } : {};
  var suggestedPages = suggestionData ? Array.prototype.map.call(
    suggestionData.querySelectorAll('a'),
    function(link) {
      return {
        title: link.dataset.title,
        meta: link.dataset.meta,
        url: link.href
      };
    }
  ) : [];

  function showSearch() {
    if (!searchContainer || !searchInput) return;
    document.dispatchEvent(new CustomEvent('mobile-nav:close'));
    previousFocus = document.activeElement;
    document.body.classList.add('search-active');
    searchContainer.classList.add('show');
    searchContainer.setAttribute('aria-hidden', 'false');
    searchInput.focus();
    if (!searchInput.value.trim()) renderDefaultState();
    if (searchStatus === 'idle') getSearchData();
  }

  function hideSearch() {
    if (!searchContainer) return;
    searchContainer.classList.remove('show');
    searchContainer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('search-active');
    if (searchInput) searchInput.value = '';
    renderDefaultState();
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
  }

  var showSearchBtn = document.getElementById('showSearch');
  if (showSearchBtn) showSearchBtn.addEventListener('click', showSearch);

  var hideSearchBtn = document.getElementById('search-container-close');
  if (hideSearchBtn) hideSearchBtn.addEventListener('click', hideSearch);

  var searchBackground = searchContainer && searchContainer.querySelector('.search-bg');
  if (searchBackground) searchBackground.addEventListener('click', hideSearch);

  if (searchInput) {
    var debouncedSearch = debounce(doSearch, 300);
    searchInput.addEventListener('input', function(e) {
      if (!e.target.value.trim()) {
        renderDefaultState();
        return;
      }
      debouncedSearch(e);
    });
  }

  /* The header chip advertises Cmd K on a Mac and Ctrl K everywhere else, so
     name the platform before revealing it and bind the matching key only. */
  /* userAgentData.platform reports "macOS", navigator.platform "MacIntel", so
     match case-insensitively. */
  var isMac = /mac|iphone|ipad|ipod/i.test(
    (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || navigator.userAgent
  );

  var shortcutHint = document.querySelector('.search-field__kbd');
  if (shortcutHint) shortcutHint.classList.add(isMac ? 'is-mac' : 'is-win');

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && searchContainer && searchContainer.classList.contains('show')) hideSearch();

    if ((isMac ? e.metaKey : e.ctrlKey) && !e.altKey && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (searchContainer && searchContainer.classList.contains('show')) hideSearch();
      else showSearch();
    }
  });
  document.addEventListener('search:close', hideSearch);

  function getSearchData() {
    searchStatus = 'loading';
    Promise.all([
      fetch('/docs/search.xml').then(function(response) {
        if (!response.ok) throw new Error('Unable to load the search index');
        return response.text();
      }),
      fetch('/docs/search-metadata.json').then(function(response) {
        return response.ok ? response.json() : {};
      }).catch(function() {
        return {};
      })
    ])
      .then(function(sources) {
        var source = sources[0];
        var metadata = sources[1];
        var xml = new DOMParser().parseFromString(source, 'application/xml');
        searchdata = Array.prototype.map.call(xml.querySelectorAll('entry'), function(entry) {
          return {
            title: getText(entry, 'title'),
            content: getText(entry, 'content'),
            url: getText(entry, 'url')
          };
        }).filter(function(item) {
          return item.title && item.content && getLang(item.url) === currentLang;
        }).map(indexSearchItem);
        searchMetadata = metadata[currentLang] || {};
        searchStatus = 'ready';
        if (searchInput && searchInput.value) doSearch({ target: searchInput });
        else renderDefaultState();
      })
      .catch(function() {
        searchdata = [];
        searchStatus = 'error';
      });
  }

  function getText(entry, selector) {
    var node = entry.querySelector(selector);
    return node ? node.textContent : '';
  }

  function getLang(url) {
    var lang = url.match(/\/(en|zh|es|pt-PT|jp)\//);
    return lang ? lang[1] : 'en';
  }

  function doSearch(e) {
    if (!resultContent) return;
    var value = e.target.value.trim();
    resultContent.innerHTML = '';
    if (!value) {
      renderDefaultState();
      return;
    }
    if (searchStatus !== 'ready') return;

    var results = filterSearchData(value);
    if (!results.pages.length && !results.sections.length) {
      renderZeroResults(value);
      return;
    }

    var list = document.createElement('div');
    list.className = 'search-results';
    results.pages.forEach(function(item) {
      list.appendChild(createResultLink(item, value));
    });

    if (results.pages.length && results.sections.length) {
      var rule = document.createElement('div');
      rule.className = 'search-rule search-rule--results';
      list.appendChild(rule);
    }

    results.sections.forEach(function(item) {
      list.appendChild(createResultLink(item, value));
    });
    resultContent.appendChild(list);
  }

  function indexSearchItem(item) {
    var container = document.createElement('div');
    container.innerHTML = item.content;
    var sections = Array.prototype.map.call(container.querySelectorAll('h2'), function(heading) {
      var sectionText = '';
      var sibling = heading.nextElementSibling;

      while (sibling && sibling.tagName.toLowerCase() !== 'h2') {
        sectionText += ' ' + sibling.textContent;
        sibling = sibling.nextElementSibling;
      }

      var id = heading.getAttribute('id') || '';
      return {
        title: normalizeSearchText(heading.textContent),
        content: normalizeSearchText(sectionText),
        url: id ? addUrlHash(item.url, id) : item.url
      };
    }).filter(function(section) {
      return section.title;
    });

    return {
      title: normalizeSearchText(item.title),
      content: normalizeSearchText(container.textContent),
      url: item.url,
      sections: sections
    };
  }

  function renderZeroResults(query) {
    var zero = document.createElement('div');
    zero.className = 'search-zero';

    var title = document.createElement('p');
    title.className = 'search-zero__title';
    title.textContent = labels.noResults.replace('{query}', query);
    zero.appendChild(title);

    var hint = document.createElement('p');
    hint.className = 'search-zero__hint';
    hint.textContent = labels.noResultsHint;
    zero.appendChild(hint);
    resultContent.appendChild(zero);
  }

  function renderDefaultState() {
    if (!resultContent) return;
    resultContent.innerHTML = '';

    var recentSearches = getRecentSearches();
    if (recentSearches.length) {
      var recentGroup = createGroup(labels.recent);
      recentSearches.forEach(function(query) {
        recentGroup.appendChild(createRecentRow(query));
      });
      resultContent.appendChild(recentGroup);

      var rule = document.createElement('div');
      rule.className = 'search-rule';
      resultContent.appendChild(rule);
    }

    var suggestedGroup = createGroup(labels.suggested);
    suggestedPages.forEach(function(item) {
      suggestedGroup.appendChild(createResultLink(item));
    });
    resultContent.appendChild(suggestedGroup);
  }

  function createGroup(label) {
    var group = document.createElement('section');
    group.className = 'search-group';

    var heading = document.createElement('h2');
    heading.className = 'search-group__label';
    heading.textContent = label;
    group.appendChild(heading);
    return group;
  }

  function createResultLink(item, query) {
    var link = document.createElement('a');
    link.className = 'search-result' + (item.type === 'section' ? ' search-result--section' : '');
    link.href = item.url;

    if (item.type === 'section') {
      var marker = document.createElement('span');
      marker.className = 'search-result__marker';
      marker.setAttribute('aria-hidden', 'true');
      marker.textContent = '#';
      link.appendChild(marker);
    }

    var text = document.createElement('span');
    text.className = 'search-result__text';

    if (item.meta) {
      var meta = document.createElement('span');
      meta.className = 'search-result__meta';
      meta.textContent = item.meta;
      text.appendChild(meta);
    }

    var title = document.createElement('span');
    title.className = 'search-result__title';
    title.textContent = item.title;
    text.appendChild(title);

    if (item.snippet) {
      var snippet = document.createElement('span');
      snippet.className = 'search-result__snippet';
      snippet.textContent = item.snippet;
      text.appendChild(snippet);
    }
    link.appendChild(text);

    if (query) {
      link.addEventListener('click', function() {
        addRecentSearch(query);
      });
    }
    return link;
  }

  function createRecentRow(query) {
    var row = document.createElement('div');
    row.className = 'search-recent';

    var queryButton = document.createElement('button');
    queryButton.className = 'search-recent__query';
    queryButton.type = 'button';
    queryButton.textContent = query;
    queryButton.addEventListener('click', function() {
      searchInput.value = query;
      searchInput.focus();
      doSearch({ target: searchInput });
    });
    row.appendChild(queryButton);

    var removeButton = document.createElement('button');
    removeButton.className = 'search-recent__remove';
    removeButton.type = 'button';
    removeButton.setAttribute('aria-label', labels.remove + ': ' + query);
    removeButton.textContent = '×';
    removeButton.addEventListener('click', function() {
      removeRecentSearch(query);
      renderDefaultState();
    });
    row.appendChild(removeButton);
    return row;
  }

  function getRecentSearches() {
    try {
      var stored = JSON.parse(localStorage.getItem(recentStorageKey));
      return Array.isArray(stored) ? stored.filter(function(item) {
        return typeof item === 'string' && item.trim();
      }).slice(0, recentLimit) : [];
    } catch (error) {
      return [];
    }
  }

  function addRecentSearch(query) {
    var cleanQuery = query.trim().slice(0, 120);
    if (!cleanQuery) return;
    var recentSearches = getRecentSearches().filter(function(item) {
      return item.toLowerCase() !== cleanQuery.toLowerCase();
    });
    recentSearches.unshift(cleanQuery);
    saveRecentSearches(recentSearches.slice(0, recentLimit));
  }

  function removeRecentSearch(query) {
    saveRecentSearches(getRecentSearches().filter(function(item) {
      return item !== query;
    }));
  }

  function saveRecentSearches(items) {
    try {
      localStorage.setItem(recentStorageKey, JSON.stringify(items));
    } catch (error) {
      // Search remains usable when storage is unavailable or full.
    }
  }

  function getContentPath(url) {
    var path;
    try {
      path = new URL(url, window.location.origin).pathname;
    } catch (error) {
      path = url;
    }
    path = path
      .replace(/^\/docs\/(?:es|jp|pt-PT|zh)\//, '/docs/')
      .replace(/^\/docs/, '')
      .replace(/\.html$/, '')
      .replace(/\/index$/, '')
      .replace(/\/$/, '');
    return path || '/';
  }

  function getResultMeta(url) {
    var contentPath = getContentPath(url);
    if (searchMetadata[contentPath]) return searchMetadata[contentPath];

    var category = '';
    if (contentPath.indexOf('/zimaos/app-store/') === 0 || contentPath === '/zimaos/app-store') category = labels.appStore;
    else if (contentPath.indexOf('/zimaos/') === 0 || contentPath === '/zimaos') category = labels.zimaos;
    else if (contentPath.indexOf('/hardware/') === 0 || contentPath === '/hardware') category = labels.hardware;
    else if (contentPath.indexOf('/developer/') === 0 || contentPath === '/developer') category = labels.developer;
    else if (contentPath.indexOf('/help-center/') === 0 || contentPath === '/help-center') category = labels.helpCenter;

    return category ? category + ' › ' + labels.overview : '';
  }

  function addUrlHash(url, id) {
    try {
      var target = new URL(url, window.location.origin);
      target.hash = id;
      return target.href;
    } catch (error) {
      return url + '#' + id;
    }
  }

  function normalizeSearchText(value) {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  function getMatchRank(value, needle) {
    var text = value.toLocaleLowerCase();
    if (text === needle) return 0;
    if (text.indexOf(needle) === 0) return 1;
    if (text.indexOf(needle) !== -1) return 2;
    return -1;
  }

  function createMatchSnippet(value, needle) {
    var text = normalizeSearchText(value);
    var index = text.toLocaleLowerCase().indexOf(needle);
    if (index === -1) return '';

    var start = Math.max(0, index - 55);
    var end = Math.min(text.length, index + needle.length + 105);
    var snippet = text.slice(start, end).trim();
    if (start > 0) snippet = '…' + snippet;
    if (end < text.length) snippet += '…';
    return snippet;
  }

  function compareMatches(a, b) {
    if (a.rank !== b.rank) return a.rank - b.rank;
    if (a.title.length !== b.title.length) return a.title.length - b.title.length;
    return a.title.localeCompare(b.title);
  }

  function filterSearchData(value) {
    var needle = value.toLocaleLowerCase();
    var pages = [];
    var sections = [];

    searchdata.forEach(function(item) {
      var pageRank = getMatchRank(item.title, needle);
      if (pageRank !== -1) {
        pages.push({
          type: 'page',
          rank: pageRank,
          title: item.title,
          meta: getResultMeta(item.url),
          url: item.url
        });
      }

      item.sections.forEach(function(section) {
        var headingRank = getMatchRank(section.title, needle);
        var bodyMatch = section.content.toLocaleLowerCase().indexOf(needle) !== -1;
        if (headingRank === -1 && !bodyMatch) return;

        sections.push({
          type: 'section',
          rank: headingRank === -1 ? 3 : headingRank,
          title: section.title,
          meta: item.title,
          snippet: headingRank === -1 ? createMatchSnippet(section.content, needle) : '',
          url: section.url
        });
      });
    });

    pages.sort(compareMatches);
    sections.sort(compareMatches);

    var limitedPages = pages.slice(0, resultLimit);
    var remaining = Math.max(0, resultLimit - limitedPages.length);
    return {
      pages: limitedPages,
      sections: sections.slice(0, remaining)
    };
  }

  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }
}());
