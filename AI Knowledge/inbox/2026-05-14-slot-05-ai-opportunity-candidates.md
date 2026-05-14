# 2026-05-14 AI hot track candidates — slot 5

Slot: 10:00 Asia/Shanghai
Sources covered: Hacker News Algolia / item pages, GitHub REST API / README pages, Product Hunt feed check, official GitHub project pages.

## Candidate 25 — Agent-first browser runtime / human-like browser for agents

- Signal: Rotunda appeared on HN as “a browser built for agents with simulated typing”; at the same time browser-use, Stagehand, Chrome DevTools MCP, Vercel agent-browser and BrowserOS all show strong GitHub-side demand for browser agents.
- Sources: [HN Rotunda](https://news.ycombinator.com/item?id=48121824), [MonkeySee-AI/rotunda](https://github.com/MonkeySee-AI/rotunda), [browser-use/browser-use](https://github.com/browser-use/browser-use), [browserbase/stagehand](https://github.com/browserbase/stagehand), [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp), [Vercel agent-browser](https://github.com/vercel-labs/agent-browser), [BrowserOS](https://github.com/browseros-ai/BrowserOS).
- Pain: browser agents still break on dynamic UI, login state, bot checks, timing, visual state and opaque failures.
- AI compression: vague web task → browser observation → safe action → replayable trace → failure repair hint.
- MVP: agent browser runtime with persistent profile, accessibility-tree refs, screenshot replay, human handoff and regression tests.
- Confidence: high enough to update formal MDX. Updated `content/docs/ai-agents/browser-agent-execution-harness.mdx`.

## Candidate 26 — Endpoint Context Protocol / agent-readable web content negotiation

- Signal: HN surfaced “Browsers get HTML, AI agents get Markdown”. The underlying idea is not a full product yet, but it points at a real upcoming split: human browser surfaces and agent ingestion surfaces may need different representations.
- Sources: [HN item](https://news.ycombinator.com/item?id=48123241), [Endpoint Context Protocol site](https://endpointcontext.io), [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp).
- Pain: agents waste tokens scraping visual HTML and guessing intent from page chrome, cookie banners, nav and tracking wrappers.
- AI compression: request context → clean Markdown / JSON-LD / action schema for agents.
- MVP: middleware for docs and SaaS marketing sites that serves `text/markdown` or agent-specific context when the requester declares itself.
- Risk: standards are hard; without major crawler/browser/client adoption it may stay as a neat protocol page.
- Confidence: medium. Keep in backlog until there are more implementers or strong client support.

## Candidate 27 — SWEny / AI workflows as code

- Signal: HN showed SWEny as YAML workflows for AI agents used in production triage and E2E; README frames it as “Describe what you want, get a reliable DAG”, with scoped MCP tool sets and tracked tool calls.
- Sources: [HN item](https://news.ycombinator.com/item?id=48117635), [swenyai/sweny](https://github.com/swenyai/sweny).
- Pain: one-shot agent prompts are hard to repeat, audit and route. Teams want agent workflows that look more like CI pipelines than chat logs.
- AI compression: plain English task → multi-node DAG → scoped tools → structured outputs.
- MVP: GitHub PR triage workflow pack that creates reproducible DAGs for security scan, dependency check and Linear ticket creation.
- Risk: low repo traction so far; crowded with LangGraph, n8n, Pipedream, CI and internal agent runners.
- Confidence: medium-low. Interesting signal, not formal yet.

## Candidate 28 — Endy / local multi-agent control plane for coding CLIs

- Signal: HN item and README position Endy as a tmux-based control plane for Codex, OpenCode, CommandCode and Hermes, with durable `.logs/` and one command surface for spawning, watching and resuming agents.
- Sources: [HN item](https://news.ycombinator.com/item?id=48093381), [trentisiete/endy](https://github.com/trentisiete/endy).
- Pain: developers are starting multiple coding agents, but terminal panes, logs, resumes, kills and cost checks become chaos fast.
- AI compression: project task queue → isolated CLI agent runs → shared logs → dashboard / watch tree.
- MVP: local CLI wrapper that records every agent run, creates handoff cards and warns when multiple agents touch the same files.
- Risk: power-user niche; IDEs and existing agent CLIs may absorb the basics.
- Confidence: medium-low. Good product-shape clue for agent ops tooling.

## Candidate 29 — AICTL / native terminal + macOS AI agent

- Signal: HN showed AICTL as a native AI agent for terminal and macOS in Rust.
- Sources: [HN item](https://news.ycombinator.com/item?id=48127081), [AICTL site](https://aictl.app).
- Pain: CLI agents are useful but often feel bolted-on: slow startup, weak OS integration, fragile file/window handoff.
- AI compression: shell / file / app intent → local OS action with confirmation and logs.
- MVP: native macOS menu-bar + terminal bridge that handles file search, command drafting and app handoff without a full IDE.
- Risk: needs strong sandboxing and user trust; terminal agents can do real damage.
- Confidence: low-medium. Track only; source detail is thin.

## Candidate 30 — Sinain / personal context graph from screen and audio

- Signal: HN showed Sinain as capturing screen and audio into a knowledge graph shared with agents or peers.
- Sources: [HN item](https://news.ycombinator.com/item?id=48127505), [Sinain HUD](https://anthillnet.github.io/sinain-hud/).
- Pain: AI assistants lack the messy context of what the user just saw, heard, discussed and decided.
- AI compression: screen + audio stream → personal work memory graph → context handoff to agents.
- MVP: local-only meeting/screen memory that turns the last hour of work into searchable decisions and next actions.
- Risk: privacy is brutal; continuous capture needs local processing, clear deletion and strong trust.
- Confidence: medium as a direction, low as a public-page candidate until privacy model is clearer.

## Noise / rejected

- Product Hunt feed surfaced Apideck MCP again, but current feed-level evidence alone is not enough for a formal page.
- Small HN launches with 0-2 comments were treated as weak directional signals unless they matched a broader GitHub trend.
- No game/Steam item was promoted this slot; none of the strong current signals required the old game-market frame.
