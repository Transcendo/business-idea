# 2026-05-12 AI hot track tail candidates

本文件补齐当天 candidate 21-30。它们来源公开、近期，但多数还不够强，不急着污染正式 Fumadocs 页面。今天正式页已到 5/5，这里只做 backlog 判断。

## candidate 21：Kernel-level sandbox for AI coding agents

- 来源：HN `48106428`；GitHub `navikt/cplt`：`https://github.com/navikt/cplt`。
- 公开信号：GitHub API 描述为 “Sandbox wrapper for AI coding agents”，把 GitHub Copilot CLI、OpenCode、Gemini CLI、Pi 或 shell 跑在 kernel-level sandbox 中，避免 agent 访问 secrets；2026-05-12 仍在更新，约 64 stars。
- 为什么现在热：AI coding agent 开始能真实执行 shell、改文件、跑测试，危险从“代码建议错了”升级成“本机 secrets、SSH key、prod token 被 agent 读走”。
- 用户痛点：团队想让 agent 干活，但不敢给它全盘文件系统和网络权限。
- AI-native wedge：不是再做一个 coding agent，而是做 agent runtime wrapper：目录白名单、网络策略、secret denylist、命令审计、失败回放。
- 可验证 MVP：先支持 Claude Code/Codex/Gemini CLI，本地项目一键 `agent run --sandbox`；指标看 secret access block 次数、能否不破坏 DX、agent 任务成功率是否下降。
- 风险：macOS/Linux sandbox 差异大；如果上游 agent 官方内置 sandbox，第三方 wrapper 会被挤压。

## candidate 22：Git guardrails for AI-assisted development

- 来源：HN `48105699`；GitHub `jonverrier/RipStop`：`https://github.com/jonverrier/RipStop`。
- 公开信号：GitHub API 描述为 Git hook and CI guardrails for AI-assisted software development；项目很早，star 少，但问题是真。
- 为什么现在热：coding agent 的破坏面通常先体现在 git diff：删文件、改锁文件、碰密钥、动 CI、绕过测试。
- 用户痛点：人类 review 大 diff 太慢，agent 又很会制造“看起来合理”的危险改动。
- AI-native wedge：PR 前置安全网，把 diff 变成 risk card：高危路径、异常删除、secret-like 文本、测试缺失、scope drift。
- 可验证 MVP：本地 pre-commit + GitHub Action，给 Claude Code/Codex 产出的 PR 自动附风险清单。
- 风险：容易变成普通 lint；价值必须贴住 agent 行为模式，而不是泛化代码质量工具。

## candidate 23：Claude Skills discovery / audit / shipping layer

- 来源：HN `48106480`；Prave 官网：`https://prave.app/`。
- 公开信号：Prave 页面标题是 “The Claude Skills platform: discover, audit, ship”，meta 描述写 discover 1,000+ Claude Skills by intent、audit library。
- 为什么现在热：Skills 正在变成 agent instruction packaging 的新载体，但技能包质量、权限边界、版本和评测还混乱。
- 用户痛点：团队不知道该装哪些 skill，也不知道 skill 会不会过时、互相冲突、带危险指令。
- AI-native wedge：skill registry + static audit + eval harness + team distribution，而不是技能目录黄页。
- 可验证 MVP：抓公开 skill，跑禁词/权限/工具调用/路径扫描，再用任务集测 docs vs skill 效果差异。
- 风险：Claude 官方如果做官方 marketplace，会吃掉目录层；第三方必须靠安全审计和团队治理活下来。

## candidate 24：Interactive rebase for LLM sessions

- 来源：HN `48106471`；GitHub `fu5ha/pi-treebase`：`https://github.com/fu5ha/pi-treebase`。
- 公开信号：GitHub API 描述为 “Interactive-rebase style tree navigation and compaction for pi”，2026-05-11 更新，约 28 stars。
- 为什么现在热：开发者同时跑多轮 LLM/agent 分支，聊天历史像一坨不可维护的 commit log。
- 用户痛点：想保留有用推理、丢掉噪音、回到某个分叉点，但普通聊天界面只会线性滚动。
- AI-native wedge：把 agent session 当 git tree 管：branch、squash、rebase、cherry-pick useful context、生成下一轮最小上下文。
- 可验证 MVP：先做 CLI/TUI，支持从 Claude Code/Codex transcripts 抽取节点和摘要，输出可复用 prompt bundle。
- 风险：太 geek；必须证明它能降低 token、减少返工，而不是又多一个 session 管理器。

## candidate 25：Current-news meme generation benchmark

- 来源：HN `48105900`；MemeBench：`https://memebench.net`。
- 公开信号：HN 标题为 “A benchmark where LLMs make memes from current news”。页面访问被 403，但 HN 信号说明有人在测“实时文化理解 + 图文创作”。
- 为什么现在热：多模态模型会做图，但“懂当前语境、梗、讽刺和传播性”仍弱。
- 用户痛点：品牌和创作者想追热点，但 AI 生成物经常像过期营销图。
- AI-native wedge：不是做 meme 玩具，而是做 trend-aware creative eval：给模型/代理商测试热点理解、文化风险、传播质量。
- 可验证 MVP：每天抓 5 条新闻，让模型生成 meme，由人类或小样本投票打分，形成模型排行榜和失败案例库。
- 风险：版权、政治风险、文化差异很重；商业化要面向品牌安全/创意团队，不要只做娱乐榜单。

