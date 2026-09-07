// ZimaDocs image pipeline (CLI only, never runs during hexo generate).
//
//   node scripts/images.js check              audit all markdown image references:
//                                             missing files, >800KiB, >1520px, GIFs
//   node scripts/images.js optimize <files>   convert PNG/JPEG to WebP (resize >1520px),
//                                             update references in all source/**/*.md,
//                                             verify output before deleting originals
//
// Rules follow AGENTS.md section 6.1. Use sharp (repo dependency), not system tools.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'source');
const MAX_BYTES = 800 * 1024;
const MAX_ANIMATED_BYTES = 2 * 1024 * 1024;
const MAX_WIDTH = 1520;
const WEBP_QUALITY = 82;

function walk(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, cb);
    else cb(p);
  }
}

function extractMarkdownImageTargets(text) {
  const targets = [];
  let start = 0;

  while ((start = text.indexOf('![', start)) !== -1) {
    let labelDepth = 0;
    let labelEnd = -1;

    for (let i = start + 2; i < text.length; i++) {
      if (text[i] === '\\') {
        i++;
      } else if (text[i] === '[') {
        labelDepth++;
      } else if (text[i] === ']') {
        if (labelDepth > 0) labelDepth--;
        else {
          labelEnd = i;
          break;
        }
      }
    }

    if (labelEnd === -1 || text[labelEnd + 1] !== '(') {
      start += 2;
      continue;
    }

    let cursor = labelEnd + 2;
    while (/\s/.test(text[cursor] || '')) cursor++;

    let target = '';
    if (text[cursor] === '<') {
      cursor++;
      while (cursor < text.length && text[cursor] !== '>') {
        if (text[cursor] === '\\' && cursor + 1 < text.length) cursor++;
        target += text[cursor++];
      }
    } else {
      let parenDepth = 0;
      while (cursor < text.length) {
        const char = text[cursor];
        if (char === '\\' && cursor + 1 < text.length) {
          target += text[cursor + 1];
          cursor += 2;
          continue;
        }
        if (char === '(') {
          parenDepth++;
        } else if (char === ')') {
          if (parenDepth === 0) break;
          parenDepth--;
        } else if (/\s/.test(char) && parenDepth === 0) {
          break;
        }
        target += char;
        cursor++;
      }
    }

    if (target.startsWith('/images/')) targets.push(target.slice('/images/'.length));
    start = Math.max(cursor, start + 2);
  }

  return targets;
}

function collectRefs() {
  const refs = new Map();
  walk(SOURCE, (file) => {
    if (!file.endsWith('.md')) return;
    const text = fs.readFileSync(file, 'utf8');
    for (const rel of extractMarkdownImageTargets(text)) {
      const normalized = rel.replace(/^\/+/, '');
      if (!refs.has(normalized)) refs.set(normalized, []);
      refs.get(normalized).push(path.relative(ROOT, file));
    }
  });
  return refs;
}

function decode(rel) {
  try {
    return decodeURIComponent(rel);
  } catch {
    return rel.split('%20').join(' ');
  }
}

async function check() {
  const refs = collectRefs();
  let missing = 0, violations = 0, gifs = 0;
  for (const [rel, files] of refs) {
    const decoded = decode(rel);
    const fp = path.join(SOURCE, 'images', decoded);
    if (!fs.existsSync(fp)) {
      missing++;
      console.log('MISSING  ' + rel);
      console.log('         in: ' + [...new Set(files)].slice(0, 4).join(', '));
      continue;
    }
    const stat = fs.statSync(fp);
    if (decoded.toLowerCase().endsWith('.gif')) {
      gifs++;
      console.log('GIF      ' + rel + ' (must be animated WebP or removed)');
      continue;
    }

    let over = [];
    if (!decoded.toLowerCase().endsWith('.svg')) {
      const meta = await sharp(fp, { animated: true }).metadata();
      const maxBytes = (meta.pages || 1) > 1 ? MAX_ANIMATED_BYTES : MAX_BYTES;
      if (stat.size > maxBytes) over.push('size ' + (stat.size / 1024).toFixed(0) + 'KiB');
      if (meta.width > MAX_WIDTH) over.push('width ' + meta.width + 'px');
    }
    if (over.length) {
      violations++;
      console.log('VIOLATION ' + rel + ' (' + over.join(', ') + ')');
    }
  }
  console.log('---');
  console.log('refs: ' + refs.size + ' | missing: ' + missing + ' | violations: ' + violations + ' | gifs: ' + gifs);
  process.exitCode = missing || violations || gifs ? 1 : 0;
}

function updateRefs(base, newExt) {
  let changed = 0;
  walk(SOURCE, (file) => {
    if (!file.endsWith('.md')) return;
    const text = fs.readFileSync(file, 'utf8');
    const matchingRefs = [...new Set(extractMarkdownImageTargets(text))]
      .filter((rel) => decode(rel) === base);
    if (!matchingRefs.length) return;

    let next = text;
    for (const rel of matchingRefs) {
      const newRel = rel.replace(/\.(png|jpe?g)$/i, '.' + newExt);
      next = next.split('/images/' + rel).join('/images/' + newRel);
    }
    if (next !== text) {
      fs.writeFileSync(file, next);
      changed++;
    }
  });
  return changed;
}

async function optimize(files) {
  if (!files.length) {
    console.error('optimize: pass at least one image path (relative to source/images)');
    process.exit(1);
  }
  for (const rel of files) {
    const fp = path.join(SOURCE, 'images', rel);
    if (!fs.existsSync(fp)) {
      console.error('not found: ' + fp);
      process.exitCode = 1;
      continue;
    }
    if (!/\.(png|jpe?g)$/i.test(rel)) {
      console.error('skipping (not png/jpeg): ' + rel);
      continue;
    }
    const outRel = rel.replace(/\.(png|jpe?g)$/i, '.webp');
    const outFp = path.join(SOURCE, 'images', outRel);
    const meta = await sharp(fp).metadata();
    let pipeline = sharp(fp);
    if (meta.width > MAX_WIDTH) pipeline = pipeline.resize({ width: MAX_WIDTH });
    await pipeline.webp({ quality: WEBP_QUALITY }).toFile(outFp);
    const st = fs.statSync(outFp);
    if (st.size === 0) {
      console.error('EMPTY OUTPUT, keeping original: ' + rel);
      process.exitCode = 1;
      continue;
    }
    const changed = updateRefs(rel, 'webp');
    console.log('OK ' + rel + ' -> ' + outRel + ' (' + (st.size / 1024).toFixed(0) + 'KiB, refs updated in ' + changed + ' files)');
    if (st.size > MAX_BYTES) console.warn('  still over 800KiB: ' + outRel);
    fs.unlinkSync(fp);
  }
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (cmd === 'check') await check();
  else if (cmd === 'optimize') await optimize(args);
  else {
    console.log('usage: node scripts/images.js check | optimize <image-rel-path> [...]');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
