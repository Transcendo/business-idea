# 2026-05-18 slot 04 candidates: voice QA, agent memory, desktop/research agents

Timezone: Asia/Shanghai. Slot 4 = 09:30.

Progress before slot: 15 / 30 candidate leads, 3 / 5 formal MDX entries.
Progress after slot: 20 / 30 candidate leads, 4 / 5 formal MDX entries.

Source coverage this slot:
- HN Algolia direct API: voice agents, agent memory, deep research, browser/desktop agent queries.
- GitHub REST API / README: memoirs, mcp-agora, YourMemory, hyperresearch, agent-desktop.
- Product Hunt public product page: Vapi. Product Hunt search/topic HTML was accessible but search result extraction remained weak; only product page and visible metadata were used.
- Official docs/blogs: Vapi docs, LiveKit Agents docs, AG2 LiveAgent blog, deepsense.ai enterprise realtime voice article.
- Reddit: r/LocalLLaMA and r/ChatGPTCoding JSON search returned `HTTP Error 403: Blocked`; no Reddit claims used.

## Candidate 1 — Voice Agent QA Scorecard

Confidence: high. Published as formal MDX: `content/docs/ai-agents/voice-agent-qa-scorecard.mdx`.

Signal:
- Product Hunt Vapi page positions Vapi as “Build, test and deploy voicebots in minutes rather than months”. Its review prompts surface production questions: call latency under 500ms, voice quality, barge-in.
- Vapi docs navigation includes Testing, Scorecard, Monitoring, Debugging voice agents, Handoff tool, IVR navigation.
- LiveKit Agents docs expose testing/evaluation, turn detection, interruptions, agents & handoffs.
- AG2 and deepsense.ai both frame low-latency native audio / realtime voice as the enterprise barrier.

Pain:
Teams can demo a voice agent but cannot prove it is safe to receive real calls. The scary parts are latency P95, interruption handling, wrong fields, bad handoff, and silent regressions after prompt/model changes.

AI-native wedge:
Turn historical calls and business rules into automated voice-agent regression tests, then output latency / barge-in / extraction / handoff / write-back scorecards and release gates.

MVP:
For one vertical task, ingest 20脱敏 transcripts and 5 handoff rules, generate 30 test calls, run them against an existing endpoint, and produce a release-gate report.

Risk:
Platforms can absorb shallow monitoring. The wedge must be cross-platform, release-gate oriented, and vertical-specific.

Sources:
- Product Hunt Vapi: https://www.producthunt.com/products/vapi
- Vapi docs: https://docs.vapi.ai/
- LiveKit Agents docs: https://docs.livekit.io/agents/
- LiveKit testing docs: https://docs.livekit.io/agents/start/testing/
- AG2 LiveAgent: https://docs.ag2.ai/latest/docs/blog/2026/05/12/LiveAgent/
- deepsense.ai realtime voice AI: https://deepsense.ai/blog/realtime-voice-ai-in-the-enterprise-overcoming-latency-with-native-audio-models/
- HN AG2 item: https://news.ycombinator.com/item?id=48138922

## Candidate 2 — Local-First Cross-Agent Memory Control Plane

Confidence: medium.

Signal:
- HN surfaced multiple memory/MCP projects in early May 2026: memoirs, mcp-agora, YourMemory, Sigma Guard, Stigmem.
- `sachitrafa/YourMemory` had 219 stars, claimed Ebbinghaus forgetting curve decay and +16pp better recall than Mem0 on LoCoMo.
- `misaelzapata/memoirs` positions itself as local-first long-term memory for AI agents, MCP + HTTP + CLI, SQLite + sqlite-vec + FTS5, no cloud.
- `cioffiAI/mcp-agora` positions itself as cross-agent persistent memory for Claude Code, Codex, ChatGPT, Gemini CLI.

Pain:
Agents forget project decisions, repeat work across IDEs/models, and cannot share durable context without leaking private data to SaaS memory layers.

AI-native wedge:
A local memory control plane that records durable decisions, conflicts, provenance, expiration/forgetting, and per-agent access rules, exposed through MCP.

MVP:
Index one repo plus terminal/agent transcripts, extract stable decisions, serve top-k context via MCP, and measure repeated-question reduction across two coding agents.

Risk:
This overlaps with existing agent memory pages. Public page should only ship if framed around control plane, conflict resolution, and governance rather than generic vector memory.

Sources:
- HN YourMemory item: https://news.ycombinator.com/item?id=47982418
- YourMemory: https://github.com/sachitrafa/YourMemory
- memoirs: https://github.com/misaelzapata/memoirs
- mcp-agora: https://github.com/cioffiAI/mcp-agora

