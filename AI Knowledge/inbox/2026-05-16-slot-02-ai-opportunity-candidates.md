# 2026-05-16 Slot 02 — AI opportunity candidates

Timezone: Asia/Shanghai
Slot: 08:30

## Sources covered

- Hacker News Algolia / item API
- GitHub REST API / public repository README files

## Candidate leads

### 1. Mobile GUI Agent Runtime — promoted to formal page

- Sources:
  - GitHub mobileClaw: https://github.com/eggbrid2/mobileClaw
  - GitHub iOS MCP: https://github.com/witchan/ios-mcp
  - GitHub AIOPE: https://github.com/XNet-NGO/AIOPE
  - GitHub AndroidWorld: https://github.com/google-research/android_world
  - GitHub MobileAgent: https://github.com/X-PLUG/MobileAgent
- Why hot now: GUI agents are moving from browser/desktop into real Android and iOS control layers. Open projects now expose screenshots, accessibility trees, taps, app launch, shell, MCP and task routing.
- User pain: many workflows only exist inside mobile apps and have no reliable API. QA, operations, BPO and support teams still burn human time tapping phones.
- AI task compression: natural-language task -> observed screen state -> bounded tool policy -> action sequence -> replay / run card.
- Why users come/stay/share/pay: they come with a fragile repeated phone task; stay if the workflow runs daily; share run cards and failure screenshots; pay for devices, workflow reliability, audit and private deployment.
- MVP: 3 Android workflows only: App regression, mobile ops fill/report, support lookup. Measure 7-day success rate and human handoff rate.
- Risk: iOS restrictions, Android ROM variance, sensitive permissions, high maintenance. Needs explicit handoff and no promise of magic full autonomy.
- Confidence: high enough for formal MDX.

### 2. Remote coding agent chat bridge / command center

- Sources:
  - GitHub cc-telegram-bridge: https://github.com/cloveric/cc-telegram-bridge
  - GitHub LiteLLM agent platform: https://github.com/BerriAI/litellm-agent-platform
  - GitHub Containarium: https://github.com/footprintai/Containarium
- Why hot now: Claude Code / Codex style CLI agents are becoming long-running workers. Users want to supervise them away from the laptop, resume sessions and isolate execution.
- User pain: multi-agent runs are scattered across terminals, SSH boxes and chat threads. It is hard to know what is blocked, what needs approval and what shipped.
- AI task compression: phone/chat command -> isolated coding session -> progress stream -> approval gate -> commit / PR receipt.
- MVP: Telegram/Slack bridge for 5 trusted developers, with session resume, sandbox, diff approval and failure summary.
- Risk: security is brutal. One sloppy bridge can leak repo secrets or run destructive commands. Needs permissions, sandbox, audit and opt-in repo scopes.
- Confidence: medium-high; probably better as developer-tools page after more HN / user discussion evidence.

### 3. Self-hosted coding-agent sandbox platform

- Sources:
  - GitHub Containarium: https://github.com/footprintai/Containarium
  - GitHub LiteLLM agent platform: https://github.com/BerriAI/litellm-agent-platform
  - HN item on insecure / expensive Terraform guardrails: https://news.ycombinator.com/item?id=48153874
- Why hot now: teams are letting agents modify code, infra and databases. They need execution boxes, vault proxies, budget boundaries and run receipts.
- User pain: local agents can touch too much. Cloud agents are opaque. Infra mistakes are expensive.
- AI task compression: task -> isolated workspace -> limited credentials -> verifier -> receipt.
- MVP: GitHub repo sandbox runner with secrets proxy, egress log and PR-only output for one team.
- Risk: crowded with cloud IDEs and CI. Differentiation must be safety / evidence, not just "run an agent in Docker".
- Confidence: medium.

### 4. Tiny tool-calling / local intent router

- Sources:
  - HN Show HN Needle item: https://news.ycombinator.com/item?id=48111896
  - GitHub Needle: https://github.com/cactus-compute/needle
- Why hot now: tool calling through big frontier models is expensive and high latency for simple routing. A 26M distilled model doing tool selection points toward edge / local routing.
- User pain: desktop agents, mobile agents and embedded workflows need fast `{tool, args, confidence}` decisions without paying frontier-model latency every time.
- AI task compression: utterance -> small local router -> tool call or fallback to large model.
- MVP: router benchmark for 20 common desktop/mobile tools with confidence thresholds and fallback policy.
- Risk: small routers fail on ambiguous or high-risk commands. Needs abstention, eval and safe fallback.
- Confidence: medium; overlaps existing Tiny Tool-Calling Router page, use as update evidence rather than new page.

### 5. Agent memory beyond vector embeddings

- Sources:
  - HN item "Vector embeddings are the wrong default for AI agent memory": https://news.ycombinator.com/item?id=48131492
  - AtomicMemory SDK: https://github.com/atomicstrata/atomicmemory-sdk
- Why hot now: long-running agents need memory that is structured, editable, attributable and testable. Pure vector recall is too fuzzy for agent state.
- User pain: agents forget decisions, retrieve irrelevant snippets or cannot explain why they remembered something.
- AI task compression: raw episode -> structured memory event -> retrieval by task / entity / decision -> auditable context pack.
- MVP: TypeScript SDK for coding agents that records decisions, files touched, unresolved questions and test outcomes, then injects only relevant memory.
- Risk: "agent memory" is crowded and vague. Must prove task success lift or token reduction.
- Confidence: medium.

### 6. Embedded AI builder inside SaaS products

- Sources:
  - HN Show HN Gigacatalyst: https://news.ycombinator.com/item?id=48110593
  - Public launch discussion on HN item comments / product positioning
- Why hot now: SaaS users increasingly expect to customize workflows with AI, but most SaaS vendors cannot build a full agent builder.
- User pain: internal users ask for small custom workflows, dashboards and automations that product teams cannot ship quickly.
- AI task compression: user request inside SaaS -> scoped mini workflow / extension -> review -> embedded action.
- MVP: SDK for one vertical SaaS category, letting admin users create safe AI-assisted mini workflows using only whitelisted app objects.
- Risk: if too powerful, it becomes unsafe app-builder complexity; if too weak, it is just a chatbot widget.
- Confidence: low-medium; needs stronger evidence from SaaS operators before public MDX.

## Noise / rejected

- Generic "AI wrapper" repos with no clear usage pain were skipped.
- No game / Steam candidate was promoted because no strong AI+game signal appeared in this slot.
