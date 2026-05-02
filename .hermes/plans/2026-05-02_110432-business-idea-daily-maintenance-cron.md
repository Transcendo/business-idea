# business-idea 每日早中晚维护计划

## 目标

为 `/Users/djd/Documents/github/business-idea` 建一个低内存、内容优先的定时维护机制：每天早 / 中 / 晚各跑一次，寻找 AI 创业 idea、AI startup、AI 项目和可借鉴产品，把可信资料沉淀进仓库，并保持仓库结构、导航、来源和提交状态干净。

用户明确要求：审核计划后再行动；不能启动 Next/Vite/Nuxt/Node dev server、watch 服务、本地预览服务；推送后由用户验收。

## 当前已确认上下文

- 仓库：`/Users/djd/Documents/github/business-idea`
- remote：`git@github.com:Transcendo/business-idea.git`
- 分支：`main`
- 技术形态：Next.js 16 + Fumadocs，但本计划不启动服务。
- 内容规范：`references/business-idea-style.md`
- 现有公开内容入口：`content/docs/`
- 现有草稿入口：`AI Knowledge/`
- 当前未跟踪文件：`AI Knowledge/No Barrier.md`
- Obsidian vault：`/Users/djd/Documents/djd-obsidian/djd`
- Obsidian 中已有可迁移线索：
  - `AI Startups/Daily Picks/*.md`
  - `rengar/租房与房产创业/04 创业假设与方向/*.md`
  - 之前会话里也有桌宠 / 植物宠物 / 农业 AI 调研，可作为初期 backlog。

## 核心原则

1. **只做内容和轻量代码维护**
   - 可以编辑 MD / MDX / JSON / TSX 配置。
   - 可以写轻量 Python 脚本做索引、去重、链接校验。
   - 不启动 `pnpm dev`、`next dev`、`pnpm start`、`serve out`、watcher、Playwright/E2E。
   - 默认也不跑 `pnpm build`，避免占满 16GB Mac mini。验收交给用户或远端。

2. **来源可信，不靠二手垃圾站堆内容**
   - 强来源优先：官网、官方博客、GitHub、论文/技术文档、公司公告、权威媒体原文。
   - 线索源可用：Hacker News、Product Hunt、YC、GitHub Trending、X/LinkedIn 官方账号、投资机构 portfolio。
   - 不用无出处转载、采集站、安全风险高的网站。

3. **沉淀不是日报灌水**
   - 每个项目必须回答：它是谁、做什么、为什么现在值得看、风险是什么、后续盯什么。
   - 能进长期分类就进 `content/docs/<category>/`。
   - 只适合暂存的放进 `AI Knowledge/`，不要强行发布。

4. **每次 cron 都必须 commit + push，除非无变化**
   - 有内容变化：提交并推送。
   - 无可靠内容或仅发现低质线索：写入维护日志，不制造垃圾 commit。
   - 推送前只做轻量校验，不做本地 Next 构建。

## 建议定时安排

默认按 Asia/Shanghai：

- 09:10 早间发现：找新项目、新融资、新发布、新开源项目。
- 13:10 午间深化：对早间或 backlog 中 1 个项目做深度整理，写成可发布页面。
- 20:10 晚间维护：迁移 Obsidian/历史会话 backlog，修导航、去重、补来源、提交推送。

实现方式建议用 3 个 Hermes cronjob，而不是一个复杂大任务。好处是每个任务目标窄，失败时好定位，也不会一次吃太多上下文和内存。

## 仓库内拟新增维护结构

### 1. 维护日志

新增：

- `AI Knowledge/maintenance-log/README.md`
- `AI Knowledge/maintenance-log/YYYY-MM-DD.md`

用途：记录每次 cron 做了什么、看过哪些线索、为什么收录或放弃、commit hash。

### 2. 线索池

新增或规范：

- `AI Knowledge/inbox/YYYY-MM-DD-<slug>.md`

用途：放尚未确认适合公开发布的项目线索。每条至少包括：

