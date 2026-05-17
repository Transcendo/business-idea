# 2026-05-17 Slot 05 AI Opportunity Candidates

Timezone: Asia/Shanghai
Slot: 05 — 10:00

## Source coverage

- GitHub REST / raw README / issues: Cline repo, CLI README, SDK README, headless CLI issues.
- npm registry: `@cline/sdk` public package metadata.
- Product Hunt Atom feed: Raybeam appeared in the current feed as macOS screen sharing signal.
- Reddit JSON: attempted r/ChatGPTCoding search for Cline SDK / headless, returned HTTP 403 Blocked; no Reddit evidence used.
- Official docs / project pages: Cline docs page was reachable but rendered through Mintlify JS, so raw GitHub docs were used as the stronger source.

## Candidate leads added

### 29. Headless Coding Agent Runtime — promoted to formal page

- Sources: GitHub `cline/cline`, Cline CLI README, Cline SDK README, npm `@cline/sdk`, GitHub issues #9729 and #10569.
- Why now: coding agents are escaping the IDE into terminal, CI/CD, SDK embedding, task boards and product automation.
- Pain: teams cannot rely on a human staring at an IDE chat for CI fixes, dependency upgrades, issue triage, docs sync and low-risk maintenance tasks.
- AI-native wedge: repo + task + budget + allowed tools + test command in; isolated agent run + PR / failure receipt out.
- MVP: one GitHub runner that starts a branch, runs a headless agent, enforces path/budget limits, runs tests, opens PR or emits failure receipt.
- Confidence: high. Public source strength is good, and GitHub issues expose real headless runtime pain.

### 30. MacOS screen-share / support context capture for AI agents — backlog

- Sources: Product Hunt current Atom feed entry for Raybeam, plus adjacent evidence from the previous AI Debug Evidence Recorder page.
- Why now: screen sharing is becoming an input surface for AI support, debugging and remote assistance, not just human-to-human calls.
- Pain: support and engineering teams still lose context when a user shares a screen but the important state, console, network and timeline are not captured as structured evidence.
- AI-native wedge: capture a short macOS session, extract user actions and visible state, generate a support/debug handoff card.
- MVP: lightweight macOS screen-share recorder with local redaction, event timeline, one-click export to Linear / GitHub / Slack.
- Confidence: medium-low. Product Hunt proves fresh surface-level interest, but it is not enough for another formal page unless tied to structured evidence capture.

## Rejected / monitor notes

- No strong AI+game signal in this slot.
- No weak Product Hunt AI wrapper was promoted. Raybeam is kept as adjacent support/debug context, not a formal AI page.
- Reddit was attempted but blocked; do not invent Reddit signal.
