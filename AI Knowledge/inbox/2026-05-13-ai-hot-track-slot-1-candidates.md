# 2026-05-13 slot 1 AI hot-track candidates

Time zone: Asia/Shanghai
Slot: 08:00 = 1

## candidate 1 — Statewright / agent state-machine guardrails

Sources:
- HN: https://news.ycombinator.com/item?id=48108778
- GitHub: https://github.com/statewright/statewright
- Official site: https://statewright.ai
- Docs: https://statewright.ai/docs

Signal:
- HN Show HN reached 60+ points and 20+ comments.
- README positions it as state machine guardrails controlling which tools an AI agent can use in each phase.
- Supports Claude Code, Codex, Cursor, opencode, Pi.

Judgment:
- Strong enough for formal MDX.
- The wedge is not another agent IDE. It is protocol/runtime workflow enforcement: planning gets read-only tools, implementation unlocks edits, testing only allows test commands.
- Pain is real because prompt-only constraints are soft, MCP/tool lists are growing, and coding agents now touch real files and shell commands.

Next validation:
- Check whether research results are reproducible.
- Watch whether Claude Code / Codex absorb phase-based tool permission natively.

## candidate 2 — Needle / tiny local tool-calling model

Sources:
- HN: https://news.ycombinator.com/item?id=48111896
- GitHub: https://github.com/cactus-compute/needle
- Hugging Face weights from README: https://huggingface.co/Cactus-Compute/needle

Signal:
- HN Show HN reached 200+ points and 80+ comments.
- README claims a 26M function-call model distilled from Gemini, running at very high token speed on Cactus.
- Comments immediately mapped it to CLI natural-language argument parsing, game/MOO command parser, Siri-like local core, and live demo requests.

Judgment:
- Interesting infra wedge: every app may want a tiny tool router rather than calling a large model for simple function selection.
- Strong pain: cloud LLMs are too expensive/slow/private for repeated local commands.
- Risk: distillation ToS concern appears in HN comments; repo setup had early access/runtime friction. Do not publish as formal page until licensing and reproducibility are clearer.

MVP angle:
- Tiny model SDK for app-specific command parsing: user speaks natural language, local model emits tool call JSON.
- First buyers: desktop apps, CLI tools, local-first personal AI, wearable/phone assistant prototypes.

## candidate 3 — Voker / analytics for AI agents

Sources:
- HN Launch HN: https://news.ycombinator.com/item?id=48109962
- Official site: https://voker.ai

Signal:
- YC S24 Launch HN.
- Site positioning: analytics platform for monitoring and improving AI agents in the wild; no more digging through logs, fix agents before users complain.
- HN comments asked how it differs from Langfuse and Amplitude AI agent analytics, and whether the right data model is raw traces or user-accomplished outcomes.

Judgment:
- Real market, but crowded. The sharper wedge is outcome analytics for agent products, not generic trace dashboards.
- Useful question: can it normalize across agents with different tools/policies by measuring task accomplishment rather than turns/tokens?
- Keep in backlog. Needs stronger differentiation before formal MDX.

MVP angle:
- Instrument one vertical agent, e.g. support/refund/email ops, and report completion, escalation, user correction, cost, latency, failure reason.
- Sell when the agent has enough traffic that PMs can no longer debug from logs.

## candidate 4 — Prempti / runtime guardrails for coding agents

Sources:
- HN: https://news.ycombinator.com/item?id=48112850
- Falco blog: https://falco.org/blog/introducing-prempti/
- GitHub tree from HN item: https://github.com/falcosecurity/prempti/tree/main

Signal:
- Falco frames coding agents as processes that read files, run shell commands, make network requests, and write code on behalf of developers.
- Prempti brings runtime security rules to that workflow.

Judgment:
- This overlaps with agent security gateway and coding-agent control-plane pages, but it reinforces the broader theme: agent guardrails are moving from prompt policy to runtime observation/enforcement.
- Keep as supporting source for future agent runtime security updates.

MVP angle:
- Local daemon that watches agent process behavior and emits risk cards: file access, network, shell, secret-like reads, destructive commands.
