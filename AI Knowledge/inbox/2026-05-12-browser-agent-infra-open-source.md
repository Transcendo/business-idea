# Browser agent infra / zero-install agent workspace

- 方向：AI browser agent、网页自动化基础设施、零安装 agentic workspace。
- 来源强度：中。Hacker News 有当天 Show HN 热度；GitHub 上 Stagehand / Notte 是更强的基础设施参照。还没看到明确付费转化数据。
- 公开来源：
  - HN Show HN: OpenGravity：`https://news.ycombinator.com/item?id=48100192`；Algolia 抓到 2026-05-11，56 points，讨论集中在 BYOK、Antigravity rate limit、浏览器里跑 agent workspace。
  - OpenGravity GitHub：`https://github.com/ab-613/OpenGravity`，README 写明 zero-install、BYOK、WebContainer、xterm.js、本地文件同步、基础 agent 执行。
  - Browserbase Stagehand：`https://github.com/browserbase/stagehand`，22k+ stars，定位是 browser agents SDK。
  - Notte：`https://github.com/nottelabs/notte`，约 1.9k stars，定位是 web agents / serverless browser automation。

## 为什么现在热

- Antigravity / Claude Code / Codex 这类 agent 把“浏览器 + 终端 + 文件系统 + LLM”变成日常开发界面。
- 用户已经不是缺一个浏览器自动化库，而是缺一个能稳定复现、能接管页面、能跑在云端/本地、能解释失败原因的 agent runtime。
- BYOK 和 zero-install 说明一部分用户不想被单一平台 quota、订阅和 IDE 绑定。

## 用户痛点

- 浏览器任务天然脆：DOM 变、登录态、验证码、弹窗、异步加载都会让 agent 瞎点。
- 开发者要把自然语言任务变成 Playwright / browser-use / Stagehand 脚本，调试成本很高。
- 非开发者想让 agent 操作网页，但不想装完整 IDE 或暴露所有本地权限。

## AI 是否真的压缩任务

能压缩“看页面、理解意图、找控件、填表、抽取结果”的手工链路。不能压缩的是登录、风控、人机验证和长期稳定运维。真正的机会不是“让 AI 点网页”，而是把网页任务变成可回放、可审计、可降级的执行计划。

## Users come / stay / spread / pay

- 来：想把一个重复网页流程快速交给 agent，例如竞品价格监控、CRM 录入、后台报表下载。
- 留：任务模板稳定、失败可解释、能复用登录态和历史修复。
- 传播：分享一张“这个网页流程被自动化了”的 replay / diff / run card。
- 付费：按 browser runtime 分钟、并发数、托管登录态、企业审计、私有部署付费。

## 可验证 MVP

- 选 3 个高频网页流程：SaaS 后台导出、招聘网站候选人筛选、电商 SKU 价格抓取。
- 输入一句任务 + 目标网站，输出可运行 Playwright/Stagehand 脚本、截图 replay、失败点说明。
- 不要先做完整浏览器 IDE。先证明“自然语言到稳定可回放网页任务”的成功率。

## 风险 / 反例

- 大厂 browser agent 和现有 RPA 会压缩通用市场。
- 登录/验证码/反爬可能让很多任务无法规模化。
- OpenGravity 自身更像热闹的开源 UI clone，不等于商业需求成立；正式条目需要再找付费型公司案例和用户抱怨。

## 下一步验证问题

- 哪些网页任务用户愿意每月付费，而不是一次性脚本？
- 失败恢复是否比“首次生成脚本”更值钱？
- 垂直切入是销售运营、招聘、电商运营，还是内部工具 QA？
