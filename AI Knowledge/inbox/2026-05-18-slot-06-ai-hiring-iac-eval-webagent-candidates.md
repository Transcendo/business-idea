# 2026-05-18 slot 06 candidates — AI hiring / IaC guardrails / eval gates / web-agent data

Timezone: Asia/Shanghai. Slot: 6 / 10:30.

Progress before slot: 25 / 30 candidate leads, 5 / 5 formal MDX entries.
Progress after slot: 30 / 30 candidate leads, 5 / 5 formal MDX entries.
Formal MDX action: none. Daily formal-page cap was already reached, so this slot only adds backlog candidates and closes the daily circuit breaker.

Source coverage this round:
- HN Algolia: accessible. Used Gonfire, ops0, Nexa-Gauge, Chassis, SimPersona signals.
- GitHub REST/raw README: accessible for ops0-cli, nexa-gauge, chassis.
- Official/project pages: Gonfire page accessible; arXiv pages accessible; Hugging Face API and dataset pages accessible.
- Hugging Face: accessible for web-agent datasets and benchmark signals.
- Product Hunt: `https://www.producthunt.com/products/vapi`, search, and AI category returned `HTTP Error 403: Forbidden`; no Product Hunt content cited.
- Reddit: `reddit.com` JSON search and `old.reddit.com` search returned `HTTP Error 403: Blocked`; no Reddit content cited.
- Exa-backed `web_search` / `web_extract`: returned 402 credit limit, so this run used direct public APIs/pages instead.

## Candidate 26 — AI Coding Agent Steering Assessment

Status: backlog.
Confidence: medium-high.

Public sources:
- HN Gonfire item: https://news.ycombinator.com/item?id=48169029
- Gonfire official site: https://gonfire.io/

Why now:
Hiring for engineers is colliding with AI coding. Banning AI in interviews is already detached from real work, but letting candidates use agents without observing how they steer them gives noisy signals. Gonfire’s site states the assessment is built around the assumption that candidates will use AI.

Pain:
Teams do not just need to know whether a candidate can produce code. They need to know whether the candidate can decompose a task, constrain an agent, inspect generated diffs, catch hallucinated APIs, ask for tests, and decide when to stop.

AI-native wedge:
A hiring sandbox where candidates solve a realistic task with an AI coding agent. The product records prompts, interventions, tool choices, rejected suggestions, tests run, final diff, and review notes, then scores agent-steering behavior rather than raw typing speed.

Come / stay / spread / pay:
Companies come when old interviews stop predicting AI-era engineering output. They stay if the assessment correlates with on-the-job code review and agent supervision. It spreads through candidate-facing scorecards and hiring manager debriefs. Payor is the engineering org or recruiter, paying per assessment or seat.

MVP:
Run 20 candidates through one repo task. Compare ordinary take-home review with agent-steering logs. Measure whether reviewers can make faster, more confident hire/no-hire decisions.

Risk:
Candidate privacy, accessibility, model/tool variance, and prompt-style Goodharting can poison the signal. The product must score observable engineering judgment, not “who knows one magic prompt”.

## Candidate 27 — Agent IaC Policy Gate

Status: backlog.
Confidence: high.

Public sources:
- HN ops0 item: https://news.ycombinator.com/item?id=48153874
- ops0 GitHub repo: https://github.com/ops0-ai/ops0-cli
- ops0 README: https://raw.githubusercontent.com/ops0-ai/ops0-cli/main/README.md
- GitHub API metadata observed: 68 stars, updated 2026-05-16.

Why now:
Coding agents are moving from app code into infrastructure files. Terraform, IAM, networking, database, and deployment changes are exactly where a confident but wrong agent can create security exposure or surprise spend.

Pain:
Cloud teams already use policy gates, but AI agents write and run changes inside local dev loops before the normal review process sees them. A human may only notice after a destructive command, insecure policy, or expensive resource lands in a PR.

AI-native wedge:
A CLI or MCP-style gate between Claude Code / Codex / Gemini CLI and IaC changes. When an agent writes `.tf` files or proposes cloud commands, the gate runs lint, policy, vulnerability, cost, and destructive-action checks, then returns failures as tool-call feedback so the agent can self-remediate.

Come / stay / spread / pay:
DevOps teams come after one scary agent-generated infrastructure diff. They stay if the gate catches risky changes before CI. It spreads as PR comments and blocked-command receipts. Payor is platform engineering / security / FinOps.

MVP:
Support Terraform only. Detect public S3 buckets, broad IAM, destroy commands, expensive instance classes, and missing tags. Run on 50 agent-written IaC diffs and compare caught risks with human review.

Risk:
Terraform Cloud, Checkov, OPA, cloud scanners, and CI tools can absorb generic checks. The startup wedge must be agent-loop-native: instant feedback, command blocking, self-remediation hints, and run receipts.

## Candidate 28 — Cache-Aware LLM Evaluation Release Gate

Status: backlog.
Confidence: medium-high.

Public sources:
- HN Nexa-Gauge item: https://news.ycombinator.com/item?id=48156013
- Nexa-Gauge GitHub repo: https://github.com/harnexa/nexa-gauge
- Nexa-Gauge README: https://raw.githubusercontent.com/harnexa/nexa-gauge/main/README.md
- GitHub API metadata observed: 32 stars, updated 2026-05-18.

