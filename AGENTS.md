# ZimaDocs AI Agent Guide

本文件是本仓库面向 AI Agent 的当前操作规范，适用于 Codex、Claude Code、DeepSeek Harness 以及其他能够读取仓库指令的编码 Agent。

作用范围是整个仓库。用户在当前任务中的明确要求优先于本文件；如果其他说明与本文件冲突，以本文件描述的 v0.6 信息架构为准。

> 重要：根目录 `README.md` 中仍有创建 `source/docs`、`source/faq`、使用 `.html` Sidebar 链接等历史示例。那些示例已经过期，不得用于新增或移动文档。

## Agent 加载方式

- **Codex：** 使用仓库根目录的 `AGENTS.md` 作为项目指令。
- **Claude Code：** 根目录 `CLAUDE.md` 通过 `@AGENTS.md` 引入本文件。
- **DeepSeek Harness：** 如果 Harness 不自动发现 `AGENTS.md`，将仓库根目录的 `AGENTS.md` 配置为 repository/system instructions。
- **其他 Agent：** 直接加载本文件，不要复制一份工具专属的完整规则。

`AGENTS.md` 是唯一完整规范源。工具入口文件只能引用它，不应重新维护一套内容。

## 1. 不可破坏的核心规则

1. 当前文档 URL 只由 `source/` 下的文件路径决定。
2. 普通 Markdown 不得添加 Front Matter `permalink`。
3. 历史 URL 兼容只由 `source/_redirects` 维护，不得增加运行时、模板端或客户端 URL rewrite。
4. App Store 是顶部一级入口，但始终属于 ZimaOS Namespace：

   ```text
   source/zimaos/app-store/
   /docs/zimaos/app-store/
   ```

   不得创建 `source/app-store/` 或 `/docs/app-store/`。
5. Sidebar 的二级分组只负责显示和顺序，不进入 URL。
6. 文档首页 `/docs/` 是独立的品牌 Landing。新增、移动或重命名文章时，只更新首页已有链接的目标；除非用户明确要求，不得向首页增加导航条、卡片、文案或其他可见内容。
7. `archive/` 下的内容不参与发布，不得作为 Canonical 页面链接，不得移回 `source/`。
8. 每次验收都必须从干净构建开始；不能依赖已有 `public/` 或 `db.json`。

## 2. 当前信息架构

英文文档使用以下四个根内容 Namespace，其他语言在它们之前增加语言目录。

| 用户入口 | Source | Canonical URL | 适合的内容 |
|---|---|---|---|
| ZimaOS | `source/zimaos/` | `/docs/zimaos/` | 安装、初始设置、存储、备份、同步、访问、共享和日常系统操作 |
| App Store | `source/zimaos/app-store/` | `/docs/zimaos/app-store/` | 应用部署、媒体服务、自托管应用、AI 应用和应用生态 |
| Hardware | `source/hardware/` | `/docs/hardware/` | 硬件说明、接口、扩展、兼容性、BIOS/启动和第三方系统安装 |
| Developer | `source/developer/` | `/docs/developer/` | API、协议、SSH、开发环境、应用发布、文件系统和版本记录 |
| Help Center | `source/help-center/` | `/docs/help-center/` | 故障排查、恢复、维修、自检、支持和跨产品参考信息 |

如果内容无法明确归入前四类，可以放入 Help Center，但必须先确认它确实是支持、参考或跨模块内容。不要因为暂时没有决定归属，就无条件把内容堆入 Help Center。

以下旧发布目录禁止重新出现 Markdown：

```text
source/app-store/
source/zimacube/
source/zimaboard/
source/zimablade/
source/docs/
source/faq/
source/knowledge/
```

同样的限制适用于 `source/es/`、`source/jp/`、`source/pt-PT/` 和 `source/zh/` 下的语言镜像。

## 3. Landing 与路径规则

五个一级 Landing 固定由以下文件提供：

```text
source/zimaos/index.md
source/zimaos/app-store/index.md
source/hardware/index.md
source/developer/index.md
source/help-center/index.md
```

四个已有语言必须保持相同 Landing 结构：

