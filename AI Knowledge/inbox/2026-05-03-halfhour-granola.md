# Granola：把会议记录从“转写文件”改成团队上下文入口

## 名称 / 一句话判断

- 名称：Granola
- 判断：Granola 不是又一个自动参会机器人，而是把“人脑随手记的重点 + 会议音频转写 + 团队共享语境”合成可搜索、可追问、可分发的工作记忆；它真正压缩的是会后整理、追溯共识、同步上下文和把会议结论推进到 CRM / Linear / Slack / 文档里的摩擦。

## 可信来源链接

- 官方首页：https://www.granola.ai/
  - 页面标题是 “The AI notepad for people in back-to-back meetings”，元描述强调用户保持在场，Granola 把 conversations 变成 rich, searchable memory。
  - 首页明确写到：Granola takes your raw meeting notes and makes them awesome；Your notes + transcript；Works on all platforms, no meeting bots；可用模板处理 customer discovery calls、user interviews、1 on 1s，并支持一键分享。
- 官方说明：AI Note-Taker vs AI Notepad：https://www.granola.ai/ai-note-taker
  - 官方区分“AI note-taker”和“AI notepad”：不是只录音转写然后给摘要，而是让用户在会议中保留控制权，会后用用户自己的笔记生成更好的 summaries 与 action items。
- 官方价格页：https://www.granola.ai/pricing
  - 免费版包含 AI meeting notes、limited meeting history、AI chat within and across meetings；Business 为 $14/user/month；Enterprise 为 $35/user/month 起，并包含团队/合规控制。
- 官方安全页：https://www.granola.ai/security
  - 说明不会作为 bot 加入会议；用户必须手动启动；Desktop 直接转写电脑音频；不存储会议音频，只保存 transcript 与用户笔记；第三方模型提供商不得用用户数据训练；Enterprise 默认关闭模型训练。
- 官方企业页：https://www.granola.ai/enterprise
  - Enterprise 包含 SSO、priority support、usage analytics、Enterprise API access、org-wide auto-deletion、sharing/API admin controls、model training opt-out、使用通知等。
- 官方 Series C 公告：https://www.granola.ai/blog/series-c
  - 官方宣布 $125M Series C，$1.5B valuation；同时发布 Spaces、personal API、enterprise API、MCP 更新，并称 Granola 已在 Vanta、Gusto、Thumbtack、Asana、Cursor、Lovable、Decagon、Mistral AI 等团队中使用。
- 官方 Granola 2.0 公告：https://www.granola.ai/blog/two-dot-zero
  - 强调 shared team folders、Chat with folders、跨会议趋势分析、引用到原文行，让团队从轶事判断转向证据判断。
- 官方 MCP 公告：https://www.granola.ai/blog/granola-mcp
  - Granola MCP 让 Claude、ChatGPT、Cursor、Claude Code 等工具在授权后访问会议笔记上下文。
- 官方 Zapier 公告：https://www.granola.ai/blog/your-meeting-notes-now-connected-with-8000-apps
  - Granola + Zapier 可把会议后的 CRM 更新、Linear issue、Slack 通知、Greenhouse 面试总结等动作自动化。

说明：`web_search` 当前因 Exa credits 402 不可用，本轮改用官方页面直连核验；未引用未核验媒体、融资传闻或社交帖。

## 他们具体解决的痛点

会议软件已经不缺“记录”。真正的问题是记录之后没人用：

1. 人在会议中既要听、判断、追问，又要记笔记，结果要么漏掉细节，要么人不在场。
2. 纯转写太长，纯 AI 摘要又经常抓错重点；用户真正需要的是“我的判断和原始对话合在一起”。
3. 会后信息散落在个人笔记、Slack、CRM、Linear、Notion、Google Docs 里，团队每次对齐都像重新开会。
4. 客户访谈、销售电话、招聘面试、1:1、项目同步里最有价值的上下文通常在对话中，而不是整理过的文档里。
5. 公司内部的“我们为什么这么决定”很难追溯，尤其是跨多场会议、多个人、多周之后。

