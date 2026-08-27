'use strict';

const fs = require('fs');
const path = require('path');
const {
  PUBLIC_ROOT,
  REPO_ROOT,
  SOURCE_ROOT,
  canonicalKey,
  failIfErrors,
  publicCanonical,
  toPosix,
  walkFiles
} = require('./validation-utils');

function parseRedirects() {
  return fs.readFileSync(path.join(SOURCE_ROOT, '_redirects'), 'utf8').split(/\r?\n/).flatMap((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return [];
    const parts = trimmed.split(/\s+/);
    return [{line: index + 1, source: parts[0], target: parts[1], status: parts[2] || ''}];
  });
}

function main() {
  const errors = [];
  const rules = parseRedirects();
  const sourceLiterals = new Set();
  const sourceKeys = new Set(rules.map(rule => canonicalKey(rule.source)));
  const publicPages = new Set(walkFiles(PUBLIC_ROOT, file => file.endsWith('.html')).map(file => {
    return publicCanonical(toPosix(path.relative(PUBLIC_ROOT, file)));
  }));

  for (const rule of rules) {
    if (sourceLiterals.has(rule.source)) errors.push('duplicate source at line ' + rule.line + ': ' + rule.source);
    sourceLiterals.add(rule.source);
    if (rule.status !== '301') errors.push('non-301 rule at line ' + rule.line);
    if (sourceKeys.has(canonicalKey(rule.target))) errors.push('redirect chain at line ' + rule.line + ': ' + rule.target);
    if (/\.html(?:$|[?#])/i.test(rule.target)) errors.push('target contains .html at line ' + rule.line);
    if (rule.target.startsWith('/docs') && !publicPages.has(canonicalKey(rule.target))) {
      errors.push('target is not a generated page at line ' + rule.line + ': ' + rule.target);
    }
  }

  const baselinePath = path.join(
    REPO_ROOT,
    'validation-data/redirect-source-baseline-7fd1fa6916.txt'
  );
  const retirementPath = path.join(
    REPO_ROOT,
    'validation-data/redirect-retirement-ga-zero-2026-08-27.txt'
  );
  const retiredSources = new Set();

  if (!fs.existsSync(retirementPath)) errors.push('redirect retirement list is missing');
  else {
    const retired = fs.readFileSync(retirementPath, 'utf8')
      .split(/\r?\n/)
      .map(source => source.trim())
      .filter(Boolean);
    for (const source of retired) {
      if (retiredSources.has(source)) errors.push('duplicate retired redirect source: ' + source);
      retiredSources.add(source);
      if (sourceLiterals.has(source)) errors.push('retired redirect source is still active: ' + source);
    }
  }

  if (!fs.existsSync(baselinePath)) errors.push('redirect source baseline is missing');
  else {
    const baselineSources = new Set(fs.readFileSync(baselinePath, 'utf8')
      .split(/\r?\n/)
      .map(source => source.trim())
      .filter(Boolean));
    for (const source of baselineSources) {
      if (!sourceLiterals.has(source) && !retiredSources.has(source)) {
        errors.push('baseline redirect source was removed without an audit record: ' + source);
      }
    }
    for (const source of retiredSources) {
      if (!baselineSources.has(source)) errors.push('retired redirect source is not in the baseline: ' + source);
    }
  }

  if (rules.length > 1800) errors.push('redirect rule count exceeds 1800: ' + rules.length);
  console.log('Redirect rules:', rules.length);
  console.log('Audited retired redirect sources:', retiredSources.size);
  failIfErrors(errors, 'Redirects');
}

if (require.main === module) main();
