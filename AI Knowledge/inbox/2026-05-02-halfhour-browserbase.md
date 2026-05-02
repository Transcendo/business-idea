# Browserbase：给 AI agent 用的云浏览器与浏览器代理平台

## 一句话判断

Browserbase 值得进观察池：它押注的不是“让模型会搜索”，而是把真实浏览器、搜索、页面抓取、身份、运行时和模型网关打包成 agent 可调用的 Web 执行层；如果未来大量 agent 要真正操作网页，这层比单纯聊天入口更接近刚需。

## 符合哪个现有目录/栏目

- 首选：`content/docs/developer-tools`
- 次选：`content/docs/vertical-ai` 中的 agent infrastructure / browser agent 条目
- 本轮处理：只进 `AI Knowledge/inbox`，暂不创建正式 MDX。原因是仓库当前还没有独立的 browser-agent / agent-infrastructure 栏目；直接塞进开发者工具可以，但正式页最好等这一组样本（Tavily、AgentMail、Browserbase 等）一起归类。

## 目标用户

- 正在做 browser agent、网页自动化、网页数据抽取、AI research workflow 的开发者团队
- 需要让 agent 登录、点击、填表、下载、跨站执行任务的 SaaS / 内部自动化团队
- 对浏览器隔离、审计、录屏、合规、区域部署有要求的企业客户

## 核心痛点

网页是 API 覆盖不到的最后一大块工作界面。很多业务动作仍然发生在浏览器里：登录后台、提交表单、查票据、抓供应商页面、跑测试、核验订单状态。自己维护 Playwright / Puppeteer 集群会很脏：并发、代理、验证码、会话持久化、录屏调试、浏览器版本、隔离安全和成本控制都不是 demo 里的几行代码。

Browserbase 切的是“agent 能不能稳定使用真实 Web”这个基础设施问题。

## 产品形态

从官网和官方文档看，Browserbase 已经不是单一 cloud browser：

- **Browsers / Sessions**：通过 API 创建云端浏览器 session，并用 Playwright、Puppeteer、Selenium 或 CDP 连接。
- **Stagehand**：Browserbase 旗下的 browser agent SDK，把 Playwright 级控制和 `act / extract / observe` 这类 AI primitive 放在一起；GitHub API 本轮返回 `browserbase/stagehand` 约 22.4k stars。
- **Observability**：Session Inspector、实时 Live View、录屏、日志和指标，用来排查 agent 为什么点错、卡住或被网页拦住。
- **Agent Identity / Proxies / Captcha**：围绕地理位置、网络身份、验证码和更高通过率做企业级封装。
- **Functions**：把浏览器脚本或 agent 部署成可通过 API 调用的云函数。
- **Search / Fetch / Model Gateway**：为 agent 提供轻量网页上下文，以及通过一个 Browserbase key 使用主流模型的网关。

## 为什么现在值得看

1. **Agent 从“会回答”走向“会操作”。** 只读搜索 API 解决不了登录、填表、点击、多页流程这些问题；真实浏览器是下一层执行接口。
2. **浏览器自动化正在从 QA 工具变成 AI runtime。** 过去 Playwright 主要服务测试和 RPA；现在它变成 agent 操作 SaaS、网站和长尾后台的手脚。
3. **企业不想自己运 Chromium 农场。** 官方文档明确写到隔离 VM、区域、录屏、日志、SOC 2、HIPAA、SSO、BAA 等，这说明 Browserbase 在卖生产环境信任，而不是只卖“云上打开浏览器”。
4. **开源入口有分发优势。** Stagehand 的 GitHub stars 和官方文档里提到的高下载量，说明它在开发者侧已经有注意力；Browserbase 可以用 SDK 把开发者自然导回托管浏览器和企业计划。

## 商业化路径

- **按浏览器小时 / 并发 / 代理流量收费**：官方计划从 Free、Developer、Startup 到 Scale，浏览器小时、并发、proxy GB、session 时长和数据保留逐级提高。
- **企业版安全与合规**：SSO、HIPAA BAA、DPA、渗透测试报告、区域、禁用日志/录屏、数据驻留，适合高客单价。
- **运行时平台费**：Functions 如果变成 browser agent 的部署层，Browserbase 就不只是浏览器供应商，而是 workflow runtime。
- **模型与工具链聚合**：Model Gateway 把 LLM 调用、浏览器基础设施和账单合在一起，有机会吃到 agent stack 的平台化预算。

## 风险/反证

1. **反爬和身份问题没有银弹。** Browserbase 可以提供代理、隔离和身份能力，但目标网站会持续升级风控；“稳定通过”会是长期军备竞赛。
2. **浏览器执行成本天然高。** 相比搜索/抓取 API，跑真实浏览器更贵、更慢、更难规模化；客户必须有足够高价值的任务才愿意付费。
3. **大厂可能下场做托管浏览器。** OpenAI、Anthropic、Google、Cloudflare、Vercel 等都有理由把 browser runtime 做进自己的 agent 平台。
4. **SDK 热度不等于收入质量。** Stagehand 的开源热度是强信号，但还要继续看付费企业、留存、单位经济模型和高并发稳定性。

## 可借鉴点

- 做 agent infra 不一定要从模型开始；从“模型必须操作的外部世界接口”切进去，反而更贴近预算。
- 产品包装很清楚：Browsers 是核心，Search / Fetch / Model Gateway 是辅助 primitive，不把自己讲成泛泛的 AI 搜索。
- 面向企业时，录屏、审计、隔离、区域、合规这些“无聊能力”就是卖点。真上生产，炫技不如可控。
- 对 business-idea 仓库来说，Browserbase 可和 Tavily 组成一组：Tavily 管 Web 信息输入，Browserbase 管 Web 行为执行。

## 来源链接

- Browserbase 官网：<https://www.browserbase.com/>
- Browserbase 官方文档 Introduction：<https://docs.browserbase.com/welcome/introduction>
- Browserbase 文档索引：<https://docs.browserbase.com/llms.txt>
- 创建浏览器 session 文档：<https://docs.browserbase.com/platform/browser/getting-started/create-browser-session.md>
- Observability 文档：<https://docs.browserbase.com/platform/browser/observability/observability.md>
- Plans / pricing 文档：<https://docs.browserbase.com/account/billing/plans.md>
- Enterprise security 文档：<https://docs.browserbase.com/account/enterprise/security.md>
- Functions 文档：<https://docs.browserbase.com/platform/runtime/overview.md>
- Model Gateway 文档：<https://docs.browserbase.com/platform/model-gateway/overview.md>
- Stagehand GitHub：<https://github.com/browserbase/stagehand>

## 推荐下一步

**留在 inbox，后续深化为正式 MDX。**

正式发布前建议补三件事：

1. 找到并核验融资/客户案例的一手来源，避免只靠官网产品文档。
2. 和 Tavily、Firecrawl、Exa、Composio 等 agent infrastructure 公司横向比较，决定是否新建 `agent-infrastructure` 栏目。
3. 如果发布正式页，重点写“browser agent runtime”而不是泛泛“云浏览器”，否则会低估它的创业价值。
