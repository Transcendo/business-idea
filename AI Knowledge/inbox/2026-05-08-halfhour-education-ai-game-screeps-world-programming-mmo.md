# Screeps: World：用 JavaScript AI 控制殖民地的 Steam 编程 MMO

- 日期：2026-05-08
- Slot：20（17:30 Asia/Shanghai）
- 方向：education-ai-game / Steam / programming game / AI-adjacent coding game
- 状态：已核验，适合升级为 `content/docs/gaming/screeps-world-programming-mmo.mdx`

## 一句话

`Screeps: World` 是一个很硬核但很有价值的教育游戏样本：玩家不是点单位，而是写 JavaScript AI，让自己的殖民地在持久在线世界里 24/7 自动运行、采矿、建造、扩张、交易和战斗。

它不是生成式 AI tutor；它的教育价值在于把“学编程 / 学 AI agent”压成一个真实可运行的系统。中国创业迁移点不是复刻 MMO，而是做更轻的 **代码 agent 闯关沙盒 + AI debug 教练 + 可分享运行结果**。

## 核验信息

- 产品 / 游戏：Screeps: World
- 开发商 / 发行商：Screeps, LLC（Steam Store API）
- Steam AppID：464350
- Steam 商店页：https://store.steampowered.com/app/464350/Screeps_World/
- Steam release date：2016-11-16（Store API）
- 价格：美国区 $19.99，无折扣（Store API，2026-05-08 抓取）
- Steam genres：Indie、Massively Multiplayer、Simulation、Strategy（Store API）
- Steam categories：Single-player、Multi-player、MMO、PvP、Online PvP、LAN PvP、Cross-Platform Multiplayer、Steam Workshop、Stats、Steam Leaderboards 等（Store API）
- Steam 用户标签页面抓取：Programming、Strategy、Massively Multiplayer、Sandbox、Automation、Open World、Base Building、Artificial Intelligence、Economy、Hacking、RTS、PvP 等。
- Steam reviews API：Very Positive，total_reviews 2,068，positive 1,791，negative 277（2026-05-08 抓取）。
- Steam 页面文本：1,909 条用户评测中 86% positive（2026-05-08 页面抓取；与 Reviews API口径不同，按 Steam 页面展示记录）。
- 官方文档：https://docs.screeps.com/
- 官方文档 Introduction：https://docs.screeps.com/introduction.html
- GitHub standalone server：https://github.com/screeps/screeps
- GitHub API：`screeps/screeps` 描述为 standalone server for programming game Screeps，2026-05-08 抓取为 3,314 stars / 234 forks，ISC License。

## 教育对象

- 有一定编程基础的青少年、大学生和成人开发者。
- 编程社团、算法社团、AI agent / automation 兴趣小组。
- 不太适合零基础儿童直接上手；更像进阶型 coding playground。

## 学习目标

- JavaScript 编程、模块化、调试、状态管理、资源调度。
- AI agent 行为设计：让单位在没有玩家实时操作时按规则行动。
- 系统优化：CPU 限制、tick、路径、资源、扩张、攻防和市场。
- 工程习惯：官方文档支持外部 commit / IDE workflow，GitHub 也提供 standalone server。

## 核心玩法 / 学习工作流

1. 玩家写 JavaScript 控制 creep 和 colony。
2. 代码在持久在线世界中按 tick 运行。
3. creep 采集资源、建造单位、扩张领地、交易、战斗。
4. 其他玩家的代码也在同一世界中运行，形成 PvP / 经济 / 领地压力。
5. 玩家回来看日志、地图和结果，继续 debug、优化和重构。

强点：它把“程序是可以持续运行的代理”这件事讲得很直观。比很多 AI agent 课程更像真实系统。

## AI / 游戏化机制

- AI 不是生成式模型，而是玩家写出的 JavaScript agent。
- 游戏化来自持久世界、领地扩张、资源管理、PvP、leaderboards、Steam Workshop 和长期优化。
- 学习不是做题，而是让自己的代码在开放环境中活下去。

## 分发与商业模式

- Steam 买断制：$19.99。
- 游戏社区 / 编程社区 / GitHub / 官方文档形成开发者可信度。
- 可迁移模式：C 端 coding game 验证玩法，再补 AI coach、课程任务包、教师控制和班级报告。

## 中国迁移判断

不建议直接做“中国版 Screeps MMO”。门槛高，实时多人和未成年人监管成本都重。

更小的机会：

- AI agent 编程闯关：用户写规则控制机器人 / 工厂 / 小队，AI coach 只解释 bug 和执行路径，不直接代写。
- 教师任务生成器：老师输入“循环、条件、状态机、路径规划”，系统生成 10 分钟可运行关卡。
- 成果卡传播：把一次运行结果转成 gif / 视频 / 代码摘要，适合 B 站、小红书、家长群、编程社团展示。

## 风险

- 入门门槛高，零基础用户可能被 JavaScript 和文档劝退。
- 多人 PvP / 公共服务器对 K12 合规不友好。
- AI coach 如果直接输出完整代码，会把学习回合变成抄答案。
- Steam 英文产品对中国低龄家庭不够友好；需要中文任务、本地课程目标、未成年人保护和教师控制。

## 来源

- Steam Store：[Screeps: World](https://store.steampowered.com/app/464350/Screeps_World/)
- Steam Store API：[appdetails appid 464350](https://store.steampowered.com/api/appdetails?appids=464350&cc=us&l=english)
- Steam Reviews API：[appreviews appid 464350](https://store.steampowered.com/appreviews/464350?json=1&language=all&purchase_type=all)
- Screeps Docs：[Overview](https://docs.screeps.com/)
- Screeps Docs：[Introduction](https://docs.screeps.com/introduction.html)
- GitHub：[screeps/screeps](https://github.com/screeps/screeps)
