# Computer-use agent sandbox / desktop automation infra

- 方向：computer-use agent、桌面自动化、OS accessibility、sandbox / benchmark。
- 来源强度：中偏强。GitHub star 和 HN 讨论都说明 builder 关注，但仍偏 infra 早期。
- 公开来源：
  - CUA：`https://github.com/trycua/cua`，GitHub API 抓到约 15.9k stars，README 定位为 build / benchmark / deploy agents that use computers。
  - Agent Desktop：`https://github.com/lahfir/agent-desktop`，HN Show HN `https://news.ycombinator.com/item?id=47982708`；Algolia 抓到 99 points、43 comments；评论提到“macOS only”、Linux 支持、iOS simulator / Maestro 太慢等真实需求。
  - Open Computer Use：`https://github.com/coasty-ai/open-computer-use`，GitHub 搜索显示约 568 stars，定位 production-ready computer using agent。

## 为什么现在热

- Browser agent 只覆盖网页。真实工作流还在桌面 app、文件系统、终端、IDE、模拟器、设计工具、企业客户端里。
- 模型能力够用了，但“看屏幕—定位控件—执行—验证”仍然缺稳定抽象。
- OSWorld、CUA benchmark 这类评测让 computer-use 不再只是 demo，开始变成可优化的工程问题。

## 用户痛点

- 自动化桌面 app 很难：坐标脆、视觉慢、accessibility tree 不统一。
- QA、移动端模拟器、内部工具、设计软件等场景不能只靠网页 DOM。
- 企业不敢把完整桌面随便交给云端 agent，需要沙箱、权限边界、审计和回放。

## AI 是否真的压缩任务

能压缩“人盯屏幕、找按钮、复制粘贴、跨应用操作”的低价值劳动。AI 不该直接变成无限权限鼠标；更好的 wedge 是把屏幕状态转成结构化元素引用、允许 agent 操作，但每步可回放、可限制、可评测。

## Users come / stay / spread / pay

- 来：浏览器 agent 解决不了本地 app、模拟器、IDE、文件管理器。
- 留：同一套 driver 能跑本地、远程 VM、CI、沙箱，且元素定位比视觉点击稳定。
- 传播：分享“agent 自动完成某个桌面流程”的视频 replay 和失败恢复记录。
- 付费：企业按托管 desktop sandbox、并发执行、benchmark/eval、审计日志、私有环境适配付费。

## 可验证 MVP

- 不做通用“AI 操作电脑”。选一个窄场景：iOS simulator QA、桌面财务软件录入、设计工具批量导出。
- 输出结构化 action log：当前窗口、元素树、动作、截图、失败原因。
- 指标：任务完成率、平均人工接管次数、每步 token/延迟、跨版本 UI 变化后的恢复率。

## 风险 / 反例

- OS 权限、隐私、安全是硬门槛。
- 大厂操作系统和浏览器厂商可能内置 computer-use API。
- 通用桌面 agent 很容易变成炫技 demo；创业机会更可能在垂直 QA / RPA replacement / secure sandbox。

## 下一步验证问题

- 哪个用户群现在已经为 Maestro、BrowserStack、RPA 或人工外包付钱？
- Accessibility tree + vision 混合方案能否显著降低失败率？
- “本地运行”是不是付费需求，还是只是开源社区偏好？
