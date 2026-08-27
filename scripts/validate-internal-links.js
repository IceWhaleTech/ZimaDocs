'use strict';

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const {
  PUBLIC_ROOT,
  canonicalKey,
  failIfErrors,
  publicCanonical,
  toPosix,
  walkFiles
} = require('./validation-utils');

const ASSET_EXTENSIONS = /\.(?:png|jpe?g|gif|svg|webp|ico|css|js|json|xml|txt|pdf|zip|mp4|webm|woff2?|ttf)$/i;
const LEGACY_PATH = /^\/docs\/(?:zimacube|zimaboard|zimablade|docs|faq|knowledge)(?:\/|$)|\/(?:guides|playground|dev|more)-overview(?:\/|$)|\/hardware-hub(?:\/|$)/i;

function resolveHref(href, pageCanonical, pageIsLanding) {
  if (!href || href.startsWith('#') || /^(?:mailto|tel|javascript|data):/i.test(href)) return null;
  if (/^https?:\/\//i.test(href)) {
    const url = new URL(href);
    if (url.hostname !== 'www.zimaspace.com' || !url.pathname.startsWith('/docs')) return null;
    return canonicalKey(url.pathname);
  }
  if (href.startsWith('//')) return null;

  const pathname = href.split('#')[0].split('?')[0];
  if (!pathname || ASSET_EXTENSIONS.test(pathname)) return null;
  if (pathname.startsWith('/docs')) return canonicalKey(pathname);
  if (pathname.startsWith('/')) return null;
  const base = pageIsLanding ? pageCanonical : path.posix.dirname(pageCanonical);
  return canonicalKey(path.posix.resolve(base, pathname));
}

function main() {
  const errors = [];
  const htmlFiles = walkFiles(PUBLIC_ROOT, file => file.endsWith('.html'));
  if (!htmlFiles.length) errors.push('public/ has no HTML files; run a clean build first');
  const publicPages = new Set(htmlFiles.map(file => publicCanonical(toPosix(path.relative(PUBLIC_ROOT, file)))));

  for (const file of htmlFiles) {
    const relative = toPosix(path.relative(PUBLIC_ROOT, file));
    const pageCanonical = publicCanonical(relative);
    const pageIsLanding = relative === 'index.html' || relative.endsWith('/index.html');
    const $ = cheerio.load(fs.readFileSync(file, 'utf8'));

    $('a[href]').each((index, element) => {
      const href = $(element).attr('href');
      const target = resolveHref(href, pageCanonical, pageIsLanding);
      if (!target) return;
      if (LEGACY_PATH.test(target)) errors.push(relative + ' links to legacy URL ' + href);
      if (!publicPages.has(target)) errors.push(relative + ' has broken internal link ' + href + ' -> ' + target);
    });
  }

  failIfErrors(errors, 'Internal links');
}

if (require.main === module) main();
