# 2026-05-15 AI hot-track candidates — slot 2

Repo: business-idea
Mode: multi-theme hot AI opportunity discovery
Public/private boundary: only public links and desensitized judgments. No private notes, credentials, Discord content, or personal data.

## Sources checked

- Hacker News Algolia / HN item pages
- GitHub repository metadata / README pages
- arXiv API signal from current agent-security research query

## Candidate notes

### 7. Agent failure regression harness

- Sources: HN Raindrop Local Agent Debugger, GitHub `raindrop-ai/workshop`, HN/GitHub `kalisky/skar`, HN/GitHub `radotsvetkov/agef`, GitHub `future-agi/future-agi`.
- Signal: several new tools point at the same job: capture agent behavior, inspect failures, turn runs into evals or evidence bundles.
- Pain: coding agent failures are hard to reproduce because prompt, context, tool calls, repo state and tests all interact.
- AI compression: turns a messy transcript and diff into a minimal failure path plus runnable regression test.
- Come / stay / spread / pay: teams come after a painful failed agent run; stay as regression packs accumulate; spread through PR receipts; pay for CI, private trace storage,脱敏 and audit export.
- MVP: local CLI that captures Claude Code / Codex trace, generates pytest / Vitest regression, and runs it in CI.
- Risk: if it becomes only a trace viewer, it falls into observability red ocean. The wedge must be "failure becomes test".
- Decision: promoted to formal MDX at `content/docs/developer-tools/agent-failure-regression-harness.mdx`.

### 8. Agent skills packaging / procedural memory layer

- Sources: GitHub `addyosmani/agent-skills`, GitHub `ComposioHQ/awesome-claude-skills`, GitHub `hyperbrowserai/skills`, Anthropic Claude Skills public docs as background pattern.
- Signal: skills repos are getting huge attention because agent output quality depends on reusable procedures, not just model weights.
- Pain: teams repeatedly teach agents the same repo conventions, testing habits, release steps and review rubrics.
- AI compression: converts scattered team knowledge into versioned executable instructions that agents load at the right moment.
- Come / stay / spread / pay: developers come to stop repeating instructions; stay if skills improve task success; spread skill packs; teams pay for private registry, linting, evals and rollout control.
- MVP: private skill registry with schema validation, usage telemetry and before/after task success tests.
- Risk: platform vendors may own the basic skill format; startup wedge should target enterprise governance or vertical skill packs.
- Decision: backlog. Strong but needs cleaner separation from generic prompt-library products.

### 9. Agent-native last-30-days research engine

- Sources: GitHub `mvanhorn/last30days-skill`, GitHub search metadata for recent research-agent repos.
- Signal: builders are packaging a repeatable workflow for finding high-engagement recent posts across Reddit, X, HN and Product Hunt.
- Pain: founders waste time reading stale trend reports; they need current pain signals and launch evidence.
- AI compression: pulls cross-platform public signals into a structured research brief with source links and engagement clues.
- Come / stay / spread / pay: founders come before choosing a wedge; stay for weekly opportunity scans; spread snippets; pay if it reliably surfaces leads before competitors.
- MVP: narrow to one buyer, e.g. B2B SaaS founders, and output 10 sourced pain clusters per week with validation questions.
- Risk: source access is brittle, noisy and easy to hallucinate. Must show exact links and confidence.
- Decision: inbox only. Useful internal pattern, but public product page needs stronger adoption proof.

### 10. Single-GPU autonomous research lab

- Sources: GitHub `karpathy/autoresearch`, nanochat / AI research automation discussions surfaced through GitHub metadata.
- Signal: a high-attention repo frames agents as an automated research loop around training and experiments, not just app copilots.
- Pain: small teams cannot afford large research ops, but need repeatable experiment design, training runs, logs and paper-like writeups.
- AI compression: agent writes hypotheses, launches experiments, reads metrics and drafts next run.
- Come / stay / spread / pay: indie researchers come for cheaper iteration; stay if the loop finds real improvements; spread experiment reports; pay for GPU orchestration and reproducibility.
- MVP: one domain, e.g. small LLM fine-tuning sweeps, with agent-generated experiment plans and locked evaluation scripts.
- Risk: can become demo theater if experiments are not statistically sound. GPU cost and benchmark leakage are real.
- Decision: backlog. Strong signal, but needs a sharper commercial buyer.

### 11. Lightweight personal agent runtime

- Sources: GitHub `HKUDS/nanobot`, GitHub metadata around ultra-lightweight personal agents.
- Signal: personal-agent repos are trying to move away from heavy frameworks toward small, local, deploy-anywhere runtimes.
- Pain: ordinary users and solo builders do not want LangChain-sized stacks for personal workflows.
- AI compression: wraps small automations, memory and tool calls into a personal agent that can run locally or cheaply.
- Come / stay / spread / pay: users come for personal automation; stay if the bot handles repeated chores; spread templates; pay for hosted sync, connectors and privacy.
- MVP: pick one repeated workflow, such as personal inbox triage or file organization, rather than broad "personal AI".
- Risk: personal agents have weak willingness to pay unless attached to a painful daily workflow.
- Decision: inbox only.

### 12. Agent-generated deterministic video / UI renderer

- Sources: GitHub `thehyperframes/hyperframes`, GitHub metadata for AI video creation through HTML rendering.
- Signal: some AI media tooling is moving from diffusion-only generation toward code-rendered scenes that agents can edit deterministically.
- Pain: marketers and educators want repeatable changes, brand consistency and script-to-video speed, not only pretty random clips.
- AI compression: turns script and brand rules into editable HTML/CSS/video timelines.
- Come / stay / spread / pay: creators come for fast explainers; stay for versioned edits; spread rendered clips; teams pay for templates, brand kits and export workflows.
- MVP: agent writes a 30-second product explainer as HTML scenes, exports video, then supports text-diff edits.
- Risk: crowded AI video market; must sell controllability and iteration, not generic video magic.
- Decision: backlog. Could become formal only with stronger user/customer evidence.
