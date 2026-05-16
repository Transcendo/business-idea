# 2026-05-16 slot 01 AI opportunity candidates

Slot: 08:00 Asia/Shanghai
Mode: multi-theme hot AI opportunity discovery
Sources covered: Hacker News Algolia / HN item pages, GitHub Search API / repository metadata / READMEs, Product Hunt Atom feed.

## 1. Local LLM hardware fit layer

Status: promoted to formal MDX.
Confidence: high.
Sources:
- HN: Show HN: Find the best local LLM for your hardware, ranked by benchmarks, 2026-05-15, 277 points / 63 comments: https://news.ycombinator.com/item?id=48146369
- GitHub: whichllm: https://github.com/Andyyyy64/whichllm
- GitHub: Anubis OSS: https://github.com/uncSoft/anubis-oss

Why now:
- Local LLM supply is exploding, but users still cannot answer which model actually fits their machine and task.
- whichllm and Anubis both point to the same pain: hardware-specific, recency-aware benchmark decisions beat generic parameter-count rankings.

Pain:
- Users waste time and bandwidth downloading models that are too slow, too large, or worse than smaller newer models.
- Teams cannot preserve a reproducible local model configuration across machines.

AI-native wedge:
- Diagnose hardware, run short task probes, combine public benchmark metadata, then generate a model / backend / quantization run card.

MVP:
- macOS + Ollama / MLX CLI that outputs `llmfit.yaml` for coding, Chinese summary, JSON extraction.

Risk:
- Open-source tools may absorb basic recommendation; paid value needs team run cards, private benchmark suites, and device selection reports.

## 2. IaC guardrails for coding agents

Status: backlog.
Confidence: medium.
Sources:
- HN: Block AI coding agents from shipping insecure/expensive Terraform: https://news.ycombinator.com/item?id=48153874
- GitHub: ops0 CLI: https://github.com/ops0-ai/ops0-cli

Why now:
- Coding agents are writing Terraform and cloud config, where a bad diff can destroy resources or create surprise cost.

Pain:
- Human review is too slow for every agent iteration, but blindly letting agents run Terraform is reckless.

AI-native wedge:
- A local CLI / MCP tool that scans each agent-written IaC diff, blocks destructive commands, returns fixable policy failures as tool-call errors.

MVP:
- Start with Terraform only, Claude Code / Codex hooks, three checks: destroy block, public exposure, monthly cost spike.

Risk:
- This is security-sensitive and needs high precision. A noisy tool will be disabled.

## 3. Code context budget layer for coding agents

Status: backlog.
Confidence: medium-high.
Sources:
- GitHub: SDL-MCP: https://github.com/GlitterKill/sdl-mcp

Why now:
- Coding agents now burn huge context windows reading full files and irrelevant code during long debug sessions.

Pain:
- Token waste, slow runs, and worse answers from too much low-signal context.

AI-native wedge:
- Index code into symbol cards / graph summaries, then expose a controlled escalation path via MCP instead of dumping whole files.

MVP:
- One language first, e.g. TypeScript: symbol graph, call sites, owner files, recent changes, and “expand only if needed”.

Risk:
- Needs proveable output quality gains, not just lower token count. Existing IDEs and code search tools may add similar context routing.

## 4. Local control plane for parallel coding agents

Status: backlog; overlaps existing session supervision / coding control-plane pages.
Confidence: medium.
Sources:
- Product Hunt feed: AgentRail, “A local control plane for AI coding agents”: https://www.producthunt.com/products/agentrail
- GitHub: Emdash: https://github.com/generalaction/emdash
- GitHub: cmux: https://github.com/manaflow-ai/cmux

Why now:
- Developers are running multiple coding-agent CLIs in parallel and need session switching, notifications, queueing, and handoff.

Pain:
- Agent sessions get lost across terminals; users miss blockers and cannot see which branch / task / agent owns what.

AI-native wedge:
- A local cockpit that tracks agent sessions, branches, blockers, cost, and next human action.

MVP:
- Terminal wrapper for Claude Code / Codex / Gemini CLI with session registry and blocker notifications.

Risk:
- Crowded direction. Needs a sharper wedge such as “agent blocker triage” or “PR-ready handoff receipt” to avoid becoming yet another terminal.

## 5. Reusable context / brief layer across AI tools

Status: backlog.
Confidence: medium.
Sources:
- Product Hunt feed: Relay, “Stop repeating yourself to every AI”: https://www.producthunt.com/products/relay-15
- HN: Ask HN around shared context in AI-native environments: https://news.ycombinator.com/item?id=48143975

Why now:
- Users now talk to many AI tools and repeat the same project context, preferences, decisions, and constraints.

Pain:
- Context repetition wastes time and creates inconsistent answers. Teams also lack a clean boundary between reusable facts and sensitive data.

AI-native wedge:
- A local/private context brief generator that exposes only task-relevant facts to each AI tool, with expiry and redaction.

MVP:
- Browser/desktop extension that turns a folder or project note into tool-specific context packets for ChatGPT, Claude, Codex, Cursor.

Risk:
- Memory products are everywhere. Value depends on provenance, privacy, and whether context actually improves task success.

## 6. Agent memory persistence layer

Status: backlog.
Confidence: medium.
Sources:
- GitHub: MemMachine: https://github.com/MemMachine/MemMachine

Why now:
- Agent frameworks are moving from stateless calls to long-running assistants that need episodic, profile, and working memory.

Pain:
- Teams rebuild ad hoc memory stores and cannot control what an agent should remember, forget, or cite.

AI-native wedge:
- Policy-driven memory layer: what gets remembered, who can inspect it, when it expires, and how it is evaluated.

MVP:
- Narrow to one vertical: sales assistant memory or coding-agent project memory with provenance and deletion.

Risk:
- Generic vector-memory wrappers are too easy to copy. Need governance and evaluation, not just storage.
