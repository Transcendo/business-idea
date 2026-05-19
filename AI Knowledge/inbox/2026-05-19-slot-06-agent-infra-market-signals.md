# 2026-05-19 slot 06 — AI opportunity leads

Timezone: Asia/Shanghai. Slot 6 = 10:30.

Source mix covered this run: Hacker News Algolia, GitHub API, Product Hunt via public Jina reader, official product/article pages, Hugging Face / arXiv. Reddit search JSON returned `HTTP Error 403: Blocked`, so Product Hunt was used for the mandatory Reddit/Product Hunt coverage.

Formal MDX cap is already full for today: 5 / 5. These five items stay in backlog/inbox; none are promoted to public docs in this run.

## Candidate 26 — Agent-Readable Product Surface

- Status: backlog. Adjacent to Agent Traffic Analytics Layer, so do not publish until the wedge is narrower.
- Sources:
  - HN: [Make products AI agents want](https://news.ycombinator.com/item?id=48188019)
  - Article: [Your next user is an agent](https://anitakirkovska.com/blog/make-products-ai-agents-want/)
  - Product Hunt search: [AI agent](http://www.producthunt.com/search?q=ai%20agent)
  - Product Hunt category signal: [AI Agents](http://www.producthunt.com/categories/ai-agents?ref=footer)
- Why now: product usage is moving from human UI sessions to agent-mediated actions. The old DAU/onboarding model misses whether agents can read, decide, and execute against a product.
- Pain: companies do not know whether an agent can understand pricing, permissions, APIs, limits, receipts, cancellation, and support flows without hallucinating or getting stuck.
- AI compression: crawl product surfaces, docs, pricing, login-gated flows and API docs; output an agent-readiness card with missing actions, ambiguity, bad tool surfaces and suggested fixes.
- Why users come: growth and developer-relations teams need to stop losing agent-originated traffic. Why stay: readiness has to be retested after every docs/API/pricing change.
- Why share: the output is a public agent-readiness badge or teardown. Why pay: B2B SaaS teams will pay if it ties to lead capture, conversion, or fewer support escalations.
- MVP: test 20 SaaS products with one autonomous buyer/research agent; produce `agent-can-complete-task` receipts and a remediation checklist.
- Risk: this can become vague AI SEO. It needs task completion evidence, not keyword advice.
- Confidence: medium.

## Candidate 27 — Governed Tool Execution Protocol for Agents

- Status: backlog. Strong infra pain, but the source repo is very early.
- Sources:
  - HN: [GAX – A tool execution protocol to fix MCP token bloat and CLI auth](https://news.ycombinator.com/item?id=48184831)
  - GitHub: [0sparsh2/GAX](https://github.com/0sparsh2/GAX)
  - Hugging Face paper: [Model-Adaptive Tool Necessity Reveals the Knowing-Doing Gap in LLM Tool Use](https://huggingface.co/papers/2605.14038)
  - arXiv: [2605.14038](https://arxiv.org/abs/2605.14038)
- Why now: MCP-style tool catalogs are spreading, but agents pay context cost for tool schemas and still make poor tool-use decisions.
- Pain: builders need lazy tool discovery, auth handoff, policy, structured results and auditability without dumping every tool into the prompt.
- AI compression: turn a large tool universe into a small negotiated execution envelope: intent, allowed tools, required auth, policy, output schema, receipt.
- Why users come: agent teams hit context bloat and permission mess fast. Why stay: every new tool and tenant policy needs the same governance layer.
- Why share: failed tool-call traces are easy to forward inside engineering teams. Why pay: infra teams pay for lower token cost, fewer auth bugs and safer tool rollout.
- MVP: proxy one MCP-heavy workflow; measure token savings, successful tool selection, auth failures and policy violations before/after.
- Risk: platform owners may fold this into MCP clients. Independent product needs cross-client logs, policy and cost evidence.
- Confidence: medium-high.

## Candidate 28 — Agent App Scaffolding and Deployment Receipt

- Status: backlog. Useful signal, but it overlaps with generic agent frameworks unless focused on deployment evidence.
- Sources:
  - HN: [AgentVoy – The create-react-app for AI agents](https://news.ycombinator.com/item?id=48186824)
  - GitHub: [agentvoy/agentvoy](https://github.com/agentvoy/agentvoy)
  - Official: [AgentVoy](https://www.agentvoy.com/)
  - Product Hunt search: [Agentplace](http://www.producthunt.com/search?q=Agentplace)
- Why now: builders are juggling OpenAI Agents SDK, Anthropic SDK, LangGraph, CrewAI, AutoGen, LlamaIndex, Google ADK, Docker/Fly/Railway and local keys.
- Pain: the hard part is not a hello-world agent; it is choosing a framework, wiring tracing, env keys, deploy target, health checks, rollback and a first usable UI.
- AI compression: turn a task description into a runnable agent app skeleton plus trace dashboard, deploy config and `deployment-receipt.md`.
- Why users come: solo builders want an agent app running today. Why stay: teams need repeatable templates, secrets hygiene, observability and deploy history.
- Why share: the receipt can be posted with a demo repo. Why pay: hosted deploys, team templates and compliance receipts are easier to monetize than raw scaffolding.
- MVP: one CLI for two frameworks and two deploy targets; track time-to-first-run, failed deploys, and whether users keep the trace dashboard.
- Risk: framework churn is brutal. The durable wedge is deployment/verifier receipt, not “support every agent framework.”
- Confidence: medium.

## Candidate 29 — Agent-Native HTML-to-Video Renderer

- Status: backlog. Distinct from AI Video Demo Agent: this is infrastructure for deterministic video assets, not sales conversation.
- Sources:
  - GitHub: [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)
  - Product Hunt search: [AI agent](http://www.producthunt.com/search?q=ai%20agent)
  - Product Hunt category signal: [AI Generative Media](http://www.producthunt.com/categories/ai-generative-media?ref=footer)
- Why now: agents can generate copy, layouts, charts and HTML, but video generation is still hard to revise, version and test.
- Pain: marketing/product teams need repeatable demo videos, release notes, explainers and localization, not one-off prompt clips that break brand rules.
- AI compression: generate structured HTML scenes, data bindings and transitions; render them into versioned video with diffable source.
- Why users come: teams already have HTML/CSS assets and product data. Why stay: every launch, language and customer segment creates another video variant.
- Why share: rendered clips and the source scene file are naturally shareable. Why pay: per-render, brand templates, collaboration, localization and CI export are clear paths.
- MVP: GitHub action that turns a markdown release note plus screenshots into a 30-second branded MP4 and stores the scene source.
- Risk: pure media tools are crowded. The edge is deterministic, code-reviewable video for agents and product teams.
- Confidence: medium-high.

## Candidate 30 — Generative Data App Factory

- Status: backlog. Strong builder pain, but needs buyer proof beyond Show HN novelty.
- Sources:
  - HN: [Show HN: Tracecast – open-source generative data apps built on top of Marimo](https://news.ycombinator.com/item?id=48185834)
  - GitHub: [tracecast/open_data_apps](https://github.com/tracecast/open_data_apps)
  - Product Hunt search: [AI workflow automation](http://www.producthunt.com/search?q=AI%20workflow%20automation)
- Why now: analysts use notebooks for exploration, but stakeholders want interactive apps, explanations and repeatable refreshes.
- Pain: converting a notebook into a trustworthy internal data app still needs engineering help, access control, refresh logic, comments and reproducibility.
- AI compression: turn data questions, notebooks and dataframe transforms into a small app with controls, cached outputs, citations to cells and an exportable decision note.
- Why users come: analysts want to ship without waiting for a dashboard sprint. Why stay: every analysis iteration becomes a reusable app, not a dead notebook.
- Why share: the app link and decision note travel inside Slack/Teams better than screenshots. Why pay: teams pay for connectors, permissions, hosted runs and audit history.
- MVP: pick one data source, generate a Marimo-style app from a CSV/notebook, then measure whether non-technical users change filters and cite it in decisions.
- Risk: BI tools and notebooks already cover pieces. The wedge must be “analysis to app in minutes with provenance,” not another dashboard builder.
- Confidence: medium.
