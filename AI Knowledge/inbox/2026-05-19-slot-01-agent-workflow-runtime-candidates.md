# 2026-05-19 slot 01 AI opportunity candidates

时区：Asia/Shanghai。Slot：08:00 = 1。

本轮来源覆盖：HN Algolia、GitHub API/raw README、Hugging Face daily papers/API、官方 README/文档直连。Reddit search JSON 返回 `HTTP Error 403: Blocked`；Product Hunt AI category 返回 `HTTP Error 403: Forbidden`；本轮没有引用不可访问平台内容。

## 1. Durable Agent Workflow Runtime

- 置信度：高。
- 公开信号：Vercel Workflow SDK 面向 apps 和 AI agents 提供 durability、reliability、observability、suspend/resume/state；OpenAI Agents SDK 把 handoffs、guardrails、human-in-the-loop、sessions、tracing 作为核心概念；Google ADK 强调 build/evaluate/deploy agent workflows；HN 出现 runtime-agnostic AI agent workflow spec。
- 用户痛点：agent demo 能跑一次，生产流程会遇到暂停、审批、重试、幂等、状态丢失、外部工具失败和失败后难恢复。
- AI-native wedge：把多步骤 agent 任务封成 run spec，runtime 负责节点状态、暂停恢复、人工审批、trace、成本、失败回放和 run receipt。
- 为什么用户会来：已经在试 agent，但不敢让 agent 执行业务动作。
- 为什么留：每个 run 都沉淀可复查状态和恢复路径。
- 为什么传播：run card 能被业务、工程、合规一起看懂。
- 为什么付费：托管 runner、私有部署、审批策略、审计日志、SaaS 集成、成本控制。
- MVP：从销售/运营后台任务切入，只支持 research/classify/draft/approve/writeback 五类节点，验证 100 次真实 run 的完成率和恢复时间。
- 风险：OpenAI、Google、Vercel、LangChain、Zapier、n8n 可能吸收；如果做成通用画布，会陷入低付费意愿。
- 处理：已发布正式页 `content/docs/developer-tools/durable-agent-workflow-runtime.mdx`。
- Sources: [Vercel Workflow](https://github.com/vercel/workflow), [Workflow README](https://raw.githubusercontent.com/vercel/workflow/main/packages/workflow/README.md), [OpenAI Agents SDK](https://github.com/openai/openai-agents-python), [Google ADK](https://github.com/google/adk-python), [HN item](https://news.ycombinator.com/item?id=48147471), [itsharness README](https://raw.githubusercontent.com/3IVIS/itsharness/main/README.md)

## 2. Agent Data Egress Monitor for Coding Tools

- 置信度：中。
- 公开信号：HN 出现“Do you know what data your AI coding agent sends to the cloud?”讨论；coding agent 普遍会读取 repo、terminal、git diff、测试输出、环境错误和依赖信息。
- 用户痛点：团队不知道 agent 把哪些代码片段、日志、secret 附近上下文、issue 内容发送给哪个模型或服务。
- AI-native wedge：本地代理拦截 coding agent 的 outbound payload，分类代码、日志、secret risk、PII、第三方 URL，并输出 egress receipt。
- 为什么用户会来：安全/合规团队已经开始问 AI coding 数据边界。
- 为什么留：每次 agent run 都留下数据外发证据，能对比工具版本和团队策略。
- 为什么传播：一张“本次 AI coding run 外发了哪些数据”的 receipt 很适合进 PR/安全群。
- 为什么付费：团队策略、DLP、审计保留、私有网关、企业模型代理。
- MVP：先支持 Claude Code / Codex / Cline / Cursor 的本地网络与文件读取审计，不做拦截，只做证据包。
- 风险：工具厂商可能内置；网络层可能被加密和本地进程绕过；过度拦截会影响开发体验。
- Sources: [HN item 48179203](https://news.ycombinator.com/item?id=48179203), [OpenAI Agents SDK tracing/guardrails signal](https://github.com/openai/openai-agents-python)

## 3. Terminal Destructive Command Guard for Agents

- 置信度：中。
- 公开信号：HN 出现“Preventing AI agents from executing destructive terminal commands”；项目指向 terminal-guardian-mcp。Agent 有 shell 权限后，`rm`、迁移、部署、写库、删分支都变成真实风险。
- 用户痛点：现有 agent 容易把终端当万能工具，团队缺少命令级风险评分、审批和回放。
- AI-native wedge：MCP/shell wrapper 在命令执行前解析意图、路径、git 状态、环境变量和风险级别，高风险命令必须人工批准。
- 为什么用户会来：谁都不想让 agent 在本地或 CI 上误删东西。
- 为什么留：策略越贴近团队 repo 和命令历史，误报越少。
- 为什么传播：拦下一次危险命令就是天然传播材料。
- 为什么付费：企业策略库、团队审计、CI 集成、私有 runner、合规报表。
- MVP：只支持 shell 命令风险分类 + allow/deny/approve + replay log，先接 Claude Code / Codex CLI。
- 风险：过度保守会让 agent 不可用；厂商可能内置 shell approval；命令风险需要上下文，不是简单黑名单。
- Sources: [HN item](https://news.ycombinator.com/item?id=48180667), [terminal-guardian-mcp repo](https://github.com/7Majesty-M/terminal-guardian-mcp)

## 4. Enterprise MCP Gateway Registry

- 置信度：中高。
- 公开信号：GitHub 搜索显示 `agentic-community/mcp-gateway-registry` 定位为 enterprise-ready MCP Gateway & Registry，强调 OAuth、dynamic tool discovery、集中管理；Microsoft 也维护官方 MCP server catalog。
- 用户痛点：MCP server 多了以后，团队不知道哪些工具可信、谁能调用、版本怎么回滚、secret 怎么管、审计在哪里。
- AI-native wedge：集中注册 MCP server、工具 schema、权限、OAuth、测试用例和调用日志，让 agent 只能调用被批准的工具版本。
- 为什么用户会来：MCP 从个人配置进入团队后，配置漂移和权限风险马上变成管理问题。
- 为什么留：工具调用历史和权限策略越积越有价值。
- 为什么传播：团队内部会分享“可安装 MCP 工具目录”和“某工具被禁用的风险 receipt”。
- 为什么付费：SSO/OAuth、RBAC、审计、私有 registry、工具测试、策略模板。
- MVP：只做私有 MCP registry + smoke test + approval workflow，不做通用 agent 平台。
- 风险：Anthropic、Microsoft、OpenAI 或云厂商可能把 registry 做成平台能力；小团队可能不愿单独付费。
- Sources: [mcp-gateway-registry](https://github.com/agentic-community/mcp-gateway-registry), [Microsoft MCP catalog](https://github.com/microsoft/mcp), [Activepieces MCP/AI automation signal](https://github.com/activepieces/activepieces)

## 5. Agent Harness Safety Auditor

- 置信度：中。
- 公开信号：Hugging Face daily papers 出现 `Auditing Agent Harness Safety`；GitHub 上 promptfoo、Langwatch、Google ADK 都把 agent testing / eval / deploy 放到显眼位置。
- 用户痛点：很多 agent 不是模型本身危险，而是 harness 给了错误工具、错误权限、错误恢复策略和错误评测集。
- AI-native wedge：读取 agent harness 配置、工具权限、prompt、eval、sandbox、secret policy，生成安全评分和修复建议。
- 为什么用户会来：上线前需要知道 agent harness 是否会放大模型风险。
- 为什么留：每次配置改动都需要重新审计，适合进 CI。
- 为什么传播：安全评分卡可以贴进 PR、release gate、合规文档。
- 为什么付费：CI gate、团队策略、红队用例库、审计留存、私有部署。
- MVP：支持 LangGraph / OpenAI Agents / ADK 三类配置文件，先做静态检查和少量动态 smoke test。
- 风险：容易和通用 LLM eval 混在一起；如果只给泛泛建议，价值不够。
- Sources: [HF paper 2605.14271](https://huggingface.co/papers/2605.14271), [promptfoo](https://github.com/promptfoo/promptfoo), [Langwatch](https://github.com/langwatch/langwatch), [Google ADK](https://github.com/google/adk-python)
