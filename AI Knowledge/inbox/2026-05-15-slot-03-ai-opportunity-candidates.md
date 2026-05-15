# 2026-05-15 slot 03 AI opportunity candidates

Mode: multi-theme hot AI opportunity discovery
Slot: 09:00 Asia/Shanghai
Public/private rule: only public-source observations; no private notes or secrets.

## Sources covered

- Hacker News Algolia recent AI agent / MCP stories.
- GitHub Search API recent AI agent and MCP repositories.
- Product Hunt Atom feed.
- Official GitHub READMEs / official docs for selected candidates.

## Candidates

### 13. Text-to-CAD hardware design agents — promoted to formal MDX

- Sources: GitHub `earthtojake/text-to-cad`; CAD Skills official docs / demo.
- Signal: repo created 2026-04-22; 2026-05-15 observed 2,735 stars and 315 forks; README targets CAD, robotics and hardware design agent skills.
- Pain: hardware teams waste time translating natural-language design intent into CAD files, standard parts, review images, STEP / STL exports and robot description files.
- AI compression: requirement / dimensions → parameterized source file → STEP / STL / URDF / preview → human diff review.
- Why users come: a quick bracket / enclosure / robot link demo is instantly understandable.
- Why users stay: design history, constraints, standard parts and export files become project memory.
- Spread: before/after clips showing prompt → printable part / URDF.
- Pay: hardware startups, robotics teams, maker prosumers, labs, industrial design studios.
- Risk: CAD errors are expensive; commercial CAD incumbents can absorb the workflow.

### 14. Agentic inbox / email worker stack

- Sources: GitHub `cloudflare/agentic-inbox`; Cloudflare Email for Agents blog linked from README.
- Signal: GitHub Search API observed 2,988 stars on 2026-05-15; project runs a self-hosted email client with AI agent on Cloudflare Workers, Durable Objects, R2 and Workers AI.
- Pain: email is still the busiest personal workflow, but AI assistants usually sit outside the mail execution environment.
- AI compression: incoming mail → isolated mailbox memory → search / draft / action suggestion inside the same edge app.
- Why users come: self-hosted AI email sounds safer than piping all mail to a random SaaS.
- Pay: custom-domain power users, support teams, solo founders, regulated small teams.
- Risk: email privacy and deliverability are brutal; Gmail / Outlook could own the default surface.
- Next validation: check whether users actually deploy it, or just star because Cloudflare shipped a good demo.

### 15. Design system extraction as agent context

- Sources: GitHub `Manavarya09/design-extract`; npm / official website linked from README.
- Signal: GitHub Search API observed 2,597 stars on 2026-05-15; README claims one command emits DTCG tokens, Tailwind config, Figma variables, brand voice, prompt packs and graded reports.
- Pain: AI UI builders often create pretty but brand-inconsistent screens because they lack the real design system.
- AI compression: live website → design tokens / component anatomy / prompt pack → v0 / Lovable / Cursor / Claude context.
- Why users come: “make my generated UI look like this real site” is a clear itch.
- Pay: agencies, design engineers, SaaS teams doing redesigns, internal tools teams.
- Risk: cloning brand language can become legally / ethically messy; visual extraction quality may collapse on complex sites.
- Next validation: test on 5 live SaaS sites and compare generated UI drift.

### 16. MCP-native self-hosted agent sandbox

- Sources: HN recent MCP query; GitHub `footprintai/Containarium` README.
- Signal: HN had “Show HN: Containarium – self-hosted sandbox for AI agents, MCP-native” on 2026-05-14; README positions it as a persistent, isolated, real Linux environment for Cursor / Claude Code / OpenCode / MCP clients.
- Pain: developers do not want AI agents installing packages, exposing ports or modifying files on their main laptop.
- AI compression: prompt → create sandbox → run shell / edit files via MCP → expose port → verify live app.
- Pay: AI-heavy dev teams, coding-agent platforms, agencies running many untrusted tasks.
- Risk: overlaps with E2B, Daytona, Cloudflare containers, Codespaces and internal CI runners.
- Next validation: find which primitive wins — persistent agent boxes, short-lived eval sandboxes, or hosted browser/runtime environments.

### 17. Real-time meeting AI cortex

- Sources: Product Hunt Atom feed; The Augmented AI listed 2026-05-13 with “Real-time AI insights for meetings without interruptions”.
- Signal: meeting AI is still hot, but this candidate only has Product Hunt feed-level evidence in this run.
- Pain: users want help during the meeting, not just a summary after the call.
- AI compression: live conversation → silent context / objection / question suggestions → user keeps talking.
- Pay: sales, recruiting, coaching, consulting.
- Risk: crowded with Granola, Fathom, Fireflies, tl;dv, Gong-style revenue intelligence. Needs a narrower wedge than “AI insights”.
- Next validation: find pricing, demo, retention proof and whether it avoids creepy in-call behavior.

### 18. Agent skill secret / credential exposure scanner

- Sources: HN recent AI agent story linking Capsule Security analysis on vulnerable AI agent skill files.
- Signal: HN item title claimed 15% of AI agent skill files carry hardcoded credentials with DB write access, but HN engagement was tiny in this run.
- Pain: agent skills / MCP configs / local automation files increasingly include credentials, scopes and tool access without normal security review.
- AI compression: repo / skill directory → detect hardcoded secrets, dangerous scopes, over-broad tool permissions → patch suggestion / policy gate.
- Pay: security teams, AI platform teams, enterprises adopting Claude Code / Codex / Cursor / MCP.
- Risk: overlaps with existing secret scanners unless it understands agent-specific permission graphs.
- Next validation: compare against trufflehog / gitleaks and find agent-only false negatives.

## Triage

Promoted candidate 13 because the source chain is official, current, and distinct from the last two slot's agent-security/devtools pages. Candidates 14-18 stay as backlog until stronger buyer / usage proof appears.