```text
source/{locale}/zimaos/index.md
source/{locale}/zimaos/app-store/index.md
source/{locale}/hardware/index.md
source/{locale}/developer/index.md
source/{locale}/help-center/index.md
```

规则：

- Landing Canonical 使用结尾 `/`。
- 普通文章 Canonical 不使用结尾 `/`。
- 普通文章文件名使用 lowercase kebab-case，例如 `storage-setup.md`。
- 除五个 Namespace Landing 外，不要用 `index.md` 创建展示分组页面。
- 不得创建 `guides-overview`、`playground-overview`、`hardware-hub`、`dev-overview`、`more-overview`、`overview`、`home` 等第二套 Landing。
- 不得把 Sidebar 分组名写进文件路径。例如 `media-server` 是显示分组，文章仍是 `zimaos/app-store/plex-setup-guide.md`。

Source 与 URL 的推导示例：

```text
source/zimaos/storage-setup.md
-> /docs/zimaos/storage-setup

source/es/zimaos/storage-setup.md
-> /docs/es/zimaos/storage-setup

source/zimaos/app-store/plex-setup-guide.md
-> /docs/zimaos/app-store/plex-setup-guide
```

## 4. 新增英文文档

按以下顺序执行：

1. 根据第 2 节选择唯一的目标 Namespace；如果归属会影响产品语义且无法合理判断，先询问用户。
2. 选择稳定、描述内容而不是展示分组的 lowercase kebab-case slug。
3. 直接在最终目录创建 Markdown，不要先创建临时目录，不要使用 `hexo new page -p docs/...`。
4. 使用标准 YAML Front Matter。使用普通 ASCII 引号，不要使用弯引号或智能引号。

   ```yaml
   ---
   title: Article Title
   seo_title: "Optional SEO title"
   description: "A concise description of the page."
   type: Docs
   author: Optional Author
   tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
   ---
   ```

5. 不要添加 `permalink`。不要在 Front Matter 中复制最终 URL。
6. 为正文添加最终 Canonical 内链，不要链接旧 URL 或依赖 Redirect。
7. 如果页面需要出现在 Sidebar，更新 `source/_data/sidebar.yml` 及对应语言文案。
8. 完成第 11 节的干净构建与全部验证。

不要为了新增文章顺带修改首页布局、主题样式、其他文章正文或不相关 URL。

## 5. 多语言文档

当前语言：

```text
en     source/ 根目录，无语言前缀
es     source/es/
jp     source/jp/
pt-PT  source/pt-PT/
zh     source/zh/
```

同一逻辑页面必须在所有已存在翻译中使用完全相同的 Namespace 和相对路径。例如：

```text
source/zimaos/get-started.md
source/es/zimaos/get-started.md
source/jp/zimaos/get-started.md
source/pt-PT/zimaos/get-started.md
source/zh/zimaos/get-started.md
```

多语言规则：

- **英文是唯一内容基准（Source of Truth）。** 活动英文文章的标题、Front Matter 描述、正文结构、步骤、表格、图片、代码块和内链共同定义其他语言必须表达的完整内容；不得以任一旧译文反向覆盖或削减英文内容。
- 新增英文文章时，必须在同一个任务中为 `es`、`jp`、`pt-PT`、`zh` 创建真实完整翻译，并保持完全相同的 Namespace 和相对路径。除非用户明确批准分阶段发布，不得只提交英文后依赖运行时回退。
- 修改英文文章的可见内容时，必须在同一个任务中同步检查并更新四个语言镜像。同步范围包括 Front Matter 的 `title`、`seo_title`、`description`，正文标题和段落，列表、表格、图片 Alt、链接文案以及由内容变化引起的内链；不得只修改英文。
- 删除英文文章时，必须在同一个任务中删除所有语言镜像，并搜索、更新或删除 Sidebar、Landing、正文和主题入口中的引用。已发布 URL 必须按第 8、9 节为英文及各语言版本直接重定向到最终有效页面，不得留下只有译文、没有英文原文的活动 Markdown。
- 如果英文文章存在而某个语言镜像缺失，或英文与译文结构明显不对应，必须以当前英文为准补齐或重新翻译；不得复制英文充当译文，不得创建空白、摘要式或机器占位页面。
- 翻译可以采用自然的目标语言表达，但不得省略、合并或新增产品事实。产品名、命令、代码、配置值、图片路径、下载地址和 Canonical 链接目标必须与英文保持一致。
- 五个一级 Landing 是例外：当前所有语言都必须存在。
- 运行时英文回退只用于防御意外缺失，不得作为正常内容发布流程或翻译完成标准。
- hreflang 只应输出真实生成的页面。
- 多语言正文应优先使用能保持当前 locale 的相对链接。
- 不要把一个语言的文档链接到另一个语言，除非这是明确的编辑决策。

