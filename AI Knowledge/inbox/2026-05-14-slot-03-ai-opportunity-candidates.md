# 2026-05-14 Slot 03 AI opportunity candidates

本轮覆盖来源：Hacker News、GitHub API / GitHub repos、公开 repo README。正式页选了 agent structural memory layer；其余进入候选池，后续再验证。

## 13. Graphmind / Claude Code persistent memory graph

- 来源：HN item 48118017；GitHub aouicher/graphmind。
- 链接：[HN](https://news.ycombinator.com/item?id=48118017)，[GitHub](https://github.com/aouicher/graphmind)
- 置信度：中。
- 热的原因：Claude Code 这类 coding agent 开始进入长任务，跨会话失忆变成真实摩擦。
- 痛点：agent 每次重新理解 repo、规则、前次决策，浪费 token，也重复犯错。
- AI-native wedge：把 repo / session / decision 抽成可查询 graph memory，通过 MCP 喂给 agent。
- MVP：只支持一个 repo，记录“相关文件、关键决策、失败路径、测试入口”，用 receipt 证明 agent 少读文件。
- 风险：HN 分数很低，说明传播还弱；如果只做知识图谱外壳，容易被 IDE 内置能力吃掉。

## 14. Memtrace / structural memory for AI coding agents

- 来源：GitHub syncable-dev/memtrace-public。
- 链接：[GitHub](https://github.com/syncable-dev/memtrace-public)
- 置信度：高。
- 热的原因：MCP-native、bi-temporal graph、zero LLM calls 这些词都指向同一个趋势：agent context 要从 prompt 变成 runtime 基础设施。
- 痛点：长上下文不能稳定表达代码结构、版本变化和历史决策。
- AI-native wedge：结构化索引 + 时间版本 + MCP 工具，让不同 agent 共用上下文。
- MVP：开源本地 server，先服务 Claude Code / Codex / Cursor，指标看 token、定位文件时间、review 成本。
- 风险：必须处理过期记忆；错记忆比没记忆更危险。

## 15. site-memory / browser automation agent memory

- 来源：GitHub LittleYier/site-memory。
- 链接：[GitHub](https://github.com/LittleYier/site-memory)
- 置信度：中高。
- 热的原因：browser agent 重复访问同一批后台系统，重新探索 DOM 和流程很贵。
- 痛点：网页 agent 每次都要重学登录、导航、按钮、表单、分页和导出流程。
- AI-native wedge：站点级结构记忆，给 agent 一份可复用地图。
- MVP：选 20 个常见 SaaS 后台，记录任务 steps before/after，输出成本节省卡。
- 风险：网页改版会让记忆过期；需要 change detection 和 fallback。

## 16. YourMemory / memory as a personal AI substrate

- 来源：GitHub KingJulio8238/YourMemory。
- 链接：[GitHub](https://github.com/KingJulio8238/YourMemory)
- 置信度：中。
- 热的原因：个人 AI app 多了以后，用户会厌烦每个 app 都重新认识自己。
- 痛点：个人偏好、历史对话、项目上下文分散在不同工具里，无法迁移。
- AI-native wedge：个人控制的 memory layer，按 app 授权读取部分上下文。
- MVP：从“个人写作 / coding / calendar 三类 memory”切入，做本地 first + explicit permission。
- 风险：隐私敏感；消费者不一定愿意配置，B2B 可能更早付费。

## 17. Zeeker / LLM news intelligence swarm

- 来源：GitHub trend result EricZhou-zx/zeeker。
- 链接：[GitHub](https://github.com/EricZhou-zx/zeeker)
- 置信度：中。
- 热的原因：信息监控从 RSS 摘要进入“多源验证 + entity extraction + alerts”。
- 痛点：信息太多，用户要的不是摘要，而是早期信号和行动判断。
- AI-native wedge：面向特定垂直行业的信号雷达，自动聚合、去重、打分、提示异常。
- MVP：不要做通用新闻。选 AI infra 或医药政策一条线，输出“今天必须看的 5 个变化 + 为什么影响你”。
- 风险：新闻摘要同质化严重；如果没有专属工作流，很难收费。

## 18. Runner H / browser-use / UI automation agents

- 来源：GitHub趋势里 browser-use、HCompanyAI/runnerh-ai、Skyvern-AI/skyvern 同时出现。
- 链接：[browser-use](https://github.com/browser-use/browser-use)，[Runner H](https://github.com/HCompanyAI/runnerh-ai)，[Skyvern](https://github.com/Skyvern-AI/skyvern)
- 置信度：高。
- 热的原因：AI browser automation 从 demo 走向真实后台任务，开源项目 star 很高。
- 痛点：企业后台没有 API、字段多、流程长、异常多，人肉操作浪费时间。
- AI-native wedge：不是“浏览器 agent”，而是垂直流程 worker：发票、报表、采购、客服后台、CRM 数据修正。
- MVP：选一个高频后台流程，做 10 个客户的流程录制 + agent 执行 + 人类确认。
- 风险：泛化 agent 很难稳定；最早付费可能来自窄流程，不是通用浏览器控制。

## 本轮正式页选择

选择 `Agent Structural Memory Layer` 作为正式页，因为它同时被 HN + GitHub 多个项目验证，并且能清楚回答任务压缩：减少 agent 重复建立上下文。
