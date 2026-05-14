# 2026-05-14 Slot 04 AI opportunity candidates

本轮覆盖来源：Hacker News Algolia / HN item pages、GitHub API / GitHub README、Product Hunt feed（已检查，本轮未抽到足够强的 AI 信号）。正式页选了 agent context sandbox layer；其余进入候选池，后续再验证。

## 19. Context Mode / agent context sandbox layer

- 来源：HN item 47193064；GitHub mksglu/context-mode；官方博客。
- 链接：[HN](https://news.ycombinator.com/item?id=47193064)，[GitHub](https://github.com/mksglu/context-mode)，[Blog](https://mksg.lu/blog/context-mode)
- 置信度：高。
- 热的原因：coding agent 大量调用 MCP / shell / browser tools 后，工具输出开始吞掉上下文窗口。HN 570 points 说明开发者已经有强共鸣。
- 痛点：Playwright snapshot、GitHub issues、日志、测试输出太大；agent compact 后容易忘掉目标和约束。
- AI-native wedge：让 agent 在 sandbox 里处理原始数据，只把结论、证据片段和 receipt 放回上下文。
- MVP：本地 MCP server，只拦截测试日志、网页 snapshot、GitHub issue 列表三类大输出，输出节省比例和证据链。
- 风险：平台可能原生内置；过度过滤会丢关键证据；执行 sandbox 的安全边界要硬。

## 20. ClawBench / live website browser-agent benchmark

- 来源：GitHub reacher-z/ClawBench。
- 链接：[GitHub](https://github.com/reacher-z/ClawBench)
- 置信度：中高。
- 热的原因：browser agent 需要从 demo 走向可评估的真实任务。ClawBench 用 153 个 everyday online tasks、144 个 live websites，且最强模型约 33.3% 成功率，说明空间还大。
- 痛点：企业很难判断 browser agent 是否真的能处理生产网站、验证码、页面变动、复杂 DOM。
- AI-native wedge：给 browser agent 提供 live-site eval harness、录制、回放、评分、失败分类。
- MVP：选 30 个 SaaS 后台任务，固定账号和录制层，输出每个 agent / harness 的成功率、失败原因、成本。
- 风险：live website 易变，结果复现难；法律和 ToS 边界要处理。

## 21. Future AGI / agent eval + simulation + guardrails platform

- 来源：GitHub future-agi/future-agi。
- 链接：[GitHub](https://github.com/future-agi/future-agi)，[Docs](https://docs.futureagi.com/docs/evaluation)
- 置信度：中高。
- 热的原因：agent 进入生产后，团队需要把 tracing、eval、simulation、gateway、guardrails 放到同一条运行链里。
- 痛点：现在很多团队用 Langfuse、Braintrust、Helicone、自写 simulator 拼起来，数据断裂，无法形成改进节奏。
- AI-native wedge：从 trace 自动生成 eval case，用 simulation 复测边界场景，再把 guardrail 和 routing 策略推回线上。
- MVP：只选 voice agent 或 coding agent 一个场景，做 20 条真实失败 trace → 生成 eval set → 下次发布前自动复测。
- 风险：一体化平台太重，早期应从一个高频失败类型切入。

## 22. Hyperframes / HTML-to-video rendering for agents

- 来源：GitHub heygen-com/hyperframes。
- 链接：[GitHub](https://github.com/heygen-com/hyperframes)
- 置信度：中。
- 热的原因：AI media 不只是在生成图片和视频，也在变成“agent 可操作的渲染管线”。Hyperframes 的定位是 Write HTML. Render video. Built for agents。
- 痛点：短视频、产品 demo、教育动画很难被 agent 稳定编辑；传统视频时间线对代码 agent 不友好。
- AI-native wedge：把视频变成 HTML / CSS / component tree，让 agent 用代码生成和修改视频资产。
- MVP：面向 SaaS 产品团队，输入 changelog / screenshot / docs，输出 30 秒功能更新视频，可二次编辑。
- 风险：HeyGen 等大厂可能自己吃掉；HTML 视频表达力和设计质量要验证。

## 23. Deco CMS Studio / agent control plane with governed MCP connections

- 来源：GitHub decocms/studio。
- 链接：[GitHub](https://github.com/decocms/studio)，[Docs](https://docs.decocms.com/)
- 置信度：中。
- 热的原因：MCP tools 增多后，团队不想手写 JSON 配置、手动分享 token、事后猜 agent 花了多少钱。
- 痛点：agent 需要 GitHub、Slack、Postgres、OpenRouter 等连接，但权限、OAuth、成本、错误追踪分散。
- AI-native wedge：一个 agent control plane，管理 agents、connections、projects、Virtual MCPs、token vault 和 cost attribution。
- MVP：只做 MCP connection 管理 + per-agent cost attribution，不急着做 agent marketplace。
- 风险：control plane 范围太大；如果没有高频任务入口，容易变成空管理台。

## 24. Orca / multi-agent IDE for parallel coding workers

- 来源：GitHub stablyai/orca。
- 链接：[GitHub](https://github.com/stablyai/orca)，[Docs](https://www.onorca.dev/docs/agents/supported)
- 置信度：中高。
- 热的原因：开发者开始同时跑 Claude Code、Codex、OpenCode、Hermes 等 CLI agents。单个终端窗口不够管理状态、worktree、通知和上下文切换。
- 痛点：多 agent 并行时，用户不知道谁卡住了、谁改了哪个 worktree、哪个任务需要接管。
- AI-native wedge：不是新 IDE，而是 agent fleet cockpit：每个 agent 一个隔离 worktree，统一状态、通知、文件拖拽和用量追踪。
- MVP：macOS 桌面端 + Git worktree 管理 + 结束/阻塞通知 + diff receipt。先服务重度 coding-agent 用户。
- 风险：VS Code / Cursor 可能内置；桌面端维护成本高；用户是否愿意换入口要验证。

## 本轮正式页选择

选择 `Agent Context Sandbox Layer` 作为正式页，因为它有 HN 高热、GitHub 高 star、明确任务压缩点，并且和近期 agent memory / control plane / eval 方向形成连续判断：agent 真正进入工作流后，基础设施机会开始从“生成答案”转向“运行、上下文、证据、成本和安全”。
