'use strict';

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const {
  LOCALES,
  PUBLIC_ROOT,
  SOURCE_ROOT,
  canonicalKey,
  failIfErrors,
  publicCanonical,
  toPosix,
  walkFiles
} = require('./validation-utils');

function main() {
  const errors = [];
  const htmlFiles = walkFiles(PUBLIC_ROOT, file => file.endsWith('.html'));
  const publicPages = new Set(htmlFiles.map(file => publicCanonical(toPosix(path.relative(PUBLIC_ROOT, file)))));
  const expectedLanguages = new Set(['en', ...LOCALES]);

  for (const file of htmlFiles) {
    const relative = toPosix(path.relative(PUBLIC_ROOT, file));
    const $ = cheerio.load(fs.readFileSync(file, 'utf8'));
    const seen = new Set();

    $('link[rel="alternate"][hreflang]').each((index, element) => {
      const lang = $(element).attr('hreflang');
      const href = $(element).attr('href');
      if (seen.has(lang)) errors.push(relative + ' repeats hreflang ' + lang);
      seen.add(lang);
      if (lang !== 'x-default' && !expectedLanguages.has(lang)) errors.push(relative + ' has unknown hreflang ' + lang);
      if (href && href.startsWith('https://www.zimaspace.com/docs') && !publicPages.has(canonicalKey(href))) {
        errors.push(relative + ' hreflang points to a missing page: ' + href);
      }
    });
  }

  for (const locale of LOCALES) {
    for (const landing of ['zimaos/index.md', 'zimaos/app-store/index.md', 'hardware/index.md', 'developer/index.md', 'help-center/index.md']) {
      if (!fs.existsSync(path.join(SOURCE_ROOT, locale, landing))) errors.push(locale + ' landing missing: ' + landing);
    }
  }

  failIfErrors(errors, 'Locales and hreflang');
}

if (require.main === module) main();