Why now:
Teams are shipping LLM, RAG, and agent features, but evaluation is still often a spreadsheet, a few prompts, and a vibe check. As prompts, models, tools, and retrieval change weekly, manual evals become slow and expensive.

Pain:
A product team cannot answer: did this new prompt improve relevance but hurt grounding? Did the model change increase cost? Which cases were re-run? Which artifacts can be reused? Without repeatable release gates, every launch feels like guessing.

AI-native wedge:
A typed evaluation graph that only runs required nodes, caches intermediate artifacts, estimates cost, and emits structured per-case reports for relevance, grounding, red-team behavior, LLM-as-judge scores, and release readiness.

Come / stay / spread / pay:
Teams come before shipping model/prompt changes. They stay if eval becomes a release checklist. It spreads through release reports and failing cases shared in PRs. Payor is AI product engineering, platform AI, or QA.

MVP:
Pick one RAG support bot. Build 100 regression cases, run two prompt/model variants, cache retrieved context and judge outputs, then produce a release gate: ship / hold / needs human review.

Risk:
The eval market is crowded. Generic framework positioning is weak. The stronger product wedge is a painful vertical gate: support QA, sales copilot grounding, medical/legal answer safety, or coding-agent regression.

## Candidate 29 — Multi-Agent Experiment Chassis

Status: backlog.
Confidence: medium.

Public sources:
- HN Chassis item: https://news.ycombinator.com/item?id=48173115
- Chassis GitHub repo: https://github.com/theo-kirby/chassis
- Chassis README: https://raw.githubusercontent.com/theo-kirby/chassis/main/README.md
- GitHub API metadata observed: 6 stars, updated 2026-05-18.

Why now:
Agent builders are moving from one assistant to fleets: planner, executor, critic, evaluator, researcher, synthesizer. The next bottleneck is not starting an agent; it is keeping long-running agent experiments organized, isolated, and reproducible.

Pain:
Researchers and builders run multi-agent experiments in ad hoc terminals and scripts. Prompts, configs, intermediate files, failures, and task hierarchy get lost. That makes it hard to compare runs or turn a promising experiment into a product workflow.

AI-native wedge:
A minimal Docker-based chassis for agent fleets: one filesystem convention, per-agent system prompts/config, task directories, logs, shared artifacts, and replayable experiment receipts.

Come / stay / spread / pay:
AI researchers and agent builders come when experiments become messy. They stay if each run is reproducible and easy to compare. It spreads through templates for common multi-agent patterns. Payor is less clear unless packaged as team infrastructure for labs, eval vendors, or AI product teams.

MVP:
Support three fleet templates: researcher/critic/synthesizer, coding agent/reviewer/tester, and web agent/evaluator. Measure whether teams can rerun and compare experiments without manually reconstructing context.

Risk:
This can stay a hacker scaffold with weak willingness to pay. Commercial value needs a clear buyer: eval teams, AI labs, or companies running many agent experiments under compliance constraints.

## Candidate 30 — Web-Agent Trajectory Data QA Layer

Status: backlog.
Confidence: medium-high.

Public sources:
- HN SimPersona item: https://news.ycombinator.com/item?id=48173669
- SimPersona arXiv: https://arxiv.org/abs/2605.14205
- WebChain arXiv: https://arxiv.org/abs/2603.05295
- WebChain Hugging Face dataset: https://huggingface.co/datasets/webagentlab/WebChain
- ST-WebAgentBench Hugging Face dataset: https://huggingface.co/datasets/ST-WebAgentBench/st-webagentbench
- Hugging Face API showed WebChain last modified 2026-05-12 and tagged for web-agent / GUI-agent trajectories.

Why now:
Web agents need real browsing traces, not just synthetic tasks. WebChain describes 31,725 real-world web interaction trajectories and 317,993 steps; ST-WebAgentBench frames safety and trustworthiness policies for web agents. SimPersona points to buyer-persona grounding for commerce agents from clickstreams.

Pain:
Teams building web agents struggle to know whether a model understands pages, plans long-horizon tasks, respects safety policies, and represents different user behaviors. Raw traces are valuable, but dirty, risky, and hard to turn into reliable training/eval data.

AI-native wedge:
A data QA and packaging layer for web-agent trajectories: detect broken traces, align screenshot / DOM / action triples, classify task intent, redact sensitive fields, attach safety policies, and export benchmark-ready cases.

Come / stay / spread / pay:
Agent teams come because better trajectories improve grounding and planning. They stay if the pipeline turns messy browsing logs into training and eval assets. It spreads through public benchmark cards. Payor is web-agent labs, commerce AI teams, and companies with private browsing/task logs.

MVP:
Take 5,000 public or consented trajectories. Build validators for action validity, DOM/screenshot alignment, PII redaction, task success labels, and policy violations. Output a small benchmark pack plus model-training sample.

Risk:
Data rights, website terms, privacy, and distribution shift are nasty. Academic datasets do not automatically imply a commercial market. The business only works if customers have private traces they cannot clean or evaluate cheaply themselves.

## Noise / rejected this round

- Product Hunt and Reddit were attempted but blocked, so no unsupported market claims from those platforms were used.
- Low-point HN posts were treated as weak early signals, not proof of demand.
- Generic “multi-agent orchestration” without a concrete user workflow was not promoted beyond backlog.