多语言验收至少包含：

1. 按英文相对路径检查 `es`、`jp`、`pt-PT`、`zh` 文件是否全部存在。
2. 对照英文检查 Front Matter 字段、正文标题层级、步骤数、表格、代码块、图片和链接目标是否完整对应。
3. 搜索语言 Landing 中的“英文”“English”“英語”“em inglês”等临时回退标记；译文补齐后必须改为当前 locale 的相对链接和正常文案。
4. 删除英文文章时，反向检查四个语言目录，确认没有残留同路径 Markdown；同时验证全部历史 Alias 已直接指向最终页面。
5. 执行第 11 节的干净构建和 `docs:validate-locales`，并人工抽查至少一个拉丁语系语言和一个中日韩语言的生成页面。

## 6. 内链与资源

内部链接必须直接指向最终 Canonical，不含 `.html`、`.md`、`/index` 或旧 Namespace。

推荐：

```markdown
[Get Started](./get-started)
[Install ZimaOS](../zimaos/how-to-install-zimaos)
[GPU Expansion](../../hardware/gpu-expansion)
```

相对链接可以让语言镜像保持在当前 locale。只有明确需要回退到英文时，才使用 `/docs/...` 绝对路径。

禁止：

```markdown
[Old page](/docs/zimacube/Old-Slug)
[Page](./page.html)
[Page](./page.md)
[Page](https://www.zimaspace.com/docs/zimaboard/Old-Slug)
```

其他规则：

- 外部链接必须包含 `https://` 或其他明确协议，不能写成 `example.com` 相对链接。
- 图片和下载资源不是文章 URL；遵循现有 `/images/...`、`/downloads/...` 约定。
- 修改或移动页面后，应搜索并更新所有正文、Landing、Menu、Sidebar 和主题入口中的引用。
- 新内链不得为了“暂时通过”而依赖 `_redirects`。

### 6.1 文章图片规范

文章图片统一存放在 `source/images/`。新增文章或为现有文章新增图片时，必须先完成压缩、格式选择和引用检查，不能把相机原图、未经处理的截图或大型 GIF 直接提交到仓库。

展示规则：

- 正文图片由主题统一限制为最大显示宽度 `760px`；图片较窄时保持原始宽度，窄屏时可直接撑满内容区域。
- 图片容器的上下背景留白会自动调整，最大为 `40px`。正文不得使用内联 HTML、固定宽高或额外 CSS 绕过 `760px` 限制和自动留白。
- 为兼顾高分屏，新增位图的源文件宽度通常不得超过 `1520px`，也就是显示宽度的 2 倍。确因长截图、文字可读性或细节放大需要保留更高分辨率时，必须仍满足文件体积限制，并在交付说明中写明原因。

格式和体积规则：

- 普通截图、照片和无透明需求的位图优先使用 WebP；只有需要无损文字边缘、透明通道且 WebP 效果不合适时才保留 PNG，SVG 仅用于可信且适合矢量表达的图形。
- 禁止新增 GIF。动画必须转换为动画 WebP；动画 WebP 仍过大时，应减少分辨率、帧率或时长，必要时改用视频资源并先确认文章体验。
- 单张静态位图不得超过 `800 KiB`；单张动画 WebP 不得超过 `2 MiB`；一篇新文章新增的全部图片资源合计不得超过 `5 MiB`。
- 超过上述任一限制时不得直接提交。先继续压缩、缩放、裁剪或拆分；如果确实无法满足，必须获得用户明确批准，并在最终报告中列出文件、大小和保留理由。
- 不得在 Markdown 中嵌入 Base64 图片，不得为同一画面同时提交未引用的 PNG/JPEG/GIF 原文件和优化后的 WebP。

