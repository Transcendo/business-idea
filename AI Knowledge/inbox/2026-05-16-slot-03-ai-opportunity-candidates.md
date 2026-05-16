# 2026-05-16 slot 3 AI opportunity candidates

本轮覆盖来源：Hacker News、GitHub、Product Hunt、DevExp。正式页只推进 1 条，其余留在 inbox，避免弱证据污染公开目录。

## 1. Agent Tool Distribution Layer — 已提升为正式页

- 来源：HN Sx、GitHub sleuth-io/sx、Product Hunt TrustClaw by Composio、DevExp ScyllaDB MCP case、Product Hunt Picsart MCP。
- 为什么现在热：MCP、skills、commands、agent connector 同时增多。团队开始从“能不能接工具”进入“怎样分发、审批、升级、回滚工具”。
- 用户痛点：高手配置卡在个人机器；普通成员不会装；安全团队看不见权限；版本坏了无法回滚。
- AI 是否压缩任务：压缩的是把个人 AI 工作流变成团队可安装、可测试、可审计 package 的过程。
- 为什么来 / 留 / 传播 / 付费：来是复制高手 workflow；留是 registry 变成团队基础设施；传播靠 package receipt；付费点是私有 registry、审计、SSO、策略、签名和私有部署。
- MVP：CLI 打包 Claude/Codex command、MCP config、prompt skill，生成 manifest、smoke tests、权限声明、安装 receipt、rollback。
- 风险：大厂 agent 客户端内置；公网市场垃圾化；供应链与越权责任重。
- 置信度：中高。已写正式页面 `content/docs/developer-tools/agent-tool-distribution-layer.mdx`。

## 2. Local-first AI Knowledge Base / Reader Agent

- 来源：HN PileaX Show HN；GitHub pileax-ai/pileax。
- 为什么现在热：个人知识库、AI chat、电子书阅读、PDF/EPUB 管理开始合并。用户不只想“问文件”，还想在阅读、摘录、笔记、复习之间来回跳。
- 用户痛点：书、笔记、PDF、网页摘录、聊天记录分散；Obsidian / Notion / Zotero / Reader / ChatGPT 之间切换成本高。
- AI 是否压缩任务：能压缩“读一段材料 -> 摘要 -> 建笔记 -> 问答 -> 找回上下文”这条链路，但前提是本地索引和引用可控。
- 为什么来 / 留 / 传播 / 付费：来是导入个人书库；留是长期阅读记忆；传播靠读书问答卡和知识图谱截图；付费点是本地优先、多设备同步、OCR、长文档索引、模型接入。
- MVP：只支持 EPUB/PDF + markdown notes，做本地 RAG、引用定位、阅读摘要卡。
- 风险：Notion、Obsidian、Zotero、Readwise、Google NotebookLM 都在挤；PileaX 当前 HN 热度低，不能直接判强需求。
- 下一步验证：找 20 个重度读书/研究用户，看他们是否愿意把一个真实书库导入并连续使用 7 天。
- 置信度：中低。先留 inbox。

## 3. Runtime-agnostic Agent Workflow Spec / Visual Harness

- 来源：HN itsharness feedback post；GitHub 3IVIS/itsharness。
- 为什么现在热：LangGraph、CrewAI、Mastra、Microsoft Agent Framework、A2A 等框架分化。团队怕 workflow 被某个 runtime 绑定。
- 用户痛点：agent flow 难调试、难版本化、迁移成本高；视觉 canvas 容易漂亮但不一定进生产。
- AI 是否压缩任务：如果 spec 能生成 runnable code、trace、telemetry，它压缩的是“画流程 -> 写胶水代码 -> 接观测”的工程链路。
- 为什么来 / 留 / 传播 / 付费：来是框架迁移和调试；留是版本化 spec；传播靠 flow diff / trace replay；付费点是团队协作、runtime adapter、Langfuse telemetry、CI 验证。
- MVP：只支持 LangGraph + Mastra 双 adapter，导入一个真实客服/研究 workflow，输出 runnable repo + trace。
- 风险：低代码 agent builder 很容易变成玩具；当前公开信号弱，HN 只有很少互动。
- 下一步验证：找已有 agent workflow 的团队，问他们是否真愿意维护中间 spec，而不是直接写代码。
- 置信度：中低。暂不发正式页。

