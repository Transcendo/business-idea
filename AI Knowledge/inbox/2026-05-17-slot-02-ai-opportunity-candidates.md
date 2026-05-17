# 2026-05-17 Slot 02 AI Opportunity Candidates

Timezone: Asia/Shanghai
Slot: 02 — 08:30
Scope: 多主题热门 AI 赛道机会发现；本轮聚焦 computer-use agent、agent 可靠性、agent 安全、coding agent trace、SaaS embedded builder。

## Sources covered

- Hacker News Algolia: Show HN / AI agent / coding agent / MCP security queries.
- GitHub REST API: Cua, Open Computer Use, Agent-S, Raindrop Workshop, agent security repos.
- Product Hunt Atom feed: Agentmemory, Standboy, Kimi WebBridge, HasData, Loova Agents, OpenHuman and related AI launches.
- arXiv API: GUI / computer-use agent papers from 2026-05-12 to 2026-05-14.
- Hugging Face public API: MCP / agent security model signal.
- Reddit JSON attempted: r/LocalLLaMA, r/ClaudeAI, r/ChatGPTCoding all returned HTTP 403 Blocked. No Reddit evidence used.

## Candidate leads

### 1. Computer-Use Agent Sandbox Runtime — promoted to formal page

Sources:
- Cua GitHub: https://github.com/trycua/cua
- Open Computer Use GitHub: https://github.com/coasty-ai/open-computer-use
- Agent-S GitHub: https://github.com/simular-ai/Agent-S
- Product Hunt Standboy: https://www.producthunt.com/products/standboy
- arXiv Video2GUI: https://arxiv.org/abs/2605.14747
- arXiv ProjGuard: https://arxiv.org/abs/2605.13631
- arXiv Covering Human Action Space: https://arxiv.org/abs/2605.12501
- arXiv Holistic Evaluation and Failure Diagnosis: https://arxiv.org/abs/2605.14865

Judgment:
Full-desktop computer-use agent is getting real developer attention. The startup opportunity is not a consumer “AI controls my computer” assistant. It is sandboxed runtime, replay, permissions, human handoff, regression and trace diagnosis for cross-app work.

Confidence: high enough for formal MDX.

### 2. Agent trace debugger that lets coding agents write their own evals — backlog

Sources:
- Raindrop Workshop GitHub: https://github.com/raindrop-ai/workshop
- HN / coding agent queries surfaced recurring security and trace reliability concerns around AI coding agents.

Pain:
Coding agents fail in ways that are hard to inspect: hidden context windows, tool call chain, bad intermediate judgment, flaky test, wrong file scope. Developers need local trace visibility and eval generation, not another chat UI.

AI-native wedge:
User runs a coding agent; the debugger records model outputs, tool calls and decisions; the agent then reads its own trace and writes evals against the codebase.

Why not formal yet:
Strong but overlaps existing Agent Failure Regression Harness and Agent Structural Memory Layer. Needs a sharper page only if tied to “trace-to-eval loop”.

Confidence: medium.

### 3. Embedded AI builder for SaaS products — backlog

Sources:
- HN: Show HN Gigacatalyst — Extend your SaaS with an embedded AI builder, 60 points / 27 comments: https://news.ycombinator.com/item?id=48110593

Pain:
Vertical SaaS teams want “let users build mini automations / AI apps inside our product” but do not want to build prompt orchestration, permissions, connectors and UI builder from scratch.

AI-native wedge:
A SaaS embeds a constrained AI builder that can create workflows only against that SaaS object model and permission layer.

Why users come / pay:
SaaS vendors pay if it increases feature adoption and lets power users automate inside the product without exporting data to Zapier or a separate agent tool.

Risk:
Could become generic low-code builder mush. Needs a vertical object model and permission story.

Confidence: medium.

### 4. State-machine guardrails for reliable agents — duplicate / monitor

Sources:
- HN: Show HN Statewright — Visual state machines that make AI agents reliable, 124 points / 54 comments: https://news.ycombinator.com/item?id=48110593
- GitHub: https://github.com/statewright/statewright

Pain:
Long-running agents lose state, repeat steps, call tools out of order, and fail to make progress guarantees.

AI-native wedge:
Turn agent workflows into explicit state machines with guardrails, transitions, allowed tools and failure branches.

Why not formal:
Already has formal page `content/docs/ai-agents/statewright-agent-state-machine-guardrails.mdx`. This slot only reinforces the existing thesis.

Confidence: high but duplicate.

### 5. MCP / agent security scanner and gateway refresh — duplicate / monitor

Sources:
- HN / GitHub: Snyk Agent Scan: https://github.com/snyk/agent-scan
- HN: AgentPort: https://agentport.sh/
- HN: DataDome agent trust / MCP security article: https://datadome.co/agent-trust-management/why-anthropics-connector-expansion-makes-mcp-security-a-business-imperative/
- Hugging Face MCP tool-use quality model signal: https://huggingface.co/rogue-security/mcp-tool-use-quality-ranger-0.6b

Pain:
Agent tools and MCP servers are becoming a new supply-chain and runtime permission surface.

Why not formal:
Already covered by MCP Agent Security Gateway, Agentic Security Evaluation Harness, and Agent Identity Policy Runtime. Could become a weekly refresh later if new source strength rises.

Confidence: medium-high but duplicate.

### 6. Live-web bridge / data layer for agents — backlog

Sources:
- Product Hunt Kimi WebBridge: https://www.producthunt.com/products/kimi-ai-assistant
- Product Hunt HasData: https://www.producthunt.com/products/hasdata

Pain:
Agents need current web data, but arbitrary browsing and scraping is brittle, slow, and compliance-sensitive.

AI-native wedge:
A live-web bridge that turns messy pages into structured, cited, rate-limited, policy-aware agent inputs.

Why users come / stay:
Builder teams come when browser agents fail on modern sites or need fresh data; they stay if the bridge gives stable schemas, citations, cache, egress controls and failure receipts.

Risk:
Crowded space: Firecrawl, Tavily, Exa-style APIs, browser runtimes and search providers can all attack this. Needs a sharper vertical or compliance edge.

Confidence: medium.

### 7. AI video production director / cinematic workflow agent — backlog

Sources:
- Product Hunt Loova Agents: https://www.producthunt.com/products/loova-agents

Pain:
Video generation tools can create clips, but creators still spend time on script, shot planning, asset consistency, review, edits, rights and delivery formats.

AI-native wedge:
A video “director” agent that turns brief → storyboard → asset plan → generation jobs → review checklist → publish package.

Risk:
Many products are demo-heavy. The hard paid problem is production ops and approval receipts, not another prompt-to-video surface.

Confidence: medium-low.

## Noise / rejected

- Product Hunt novelty hardware around agent status is interesting for distribution but too weak as a standalone startup page.
- Generic “AI assistant controls everything” claims were rejected unless tied to a repeatable workflow, sandbox, or audit trail.

## Daily count update after this slot

- Candidate leads: 14 / 30
- Formal MDX entries: 2 / 5
- Circuit breaker: not triggered. Formal pages are still below the cap, and candidate leads are far below 30.