新增或替换图片后的检查：

1. 使用 `git diff --name-only --diff-filter=AM -- source/images` 列出本次新增和修改的图片，只检查本次变更，不以历史大文件作为新资源的豁免理由。
2. 对列表中的每个文件检查字节数、格式和像素尺寸；macOS 可使用 `stat -f '%z %N'`、`file` 和 `sips -g pixelWidth -g pixelHeight`，其他环境使用等价工具。
3. 使用 `rg` 搜索旧文件名和新文件名，确认所有真实语言版本的文章引用已同步更新，已被替换的旧资源没有继续被正文引用。
4. 确认 Markdown 使用最终 `/images/...` 路径和最终扩展名，不引用本地绝对路径、构建产物或已删除文件。
5. 执行第 11 节的干净构建与链接验证，确保图片能够生成并且页面中不存在资源断链。

## 7. Menu、Sidebar 与翻译 Key

顶部 Menu 当前固定为：

```yaml
zimaos: /zimaos/
app-store: /zimaos/app-store/
hardware: /hardware/
developer: /developer/
help-center: /help-center/
forum: https://community.zimaspace.com/
```

除非用户明确要求调整一级信息架构，不得增加、删除或重命名顶部模块。

Sidebar 规则：

- 一级 Key 必须是 `zimaos`、`app-store`、`hardware`、`developer`、`help-center`。
- 每个一级模块必须有 `_overview.overview`，且与 Menu Landing 完全一致。
- Sidebar 值使用以 `/` 开头的完整站内内容路径，但不写 `/docs` 前缀。
- Sidebar 值不得包含 `.html` 或 `.md`。
- Sidebar 分组只决定浏览结构，不改变 Source 或 URL。
- 一个页面可以在 Sidebar 中被跨模块引用，但页面真实归属仍由 Source Namespace 决定。

Menu 文案使用以下 Key：

```text
menu.zimaos
menu.app-store
menu.hardware
menu.developer
menu.help-center
```

当前 Sidebar 翻译文件仍保留历史翻译 Namespace。新增或修改 Sidebar 标签时，使用以下映射，并同步检查五个语言文件：

| Sidebar 数据模块 | 主题翻译 Namespace |
|---|---|
| `zimaos` | `sidebar.guides` |
| `app-store` | `sidebar.playground` |
| `hardware` | `sidebar.hardware` |
| `developer` | `sidebar.dev` |
| `help-center` | `sidebar.more` |

主题翻译文件：

```text
themes/zima/languages/en.yml
themes/zima/languages/es.yml
themes/zima/languages/jp.yml
themes/zima/languages/pt-PT.yml
themes/zima/languages/zh.yml
```

不要在普通新增文档任务中重命名这些历史翻译 Namespace；部分 YAML 文件还有旧数据，未经专项清理直接改名可能产生 duplicate key。

## 8. 重命名或移动现有文档

文档移动等同于 Canonical URL 迁移。必须完成：

1. 使用 `git mv` 移动英文文件和所有真实存在的语言镜像。
2. 保持同一逻辑页面的所有语言相对路径一致。
3. 删除普通文章中的 `permalink`，不要用它保持旧 URL。
4. 更新 Menu、Sidebar、Landing、上一篇/下一篇来源数据和全部正文内链。
5. 判断旧 URL 是否曾经上线：
   - 已发布或存在明确历史证据：在 `source/_redirects` 增加或更新一跳 301。
   - 仅本地新增、从未发布：不要为旧本地路径制造 Redirect。
   - 无法确认且决定会影响 SEO：向用户说明缺少的生产证据，不要自行假设。
6. 找出所有已经指向该页面的历史 Alias，将它们直接改到最终 Canonical，不能形成 Alias -> 旧 Canonical -> 新 Canonical 的链。
7. 完成干净构建和全部验证。