Granola 的聪明点是没有从“让 AI 替你开会”切入，而是从更低阻力的“你照常开会、随手记几笔，我把这场会变成可用资产”切入。

## AI-native wedge

**用户给什么：**

- 一场正在进行或刚结束的会议音频；
- 用户自己随手写的粗糙笔记、关键词、判断、TODO；
- 日历、参与人、会议标题和可选模板，例如 user interview、sales call、1:1、hiring loop；
- 团队空间、文件夹、权限规则，以及要同步到的工具。

**系统 30 秒内返回什么：**

- 一份基于“用户笔记 + transcript”的结构化会议记录；
- action items、决策点、风险、客户需求、候选人评价或销售推进点；
- 可追问的会议上下文：用户能问“John 对 headcount 怎么说”“哪些客户都提到了同一个 UX 问题”；
- 可分享链接或自动化动作：发 Slack、建 Linear issue、更新 CRM、写入 Zapier、暴露给 MCP 客户端。

这里的 AI-native 不在“会议后生成摘要”这件老事，而在两个压缩：

1. **压缩判断整理**：把用户粗笔记和完整语音拼起来，生成更贴近真实重点的记录。
2. **压缩团队上下文调用**：把很多场会议变成可查询、可引用、可接入其他 AI 工具的公司记忆。

## 为什么用户会来 / 留 / 传播 / 付钱

### 为什么会来

入口痛点很具体：一周十几场会的人，最讨厌会后补笔记、找结论、写 follow-up。Granola 不要求组织先换流程，只要求个人在开会时打开一个 notepad，试用成本很低。

更重要的是，它不派 bot 入会。很多团队对 bot 参会、录音提示、客户观感很敏感；Granola 的“像 Apple Notes，但会听会议”的入口比“又来一个会议机器人”轻很多。

### 为什么会留

留存来自记忆资产积累，而不是单次摘要：

1. 历史会议越多，跨会议搜索和 chat 越有用；
2. 用户自己的模板、笔记风格、文件夹和分享习惯会沉淀；
3. 团队 Spaces、共享文件夹和权限体系一旦进入销售、产品、招聘、CS 流程，迁移就不只是换一个工具；
4. Zapier、MCP、Enterprise API 把会议上下文送进其他工具后，Granola 会从“记笔记软件”变成上下文源。

### 为什么会传播

Granola 的传播单元非常清楚：一份会后好到让参会者想转发的笔记。

用户不是分享“我用了一个 AI 工具”，而是直接把客户访谈摘要、候选人面试卡、销售推进记录、项目决策摘要发给同事。对方看到的是结果，不是广告。

第二个传播单元是“跨会议洞察卡”：比如从 12 场用户访谈里提取 5 个反复出现的痛点，并带引用。这种东西天然适合发给老板、产品团队或客户成功团队。

### 谁为什么付钱

- 个人知识工作者：为省掉会后整理、找记录、写 follow-up 的时间付 $14/month。
- 产品团队：为用户访谈、需求归因、roadmap 证据付钱。
- 销售 / CS 团队：为 CRM 更新、客户风险信号、续约/流失原因归纳付钱。
- 招聘团队：为面试记录、候选人 scorecard、hiring loop 追踪付钱。
- 企业 IT / 安全 / 管理层：为 SSO、SCIM、删除策略、模型训练关闭、权限控制、API 和审计付 Enterprise 价。

付费理由不是“AI 笔记更漂亮”，而是会议本来就占据公司大量工资成本，任何能让会议输出可复用、可追溯、可进入系统的工具，都能从时间账和管理账里拿预算。

## 商业模式与分发渠道

### 商业模式

- Freemium：免费试用让个人先形成习惯。
- Seat-based SaaS：Business $14/user/month，吃个人和小团队预算。
- Enterprise SaaS：$35/user/month 起，卖安全、权限、API、合规、组织控制。
- API / MCP / workflow usage：长期可能对企业上下文调用、自动化、跨工具连接收更高价值的钱。

### 分发渠道

