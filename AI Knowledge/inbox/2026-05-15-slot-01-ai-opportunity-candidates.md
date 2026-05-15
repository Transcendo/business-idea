# 2026-05-15 AI hot-track candidates — slot 1

Repo: business-idea
Mode: multi-theme hot AI opportunity discovery
Public/private boundary: only public links and desensitized judgments. No private notes, credentials, Discord content, or personal data.

## Sources checked

- Hacker News Algolia / HN item pages
- GitHub repository metadata / README pages
- Product Hunt feed attempted; feed returned no usable items in this run
- Reddit public JSON attempted; blocked with 403, not used as evidence

## Candidate notes

### 1. Agent identity / policy / runtime layer

- Sources: HN Keycard post, Keycard article, Microsoft Agent Governance Toolkit, agentgateway, Pydantic AI, Vercel Workflow.
- Signal: agent security is splitting into transport, identity, policy and runtime layers. Microsoft's open governance toolkit and agentgateway's proxy framing show infra moving below the model layer.
- Pain: teams cannot tell which human, agent, sub-agent or tool call had authority for an action. Logs do not preserve delegation chains.
- AI compression: converts messy run context into identity map, policy decision and audit receipt while deterministic policy handles blocking.
- Come / stay / spread / pay: teams come because agent permissions are scary; stay because the sidecar runs every day; spread receipts in PRs and incident reviews; pay for audit, SSO, SIEM and centralized policies.
- MVP: shell/MCP sidecar that creates short-lived agent identities, checks five rules, emits `receipt.md`.
- Risk: platforms may absorb basic controls; noisy approval UX will kill retention.
- Decision: promoted to formal MDX at `content/docs/cybersecurity/agent-identity-policy-runtime.mdx`.

### 2. Machine-readable merchant verification for AI shopping agents

- Sources: HN submission `We built a machine-readable merchant verification layer for AI shopping agents`, GitHub `warwickwood-cell/gengeo-agent-registry`.
- Signal: low HN traction, but the problem is pointed: shopping agents need to verify merchant identity, return policies, supported actions and trust signals before transacting.
- Pain: agentic commerce breaks if agents cannot distinguish real merchant endpoints from SEO pages, affiliate spam or spoofed checkout flows.
- AI compression: agent can pick a merchant action path from a signed registry instead of scraping ambiguous web pages.
- Come / stay / spread / pay: merchants come if AI shopping traffic matters; agents stay if registry reduces failed purchases; spread through SDK / schema adoption; merchants or agent platforms pay.
- MVP: signed `merchant.json` validator plus Chrome/agent demo that refuses unverified stores.
- Risk: demand depends on AI shopping agents actually generating meaningful GMV; early repo has only 2 stars.
- Decision: inbox only. Needs stronger commerce adoption proof.

### 3. Local agent debugger / eval writer for coding agents

- Sources: HN `Raindrop – Local Agent Debugger`, GitHub `raindrop-ai/workshop`.
- Signal: repo has 187 stars and says it gives coding agents the power to write and run agent evals.
- Pain: developers cannot tell whether a coding agent failed because of bad context, bad tool sequence, flaky environment, or missing eval.
- AI compression: records local agent behavior and turns failures into runnable evals.
- Come / stay / spread / pay: developers come after a painful failed coding-agent run; stay if evals prevent regressions; spread through failing-case snippets; teams pay for shared traces and CI integration.
- MVP: wrapper around Claude Code / Codex that captures prompts, tool calls and diffs, then writes one replayable eval.
- Risk: overlaps with existing observability and agent control-plane tools; privacy of local traces is hard.
- Decision: strong backlog candidate, not formal yet.

### 4. Compliance checking for vibe coding teams

- Sources: HN `Show HN: Scope MCP, Compliance checking for vibe coding teams`, official landing page `scope-mcp.langguard.ai` surfaced by HN.
- Signal: tiny HN traction, but phrasing is sharp: vibe coding produces code fast, compliance review becomes the bottleneck.
- Pain: non-engineers and junior builders ship agent-written code without knowing security, privacy, license or policy risks.
- AI compression: checks code changes and repo context against a small ruleset before merge.
- Come / stay / spread / pay: teams come after a scary AI-generated diff; stay if it blocks real risk without slowing every commit; spread via PR comments; pay for team policies.
- MVP: GitHub app that comments on AI-looking diffs with policy violations and suggested fixes.
- Risk: noisy static analysis market; must anchor on AI-agent-specific change patterns.
- Decision: inbox only.

### 5. Durable TypeScript workflow layer for AI agents

- Sources: GitHub `vercel/workflow`, GitHub search result for durable, reliable, observable apps and AI agents.
- Signal: Vercel putting Workflow SDK language around agents suggests web teams need durable execution, retries, logs and long-running state for agentic apps.
- Pain: demo agents fit in one request; production agents need retries, timeouts, human waits, idempotency and observability.
- AI compression: not model magic; the value is making agent state machine work feel like ordinary app code.
- Come / stay / spread / pay: developers come when serverless request/response breaks; stay if workflow state survives failures; spread through templates; pay through platform usage.
- MVP: vertical workflow template for support refunds, research briefs or sales enrichment with human approval.
- Risk: platform vendors may own this as infra; startup wedge must be more opinionated or vertical.
- Decision: backlog. Could update agent session / state-machine pages later.

### 6. Multi-agent coding workspace / agentic development environment

- Sources: GitHub `generalaction/emdash`, GitHub `opencode`, GitHub `cline/cline`.
- Signal: high-star coding-agent repos keep moving from single assistant to parallel sessions, worktrees and provider-agnostic execution.
- Pain: once developers run multiple agents, the bottleneck becomes coordination, review, merge safety and handoff, not raw code generation.
- AI compression: runs several scoped attempts in parallel and summarizes tradeoffs.
- Come / stay / spread / pay: power users come for speed; stay if session state and review flow are clean; spread by sharing agent-run results; teams pay for governance and shared workspaces.
- MVP: local workspace manager that launches 3 agents on isolated worktrees and produces a compare-and-merge card.
- Risk: already crowded; strong overlap with existing `AI Coding Agent Control Plane` and `Agent Session Supervision Layer` pages.
- Decision: inbox only; avoid duplicate formal page today.