URL 迁移时不要同时重写无关正文。路径迁移与大规模内容编辑应分开，以便审查和回滚。

删除活动文档同样属于 URL 变更。英文页面一旦删除，所有真实语言镜像必须一并删除；如果页面曾发布，英文和各语言 Canonical 及已有历史 Alias 都必须直接重定向到对应语言的最终接替页面。不得把删除后的某个译文继续保留为活动 Canonical，也不得让 Redirect Target 指向即将删除的语言页。

## 9. `_redirects` 规范

规则格式：

```text
/docs/old/path  /docs/final/path  301
```

必须满足：

- 只使用 301。
- Source 字面值唯一，已有历史 Source 不得删除或随意规范化大小写。
- Target 必须是最终生成页面，不得是另一个 Redirect Source。
- Target 不含 `.html`、`/index` 或退役 Namespace。
- 不允许链、循环或自重定向。
- 多语言旧 URL 默认跳到同语言的最终页面；目标语言页面不存在时再做明确 fallback 决策。
- 规则总数必须低于 1800 条仓库安全 Gate。
- 新建、从未发布的文章不需要 Redirect。

`validation-data/redirect-source-baseline-7fd1fa6916.txt` 保存公开主线提交 `7fd1fa6916` 已发布的 Redirect Source，不要删除或重写。一次性迁移生成脚本已经删除；不要重新建立运行时 Redirect Map。

## 10. 归档内容

`archive/legacy-docs-2025/` 保存 27 个 2025 年退役页面：

```text
archive/legacy-docs-2025/source/docs/
archive/legacy-docs-2025/source/faq/
archive/legacy-docs-2025/source/knowledge/
```

Agent 必须遵守：

- 不编辑归档正文或 Front Matter。
- 不把归档移动回 `source/`。
- 不从活动文档、Menu、Sidebar、Sitemap 或 hreflang 链接归档文件。
- 历史 URL 继续只由 `source/_redirects` 指向活动接替页面。
- 未经用户明确批准，不向这个固定归档批次追加新文件。
- 如需复用归档内容，先进行编辑审核，再在当前 Namespace 新建活动页面；不要直接发布归档文件。

完整性清单位于 `archive/legacy-docs-2025/manifest.csv`。

## 11. 构建与验证

本地使用仓库现有 pnpm 环境。`pnpm build` 只执行 `hexo generate`，不会自动清理旧输出，因此完整验收必须按此顺序：

```bash
pnpm exec hexo clean
pnpm build
pnpm docs:validate-structure
pnpm docs:validate-links
pnpm docs:validate-redirects
pnpm docs:validate-locales
```

验证器职责：

| 命令 | 检查内容 |
|---|---|
| `docs:validate-structure` | Namespace、五个 Landing、Menu/Sidebar、禁止目录、`permalink`、旧 Overview 和 Canonical 冲突 |
| `docs:validate-links` | 生成 HTML 的内部断链和指向旧 Namespace 的新链接 |
| `docs:validate-redirects` | 1457 条历史规则的 Source 保留、301、目标存在、重复、链和 1800 条 Gate |
| `docs:validate-locales` | hreflang 目标、重复语言和多语言 Landing 完整性 |

还必须检查真实构建日志，而不只看退出码。至少搜索：

```text
ERROR
YAMLException
Script load failed
FATAL
UnhandledPromiseRejection
```

构建和验证说明：

- 验证器依赖干净生成的 `public/`，不要在构建前单独运行链接、Redirect 或 Locale 验证。
- `public/`、`db.json` 和临时构建日志不是内容源，不要提交。
- 根配置 `root` 是 `/docs`；Sidebar/Menu 中省略 `/docs`，`source/_redirects` 中则包含 `/docs`。
- GitHub Actions 在 push 到 `main` 后使用 Node 16、Yarn 和 Hexo，将 `public/` 发布到 `gh-pages`。新增构建代码必须兼容 Node 16。
- Cloudflare 如何消费 `gh-pages` 属于仓库外配置。本地通过不能被描述为生产 Redirect 已验证。