- 项目名
- URL
- 来源类型
- 一句话描述
- 值得看的理由
- 疑点 / 风险
- 是否建议进入 `content/docs/`

### 3. 轻量校验脚本

新增：

- `scripts/validate_business_idea_content.py`

只做静态检查，不启动 Node：

- 检查 `content/docs/**/*.mdx` 是否存在标题。
- 检查 `meta.json` 引用的页面是否存在。
- 检查 `components/sidebar-content.tsx` 中主要 href 是否能找到对应 MDX。
- 检查新增页面是否包含“可信来源”或等价来源段落。
- 检查重复 slug。
- 检查明显 AI 黑话 / 禁词。

可选再加：

- `scripts/update_business_idea_index.py`

用于根据 `content/docs` 生成轻量索引或报告，减少人工漏维护。

## 每个 cronjob 的工作流

### A. 早间发现任务：09:10

目标：找当天值得看的 AI 创业项目，做 shortlist，不急着全部发布。

步骤：

1. `git fetch` + 确认当前分支与远端关系。
2. 检查本地是否有未提交修改，避免覆盖用户手工工作。
3. 从可信线索源检索：
   - AI startup launch / funding / product launch
   - GitHub AI agent / developer tool / vertical AI project
   - Product Hunt AI / Hacker News AI Show HN
   - YC AI startup / portfolio news
4. 过滤：
   - 是否有官网 / GitHub / 官方文档。
   - 是否真有产品，不只是概念页。
   - 是否与仓库现有分类匹配。
5. 输出 3-5 个 shortlist 到 `AI Knowledge/inbox/YYYY-MM-DD-morning.md`。
6. 如果其中 1 个特别强，生成 `content/docs/weekly-picks/<slug>.mdx` 草案，并同步更新：
   - `content/docs/weekly-picks/meta.json`
   - `components/sidebar-content.tsx` 的本周推荐列表
7. 跑 `python3 scripts/validate_business_idea_content.py`。
8. commit + push。

### B. 午间深化任务：13:10

目标：把一个项目从线索池升级成长期可读页面。

步骤：

1. 读取当天早间 shortlist、最近 Obsidian Daily Picks、历史未迁移内容。
2. 选一个信息最扎实的项目。
3. 补强强来源：官网、官方博客、GitHub、创始人/团队、产品文档、可信报道。
4. 按 `references/business-idea-style.md` 写成公司/项目页。
5. 放入最合适分类，例如：
   - `content/docs/ai-agents/`
   - `content/docs/developer-tools/`
   - `content/docs/vertical-ai/`
   - `content/docs/ai-hardware/`
   - `content/docs/education/`
   - `content/docs/healthcare/`
6. 更新对应分类 `meta.json`。
7. 如需侧边栏显示，更新 `components/sidebar-content.tsx`。
8. 保留或更新 `weekly-picks` 链接，避免“本周推荐”变成永久垃圾堆。
9. 跑轻量校验。
10. commit + push。

### C. 晚间维护任务：20:10

目标：整理存量，不只追热点。

步骤：

1. 搜索 Obsidian vault：
   - `/Users/djd/Documents/djd-obsidian/djd/AI Startups/Daily Picks/`
   - `/Users/djd/Documents/djd-obsidian/djd/rengar/租房与房产创业/`
   - 与 AI 项目、AI 产品、创业方向、桌宠、植物宠物、农业 AI 相关的笔记。
2. 搜索历史会话摘要，优先整理已经调研过但没入库的内容：
   - 桌宠 / AI companion：Clawster、Atrophy、lil-agents、Mac Pet 等。
   - 植物宠物 / 智能花盆：PlantsIO Ivy、PlantBot、Plantversation 等。
   - 农业 AI：Taranis、Bayer E.L.Y.、Syngenta Cropwise、KwooLa 等。
   - 租房 AI / 中介 AI 分身方向，是否适合作为“创业假设”专题，而非普通公司页。
3. 将存量内容分三类处理：
   - 可公开发布：转成 `content/docs/<category>/<slug>.mdx`。
   - 值得保留但未核实：放 `AI Knowledge/inbox/`。
   - 只适合个人项目策略：保留在 Obsidian，不强行公开进仓库。
