# 2026-05-13 slot 5 AI hot-track candidates

Slot: 10:00 Asia/Shanghai
Source mix: Hacker News Algolia, GitHub API / README, Product Hunt Atom feed, HuggingFace API.

## Candidate 23 — Vaultbix API-key paste blocker

- Sources: HN item 48116429, official site [https://vaultbix.com](https://vaultbix.com)
- Signal: Show HN 标题是 Chrome extension that blocks API keys from being pasted into AI tools。
- Why hot now: AI coding 和 ChatGPT/Copilot 类工具把“复制密钥给 AI”变成真实事故面。
- User pain: 新手和内部员工会把 API key、token、`.env` 内容贴进 AI 工具，安全团队事后才知道。
- AI compression: 不是生成内容，而是在输入边界做实时检测和拦截，把安全审查从事后挪到粘贴瞬间。
- Come / stay / spread / pay: 来自密钥泄露恐惧；留在浏览器扩展和企业策略里；传播靠“差点把 key 发给 AI”的事故；企业为策略管理、日志、allowlist 付费。
- MVP: Chrome extension 只检测常见 key pattern + 企业域名 allowlist + 本地日志，不上传内容。
- Risk: 浏览器扩展权限敏感；false positive 多会被用户关闭；大厂浏览器和 DLP 产品可能内置。
- Confidence: medium.
- Next check: 是否支持本地检测、企业策略、SOC / DLP 集成。

## Candidate 24 — Clodcapture Claude.ai session portability

- Sources: HN item 48115739, Chrome Web Store link from HN [https://chromewebstore.google.com/detail/clodcapture/mhapejnhlmepeinjmlppoopcoicmgojb](https://chromewebstore.google.com/detail/clodcapture/mhapejnhlmepeinjmlppoopcoicmgojb)
- Signal: save and resume Claude.ai chats across sessions。
- Why hot now: 用户把 Claude.ai 当工作台，但浏览器会话、上下文和项目记忆仍然脆。
- User pain: 长会话一断，用户不知道如何保存、迁移、恢复和继续。
- AI compression: 把“复制聊天记录、整理上下文、重建任务状态”压成可恢复 session artifact。
- Come / stay / spread / pay: 来自会话丢失焦虑；留在日常 Claude 工作流；传播靠“恢复整段项目上下文”；付费点在加密备份、跨设备、团队知识库。
- MVP: 本地导出 Claude session 为 Markdown + attachments manifest + resume prompt。
- Risk: 平台 DOM 变化会打断扩展；服务条款和隐私解释要非常清楚。
- Confidence: medium-low.
- Next check: Chrome Web Store 权限、用户评价、是否本地优先。

## Candidate 25 — OCL Nexus agent compute layer with native MCP

- Sources: HN item 48113764, official site [https://oclnexus.com](https://oclnexus.com)
- Signal: automated compute layer for AI agents with native MCP。
- Why hot now: MCP 工具接入变多后，agent 不只需要 prompt，还需要可调度、可隔离、可观测的执行资源。
- User pain: agent 调工具时环境不一致、凭据分散、任务执行难审计。
- AI compression: 把 agent 的工具调用、计算环境和权限管理抽成一层执行面。
- Come / stay / spread / pay: 开发者来解决 MCP 部署脏活；留在长期 agent runtime；传播靠“接上 MCP 后不用管环境”；企业为隔离、审计、并发和私有部署付费。
- MVP: 托管一个最小 MCP execution sandbox，支持 3 个常见工具、per-run log、权限确认。
- Risk: 如果只是普通云函数 + MCP 包装，差异不够；安全边界难做。
- Confidence: medium.
- Next check: 产品是否有真实 demo、定价、隔离模型。

## Candidate 26 — Gigacatalyst embedded AI builder for SaaS

- Sources: HN item 48110593, HN discussion [https://news.ycombinator.com/item?id=48110593](https://news.ycombinator.com/item?id=48110593)
- Signal: Extend your SaaS with an embedded AI builder。
- Why hot now: SaaS 用户希望直接在已有产品里生成报表、页面、工作流，而不是跳到通用 AI 工具。
- User pain: SaaS 厂商被客户要求“加 AI”，但从零做 builder、权限、数据边界和部署太重。
- AI compression: 把用户的自然语言需求压成产品内可运行对象，不是输出一段建议文本。
- Come / stay / spread / pay: SaaS 厂商来补 AI 功能；留在客户定制链路；传播靠客户自己生成扩展；付费按 seat、生成次数、嵌入 SDK、企业部署。
- MVP: 给一种 SaaS 对象做 embedded builder，例如 dashboard / workflow / email template。
- Risk: 每个 SaaS 数据模型不同，通用 builder 很容易变集成地狱。
- Confidence: medium-high.
- Next check: 是否有 SDK、权限模型、客户案例。

## Candidate 27 — OpenGravity zero-install browser coding agent

- Sources: HN item 48100192, GitHub [https://github.com/ab-613/opengravity](https://github.com/ab-613/opengravity)
- Signal: HN 观察到 100 points / 30 comments；GitHub 项目定位为 zero-install, BYOK vanilla JS clone of Antigravity。
- Why hot now: 用户想试 coding agent，但本地安装、环境、权限和账单让试用门槛变高。
- User pain: 企业机器不能乱装工具；个人用户不想配置复杂本地环境。
- AI compression: 把“安装 IDE 插件 / 配 CLI / 连模型 / 打开 repo”压到浏览器内启动。
- Come / stay / spread / pay: 来自零安装尝鲜；留存取决于 repo 操作能力；传播靠可分享 demo；付费点在团队 workspace、浏览器沙箱、模型路由。
- MVP: 浏览器内导入 GitHub repo，跑只读分析、生成 patch、导出 PR diff。
- Risk: 浏览器内 agent 权限和性能有限；真正写代码时仍可能回到本地 IDE。
- Confidence: medium.
- Next check: 是否能安全处理私有 repo、是否支持真实 PR 流程。

## Candidate 28 — MiniCPM-V 4.6 edge multimodal agents

- Sources: GitHub [https://github.com/OpenBMB/MiniCPM-V](https://github.com/OpenBMB/MiniCPM-V), HuggingFace [https://huggingface.co/openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6), Product Hunt [https://www.producthunt.com/products/minicpm-4-0](https://www.producthunt.com/products/minicpm-4-0)
- Signal: MiniCPM-V 4.6 是 1.3B 视觉语言模型，README 强调移动端部署、视觉编码计算成本降低超过 50%；GitHub 观察到 24,659 stars。
- Why hot now: 多模态理解从云端聊天框往设备侧移动。
- User pain: 现场图像和视频任务上传慢、隐私敏感、弱网不稳定。
- AI compression: 把拍照、上传、等待、填表、判断下一步压成本地即时结构化和动作建议。
- Come / stay / spread / pay: 来自现场效率和隐私；留在工单、SOP、设备工作流；传播靠本地实时 demo；设备厂、垂直 SaaS、现场服务团队付费。
- MVP: 物业设备报修或门店巡检 app，本地识别异常点并生成工单摘要。
- Risk: 小模型复杂场景不稳，手机性能差异大，云端大模型降价会挤压端侧价值。
- Confidence: high.
- Published: content/docs/ai-hardware/minicpm-v-edge-multimodal-agents.mdx

## Candidate 29 — Pixcode self-hosted AI coding-agent control room

- Sources: Product Hunt feed [https://www.producthunt.com/products/pixcode](https://www.producthunt.com/products/pixcode)
- Signal: PH feed 标题为 A self-hosted control room for AI coding agents。
- Why hot now: 多个 coding agent 并行跑时，用户缺的不是更多 agent，而是状态、审批、上下文和失败恢复。
- User pain: 任务卡住没人发现，agent 改了什么不清楚，多个 session 分散在终端和 IDE。
- AI compression: 把分散 session 的监督、审批、日志和接管压到一个控制台。
- Come / stay / spread / pay: 来自多 agent 失控；留在日常工程工作台；传播靠“一个屏幕看住所有 agent”；团队为 self-host、权限、审计付费。
- MVP: 只接 Claude Code / Codex / Cursor 三类 session，做状态面板、blocker alert、handoff card。
- Risk: 已有 IDE、terminal、agent 平台会内置；如果不能直接接管操作，只是看板。
- Confidence: medium.
- Next check: 是否有 GitHub / docs / demo，是否真实 self-host。

## Candidate 30 — Khaos Brain local predictive memory for agents

- Sources: Product Hunt feed [https://www.producthunt.com/products/khaos-brain](https://www.producthunt.com/products/khaos-brain)
- Signal: PH feed 标题为 Local predictive memory for AI agents。
- Why hot now: agent 越常驻，越需要跨任务记住偏好、文件、决策和错误教训。
- User pain: 每次重新告诉 agent 项目规则、个人习惯和上下文，浪费时间，还容易重复犯错。
- AI compression: 把“人类反复交代背景”压成本地可检索、可更新、可审计记忆。
- Come / stay / spread / pay: 来自重复上下文厌烦；留在长期 agent 使用；传播靠“第二次就懂我”；付费点在本地加密、多工具同步、团队策略、记忆审计。
- MVP: 本地 Markdown / SQLite 记忆层，支持 Claude Code、Codex、Cursor 读取，所有写入需人类确认。
- Risk: 记忆污染、过期决策和隐私泄露会毁信任；模型厂可能原生提供。
- Confidence: medium-low.
- Next check: 记忆写入机制、可解释性、删除/回滚能力。
