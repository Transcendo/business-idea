# 2026-05-19 slot 02 — AI QA / browser agent release gate candidates

Source policy: public links only. Reddit was checked through `www.reddit.com` JSON/search and Jina reader; both returned 403/blocked, so no Reddit content is used as evidence this slot.

Daily counter after this file: 10 / 30 candidate leads, 2 / 5 formal MDX entries.

## Candidate 06 — AI QA Release Gate for vibe-coded apps

- Sources: HN Agent-QA (`https://news.ycombinator.com/item?id=48176493`), HN Frontend-VisualQA (`https://news.ycombinator.com/item?id=47678328`), Product Hunt `agent qa` / `ai testing`, GitHub Playwright MCP / Stagehand / Steel.
- Confidence: high enough for formal MDX.
- Why hot: AI coding/app builders increase release frequency; verification becomes the next bottleneck.
- Pain: users can generate apps faster than they can trust them.
- AI wedge: infer critical paths, run browser checks, compress failures into release receipts.
- MVP: preview URL + PR link + 3-8 user paths → Playwright run → evidence card + fix prompt.
- Risk: flaky tests and shallow business understanding.
- Status: published to `content/docs/developer-tools/ai-qa-release-gate.mdx`.

## Candidate 07 — Browser automation SDKs as production infra for agents

- Sources: `https://github.com/browserbase/stagehand`, `https://github.com/steel-dev/steel-browser`, `https://github.com/microsoft/playwright-mcp`.
- Confidence: medium-high.
- Why hot: agent products need browser sessions, cookies, proxies, snapshots, retries, debugging UI and repeatable actions.
- Pain: every AI web agent team rebuilds browser infrastructure before touching the real workflow.
- AI wedge: natural-language actions only where pages are unfamiliar; code/cached actions where repeatability matters.
- MVP: hosted session API + trace replay + fallback from AI action to deterministic selector.
- Risk: can become infra commodity unless paired with a vertical workflow or eval layer.

## Candidate 08 — Product Hunt cluster: autonomous QA engineer products

- Sources: Product Hunt `agent qa` showed Octomind, AgenticQA, TestSprite, Cekura, TestAI, TestMu AI; Product Hunt `ai testing` showed QA.tech and TestMu AI.
- Confidence: medium.
- Why hot: category density is rising; multiple teams use the same wording around AI QA engineer / AI testing agent.
- Pain: QA headcount is scarce, especially for small SaaS and agencies shipping many small changes.
- AI wedge: translate product intent into tests, maintain tests when UI changes, produce human-readable evidence.
- MVP: one vertical landing page checker, e.g. signup + onboarding + checkout.
- Risk: PH product density may signal copycat noise; need real retention data.

## Candidate 09 — Human-in-the-loop task marketplace for AI agents

- Sources: HN Show HN Gigiac (`https://news.ycombinator.com/item?id=48179202`) and public product URL (`https://gigiac.com/`).
- Confidence: medium-low.
- Why hot: agents are still stuck behind screens; many tasks need human verification, photos, local errands, physical observation, or data collection.
- Pain: AI agents cannot reliably execute real-world tasks; humans also need recurring compensation for data/work reuse.
- AI wedge: agents route work to humans or other agents, with task receipts and dataset licensing logic.
- MVP: narrow marketplace for human verification tasks requested by AI builders.
- Risk: marketplace cold start and quality control are brutal; likely needs a narrow initial vertical.

## Candidate 10 — Manual QA recording to E2E test generation

- Sources: HN Quretests (`https://news.ycombinator.com/item?id=47504297`, `https://quretests.com/`), Product Hunt AI testing cluster.
- Confidence: medium.
- Why hot: many teams already do manual QA; converting a human click path into maintainable tests is easier to adopt than asking AI to invent everything.
- Pain: manual QA evidence disappears after the bug is fixed; engineers still rewrite tests by hand.
- AI wedge: turn a recorded session into repo-style Playwright code plus screenshots and assertions.
- MVP: Chrome recorder + GitHub PR with generated test + failure video.
- Risk: generated assertions can be too shallow; needs repo-aware conventions to be trusted.
