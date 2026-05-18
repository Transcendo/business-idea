# 2026-05-18 slot 01 — AI data analyst / spreadsheet-native agents

Slot: 08:00 Asia/Shanghai = slot 1.

本轮覆盖来源：HN Algolia、GitHub API、Product Hunt 页面、官方产品页；Reddit 搜索接口返回 403 Blocked，未使用其内容做事实判断。

## 候选 1：Spreadsheet-native AI data analyst（已发布正式页）

- 来源：HN Sourcetable Superagents、Sourcetable 官网、Product Hunt Quadratic、Quadratic 官网、GitHub Excel / spreadsheet agent repos。
- 置信度：高。
- 为什么热：数据源越来越碎，业务团队仍然在 spreadsheet 里完成真实协作；LLM 已能生成 SQL、公式、Python、解释和图表初稿。
- 痛点：聊天式 BI 给答案但难复查；传统 BI 建模慢；分析师排期慢。
- AI-native wedge：上传 CSV/XLSX 或接只读数据源，系统生成可见清洗步骤、公式、图表、结论和 analysis receipt。
- MVP：只支持 CSV/XLSX + Postgres，只做销售漏斗、留存、广告 ROI 等 5 个模板。
- 风险：Excel / Google Sheets / Copilot 吃掉基础功能；隐私和审计是硬门槛。
- 产物：`content/docs/developer-tools/spreadsheet-native-ai-data-analyst.mdx`。

## 候选 2：Local notebook-based AI data analyst

- 来源：HN `Show HN: Mljar Studio – local AI data analyst that saves analysis as notebooks`；MLJAR 官网。
- 置信度：中高。
- 为什么热：企业数据不能随便进云端模型；notebook 是可复查、可交接的分析容器。
- 痛点：AI data analyst 的黑盒回答很难审计，分析结果不能只停在聊天记录。
- AI-native wedge：本地运行，用户给数据和问题，系统把分析保存成 notebook cell、图表和解释。
- MVP：只做本地 CSV + pandas notebook 生成，并把每步转换写成可运行 cell。
- 风险：本地环境、依赖、模型配置会带来重支持成本。
- 下一步：跟踪 MLJAR 的本地部署、notebook export、企业数据安全叙事。

## 候选 3：Excel MCP 操作层

- 来源：GitHub `SylvianAI/sv-excel-agent`、`jwadow/mcp-excel`、`Agent-Tracking-Mech/agentic-spreadsheet`。
- 置信度：中。
- 为什么热：MCP / tool calling 开始从 demo 进入真实办公文件；Excel 是企业长尾自动化入口。
- 痛点：LLM 一次性生成公式不够，真正需要读取、编辑、检查、回滚和局部重跑。
- AI-native wedge：把 Excel 操作拆成 atomic tools，让 agent 能在不吞完整文件上下文的情况下读写表格。
- MVP：做一个只读 + 受限写入的 Excel MCP server，支持 range scan、formula insert、diff preview。
- 风险：Excel 文件格式、宏、安全策略和 Office 兼容性会很脏。
- 下一步：找 issue / discussion 里的真实失败案例，不急着发公开页。

## 候选 4：Finance-first Excel generator

- 来源：HN `Show HN: Create Professional Excel Files with AI Agents`；zSpreadSheet 官网。
- 置信度：中。
- 为什么热：财务和投融资仍然大量交付 Excel，而不是 dashboard。
- 痛点：模型表、预算表、报表模板制作慢，且格式要求高。
- AI-native wedge：用户描述用途，系统生成带公式、样式、sheet 结构和校验的 `.xlsx`。
- MVP：只做 10 个财务模板：预算、现金流、SaaS 指标、渠道 ROI、销售 forecast。
- 风险：一次性生成工具留存弱；Excel 专业用户会挑公式和格式细节。
- 下一步：看是否能接入复用模板、版本对比和团队审批。

## 候选 5：Agent analytics / AI agent product telemetry

- 来源：HN `Launch HN: Voker (YC S24) – Analytics for AI Agents`。
- 置信度：中。
- 为什么热：越来越多产品把 agent 放进工作流，传统 web analytics 看不懂 tool call、turn、handoff、failure。
- 痛点：agent 产品失败原因不在 PV/UV，而在任务完成率、工具错误、用户接管、成本和安全拒绝。
- AI-native wedge：收集 agent run event，生成 task funnel、failure cluster、tool latency、cost attribution。
- MVP：只支持 OpenAI / Anthropic SDK trace ingestion，输出 5 个核心漏斗图和 replay link。
- 风险：Langfuse、OpenTelemetry、平台原生 observability 会吸收一部分需求。
- 下一步：如果后续正式写，放到 developer-tools 或 ai-agents，并与现有 Langfuse / agent failure harness 区分。

## 本轮噪音 / 未采用

- Product Hunt 搜索页可访问，但搜索结果受页面推荐和 footer 链接污染；本轮只采用可核验的 Quadratic 产品页。
- Reddit 搜索 JSON 返回 `HTTP Error 403: Blocked`；未抓取、未引用 Reddit 内容。
- GitHub 搜索 `AI data analyst spreadsheet agent` 会混入 awesome lists 和无关 data science 列表；已过滤，只记录和 Excel / spreadsheet agent 直接相关的小 repo。
