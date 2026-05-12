# Agent eval / observability / self-improving loop

- 方向：LLM observability、agent eval、simulation、guardrails、反馈优化闭环。
- 来源强度：中。GitHub 信号强，但赛道已有 Langfuse 等成熟玩家；新机会需要更窄的垂直评测包。
- 公开来源：
  - Future AGI：`https://github.com/future-agi/future-agi`，GitHub API 抓到 2026-04-23 创建、约 930 stars，README 写“AI Agents hallucinate. Fix it faster.”，覆盖 evaluations、tracing、simulations、guardrails、gateway、optimization。
  - Langfuse：`https://github.com/langfuse/langfuse`，约 27k stars，开源 LLM engineering platform，覆盖 observability、evals、prompt management、datasets。
  - Fluiq HN：`https://news.ycombinator.com/item?id=48087997`，定位“LLM observability, evals and optimization in two lines of Python”，热度弱但说明“更低接入成本”仍是 builder 诉求。

## 为什么现在热

- AI app 从 demo 进入生产后，问题不再是“能不能回答”，而是“为什么这次错、下次会不会再错、上线前怎么测”。
- Agent 比 chat 更难测：工具调用、环境状态、长上下文、权限、重试都会引入非确定性。
- OpenTelemetry、trace、dataset、simulation 正在被 AI 团队重新组合成一套新工程栈。

## 用户痛点

- 生产 bug 很难复现：prompt、model version、tool result、用户上下文都变。
- 团队不知道该优化模型、提示词、工具 schema，还是业务规则。
- 通用 eval 太粗；真正值钱的是行业任务评测和失败分类。

## AI 是否真的压缩任务

AI 可以压缩“人工看日志、归因失败、生成测试样本、回归验证”的工作。但 observability 本身不是 AI-native wedge；AI-native wedge 是从 trace 自动生成失败标签、修复建议和新的 regression eval。

## Users come / stay / spread / pay

- 来：上线 agent 后事故变多，团队需要知道每次失败发生在哪一步。
- 留：历史 trace 变成测试集，越用越能阻止回归。
- 传播：分享“这个 agent 失败类型 Top 5 / 修复前后通过率”的报告。
- 付费：按 trace volume、seat、hosted eval、私有部署、合规审计、垂直 benchmark 包付费。

## 可验证 MVP

- 选一个垂直：客服 agent、coding agent、sales ops agent、医疗文书 agent。
- 接入 20-50 条真实/合成 trace，自动标注失败类型：工具错、上下文缺失、幻觉、权限不足、用户意图误判。
- 输出 regression eval pack 和修复建议，不先做大而全平台。

## 风险 / 反例

- Langfuse、Logfire、Datadog、OpenAI/Anthropic 平台功能会吞掉泛 observability。
- 只做 dashboard 没壁垒。
- 企业 trace 里可能有敏感数据，采集和脱敏是购买前置条件。

## 下一步验证问题

- 哪个 agent 场景的失败有明确金钱损失？
- 自动标注的失败 taxonomy 能否比人工 review 快 5 倍以上？
- 垂直 eval pack 是否能卖，而不是被当成开源模板？
