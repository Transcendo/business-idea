# 2026-05-18 slot 03 — agent provenance / runtime evidence candidates

Slot: 09:00 Asia/Shanghai.

本轮刻意把来源从 HN/GitHub 拉开：HN Algolia、GitHub raw README、Hugging Face API、Product Hunt 搜索结果、IETF / EU AI Act 公开页面。Reddit search JSON 仍返回 `HTTP Error 403: Blocked`，未引用其内容。Product Hunt 页面直连返回 403，但 DuckDuckGo 公开搜索结果暴露了 Nfig AI / SmolAgents Product Hunt 页面，因此只当弱产品信号，不写正式判断依据的核心事实。

## 1. Agent Execution Provenance Container

- 来源：HN EPI story、EPI GitHub README、IETF SCITT、EU AI Act Article 12。
- 置信度：高。来源强，痛点清楚，且能和 coding/browser/workflow agent 的执行证据统一。
- 为什么现在热：agent 从聊天进入执行，企业会问“它到底做了什么、证据能否验签、事故怎么复盘”。
- 用户痛点：run log 散、聊天记录不可审计、PR/ticket/customer handoff 缺标准 receipt。
- AI 是否压缩任务：是。把工具调用、文件变更、外部来源、测试结果压成 reviewer/security/customer 都能读的 evidence packet。
- 用户为什么来/留/传播/付费：来是因为不敢信 agent run；留是 receipt 进 PR/ticket；传播是 run card；付费在审计、留存、私有部署、SIEM/GRC 集成。
- MVP：CLI/SDK wrapper 包一类 agent runner，生成 `agent-run.receipt.json` + markdown card + PR comment。
- 风险：平台内建、合规话术吹过头、日志含敏感信息、receipt 由 agent 自写会缺可信度。
- 处理：已发布正式页 `content/docs/developer-tools/agent-execution-provenance-container.mdx`。

## 2. Containerized AI Agent Dev Environment

- 来源：HN `I containerized my AI agents and dev tools`；GitHub `SamInTheShell/aetherion` README。
- 置信度：中高。真实开源工具，描述了多 agent CLI、dev container、登录态、toolchain、Ollama host 连接。
- 为什么现在热：开发者同时试 Claude Code、Codex、Gemini、Copilot CLI、OpenClaw/Hermes，环境污染和登录态冲突变成实际麻烦。
- 用户痛点：不同 agent 依赖、权限、HOME、凭证、工具链和本地模型连接方式不一致。
- AI 是否压缩任务：AI 本身不是核心，核心是把 agent execution environment 标准化；但它能让 agent 更快进入可复现执行。
- 用户为什么来/留/传播/付费：来是因为一条命令启动干净环境；留是 per-agent state；传播是开源 hacker 工具；付费需要团队版策略、镜像、审计、prebuilt enterprise image。
- MVP：面向 AI coding team 的 hardened devcontainer + agent profile manager。
- 风险：容易被 Dev Containers / GitHub Codespaces / Docker 模板吞掉；单人开源工具付费弱。
- 下一步验证：看 issue 是否出现企业安全、凭证隔离、多账号并行需求。

## 3. Local-first Agent Harness Orchestrator

- 来源：HN `Agetor - An open-source Harness Orchestrator`；GitHub `alamops/agetor` README。
- 置信度：中高。README 指向 kanban + per-task git worktree + child process + structured approvals。
- 为什么现在热：agent 并行后，问题从“如何问一个 agent”变成“如何管理十个 agent task”。
- 用户痛点：多 repo、多任务、多账号、多 worktree、审批和追问散落在 TUI/终端里。
- AI 是否压缩任务：AI 不压缩 UI；产品压缩的是 orchestration 与 human-in-the-loop 管理成本。
- 用户为什么来/留/传播/付费：来是本地跑多个 agent；留是任务板记录和 worktree isolation；传播是 builder demo；付费在团队审计、共享队列、policy、remote runner。
- MVP：本地 kanban + two agents + worktree + approval card + run receipt。
- 风险：和 existing IDE / GitHub Issues / Linear / Cursor background agent 重叠；local-first 商业化慢。
- 下一步验证：追踪 stars、issues 中是否有人要 remote team mode。

## 4. CPU-only Voice Agent Approximation

- 来源：HN `Cheap-IM – CPU-only voice agent approximating Thinking Machines' demo`；GitHub `kouhxp/cheap-im` README。
- 置信度：中。技术 demo 清楚，但商业需求还要验证。
- 为什么现在热：实时语音 / 视觉主动性 demo 变多，builder 开始证明“便宜拼装版”可跑在普通 laptop。
- 用户痛点：实时语音 agent 成本和部署复杂度高，很多场景只需要够用的低成本交互，不需要大模型端到端音视频。
- AI 是否压缩任务：在 live translation、friend detection、background task 这类场景可压缩多步操作，但延迟和鲁棒性是硬门槛。
- 用户为什么来/留/传播/付费：来是低成本实时交互；留在私有/本地场景；传播靠 demo；付费在 SDK、边缘部署、行业场景模板。
- MVP：CPU laptop / edge box 的 receptionist demo，记录 latency、barge-in、fallback、人类接管。
- 风险：demo 好看但稳定性差；平台语音模型降价后会挤压空间。
- 下一步验证：找客服、门店、教育、会议辅助场景里的低成本部署需求。

## 5. Agent Browser Action API / Product Hunt signal

- 来源：Product Hunt 搜索结果指向 `Nfig AI - API for AI Agents to browse, click and do tasks`；直连 Product Hunt 页面本轮 403。
- 置信度：中低。只可作为产品信号，不能当强事实源。
- 为什么现在热：browser agent 从 demo 进入产品化，开发者想把“浏览、点击、执行任务”变成 API。
- 用户痛点：普通 scraping / RPA 对动态网页、登录态、人类接管、失败恢复支持差。
- AI 是否压缩任务：如果能把“找入口、理解页面、点击、确认结果”封成可靠 action primitive，就能压缩网页操作任务。
- 用户为什么来/留/传播/付费：来是少写 Playwright/RPA 脚本；留是稳定执行与监控；传播是 demo；付费按 action volume / browser session / success SLA。
- MVP：只支持 3 个高频 SaaS 表单任务，提供 replay、human takeover、receipt。
- 风险：网页变动、封禁、captcha、隐私和账号安全；大平台可能限制自动化。
- 下一步验证：需要补官方站、pricing、用户评论，暂不进正式页。

## 本轮噪音 / 未采用

- Reddit：`https://www.reddit.com/r/LocalLLaMA/search.json?...` 返回 `HTTP Error 403: Blocked`。不引用。
- Product Hunt：直连 `nfig-ai` / `smolagents` 返回 `HTTP Error 403: Forbidden`。仅保留搜索结果暴露的产品名和定位，不作为正式页核心证据。
- GitHub Search API：返回 rate limit exceeded。本轮改用 raw README 和已知 HN 链接补证据。
