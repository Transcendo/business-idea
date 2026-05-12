# Autonomous coding agent governance / budget caps / audit trail

- 方向：AI coding agent control plane、预算刹车、scope guard、审计和回滚证据。
- 来源强度：中。HN 热度不高，但 GitHub 上多个小项目同时出现，痛点明确；适合继续观察，不够强到今天发正式页。
- 公开来源：
  - MartinLoop：`https://github.com/Keesan12/martin-loop`；HN `https://news.ycombinator.com/item?id=48098126`，README 直指“overnight AI pipeline estimated $2.40, woke up to $65 bill”、47 retries、no rollback、no audit trail。
  - AgentLint：`https://github.com/mauhpr/agentlint`，GitHub API 抓到约 20 stars，定位 real-time guardrails for AI coding agents。
  - wb-red-team：`https://github.com/sundi133/wb-red-team`，定位 whitebox / blackbox red-teaming for agentic AI apps，会分析 source code、tools、roles、guardrails 并生成攻击链。
  - BrowserCode：`https://github.com/leaningtech/browsercode`，HN `https://news.ycombinator.com/item?id=48095502`，说明“在浏览器里跑 Claude Code / agent CLI”这类运行环境也在增多。

## 为什么现在热

- Coding agent 已经能改真实 repo，风险从“答案错”升级成“花钱、删文件、改错范围、把坏代码合进去”。
- 团队开始从单次 Copilot 补全，转向长时间 autonomous loop。长循环天然需要预算、停止条件、证据和审批。
- 现有 IDE agent 更关注生成能力，治理层还很薄。

## 用户痛点

- Agent 重试成本不可控，尤其多模型、多工具、多测试循环。
- Scope creep 难发现：本来只改一个 bug，结果动了配置、迁移、依赖。
- Code review 缺上下文：人看到 diff，但看不到 agent 为什么这么做、失败过几次、花了多少钱。

## AI 是否真的压缩任务

AI 压缩编码和排错，但会放大治理成本。这里的 wedge 不是再造 coding agent，而是给任何 agent run 加“预算、权限、检查点、回滚、审计 receipt”。它压缩的是工程负责人追问“发生了什么”的时间。

## Users come / stay / spread / pay

- 来：团队已经在用 Claude Code / Cursor / Codex，但不敢放它 overnight 或 CI 自动跑。
- 留：每次 run 都有可审计记录、预算硬停、scope diff、verifier gate。
- 传播：分享“agent run receipt”：成本、迭代次数、改动范围、测试结果、停止原因。
- 付费：团队按 seat / repo / agent run volume / enterprise policy templates 付费；更大客户要 SSO、私有部署、审计导出。

## 可验证 MVP

- 只支持 Claude Code / Codex CLI 的 wrapper。
- 每个任务配置：允许路径、预算上限、最大迭代、必须通过的命令、禁止命令。
- 输出 run receipt：diff、成本估算、失败分类、停止原因、rollback patch。
- 指标：阻止多少越权改动、减少多少无效重试、review 时间是否下降。

## 风险 / 反例

- IDE 厂商可能内置 budget 和 audit。
- 如果只做命令包装，很容易被开源脚本替代。
- 成本估算对不同模型和代理服务不准，会损害信任。

## 下一步验证问题

- 哪些团队已经允许 coding agent 在 CI/overnight 模式运行？
- 最有付费意愿的是 startup CTO、平台工程、安全团队，还是外包/agency？
- “run receipt”能否成为 PR review 的标准附件？