## Candidate 3 — Deep Research Evidence Vault

Confidence: medium-high.

Signal:
- HN: Airbyte Agents had 155 points / 48 comments on 2026-05-05.
- HN: Statewright had 126 points / 55 comments on 2026-05-12 and frames reliability for agents through state machines.
- `jordan-gibbs/hyperresearch` had 303 stars and positions itself as an agent-driven research knowledge base with persistent searchable wiki and source provenance.
- Smaller HN items around Sourcery and writing deep-research agents show builder density.

Pain:
Deep research agents output long reports, but teams cannot easily verify what was fetched, reuse prior research, or audit why a conclusion changed.

AI-native wedge:
Every research run creates a persistent evidence vault: fetched sources, claims, citations, contradictions, freshness, and reusable query paths.

MVP:
Run the same market-research prompt through a baseline deep research agent and an evidence-vault version; compare citation reuse, contradiction detection, and time-to-update.

Risk:
Research tools are crowded. A startup needs a vertical workflow where auditability matters: investing, procurement, policy, scientific review, legal, enterprise sales.

Sources:
- Airbyte Agents HN: https://news.ycombinator.com/item?id=48023496
- Statewright: https://github.com/statewright/statewright
- Hyperresearch: https://github.com/jordan-gibbs/hyperresearch
- Sourcery HN: https://news.ycombinator.com/item?id=48002105

## Candidate 4 — Desktop Agent Action Trace SDK

Confidence: medium.

Signal:
- HN: `agent-desktop` got 99 points / 44 comments on 2026-05-02.
- `lahfir/agent-desktop` had 666 stars and exposes OS accessibility trees with structured JSON output and deterministic element refs.
- HN also surfaced UI trace fingerprinting for LLM browser agents, pointing to privacy/safety questions around agent actions.
- `Layrr` appeared as a point-click-edit-any-site npm package signal.

Pain:
Desktop/browser agents can click real apps, but teams lack stable action traces that can be replayed, reviewed, redacted, and handed to support/security.

AI-native wedge:
A trace SDK that records observe-decide-act steps, element refs, screenshots, app metadata, secrets redaction, and replayable failure clips for desktop agents.

MVP:
Wrap one desktop automation CLI, run 50 tasks, and generate a review card for each failure: intended action, observed element, actual click, rollback option, redaction result.

Risk:
OS permissions, privacy, and app-specific brittleness are nasty. It may be a feature inside sandbox/runtime vendors unless the trace format becomes portable.

Sources:
- agent-desktop HN: https://news.ycombinator.com/item?id=47989511
- agent-desktop GitHub: https://github.com/lahfir/agent-desktop
- Layrr npm: https://www.npmjs.com/package/layrr
- Browser agent fingerprinting arXiv: https://arxiv.org/abs/2605.14786

## Candidate 5 — Voice Agent Vertical Failure Library

Confidence: medium.

Signal:
- Voice agent tooling is moving from build/deploy to testing/monitoring.
- HN surfaced PropertyPal AI for estate agents and AG2 realtime voice tooling in the same week.
- deepsense.ai argues enterprise voice AI needs architecture built around latency and natural interaction, not chatbot patterns.

Pain:
Generic voice agent QA misses the weird failures that matter in each vertical: house viewing times, insurance disclosure, clinic intake, recruiting availability, field-service address confirmation.

AI-native wedge:
A shared but privacy-safe library of vertical failure scenarios and test cases, generated from脱敏 calls and mapped to field-level assertions.

MVP:
Start with one vertical, e.g. real estate lead qualification. Collect 100脱敏 transcripts, generate 80 scenario tests, and sell them as a regression pack for teams building on Vapi/LiveKit/Twilio.

Risk:
Data access is the moat and the bottleneck. Without real failure cases, it becomes generic prompt advice.

Sources:
- Product Hunt Vapi: https://www.producthunt.com/products/vapi
- Vapi docs: https://docs.vapi.ai/
- HN PropertyPal AI item: https://news.ycombinator.com/item?id=48052825
- deepsense.ai realtime voice AI: https://deepsense.ai/blog/realtime-voice-ai-in-the-enterprise-overcoming-latency-with-native-audio-models/

## Noise / not promoted

- Product Hunt search HTML was too dynamic to reliably extract search results this run. Only Vapi product page was used as a concrete Product Hunt source.
- Reddit returned 403 for search JSON, so no Reddit-derived market claims were used.
- Several HN memory projects had low points/comments. They are useful as builder-density signals, not standalone market proof.
