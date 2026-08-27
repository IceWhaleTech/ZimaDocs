# Zima Docs Official Website

The official ZimaSpace documentation website, built with [Hexo](https://hexo.io/).

The site is published under:

```text
https://www.zimaspace.com/docs/
```

## AI Agent Instructions

AI coding agents must read and follow [AGENTS.md](./AGENTS.md) before creating, moving, translating, building, or validating documentation.

- Codex reads the root `AGENTS.md`.
- Claude Code reads `CLAUDE.md`, which imports `AGENTS.md`.
- DeepSeek Harness and other agents should load the root `AGENTS.md` as repository instructions.

`AGENTS.md` is the authoritative operational guide. This README is the shorter contributor-facing overview.

## Technology

- Hexo 7
- Node.js
- Nunjucks and Pug templates
- Markdown content
- YAML navigation and translations
- GitHub Actions deployment to `gh-pages`

The deployment workflow currently runs with Node.js 16 and Yarn. Local contributors may use Yarn or pnpm; the examples below use pnpm because it is also used by the repository validation workflow. If you use Yarn, replace `pnpm` with `yarn` and `pnpm exec hexo` with `yarn hexo`.

## Local Setup

Install a Node.js LTS release and a package manager, then install dependencies:

```bash
git clone https://github.com/IceWhaleTech/ZimaDocs.git
cd ZimaDocs
pnpm install
```

Generate the site from a clean state:

```bash
pnpm exec hexo clean
pnpm build
```

Run a local preview server:

```bash
pnpm exec hexo server
```

Hexo serves the site locally while production uses `/docs` as the configured root path.

Do not commit generated `public/`, `db.json`, dependency directories, temporary build logs, or a newly generated lockfile unless the task explicitly changes the repository's dependency-management policy.

## Documentation Architecture

The source directory is the single source of truth for current document URLs. A Markdown file's relative path directly determines its Canonical URL.

| Section | English Source | Canonical URL | Content |
|---|---|---|---|
| ZimaOS | `source/zimaos/` | `/docs/zimaos/` | Installation, setup, storage, backup, sync, access, sharing, and daily system use |
| App Store | `source/zimaos/app-store/` | `/docs/zimaos/app-store/` | App deployment, media servers, self-hosted services, AI apps, and the app ecosystem |
| Hardware | `source/hardware/` | `/docs/hardware/` | Hardware, interfaces, expansion, compatibility, BIOS, boot, and third-party operating systems |
| Developer | `source/developer/` | `/docs/developer/` | APIs, protocols, SSH, development, app publishing, filesystems, and release notes |
| Help Center | `source/help-center/` | `/docs/help-center/` | Troubleshooting, recovery, diagnostics, support, and cross-product reference content |

App Store is displayed as a top-level navigation item but remains part of the ZimaOS source and URL Namespace. Do not create `source/app-store/` or `/docs/app-store/`.

The following legacy directories must not be used for new Markdown:

```text
source/app-store/
source/zimacube/
source/zimaboard/
source/zimablade/
source/docs/
source/faq/
source/knowledge/
```

The same restriction applies below language directories.

## Landing Pages

The five section Landing pages are fixed:

```text
source/zimaos/index.md
source/zimaos/app-store/index.md
source/hardware/index.md
source/developer/index.md
source/help-center/index.md
```

Their Canonical URLs end in `/`. Regular article URLs do not.

Do not create additional `*-overview`, `*-hub`, `overview`, `home`, or `/index` Landing URLs. Sidebar display groups such as `media-server`, `troubleshooting`, or `version-log` do not become URL directories.

The document home page at `/docs/` is a separate brand Landing. Normal article work may update existing link targets but must not add new home-page sections, cards, navigation strips, or copy unless the task explicitly requests it.

## Create a New English Document

Choose the final section first, then create the Markdown file directly in its final directory. Do not use the old `hexo new page -p docs/...` or `faq/...` commands.

Example:

```text
source/help-center/network-diagnostics.md
-> /docs/help-center/network-diagnostics
```

Use a lowercase kebab-case filename and valid YAML Front Matter with normal ASCII quotes:

```markdown
---
title: Network Diagnostics
seo_title: "Network Diagnostics for Zima Devices"
description: "Diagnose common network connectivity problems on Zima devices."
type: Docs
author: Optional Author
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Article content starts here.
```

Do not add `permalink`. Current URLs are always derived from Source paths.

## Translations

Supported language paths are:

```text
English     source/
Spanish     source/es/
Japanese    source/jp/
Portuguese  source/pt-PT/
Chinese     source/zh/
```

Translations of the same logical page must use the same Namespace and relative path:

```text
source/zimaos/get-started.md
source/es/zimaos/get-started.md
source/jp/zimaos/get-started.md
source/pt-PT/zimaos/get-started.md
source/zh/zimaos/get-started.md
```

Only add real translations. Do not create blank placeholder pages. Missing translations fall back to English, and hreflang is generated only for pages that actually exist.

All five section Landing pages currently exist in every supported language and must remain present.

## Internal Links

Internal links must point directly to the final Canonical page and must not include `.html`, `.md`, `/index`, or a legacy Namespace.

Prefer relative links so translated pages remain in the current language:

```markdown
[Get Started](./get-started)
[Install ZimaOS](../zimaos/how-to-install-zimaos)
[GPU Expansion](../../hardware/gpu-expansion)
```

Do not add new links to old paths such as `/docs/zimacube/...`, `/docs/zimaboard/...`, `/docs/docs/...`, or `/docs/faq/...`.

External links must include an explicit protocol such as `https://`.

## Images and Downloads

Store shared documentation images under `source/images/` and reference them from the site root:

```markdown
![Descriptive alt text](/images/network-diagnostics/example.png)
```

Use descriptive alternative text. Keep image directory names stable if multiple pages share the asset.

Image resizing syntax:

```markdown
![Specify size](/images/example.png?200x200)
![Restricted width](/images/example.png?200x)
![Restricted height](/images/example.png?x200)
![Specify ratio](/images/example.png?40)
```

The Hexo configuration reserves `downloads/code` for downloadable code. Create download directories intentionally and keep them separate from article URL directories.

## Sidebar and Menu

Top-level navigation is defined in `source/_data/menu.yml` and is currently fixed to:

```yaml
zimaos: /zimaos/
app-store: /zimaos/app-store/
hardware: /hardware/
developer: /developer/
help-center: /help-center/
forum: https://community.zimaspace.com/
```

Do not add or rename a top-level section without an approved information architecture change.

To show an article in the Sidebar, edit `source/_data/sidebar.yml`:

```yaml
help-center:
  troubleshooting:
    network-diagnostics: /help-center/network-diagnostics
```

Sidebar values:

- start with `/`;
- omit the `/docs` deployment prefix;
- use the full content path;
- do not include `.html` or `.md`;
- control grouping and order only; they do not determine the article's Source path.

Sidebar labels are translated in:

```text
themes/zima/languages/en.yml
themes/zima/languages/es.yml
themes/zima/languages/jp.yml
themes/zima/languages/pt-PT.yml
themes/zima/languages/zh.yml
```

The current translation Namespace mapping is intentionally retained for compatibility:

| Sidebar section | Translation Namespace |
|---|---|
| `zimaos` | `sidebar.guides` |
| `app-store` | `sidebar.playground` |
| `hardware` | `sidebar.hardware` |
| `developer` | `sidebar.dev` |
| `help-center` | `sidebar.more` |

Do not rename those translation Namespaces as part of a normal content contribution.

## Renaming or Moving a Published Page

Moving a file changes its Canonical URL. A URL migration must be reviewed separately from a normal content edit.

When a published page moves:

1. Use `git mv` for the English page and every existing translation.
2. Keep all translations on the same relative path.
3. Update Sidebar, Landing pages, theme links, and Markdown links to the new Canonical.
4. Update every known historical alias to point directly to the final Canonical.
5. Add a one-hop 301 in `source/_redirects` only when the old URL was publicly available.
6. Run the full clean build and validation suite.

A newly created, never-published local page does not need a Redirect.

Redirect format:

```text
/docs/old/path  /docs/final/path  301
```

Redirects must not contain chains, loops, self-redirects, `.html` targets, or targets that do not generate a page. Existing historical Redirect Sources must not be removed.

## Archived Content

`archive/legacy-docs-2025/` preserves 27 retired pages from the old `docs`, `faq`, and `knowledge` directories.

- Archived files are historical records, not publishable content.
- Do not edit them or move them back under `source/`.
- Do not link them from active documentation.
- Their historical URLs are maintained only by `source/_redirects` and point to active successor pages.
- See `archive/legacy-docs-2025/manifest.csv` for the integrity manifest and successor mapping.

## Build and Validation

Always validate from a clean state. `pnpm build` alone does not remove stale output.

```bash
pnpm exec hexo clean
pnpm build
pnpm docs:validate-structure
pnpm docs:validate-links
pnpm docs:validate-redirects
pnpm docs:validate-locales
```

Expected validation output includes:

```text
Docs structure: OK
Internal links: OK
Redirects: OK
Locales and hreflang: OK
```

Also inspect the real build log for hidden failures, including:

```text
ERROR
YAMLException
Script load failed
FATAL
UnhandledPromiseRejection
```

Validation responsibilities:

| Command | Purpose |
|---|---|
| `docs:validate-structure` | Source Namespace, Landing, Menu/Sidebar, forbidden directories, `permalink`, and duplicate Canonical checks |
| `docs:validate-links` | Generated internal links and legacy URL usage |
| `docs:validate-redirects` | Redirect Source preservation, 301 targets, duplicates, chains, generated targets, and rule capacity |
| `docs:validate-locales` | hreflang targets, duplicate alternates, and required multilingual Landing pages |

Link, Redirect, and Locale validation depend on a freshly generated `public/` directory.

## Available Hexo Tags

### YouTube

Use the video ID from a YouTube URL:

```html
{% youtuber video <youtube-video-id> %}
{% endyoutuber %}
```

### Bilibili

```html
{% mmedia "bilibili" "bvid:<video-bvid>" "danmaku:false" %}
```

### Local or Remote Video

```html
{% mmedia "video" "src:<video-path>" "autoplay:true" %}
```

### Note

Available types: `default`, `primary`, `success`, `info`, `warn`, and `danger`.

```html
{% note warn <your-note-title> %}
<your-note-body>
{% endnote %}
```

## Deployment

The GitHub Actions workflow runs when changes are pushed to `main`:

```text
main
-> install dependencies and run a clean Hexo build
-> publish public/ to gh-pages
-> external hosting/CDN serves the documentation site
```

Repository validation confirms generated pages and Redirect configuration, but it does not prove that Cloudflare or another external hosting layer has loaded the new deployment. Production URL behavior must be checked after deployment.

## Contribution Checklist

Before opening a pull request:

- [ ] The page is in the correct final Namespace.
- [ ] App Store content remains under `zimaos/app-store/`.
- [ ] The filename is lowercase kebab-case.
- [ ] Front Matter is valid YAML and has no `permalink`.
- [ ] Internal links point directly to final Canonical URLs.
- [ ] Existing translations use the same relative path.
- [ ] Sidebar paths are complete and have no file extension.
- [ ] Required Sidebar translation labels are present.
- [ ] New, never-published pages did not receive unnecessary Redirects.
- [ ] No unrequested content or UI was added to the documentation home page.
- [ ] A clean build and all four validators pass.
- [ ] The build log has no hidden errors.
- [ ] Generated output and temporary files are not included in the change.

For detailed AI Agent rules, URL migration constraints, and repository boundaries, see [AGENTS.md](./AGENTS.md).
