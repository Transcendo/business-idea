# 2026-05-18 slot 02 — AI PR review / agent-generated diff candidates

Timezone: Asia/Shanghai. Public-source-only notes. Do not publish raw notes as strategy or private intelligence.

Source accessibility:
- Hacker News Algolia: accessible.
- GitHub REST API / GitHub Docs / GitHub Marketplace: accessible.
- CodeRabbit official docs/site: accessible.
- Reddit search JSON and old.reddit search: `HTTP Error 403: Blocked`; no Reddit content quoted.
- Product Hunt search pages: `HTTP Error 403: Forbidden`; no Product Hunt content quoted.

## Candidate 1 — Agent PR Review Evidence Layer

Status: promoted to formal MDX.
Confidence: high.
Sources:
- GitHub Docs: https://docs.github.com/en/copilot/using-github-copilot/coding-agent
- GitHub Docs: https://docs.github.com/en/copilot/using-github-copilot/coding-agent/using-copilot-to-work-on-an-issue
- HN: https://news.ycombinator.com/item?id=43692476
- HN: https://news.ycombinator.com/item?id=45604177
- HN: https://news.ycombinator.com/item?id=47986749
- GitHub: https://github.com/areibman/bottleneck
- GitHub: https://github.com/flamestro/deff
- CodeRabbit: https://www.coderabbit.ai/

Why now:
Coding agents are moving from IDE chat to PR-producing workflows. Review becomes the bottleneck.

Pain:
Reviewer gets large AI-generated diffs with weak context. CI green is not enough. Humans need a fast way to decide merge / reject / split / ask for tests.

AI wedge:
Generate a PR evidence packet: intent, diff grouping, risky files, test evidence, missing validation, unrelated changes, agent run trace, human checklist.

MVP:
GitHub App for bot-authored or agent-labeled PRs. Add one review evidence comment and a local CLI for risk-ordered diff reading.

Risk:
GitHub and existing review bots may absorb generic summarization. Need agent-specific evidence, not more review comments.

## Candidate 2 — Bottleneck-style AI-native PR review client

Status: backlog.
Confidence: medium-high.
Sources:
- HN: https://news.ycombinator.com/item?id=45604177
- GitHub: https://github.com/areibman/bottleneck

Why now:
Bottleneck explicitly targets background agents working on multiple concurrent threads. That is a new reviewer workload, not just a UI preference.

Pain:
GitHub web review is slow when one human supervises many agent PRs.

AI wedge:
Batch review queue with risk triage, grouped diffs, agent-thread context, and reviewer decision shortcuts.

MVP:
Electron or Tauri review inbox for GitHub PRs tagged as agent-generated. Measure review throughput versus GitHub web.

Risk:
If it only improves UI speed, GitHub can copy it. Needs proprietary review heuristics and team rules.

## Candidate 3 — AI-generated diff CLI for local review

Status: backlog.
Confidence: medium.
Sources:
- HN Vdiff: https://news.ycombinator.com/item?id=47986749
- GitHub deff: https://github.com/flamestro/deff

Why now:
Developers reviewing AI diffs often want terminal-native, fast, file-by-file inspection rather than browser tabs.

Pain:
Large generated diffs are hard to scan. Reviewers lose track of added/deleted lines, file order, and risk priority.

AI wedge:
Not a full AI reviewer. Use AI to prioritize files, label risk clusters, and prepare commands/tests; keep human in terminal.

MVP:
Wrap an existing diff viewer with `agent-review` metadata: file risk score, suspected intent, missing tests.

Risk:
CLI-only market may be small. Must integrate with GitHub comments and CI to avoid becoming a toy.

## Candidate 4 — Auditable AI-written code language / IR

Status: backlog.
Confidence: medium.
Sources:
- HN: https://news.ycombinator.com/item?id=47401438
- GitHub: https://github.com/jasisz/aver

Why now:
Aver frames the problem as code designed for AI to write and humans to review. This is a sharper lens than another programming language launch.

Pain:
Generated code optimizes for model output, not human auditability.

AI wedge:
Constrain output into a smaller auditable representation with explicit intent, invariants, and review hints.

MVP:
Start as a code-review annotation format for generated TypeScript/Python changes, not a new language.

Risk:
New languages are brutally hard to adopt. Better wedge may be review IR attached to PRs.

## Candidate 5 — Agent workflow orchestrator with merge-readiness receipts

Status: backlog.
Confidence: medium-high.
Sources:
- HN Optio: https://news.ycombinator.com/item?id=47484364
- GitHub: https://github.com/jonwiggins/optio
- GitHub API observed repo metadata: 962 stars, updated 2026-05-17.

Why now:
Kubernetes-style orchestration for coding agents is appearing because agent tasks are becoming long-running, parallel, and merge-oriented.

Pain:
Teams can launch agents, but cannot reliably know which task is stuck, which PR is safe, and what evidence was produced.

AI wedge:
Every orchestrated task outputs merge-readiness receipt: scope, files, tests, failures, risk, ownership, next action.

MVP:
Plugin for one orchestrator that posts receipts to GitHub PRs and Slack.

Risk:
Orchestrator itself may own the receipt layer. Independent product must integrate broadly across Copilot/Codex/Claude/Cursor.