如果修改 `themes/zima/layout/partial/head.njk` 或结构化数据 Helper，还应解析生成页面中的全部 `application/ld+json`，确认没有无效 JSON。

## 12. `scripts/` 目录规则

Hexo 会自动加载 `scripts/` 下的 JavaScript。新增命令行脚本或验证器必须避免在 `hexo clean`、`hexo generate` 时自动执行副作用：

```js
function main() {
  // CLI work
}

if (require.main === module) main();
```

其他要求：

- 长期验证器保持只读；不得在验证命令中修改 Source、Redirect 或审计 CSV。
- 不要恢复已删除的 `scripts/migration/` 一次性生成工具，除非用户明确启动新的迁移项目。
- 不得重新创建页面级 URL Map、`permalink-map` 或客户端 rewrite。
- Helper 应基于 Namespace 和 Locale 工作，不得建立逐页面分类表。

## 13. Agent 工作边界

Agent 在普通新增或编辑文档任务中应保持改动最小：

- 不增加用户没有要求的首页内容或 UI。
- 不顺带重新设计主题、导航或文章结构。
- 不重命名现有 URL，除非任务明确要求。
- 不为新文章添加无意义的 Redirect。
- 不删除历史 Redirect Source。
- 不修改归档内容。
- 不覆盖或回滚工作区中与当前任务无关的用户修改。
- 不得在修改英文文章可见内容后遗漏 `es`、`jp`、`pt-PT`、`zh` 同路径译文；如用户只要求英文草稿，必须明确说明其未进入可发布 Source，或先获得分阶段发布批准。
- 如果发现意外的外部改动，先停止并询问用户。

完成后应向用户报告：

1. 新增或修改的 Source 路径；
2. 对应 Canonical URL；
3. 是否更新 Sidebar、翻译和 Redirect；
4. 执行了哪些构建与验证命令；
5. 哪些线上行为仍需要部署后验证。

## 14. 新增文档完成清单

提交结果前逐项确认：

- [ ] 页面位于正确的最终 Namespace。
- [ ] App Store 页面位于 `zimaos/app-store/`。
- [ ] 文件名为 lowercase kebab-case。
- [ ] Front Matter 是有效 YAML，且没有 `permalink`。
- [ ] 内链指向最终 Canonical，不含 `.html`、`.md` 或旧 Namespace。
- [ ] 新增图片遵守 `760px` 展示宽度、`1520px` 常规源文件宽度、静态 `800 KiB`、动画 WebP `2 MiB` 和单篇合计 `5 MiB` 限制。
- [ ] 没有新增 GIF、Base64 图片、未引用原图或未更新的旧图片链接。
- [ ] 英文内容作为唯一基准，`es`、`jp`、`pt-PT`、`zh` 使用相同相对路径并完整对应；没有缺失、空白、摘要式或英文复制占位。
- [ ] 英文新增、修改或删除时，四个语言镜像已在同一任务中同步新增、重译或删除。
- [ ] 译文的标题层级、步骤、表格、代码块、图片和链接目标与英文一致，语言 Landing 不再标注该页面“仅英文”。
- [ ] Sidebar 使用完整的无扩展路径，并补齐所需翻译 Key。
- [ ] 新页面没有因为“可能需要”而增加 Redirect。
- [ ] 没有向文档首页添加未请求的可见内容。
- [ ] 已执行干净构建和四个验证器。
- [ ] 构建日志没有隐藏错误。
- [ ] 未提交 `public/`、`db.json` 或临时日志。

## 15. 参考文件

当前规范和公开审计记录：

```text
validation-data/redirect-source-baseline-7fd1fa6916.txt
archive/legacy-docs-2025/README.md
archive/legacy-docs-2025/manifest.csv
```

运行时和验证入口：

```text
source/_data/menu.yml
source/_data/sidebar.yml
source/_redirects
scripts/helpers.js
scripts/validate-docs-structure.js
scripts/validate-internal-links.js
scripts/validate-redirects.js
scripts/validate-locales.js
```

本文件是公开仓库的当前操作规范；内部迁移 Roadmap 不随公开仓库发布。