4. 清理重复 weekly picks，保证长期分类是主库。
5. 更新 README 或目录索引，让仓库外部读者能理解它不是散装日报。
6. 跑轻量校验。
7. commit + push。

## 定时任务 prompt 约束

每个 cronjob prompt 必须自包含，写清楚：

- 仓库路径：`/Users/djd/Documents/github/business-idea`
- Obsidian vault：`/Users/djd/Documents/djd-obsidian/djd`
- 禁止启动服务：`pnpm dev`、`next dev`、`pnpm start`、`serve out`、watcher、browser E2E。
- 默认禁止本地 `pnpm build`，除非用户之后改口。
- 允许的验证：Python 静态校验、git diff、文件存在性、JSON 解析、MDX 粗校验。
- 内容必须有来源，没强来源不发布。
- 有改动才 commit + push；无改动写维护日志即可。
- 不要用消息工具乱发中间报告，最终由 cron 自动回到本 Discord 线程。

## 可能改动文件

计划获批后，第一次执行会优先改这些文件：

- `.hermes/plans/2026-05-02_110432-business-idea-daily-maintenance-cron.md`（本计划）
- `scripts/validate_business_idea_content.py`
- `AI Knowledge/maintenance-log/README.md`
- `AI Knowledge/maintenance-log/YYYY-MM-DD.md`
- `AI Knowledge/inbox/*.md`
- `content/docs/weekly-picks/*.mdx`
- `content/docs/weekly-picks/meta.json`
- `content/docs/<category>/*.mdx`
- `content/docs/<category>/meta.json`
- `components/sidebar-content.tsx`
- `README.md`（需要时修掉鼓励 `pnpm dev` 的默认指令，改成“本机维护不启动服务”说明）

## 验证方式

不跑 Next 服务，不跑本地预览。

轻量验证：

```bash
python3 scripts/validate_business_idea_content.py
git diff --check
git status --short --branch
```

如需要 JSON 校验，脚本内完成：

```python
json.load(open("content/docs/meta.json"))
```

如用户后续允许远端验证，可依赖 GitHub Pages / GitHub Actions；本机不扛构建压力。

## 风险与处理

1. **自动追热点容易变垃圾日报**
   - 处理：强来源 + 少量精选 + 必须写批判段落。

2. **Fumadocs 导航有两套：meta.json 和自定义 sidebar**
   - 处理：每次新增页面同时检查 `meta.json` 与 `components/sidebar-content.tsx`。

3. **Obsidian 内容有些适合私人策略，不适合公开**
   - 处理：涉及用户商业策略、未公开创业想法、个人判断的内容，只抽象成公开可读的行业主题，不直接搬原文。

4. **无构建会漏掉部分 TS/MDX 编译问题**
   - 处理：用静态校验尽量防低级错；用户验收时如发现构建错，再针对性修。不在 Mac mini 上硬跑大构建。

5. **三次任务可能互相踩改动**
   - 处理：每次开始先 `git pull --rebase`，发现冲突就停下写日志，不硬改。

## 审核后行动顺序

如果你批准，我会按这个顺序做：

1. 先创建轻量验证脚本和维护目录。
2. 做一次手动 dry run：不启动服务，只生成一批 inbox / 维护日志 / 少量页面修正。
3. 本地静态校验通过后 commit + push。
4. 创建 3 个早 / 中 / 晚 cronjob。
5. 手动触发其中一个 cronjob 试跑，确认不会启动 Next 服务。
6. 报告 cronjob ID、schedule、首次 commit hash、推送状态。

## 默认待你确认的点

如果不改，我默认采用：

- 时间：09:10、13:10、20:10，Asia/Shanghai。
- 每次最多发布 1 篇正式 MDX，避免量大质低。
- 每次最多沉淀 3-5 条 inbox 线索。
- 本机不跑 `pnpm build`。
- 公开仓库不直接搬运 Obsidian 中带有你个人创业策略细节的原文，只做抽象整理。