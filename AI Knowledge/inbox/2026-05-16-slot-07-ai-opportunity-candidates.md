# 2026-05-16 slot 07 AI opportunity candidates

本轮覆盖来源：Hacker News、GitHub、Reddit、Product Hunt、官方博客。

## 1. Agentic Security Evaluation Harness

- 状态：已提升为正式公开页。
- 来源：Cisco Foundry Security Spec、Tencent AICGSecEval、Claw-Eval、HN Capsule Security、Keycard Agent Security Stack。
- 判断：agent 安全正在从“风险讨论”变成“可复跑评测”。机会在 inventory → scenario → sandbox run → finding → regression → release gate。
- 下一步：找正在使用 MCP / coding agent / ops agent 的团队，验证首次 inventory 和 20 个安全场景是否能发现真实配置问题。

## 2. MCP development testing harness

- 来源：HN Show HN: Manufact，面向 browser / API / MCP server testing；Manufact blog 解释用 Natural QA 驱动 end-to-end testing。
- 链接：[HN](https://news.ycombinator.com/item?id=48110929)，[Manufact blog](https://www.manufact.ai/blog/end-to-end-testing-with-natural-qa)
- 为什么热：MCP server 和 tool-calling agent 增多后，开发者缺少面向“工具协议 + agent 执行”的测试层。
- 痛点：普通 API test 只测 endpoint；普通 E2E 只测 UI；MCP / agent flow 需要测 schema、tool response、权限、长链路和失败恢复。
- MVP：读取 MCP server manifest，自动生成 contract tests、tool-call replay、prompt-to-tool assertions。
- 风险：容易变成泛测试工具；必须绑定 MCP / agent workflow 的特殊痛点。
- 置信度：中高。

## 3. Coding assistant control plane as IDE-native workflow layer

- 来源：HN VS Code Copilot discussion；VS Code 官方宣布 Copilot coding agent can now use VS Code customization。
- 链接：[HN](https://news.ycombinator.com/item?id=48154250)，[VS Code blog](https://code.visualstudio.com/blogs/2026/05/15/openSourceAIEditor)
- 为什么热：IDE 已经不是“代码编辑器 + AI chat”，而是 coding agent 的控制面。
- 痛点：团队需要统一管理 agent instructions、工具权限、repo rules、模型配置、任务回放和失败交接。
- MVP：VS Code / Cursor 插件，读取 repo agent instructions，生成 run receipt、scope guard、tool policy diff。
- 风险：平台方会内置很多能力；创业切口要在跨 IDE、跨 agent、团队审计。
- 置信度：中。

## 4. Agent skill supply-chain scanner

- 来源：HN Capsule Security vulnerable AI agent attack surface；GitHub skills / MCP / agent tool repositories增长。
- 链接：[HN](https://news.ycombinator.com/item?id=48143167)，[GitHub Topics: MCP](https://github.com/topics/mcp)
- 为什么热：skill / MCP server / tool manifest 会像 npm 包一样被复制安装，但里面可能含高危权限、硬编码路径、secret 读取、数据库写入。
- 痛点：团队安装第三方 skill 前没有类似 package security scanner 的检查。
- MVP：CLI 扫描 skill / MCP 配置，输出 secret access、shell usage、network egress、database write、OAuth scope、prompt injection sink。
- 风险：如果只做静态 lint，很容易被平台或开源工具吃掉；要接运行时 replay 和 policy gate。
- 置信度：中高。

## 5. Self-hosted financial data MCP for research agents

- 来源：Reddit r/LocalLLaMA 用户发布 self-hosted financial data MCP server。
- 链接：[Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1krvnng/i_built_a_selfhosted_financial_data_mcp_server/)
- 为什么热：个人和小机构想让本地 LLM 做财务研究，但不想把投资记录、watchlist 或研究过程交给第三方 SaaS。
- 痛点：金融数据源、指标解释、引用、回测和本地隐私很难同时满足。
- MVP：只接公开财报 / SEC / Yahoo Finance 类数据，给本地 LLM 提供可引用 tool calls、指标解释和 watchlist summary。
- 风险：金融建议合规、数据授权、幻觉引用。只能先做 research assistant，不碰交易建议。
- 置信度：中。

## 6. On-device robotics / embodied AI dev kit

- 来源：Reddit r/LocalLLaMA 用户展示 Nocturne rover，Jetson Orin + Gemma 4，本地运行、无 Wi-Fi。
- 链接：[Reddit](https://www.reddit.com/r/LocalLLaMA/comments/1kryr9l/nocturne_my_suitcase_sized_robot_stuffed_with_a/)
- 为什么热：本地多模态模型和边缘算力让“离线机器人 agent”从实验室往 hobbyist / SMB 场景走。
- 痛点：想做机器人原型的人缺少可复用的软件栈：感知、任务、控制、安全边界、日志和模拟回放。
- MVP：面向 Jetson / Raspberry Pi / mini PC 的 embodied-agent starter kit，先支持巡检、跟随、固定路线、语音控制和安全停机。
- 风险：硬件碎片化、售后重、demo 到可靠产品差距大。早期适合软件 kit / devtools，不适合贸然做消费硬件。
- 置信度：中。

## Product Hunt 快速扫描

- DevRecorder：定位是 record and replay development workflows，有一点 coding-session replay 信号，但 AI-native 证据还不够。本轮不计入候选，不进正式页。
- 链接：[Product Hunt](https://www.producthunt.com/products/devrecorder)

## 噪音过滤

- 纯 AI 包装的内容营销工具未纳入正式页。
- 没有公开可验证链接、只靠二手转述的 X 热帖未纳入。
