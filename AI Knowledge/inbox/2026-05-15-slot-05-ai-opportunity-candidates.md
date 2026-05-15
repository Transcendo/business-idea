# 2026-05-15 slot 05 AI opportunity candidates

Scope: 多主题热门 AI 赛道机会发现。
Sources: Hacker News Algolia, GitHub Search API, public GitHub repo pages.
Public-safety note: 本文件只记录公开来源线索，不含私人创业内容、私聊、密钥或内部策略。

## 25. Realtime voice-agent runtime

Status: promoted to formal MDX.
Public page: `content/docs/ai-agents/realtime-voice-agent-runtime.mdx`

Source signals:
- LiveKit Agents：10,482 stars, realtime programmable participants / voice AI agents：[https://github.com/livekit/agents](https://github.com/livekit/agents)
- TEN Framework：10,565 stars, real-time multimodal conversational AI framework：[https://github.com/TEN-framework/ten-framework](https://github.com/TEN-framework/ten-framework)
- Hugging Face speech-to-speech：4,739 stars, local voice agents with open-source models：[https://github.com/huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech)
- HN 2026-05-14：Building low-latency voice agents with GPT Realtime 2 and AG2：[https://news.ycombinator.com/item?id=48138922](https://news.ycombinator.com/item?id=48138922)

Judgment:
- Why hot now: realtime audio model、VAD、turn detection、STT/TTS 组合正在从 demo 进入可编排 runtime。
- Pain: 电话和语音任务不能接受高延迟、无法打断、转人工丢上下文、CRM 写入不可靠。
- AI-native wedge: 给一个高频电话任务，返回可接电话、可写业务系统、可转人工、可质检回放的 agent run。
- Why users come/stay/pay: 来自漏接、重复确认和人力成本；留存看任务完成率；付费看通话量、系统集成、质检和合规模板。
- MVP: 只做一个低风险任务，例如房产线索初筛或诊所预约确认，跑 100 通真实低风险电话。
- Risk: 平台层会压价；外呼合规和用户反感都很硬；没有垂直数据会很快变笨。

## 26. Coding-agent token cost observability

Status: backlog. Evidence is directional; not formal-page quality yet.

Source signals:
- GitHub `getagentseal/codeburn`：6,445 stars, TUI dashboard for Claude Code / Codex / Cursor cost observability：[https://github.com/getagentseal/codeburn](https://github.com/getagentseal/codeburn)
- HN 2026-05-14：Claude Code cost observability to prevent tokenmaxxing：[https://news.ycombinator.com/item?id=48138370](https://news.ycombinator.com/item?id=48138370)
- HN 2026-05-13：Token Dashboard – local desktop app to see where your Claude Code tokens go：[https://news.ycombinator.com/item?id=48127764](https://news.ycombinator.com/item?id=48127764)
- HN 2026-05-13：local trace viewer for Claude Code and Codex sessions：[https://news.ycombinator.com/item?id=48124878](https://news.ycombinator.com/item?id=48124878)

Judgment:
- Why hot now: coding agent 从单人实验变成团队预算项，token 花费开始像云账单一样需要可见性。
- Pain: 开发者不知道 token 花在哪里、哪个 repo/任务/agent 消耗异常、失败重试是不是烧钱。
- AI-native wedge: agent session trace → cost breakdown → waste reason → cheaper retry/playbook suggestion。
- Why users come/stay/pay: 来自账单焦虑；留存靠每周省下的钱；付费对象是团队和工程管理者。
- MVP: 读取 Claude Code/Codex/Cursor 本地日志，生成按任务、文件、工具、失败原因拆分的成本卡。
- Risk: 平台可能内置成本面板；个人用户付费弱；必须从“看账单”升级到“减少失败重跑”。

## 27. Agent memory beyond vector search

Status: backlog. Needs source hygiene; repo star counts unusually high in this theme, avoid over-reading.

Source signals:
- GitHub `MemPalace/mempalace`：52,204 stars, open-source AI memory system：[https://github.com/MemPalace/mempalace](https://github.com/MemPalace/mempalace)
- GitHub `Tencent/TencentDB-Agent-Memory`：956 stars, fully local long-term memory for agents：[https://github.com/Tencent/TencentDB-Agent-Memory](https://github.com/Tencent/TencentDB-Agent-Memory)
- HN 2026-05-14：Vector embeddings are the wrong default for AI agent memory：[https://news.ycombinator.com/item?id=48131492](https://news.ycombinator.com/item?id=48131492)
- HN 2026-05-13：AI agents with shared memory – we published everything they got wrong：[https://news.ycombinator.com/item?id=48128177](https://news.ycombinator.com/item?id=48128177)

Judgment:
- Why hot now: long-running agents are exposing vector-only memory failures: stale facts, wrong recall, no provenance, no forgetting policy。
- Pain: team wants agents to remember decisions and context, but cannot trust what gets recalled or why。
- AI-native wedge: memory write/read policy + provenance + decay + conflict resolution + eval harness。
- Why users come/stay/pay: 来自重复解释上下文和错误记忆造成的事故；留存看 agent 任务成功率是否提升。
- MVP: 给 coding/project agent 做 structured memory layer，记录 decision、constraint、owner、expiry、source file，并用失败案例做 recall eval。
- Risk: 很容易变成“又一个向量库包装”；没有评测指标就无法证明价值。

## 28. Mobile app-control agent runtime

Status: backlog. Early but interesting.

Source signals:
- GitHub `eggbrid2/mobileClaw`：181 stars, Open Android AI agent runtime for phone control / app automation / VLM screen reading：[https://github.com/eggbrid2/mobileClaw](https://github.com/eggbrid2/mobileClaw)
- HN 2026-05-12：Needle distilled Gemini tool calling into a 26M model，731 points / 206 comments，说明小模型 tool-calling 和移动端/边缘执行受关注：[https://news.ycombinator.com/item?id=48111896](https://news.ycombinator.com/item?id=48111896)
- HN 2026-05-04：Shelley mobile-friendly coding agent：[https://news.ycombinator.com/item?id=48015681](https://news.ycombinator.com/item?id=48015681)

Judgment:
- Why hot now: PC 端 agent 已经 crowded，手机仍是大量真实工作流入口：外卖、网约车、IM、审批、支付前确认、运营后台。
- Pain: 手机 app 没有 API 或 API 不开放，人工重复点屏幕、复制信息、截图汇报。
- AI-native wedge: VLM screen read + safe action planner + app-specific skill + human confirmation。
- Why users come/stay/pay: 来自重复手机操作；留存靠能稳定完成一个 app 内任务；付费更可能来自 BPO、客服、运营团队。
- MVP: 选一个低风险 Android app 流程，例如截图归档、订单状态查询、内部审批提醒，不触碰支付和敏感账号。
- Risk: 权限、安全、账号封禁和平台政策风险高；消费者端难付费，B2B 端部署麻烦。

## 29. Agent-first headless browser / web automation substrate

Status: backlog. Overlaps existing browser-agent page; only keep if future evidence shows a distinct infra wedge.

Source signals:
- GitHub `h4ckf0r0day/obscura`：12,288 stars, headless browser for AI agents and web scraping：[https://github.com/h4ckf0r0day/obscura](https://github.com/h4ckf0r0day/obscura)
- HN 2026-04-24：Show HN: Obscura – V8-powered headless browser for scraping and AI agents：[https://news.ycombinator.com/item?id=47895561](https://news.ycombinator.com/item?id=47895561)
- HN 2026-04-17：AI Subroutines – deterministic automation inside browser tab：[https://news.ycombinator.com/item?id=47810533](https://news.ycombinator.com/item?id=47810533)

Judgment:
- Why hot now: 浏览器仍是 agent 最通用的执行环境，但 Playwright/Selenium 面向测试，不直接面向 agent 观察、权限、回放和成本。
- Pain: agent 看网页、点网页、处理弹窗和反爬时失败不可复现。
- AI-native wedge: DOM/screenshot/action trace → replayable browser run → deterministic subroutine fallback。
- Why users come/stay/pay: 来自 web task 自动化失败率；留存靠 replay 和 repair；付费看并发、代理、安全沙箱。
- MVP: 对 20 个真实网站任务提供 run card、失败截图、DOM diff、重试策略。
- Risk: 与 Browserbase、Steel、Playwright cloud、现有 browser-agent 执行层重叠大；公开页面暂不重复写。

## 30. Agent eval / simulation platform for production LLM apps

Status: backlog. Related to failure-regression page but buyer surface broader。

Source signals:
- GitHub `future-agi/future-agi`：963 stars, platform for evaluating, observing and improving LLM / agent applications：[https://github.com/future-agi/future-agi](https://github.com/future-agi/future-agi)
- GitHub `raindrop-ai/workshop`：216 stars, give coding agent the power to write and run agent evals：[https://github.com/raindrop-ai/workshop](https://github.com/raindrop-ai/workshop)
- GitHub `SeraphimSerapis/tool-eval-bench`：59 stars, deterministic tool-calling benchmark for serving stacks：[https://github.com/SeraphimSerapis/tool-eval-bench](https://github.com/SeraphimSerapis/tool-eval-bench)

Judgment:
- Why hot now: agent 进入生产后，普通单轮 LLM eval 不够，企业要评估工具调用、多轮状态、权限边界和回归。
- Pain: agent 看起来能跑，但改 prompt、换模型、升级工具后不知道会坏在哪里。
- AI-native wedge: production trace → synthetic simulation → regression suite → CI gate。
- Why users come/stay/pay: 来自上线事故和模型迁移风险；留存靠每次发布前挡住 regression；付费对象是 AI app 团队。
- MVP: 针对一个垂直 agent，例如客服或 coding agent，把 50 条真实失败 trace 变成可重复 eval。
- Risk: 与 LangSmith、Braintrust、Arize、OpenTelemetry AI observability 竞争；必须证明能减少真实事故。
