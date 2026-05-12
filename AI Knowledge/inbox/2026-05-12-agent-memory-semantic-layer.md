# Agent memory / semantic layer for long-running AI work

- 方向：AI agent 长期记忆、semantic layer、context drift 控制、本地优先 memory store。
- 来源强度：中。HN 最近连续出现多个小项目，单个热度不都强，但问题密度高；YourMemory 的 HN 讨论更能说明“记忆不是无限上下文”的争议点。
- 公开来源：
  - Graft：`https://github.com/AEndrix03/Graft`，GitHub API 抓到描述为 local-first semantic cache for AI agents，README 写 persistent graph memory，SQLite、FTS5、sqlite-vec、本地优先、无 SaaS、无 API key，面向 Claude Code、Codex、Gemini CLI、MCP。
  - Graft HN：`https://news.ycombinator.com/item?id=48102507`，2026-05-12 `Graft – semantic memory for AI agents, without the LLM`。
  - SLayer：`https://github.com/MotleyAI/slayer`，README 定位 semantic layer between database and AI agents/internal tools，支持从 schema 自动建模、结构化 API 查询；HN：`https://news.ycombinator.com/item?id=48095686`，作者评论说 traditional semantic layers 太笨重，下一版要做 memories 和 columns 的 hybrid search。
  - YourMemory：`https://github.com/sachitrafa/YourMemory`，GitHub API 抓到约 217 stars；HN：`https://news.ycombinator.com/item?id=47914367`，98 points、17 comments。评论争论点很有价值：所谓“生物记忆”可能只是 cache/LRU 包装，但作者强调 category-specific half-life、recall reinforcement、低于阈值自动剪枝。

## 为什么现在热

- Coding agent、browser agent、research agent 都开始跨天工作；每次新 session 从零开始很蠢。
- 长上下文不是万能药。上下文越长，成本、延迟、污染、过期事实越严重。
- MCP 和本地 agent harness 变多后，记忆层需要脱离单个模型和单个 app。

## 用户痛点

- Agent 反复问同样的问题，忘记项目约定、偏好、已排除方案。
- 团队不知道哪些记忆该长期保留，哪些只是本轮任务噪音。
- 数据库语义、业务口径、代码架构、用户偏好都在变；旧记忆如果不衰减，会害 agent 犯错。

## AI 是否真的压缩任务

能，但前提是别把“记忆”做成更大的聊天历史。AI-native wedge 应该是：用户/agent 做事时自动抽取可复用事实，按类型设保质期，检索时给出来源和置信度，过期时提醒确认。

## Users come / stay / spread / pay

- 来：长任务 agent 失忆，直接浪费用户时间和 token。
- 留：记忆库越用越像团队的工作底稿，迁移成本上升。
- 传播：用户会分享“我的 coding agent 终于记住项目约定/数据库口径”的前后对比。
- 付费：本地团队版、私有部署、加密同步、审计、跨工具 memory server、垂直 schema 包。

## 可验证 MVP

- 先卡 coding agent 或 analyst agent，不要做泛个人第二大脑。
- 接入 Claude Code/Codex/MCP，记录项目约定、已尝试方案、命名规则、数据库指标定义。
- 下次任务开始前，自动吐出 5 条相关记忆，并要求用户一键确认/废弃。
- 指标：重复提问次数下降、任务完成 token 下降、用户保留的记忆比例、错误记忆导致的回滚次数。

## 风险 / 反例

- OpenAI、Anthropic、Cursor、Claude Code 都可能内置记忆。
- 记错比忘记更糟。错误记忆会让 agent 自信地跑偏。
- 企业用户会担心代码、客户数据、数据库 schema 泄露；local-first 和加密同步不是卖点，是门槛。

## 下一步验证问题

- 哪类记忆最值钱：代码库约定、用户偏好、业务口径、失败历史，还是工具权限？
- 记忆衰减/确认机制能不能让错误率低到可接受？
- 用户愿意主动管理记忆，还是必须全自动且可撤销？