- 个人生产力口碑：会议多的人天然会把好笔记转发给同事。
- 团队场景模板：customer discovery、sales call、1:1、hiring loop、standup。
- 企业安全页和 case study：打消“会议数据能不能交给 AI”的顾虑。
- MCP / Zapier / API：从 Claude、ChatGPT、Cursor、Linear、Slack、CRM 等工作流反向带入。
- 创始人/产品圈传播：会议笔记是每个产品团队、销售团队、创业公司都懂的痛。

## 对中国市场、旦聚旦、巢聚或现有项目的可迁移启发

### 对中国市场

中国市场不缺会议转写，也不缺企业 IM。Granola 的启发不是“再做一个会议纪要”，而是：

1. **不要只转写，要把人的手写判断放进去。** 纯 AI 纪要容易变成没人信的流水账；用户自己写下的关键词是很强的偏好信号。
2. **先做个人 wedge，再进团队知识库。** 直接卖“公司大脑”太重；从个人开会痛点进，再自然扩到共享文件夹和跨会议问答。
3. **合规说明要前置。** 不派 bot、手动启动、不存音频、权限默认私有，这些比“模型很强”更能降低企业阻力。

### 对旦聚旦

旦聚旦如果有线下活动、校友访谈、社群共创、赞助商沟通，Granola 式产品可以变成“活动记忆层”：

- 每次访谈/会议结束后生成结构化纪要；
- 自动提取可公开传播的金句、需求、赞助线索和后续行动；
- 把多场访谈里的共性问题汇成选题库或服务机会。

重点不是给活动加 AI 聊天，而是让每次对话变成可沉淀、可复用、可转发的资产。

### 对巢聚 / 租房与房产

巢聚最值得借的是“对话上下文资产化”：

- 租客和中介、房东、室友的沟通很分散，信息又极易反复变口径；
- 可以做一个“租房沟通 notepad”：用户把微信聊天截图、电话记录、看房笔记、房源链接丢进去，系统生成房源风险卡和下一步追问清单；
- 对中介信任层，不要做粗暴黑名单，而是做“证据引用”：哪一句涉及改价、隐性费用、合同风险、押金退还条件。

Granola 说明：最强的 AI 入口常常不是聊天框，而是把真实世界对话变成可判断的结构化记忆。

## 风险、反证、需要继续查的问题

### 风险

1. 会议笔记赛道拥挤，Otter、Fireflies、Fathom、Read.ai、Zoom/Google/Microsoft 原生能力都会挤压。
2. 如果用户只把它当“摘要工具”，留存会被平台内置功能吞掉；Granola 必须把团队上下文、权限、API、MCP 做成差异。
3. 会议数据极敏感，安全事故、误分享、权限错配都会伤信任。
4. “公司第二大脑”叙事容易变重，若信息架构复杂，个人用户可能觉得不如原来的轻 notepad。
5. 企业部署会遇到 IT 审批、录音同意、跨境数据、客户隐私等阻力。

### 反证

- 如果 Zoom、Google Meet、Microsoft Teams 把“用户私有笔记 + 转写 + 组织知识库 + CRM/Slack/Linear 自动化”做得足够好，独立会议笔记工具的空间会变窄。
- 如果多数团队不愿把会议 transcript 作为长期知识库，Granola 的价值会停在个人效率，而不是企业上下文平台。
- 如果跨会议问答引用不准，用户会重新回到手工找原文，AI 记忆层就会失去信任。

### 需要继续查的问题

1. Granola 在不同会议类型里的留存差异：用户访谈、销售、招聘、1:1 哪个最强？
2. Team Spaces 和 Enterprise API 是否真的带来团队级扩张，还是主要仍靠个人 seat？
3. MCP 连接到 Claude / ChatGPT / Cursor 后，用户真实高频任务是什么？写文档、建 tickets、CRM 更新，还是内部问答？
4. 中国版本如果不接入会议音频，而先从微信聊天、看房笔记、电话摘要切入，是否更适合巢聚？
5. Granola 的“无 bot”体验在企业合规和外部客户观感上是否是关键胜负手？