## 4. Agent Prompt / Behavior Regression Testing

- 来源：HN Ask HN: Prompt evaluation and automated testing: How do you validate changes?；站内已有 Agent Failure Regression Harness 页面。
- 为什么现在热：agent prompt、tool schema、model 版本、上下文策略常变。每次改动都可能让旧任务静默失败。
- 用户痛点：没有像单元测试一样的 prompt regression；人工 spot check 太慢；上线后才发现回答漂移。
- AI 是否压缩任务：压缩的是把历史失败、真实对话、agent trace 转成可重复测试集，并在 CI 里判定是否退化。
- 为什么来 / 留 / 传播 / 付费：来是上线前怕坏；留是每次 prompt/model 改动都跑；传播靠 failure diff；付费点是评测托管、trace dataset、CI gate、团队报告。
- MVP：从 50 条真实任务中抽样，生成 expected behavior rubric，接 GitHub Actions。
- 风险：评价标准容易主观；小团队会先用手工表格；大模型输出非确定性会增加误报。
- 下一步验证：不新建页面，后续可补强 `agent-failure-regression-harness.mdx` 来源。
- 置信度：中。

## 5. Agent Web Reach / Public Web Access CLI

- 来源：GitHub Panniantong/Agent-Reach，README 写明让 AI agent 搜 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等；GitHub API 显示 2026-02 创建后已有高 star 信号。
- 为什么现在热：agent 能写代码，但公开网页、视频字幕、社媒搜索、中文平台经常卡在 API、登录、反爬和地区限制。
- 用户痛点：用户让 agent “去网上看看真实评价”，agent 常拿不到 Twitter、Reddit、YouTube、B站、小红书。
- AI 是否压缩任务：压缩的是跨平台搜索、抓取、转写、摘要、引用回填。但强依赖数据可得性和合规边界。
- 为什么来 / 留 / 传播 / 付费：来是补 agent 眼睛；留是长期研究/舆情/竞品工作流；传播靠跨平台证据卡；付费点是稳定代理、引用、任务队列、合规数据源。
- MVP：不要碰高风险抓取。先做 YouTube transcript、GitHub、Reddit 公共页面、HN、官方博客，输出证据包。
- 风险：平台 ToS、反爬、账号安全、数据质量、隐私。公开仓库不应鼓励绕限制抓高风险网站。
- 下一步验证：如果正式化，方向应写成“agent evidence collection layer”，不是“免费抓全网”。
- 置信度：中。先留 inbox。

## 6. Autonomous Research Loop for Small-model Training

- 来源：GitHub karpathy/autoresearch。
- 为什么现在热：AI agent 开始从写代码进入“提出实验 -> 修改训练代码 -> 短训 -> 对比指标 -> 保留/回滚”的科研循环。
- 用户痛点：小模型/垂直模型调参实验多、重复、日志散；研究者不想把夜间 GPU 时间浪费在手工试错。
- AI 是否压缩任务：压缩的是低风险实验迭代和实验日志整理，不是替代研究判断。
- 为什么来 / 留 / 传播 / 付费：来是自动跑 overnight experiments；留是实验数据库和复现实验；传播靠 leaderboard / experiment log；付费点是托管 GPU、实验调度、回滚、安全沙箱。
- MVP：只支持一个小训练 repo，agent 每次只能改白名单文件，5 分钟训练，自动比较 loss / eval。
- 风险：结果可能不可复现；agent 可能过拟合指标；真实训练成本高；研究人员会要求强审计。
- 下一步验证：适合后续写 AI research automation 页面，但需要更多非单一 repo 来源。
- 置信度：中。先留 inbox。
