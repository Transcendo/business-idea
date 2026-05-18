# 2026-05-18 slot 05 candidates — research agent / browser skills / adversarial eval

Timezone: Asia/Shanghai. Slot: 5 / 10:00.

Source coverage this round:
- HN Algolia: accessible. Used AI research agent / Perplexity Agent Skills / adversarial agent signals.
- GitHub REST/raw: accessible for Open Deep Research, Actionbook, BUX.
- Official docs/blogs: accessible for Google Gemini Deep Research, Google Help, Microsoft Research, Perplexity Research.
- Reddit: `https://www.reddit.com/r/OpenAI/search.json?...` and `r/LocalLLaMA/search.json?...` returned `HTTP Error 403: Blocked`; no Reddit content cited.
- Product Hunt: search and product pages returned 403 in the later extraction attempt; no Product Hunt content cited.

## Candidate 21 — Research Agent Citation Verifier

Status: promoted to formal MDX.

Public sources:
- Google Gemini Deep Research blog: https://blog.google/products/gemini/google-gemini-deep-research/
- Google Help for Deep Research sources/export: https://support.google.com/gemini/answer/15719111?hl=en
- LangChain Open Deep Research: https://github.com/langchain-ai/open_deep_research
- HN item for Perplexity Agent Skills: https://news.ycombinator.com/item?id=48159261
- Perplexity Research: https://research.perplexity.ai/articles/designing-refining-and-maintaining-agent-skills-at-perplexity

Why now: Deep Research is no longer a novelty prompt. Google, Perplexity, OpenAI-style products and open-source runtimes are turning it into a repeated work product. The next bottleneck is trust: whether a report’s claims are actually supported by its citations.

Pain: founders, analysts, consultants, product teams and lawyers use AI research to save time, then spend the saved time checking every link. A polished report with weak citations is worse than no report because it travels with false confidence.

AI-native wedge: upload a research report; extract claims; map each claim to source snippets; label support / partial / unsupported / stale / weak source; generate an evidence card before the report is forwarded.

Come / stay / spread / pay: users come before sending a report to a boss or client; stay because every AI report needs review; spread the evidence card; pay when wrong research creates reputational, financial or legal cost.

MVP: verify 10 AI-generated market research reports, measure unsupported-claim discovery rate and time saved versus manual checking.

Risk: platforms may add basic citation checking; independent product needs cross-platform input, private-source connectors, industry templates and reviewer receipts.

## Candidate 22 — Agent Skill Quality Review Layer

Status: backlog.

Public sources:
- Perplexity Research on designing and maintaining Agent Skills: https://research.perplexity.ai/articles/designing-refining-and-maintaining-agent-skills-at-perplexity
- HN submission: https://news.ycombinator.com/item?id=48159261

Why now: agent skills/plugins are becoming the new workflow packaging layer. Perplexity’s article says its Agents team reviews Skill PRs like code and treats Skill quality as a serious product surface.

Pain: teams will create hundreds of internal skills, but bad triggers, bloated context, stale instructions and unsafe tool assumptions silently degrade agents.

AI-native wedge: a linter/reviewer for agent skills that checks trigger clarity, context cost, stale commands, permissions, eval coverage and gotchas before a skill lands in a team registry.

Come / stay / spread / pay: agent platform teams come when agents behave inconsistently; stay if review becomes CI for skill updates; spread via PR review comments; pay for private registries, evals and policy templates.

MVP: take 30 public skills, run static + LLM review, compare findings with human agent builders.

Risk: small teams may not have enough skills to pay; platform-native skill stores may absorb basic linting.

## Candidate 23 — Browser Action Manual / UI Automation Compression Layer

Status: backlog.

Public sources:
- Actionbook GitHub: https://github.com/actionbook/actionbook
- Actionbook README says browser snapshots are slow/brittle and action manuals can save tokens: https://raw.githubusercontent.com/actionbook/actionbook/main/README.md
- Browser Use BUX: https://github.com/browser-use/bux

Why now: browser-use agents are moving from demos to real workflows, but page snapshots, login walls, SPAs, dropdowns and per-step observation burn time and tokens.

Pain: users want agents to operate SaaS products, but pure visual/browser agents are slow, flaky and expensive.

AI-native wedge: record or generate “action manuals” for high-frequency websites so agents call structured steps first and fall back to UI automation only when needed.

Come / stay / spread / pay: builders come because browser agents fail on real sites; stay if manuals reduce token cost and retries; spread through shared manuals; pay for hosted manuals, auth handling, monitoring and enterprise site packs.

MVP: choose 5 SaaS flows, compare action-manual execution against screenshot-only agent execution on speed, token use and success rate.

Risk: website DOM changes can rot manuals; API partnerships or browser extension data may be needed.

## Candidate 24 — Out-of-Distribution Agent Adversarial Scenario Generator

Status: backlog.

Public sources:
- Microsoft Research: Whimsical Strategies Break AI Agents: https://www.microsoft.com/en-us/research/articles/whimsical-strategies-break-ai-agents-generating-out-of-distribution-adversarial-strategies-at-scale/
- HN submission for the Microsoft Research article: https://news.ycombinator.com/item?id=48136032

Why now: agent evals often test normal paths. Microsoft Research’s framing points at whimsical / out-of-distribution strategies that break agents at scale.

Pain: teams ship agents after passing scripted evals, then real users do strange, indirect, adversarial or simply messy things.

AI-native wedge: generate weird but plausible task strategies for a target agent, run them in a sandbox, and produce failure clusters plus guardrail patches.

Come / stay / spread / pay: agent teams come after embarrassing failures; stay if it becomes pre-release red-team; spread through failure cards; pay for scenario generation, sandbox runs and regression suites.

MVP: run 100 generated odd strategies against 3 open-source browser/task agents, measure new failures not caught by normal evals.

Risk: too researchy unless tied to a concrete release gate and real business tasks.

## Candidate 25 — Personal Browser Worker Box

Status: backlog.

Public sources:
- Browser Use BUX: 24/7 Claude Code agent for Playwright-style browser automation with Browser Use Cloud, Telegram and a real browser: https://github.com/browser-use/bux
- Actionbook GitHub: https://github.com/actionbook/actionbook
- HN “Computer Agents – Agents that work while you sleep”: https://news.ycombinator.com/item?id=47203385

Why now: coding agents and browser-use tools make it realistic to leave a task-running worker online, but users need safe scoping, credentials, notifications and handoff.

Pain: “agent that works while I sleep” is attractive until it touches logins, messages, purchases or public actions without oversight.

AI-native wedge: a personal browser worker runtime with task queue, credential vault boundary, action preview, human approval checkpoints, Telegram/Slack handoff and run receipt.

Come / stay / spread / pay: builders come for repetitive browser chores; stay if overnight tasks finish with receipts; spread via before/after task cards; pay for hosted workers, browser sessions, approvals and integrations.

MVP: support 3 safe workflows: scrape public pages, fill draft-only forms, compare prices without purchasing. Measure completion rate and human approval burden.

Risk: can become creepy or dangerous fast. Must explicitly block irreversible external actions unless approved.

## Noise / rejected this round

- Generic “AI research assistant” clones without claim verification or source-bound workflow. Too easy for platforms to absorb.
- Search-result-only Product Hunt snippets. Product Hunt extraction was unstable/403, so not enough for formal citation.
- Reddit-only complaints. Reddit access was blocked, so no unsupported user-pain quotes were used.
