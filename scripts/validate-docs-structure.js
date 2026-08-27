'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const {
  LOCALES,
  REPO_ROOT,
  SOURCE_ROOT,
  canonicalKey,
  failIfErrors,
  sourceCanonical,
  toPosix,
  walkFiles
} = require('./validation-utils');

const LANDINGS = {
  zimaos: '/zimaos/',
  'app-store': '/zimaos/app-store/',
  hardware: '/hardware/',
  developer: '/developer/',
  'help-center': '/help-center/'
};
const FORBIDDEN_SOURCE_DIRS = ['app-store', 'zimacube', 'zimaboard', 'zimablade', 'docs', 'faq', 'knowledge'];

function flattenSidebar(section) {
  const values = [];
  for (const group of Object.values(section || {})) {
    if (!group || typeof group !== 'object') continue;
    values.push(...Object.values(group));
  }
  return values;
}

function main() {
  const errors = [];
  const menu = yaml.load(fs.readFileSync(path.join(SOURCE_ROOT, '_data/menu.yml'), 'utf8'));
  const sidebar = yaml.load(fs.readFileSync(path.join(SOURCE_ROOT, '_data/sidebar.yml'), 'utf8'));

  for (const [key, expectedPath] of Object.entries(LANDINGS)) {
    if (menu[key] !== expectedPath) errors.push('menu.' + key + ' must be ' + expectedPath);
    if (!sidebar[key]) errors.push('sidebar section missing: ' + key);
    else if (sidebar[key]._overview?.overview !== expectedPath) {
      errors.push('sidebar.' + key + ' overview must be ' + expectedPath);
    }
  }

  for (const key of ['dev', 'more', 'guides', 'playground']) {
    if (menu[key] || sidebar[key]) errors.push('legacy menu/sidebar key remains: ' + key);
  }

  for (const [sectionName, section] of Object.entries(sidebar)) {
    for (const link of flattenSidebar(section)) {
      if (typeof link !== 'string' || !link.startsWith('/')) {
        errors.push('sidebar.' + sectionName + ' must use full canonical paths: ' + link);
      }
      if (/\.(?:html|md)$/i.test(link)) errors.push('sidebar link contains an extension: ' + link);
    }
  }

  const localePrefixes = ['', ...LOCALES.map(locale => locale + '/')];
  for (const prefix of localePrefixes) {
    for (const landing of ['zimaos/index.md', 'zimaos/app-store/index.md', 'hardware/index.md', 'developer/index.md', 'help-center/index.md']) {
      const file = path.join(SOURCE_ROOT, prefix + landing);
      if (!fs.existsSync(file)) errors.push('landing missing: source/' + prefix + landing);
    }
  }

  for (const prefix of localePrefixes) {
    for (const directory of FORBIDDEN_SOURCE_DIRS) {
      const fullPath = path.join(SOURCE_ROOT, prefix + directory);
      if (fs.existsSync(fullPath) && walkFiles(fullPath, file => /\.(md|markdown)$/i.test(file)).length) {
        errors.push('legacy publishable Markdown directory remains: ' + toPosix(path.relative(REPO_ROOT, fullPath)));
      }
    }
  }

  const markdownFiles = walkFiles(SOURCE_ROOT, file => /\.(md|markdown)$/i.test(file));
  const canonicalOwners = new Map();
  for (const file of markdownFiles) {
    const relative = toPosix(path.relative(SOURCE_ROOT, file));
    const content = fs.readFileSync(file, 'utf8');
    if (/^permalink:/m.test(content)) errors.push('permalink remains: source/' + relative);
    if (/(?:guides|playground|dev|more)-overview|hardware-hub/i.test(content)) {
      errors.push('legacy overview URL remains in source/' + relative);
    }

    const key = sourceCanonical(relative);
    const owner = canonicalOwners.get(key);
    if (owner) errors.push('duplicate canonical source: ' + owner + ' and source/' + relative);
    else canonicalOwners.set(key, 'source/' + relative);
  }

  for (const [key, expectedPath] of Object.entries(LANDINGS)) {
    if (menu[key] && canonicalKey('/docs' + menu[key]) !== canonicalKey('/docs' + expectedPath)) {
      errors.push('menu landing mismatch for ' + key);
    }
  }

  failIfErrors(errors, 'Docs structure');
}

if (require.main === module) main();
