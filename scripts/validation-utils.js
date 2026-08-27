'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const SOURCE_ROOT = path.join(REPO_ROOT, 'source');
const PUBLIC_ROOT = path.join(REPO_ROOT, 'public');
const LOCALES = ['es', 'jp', 'pt-PT', 'zh'];

function walkFiles(dir, predicate) {
  if (!fs.existsSync(dir)) return [];
  const files = [];

  for (const entry of fs.readdirSync(dir, {withFileTypes: true}).sort((a, b) => a.name.localeCompare(b.name))) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(fullPath, predicate));
    else if (!predicate || predicate(fullPath)) files.push(fullPath);
  }

  return files;
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function canonicalKey(value) {
  let pathname = value || '';
  try {
    if (/^https?:\/\//i.test(pathname)) pathname = new URL(pathname).pathname;
  } catch (error) {
    return '';
  }

  pathname = pathname.split('#')[0].split('?')[0];
  pathname = ('/' + pathname).replace(/\/{2,}/g, '/').replace(/\.html$/i, '').replace(/\/index$/i, '/');
  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, '');
  return pathname;
}

function sourceCanonical(relativePath) {
  const route = relativePath.replace(/\.(md|markdown)$/i, '').replace(/\/index$/i, '/');
  return canonicalKey('/docs/' + route);
}

function publicCanonical(relativePath) {
  const route = relativePath.replace(/\.html$/i, '').replace(/\/index$/i, '/');
  return canonicalKey('/docs/' + route);
}

function parseCsv(content) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < content.length; index++) {
    const char = content[index];
    if (quoted) {
      if (char === '"' && content[index + 1] === '"') {
        field += '"';
        index++;
      } else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      field = '';
    } else field += char;
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  const headers = rows.shift() || [];
  return rows.filter(item => item.some(Boolean)).map(values => {
    const result = {};
    headers.forEach((header, index) => { result[header] = values[index] || ''; });
    return result;
  });
}

function failIfErrors(errors, label) {
  if (!errors.length) {
    console.log(label + ': OK');
    return;
  }

  console.error(label + ': ' + errors.length + ' error(s)');
  errors.slice(0, 100).forEach(error => console.error('- ' + error));
  if (errors.length > 100) console.error('- ... ' + (errors.length - 100) + ' more');
  process.exitCode = 1;
}

module.exports = {
  LOCALES,
  PUBLIC_ROOT,
  REPO_ROOT,
  SOURCE_ROOT,
  canonicalKey,
  failIfErrors,
  parseCsv,
  publicCanonical,
  sourceCanonical,
  toPosix,
  walkFiles
};