## candidate 26：Wild hallucination evidence for citation-heavy workflows

- 来源：HN `48105415`；arXiv `2605.07723`：`https://arxiv.org/abs/2605.07723`。
- 公开信号：论文标题为 “LLM hallucinations in the wild: Large-scale evidence from non-existent citations”，2026-05-08 提交。
- 为什么现在热：AI 写作从 demo 进入法律、学术、咨询、医疗材料，假引用不再是小 bug。
- 用户痛点：人类很难逐条核验引用是否存在、是否支持原句、是否被断章取义。
- AI-native wedge：citation verifier，不止查 URL 存不存在，还要验证引用文本、出处、论点支持关系。
- 可验证 MVP：Chrome/Docs 插件，扫描报告里的引用，返回 “不存在 / 存在但不支持 / 支持但过期 / 需要人工复核”。
- 风险：通用写作软件会内置基础引用检查；创业公司应卡法律、咨询、科研综述等高风险垂直场景。

## candidate 27：On-device AI consent and browser trust layer

- 来源：HN `48097996`；Kyle Reddoch 博文：`https://www.kylereddoch.me/blog/chromes-silent-gemini-nano-download-has-a-consent-problem/`。
- 公开信号：页面标题为 “Chrome’s Silent Gemini Nano Download Has a Consent Problem”，核心争议是 Chrome 在用户设备上静默部署 Gemini Nano 的同意与信任问题。
- 为什么现在热：浏览器、OS、办公套件都在塞本地模型；“on-device”不自动等于用户信任。
- 用户痛点：用户和企业 IT 不知道本机模型何时下载、占多少资源、能访问什么数据、如何禁用和审计。
- AI-native wedge：enterprise on-device AI policy manager：发现、禁用、审计、资源限制、用户同意记录。
- 可验证 MVP：Chrome/Edge/macOS agent 扫描本机 AI 组件、模型文件和策略配置，生成 IT 风险报告。
- 风险：平台厂商可以用 MDM/政策项覆盖；第三方价值在跨浏览器、跨 OS、跨 SaaS 的统一可见性。

## candidate 28：AI model hub supply-chain malware

- 来源：HN `48083331`；HiddenLayer 研究：`https://www.hiddenlayer.com/research/malware-found-in-trending-hugging-face-repository-open-oss-privacy-filter`。
- 公开信号：页面标题为 “Malware Found in Trending Hugging Face Repository Open-OSS/privacy-filter”。
- 为什么现在热：Hugging Face、模型权重、dataset、Spaces 已经像 npm/pypi 一样成为开发者入口，但安全工具还没跟上。
- 用户痛点：企业想用开源模型，又怕 repo 里藏恶意代码、pickle、依赖投毒、模型后门。
- AI-native wedge：AI artifact security scanner：模型文件、dataset、README、Space app、依赖和下载脚本一体扫描，给可解释风险评分。
- 可验证 MVP：对 HF trending repos 做每日扫描和公开告警 feed；企业版接私有模型 registry。
- 风险：安全厂商会快速进入；差异点要在模型格式、推理行为、prompt/data 攻击，而不是普通 SCA。

## candidate 29：AST-verified multilingual code translation dataset

- 来源：HN `48094698`；Hugging Face dataset：`https://huggingface.co/datasets/Cuarzo-AI/cuarzo-100k-v2`。
- 公开信号：README frontmatter 写 Python ↔ EN/ES/FR/ZH、100% AST verified、Apache-2.0；页面说明包含约 100K 级代码/解释/翻译数据。
- 为什么现在热：coding model 不只需要生成代码，也需要把代码解释成多语言文档、教学内容、迁移说明。
- 用户痛点：跨国团队、教育平台、本地化开发者社区缺高质量代码解释和双语教学材料。
- AI-native wedge：verified code explanation/localization pipeline：AST 验证代码等价，生成多语言注释、教程、迁移指南。
- 可验证 MVP：针对 Python 教学 repo，自动生成中英法西四语解释，人工抽检语义和代码运行一致性。
- 风险：dataset 本身不是产品；商业化要贴 IDE、教育、企业知识库或本地化文档工作流。

## candidate 30：Visual agent workflows controlling real VMs

- 来源：HN `48100204`；GitHub `aadya940/orbit-ui`：`https://github.com/aadya940/orbit-ui`。
- 公开信号：GitHub API 描述为 “Open Source, Self Hosted, AI Visual workflow builder for automating anything Desktop running inside its own Virtual Computer”。
- 为什么现在热：n8n/Zapier 式 API workflow 不够覆盖遗留系统、桌面软件、网页后台和需要人类 UI 的流程。
- 用户痛点：企业有大量“必须打开网页/桌面客户端点来点去”的流程，API 不完整，RPA 又重又脆。
- AI-native wedge：VM-contained workflow agent：视觉节点、浏览器/桌面动作、状态断言、失败截图、人工接管。
- 可验证 MVP：选 3 个真实流程：发票后台录入、CRM 更新、供应商网页下载报表；指标看成功率、平均人工接管次数、失败定位时间。
- 风险：如果没有强状态断言和审计，会退化成“AI RPA demo”；企业采购会问安全、隔离和责任边界。
