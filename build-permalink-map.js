#!/usr/bin/env node
/**
 * Scan source/*.md files, extract permalink (or derive from filename),
 * and output a reverse-lookup JSON: URL path → source file path.
 *
 * Usage: node build-permalink-map.js [--output permalink-map.json]
 */

const fs = require("fs");
const path = require("path");

const SOURCE_DIR = path.resolve(__dirname, "source");
const OUT_FILE =
  process.argv.includes("--output")
    ? process.argv[process.argv.indexOf("--output") + 1]
    : path.resolve(__dirname, "permalink-map.json");

// Hexo uses source/ as root; subdirectories become URL prefixes.
// Multi-language dirs: es, zh, jp, pt-PT
// Special dirs like _data, _redirects are skipped.
const SKIP_DIRS = new Set(["_data", "images", "icon", "jump", "CNAME"]);

/**
 * Extract permalink value from YAML-like frontmatter (between first two --- lines).
 */
function extractPermalink(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm = match[1];
  const pm = fm.match(/^permalink:\s*(.+)$/m);
  return pm ? pm[1].trim() : null;
}

/**
 * Derive the URL path from a source file path, relative to SOURCE_DIR.
 * Hexo default: source/{section}/foo.md → /{section}/foo.html
 *                source/{section}/index.md → /{section}/index.html
 */
function deriveUrl(relPath) {
  const parsed = path.parse(relPath);
  const dir = parsed.dir || "";
  const name = parsed.name; // filename without .md
  const urlPath = dir ? `${dir}/${name}.html` : `${name}.html`;
  return urlPath;
}

/**
 * Walk source/ and build the mapping.
 * Returns: { "url/path.html": "relative/source/path.md", ... }
 */
function buildMap() {
  const map = {};

  function walk(dir, relDir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith("_") || e.name.startsWith(".")) continue;
      const full = path.join(dir, e.name);
      const rel = relDir ? `${relDir}/${e.name}` : e.name;

      if (e.isDirectory()) {
        if (SKIP_DIRS.has(e.name)) continue;
        walk(full, rel);
      } else if (e.isFile() && e.name.endsWith(".md")) {
        const content = fs.readFileSync(full, "utf-8");
        const permalink = extractPermalink(content);

        let urlPath;
        if (permalink) {
          // permalink looks like /zimaos/remote-access.html or /es/zimaos/remote-access.html
          // Strip leading / and keep the rest as the key
          urlPath = permalink.replace(/^\/+/, "");
        } else {
          urlPath = deriveUrl(rel);
        }

        // Store relative to project root (source/xxx.md)
        const sourceRel = `source/${rel}`;
        map[urlPath] = sourceRel;
      }
    }
  }

  walk(SOURCE_DIR, "");
  return map;
}

const map = buildMap();

fs.writeFileSync(OUT_FILE, JSON.stringify(map, null, 2), "utf-8");

const count = Object.keys(map).length;
console.log(`Wrote ${count} entries to ${OUT_FILE}`);

// Print a few examples
const samples = Object.entries(map).slice(0, 5);
console.log("\nSample entries:");
for (const [url, src] of samples) {
  console.log(`  ${url}  →  ${src}`);
}
if (count > 5) console.log(`  ... and ${count - 5} more`);
