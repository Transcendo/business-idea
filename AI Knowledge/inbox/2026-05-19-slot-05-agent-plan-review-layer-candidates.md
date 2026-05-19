# 2026-05-19 slot 05 — AI opportunity leads

Timezone: Asia/Shanghai. Slot 5 = 10:00.

Source mix covered this run: Hacker News, GitHub, Product Hunt, official docs, Hugging Face / arXiv. Product Hunt was accessible through public search/Jina reader. Reddit was not required this run because Product Hunt covered the mandatory Reddit/Product Hunt slot.

## Candidate 21 — Agent Plan Review Layer

- Status: promoted to formal MDX.
- Public page: `content/docs/developer-tools/agent-plan-review-layer.mdx`
- Sources:
  - HN: [Show HN: PlanBridge](https://news.ycombinator.com/item?id=48139177)
  - GitHub: [contextbridge/planbridge](https://github.com/contextbridge/planbridge)
  - Official docs: [PlanBridge Quickstart](https://plan.contextbridge.ai/quickstart), [Claude Code integration](https://plan.contextbridge.ai/usage/claude-code/)
  - Official docs: [Anthropic Claude Code workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)
  - Product Hunt: [ai code review agent search](https://www.producthunt.com/search?q=ai%20code%20review%20agent)
- Why now: Claude Code / Codex / Cursor / Kilo Code push coding agents from direct edits into plan-before-editing workflows. Approval is no longer just “trust the model”; teams need a reviewable object before edits happen.
- Pain: terminal plan approval is too coarse. Teams need step-level comments, risk tags, approvals, and a receipt that explains what was approved.
- AI compression: turns a long agent plan into structured cards and turns human feedback into targeted agent revision prompts.
- MVP: Claude Code Plan Mode hook + browser review UI + step comments + `plan-receipt.md` attached to PR / issue.
- Risk: host platforms may add native plan comments; independent wedge must be cross-harness, audit-friendly, and tied to execution deviation.
- Confidence: high enough for formal page. Narrow but timely.

## Candidate 22 — Evidence Attribution Layer for Document AI

- Status: backlog.
- Sources:
  - Hugging Face paper: [CiteVQA: Benchmarking Evidence Attribution for Trustworthy Document Intelligence](https://huggingface.co/papers/2605.12882)
  - arXiv: [2605.12882](https://arxiv.org/abs/2605.12882)
- Why now: document AI is moving from extraction/summarization to “prove which visual/text evidence supports this answer.” Finance, legal, insurance, medical admin and compliance users cannot accept ungrounded answers.
- Pain: teams receive a confident answer but still need to inspect source PDFs, screenshots, tables and clauses manually.
- AI compression: answer + bounding evidence + citation confidence + missing-evidence flags in one review packet.
- MVP: PDF/image VQA evidence checker for invoices, contracts, insurance claims or research PDFs; output source boxes, citations and unsupported-claim warnings.
- Risk: benchmark signal is strong but commercial demand needs vertical validation. Put in backlog until we find buyer-side complaints or product launches.
- Confidence: medium.

## Candidate 23 — Visual-Agent Skill Evaluation Harness

- Status: backlog.
- Sources:
  - Hugging Face paper: [MMSkills: Towards Multimodal Skills for General Visual Agents](https://huggingface.co/papers/2605.13527)
  - arXiv: [2605.13527](https://arxiv.org/abs/2605.13527)
- Why now: visual agents are asked to operate UIs, apps and physical scenes, but teams lack skill-level evals rather than one-off demo videos.
- Pain: “agent can see and click” is too vague; product teams need to know which perception/action skills fail.
- AI compression: convert long visual-agent runs into skill taxonomy, failure labels, and replayable test cases.
- MVP: screenshot/video trace evaluator for browser/mobile agents, scoring navigation, element grounding, state change recognition and recovery.
- Risk: overlaps with browser-agent execution harness and QA release gate. Needs clearer buyer before public page.
- Confidence: medium.

## Candidate 24 — Agent Harness Safety Audit

- Status: backlog.
- Sources:
  - Hugging Face daily papers 2026-05-18 listed `Auditing Agent Harness Safety` (`2605.14271`)
  - arXiv: [2605.14271](https://arxiv.org/abs/2605.14271)
- Why now: as agents get shell, browser, file and SaaS tools, the harness itself becomes the security boundary.
- Pain: builders often evaluate the model, not the harness permission model, logging, rollback, prompt/tool injection exposure and escalation paths.
- AI compression: convert harness config + tool list + sample traces into a safety report and red-team test pack.
- MVP: scan common agent harness configs for risky tools, missing approvals, unsafe environment variables and no-audit execution.
- Risk: already adjacent to MCP Agent Security Gateway and Agentic Security Evaluation Harness; needs narrower non-duplicative angle.
- Confidence: medium.

## Candidate 25 — Open-Source Agentic Coding Team Workspace

- Status: backlog.
- Sources:
  - GitHub: [Kilo Code](https://github.com/Kilo-Org/kilocode)
  - Product Hunt search: [ai code review agent](https://www.producthunt.com/search?q=ai%20code%20review%20agent)
- Why now: open-source coding agents are gaining user mindshare, while Product Hunt shows persistent attention around Cursor, Kilo Code, code review, no-code app builders and human-in-the-loop agentic coding.
- Pain: small teams use several coding agents but lack one place to track tasks, plans, code changes, receipts and review status.
- AI compression: summarize each agent run into task card, risk card, next action and review queue.
- MVP: local web dashboard reading Claude Code / Codex / Kilo logs and Git branches; no cloud needed at first.
- Risk: broad control-plane danger. Better as evidence for Agent Plan Review Layer or Agent Session Supervision Layer, not a new page yet.
- Confidence: medium-low.
