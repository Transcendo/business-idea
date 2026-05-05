# Cobble：把“今晚去哪儿”的群聊内耗压缩成 AI 推荐 + 小组投票

## 名称 / 一句话判断

**Cobble** 最早是面向情侣 date night 的计划工具，现在 App Store 标题已经变成 **Cobble: AI Group Planner**。它的核心不是“又一个本地生活推荐 app”，而是把熟人/情侣/朋友小群最烦人的计划协商压缩成：AI 给选项、发链接、大家投 yes/no/maybe、定地点和时间。

一句话：**Cobble 强化的是亲密关系和熟人小群关系；它不试图替代 WhatsApp / iMessage / 微信群，而是专门解决群聊里最容易烂尾的那个任务：决定一起做什么。**

## 可信来源链接

- 官网首页：[trycobble.com](https://www.trycobble.com/)  
  官网定位是 “Find And Agree On What To Do”，首页强调 “More Time Together. More Fun Together.”、“Less time planning / More time together”，流程是 Plan / Share / Go。
- 官网 About：[trycobble.com/about](https://www.trycobble.com/about)  
  Cobble 自述痛点来自 screenshots、DMs、Google searches、plans that led to nowhere、group chats that went dark；页面称每周新增 150 个 ideas、已有 1M+ saved ideas，并把自己称为 friend group 的 planner。
- App Store：[Cobble: AI Group Planner](https://apps.apple.com/us/app/cobble-ai-group-planner/id1472811526)  
  iTunes Lookup 显示开发者为 idk tonight, LLC，版本 7.1.15，2025-05-12 更新；描述写明 Cobble uses AI to find the best spots near you，朋友可通过链接投 yes/no/maybe，no app needed。
- TODAY 报道：[The Cobble app is like Tinder for couples who need date plans](https://www.today.com/tmrw/cobble-app-tinder-couples-who-need-date-plans-t207725)  
  采访创始人 Jordan Scott，解释 Cobble 最初从 IDK Tonight 内容站演化而来，目标是解决情侣 “What should we do tonight?” 的反复内耗。
- 官网 Press：[Cobble in the news](https://www.trycobble.com/press)  
  收录 TODAY、Forbes、NYT、AlleyWatch、Global Dating Insights 等早期报道线索；可作为继续查融资和媒体叙事的入口。

> 本轮 `web_search` / `web_extract` 仍因 Exa credits 402 不可用，改用 Jina Reader 抓取官网、官网 About/Press、TODAY 页面，并用 Apple iTunes Lookup API 核验 App Store 条目。

## 产品服务的关系类型

- **亲密关系**：早期明确服务情侣/伴侣的 date night 决策。
- **熟人小群关系**：新版本把场景扩展到 friends、group dinners、weekend activities、travel planning、last-minute plans。
- **弱关系转强关系的见面入口**：如果一个半熟人小群缺少自然邀约理由，Cobble 的“我建了一个投票，一起选吧”比直接说“我们出来聊聊”低尴尬。
- **本地生活里的品味信任关系**：不是相信陌生评分，而是让熟人之间共同确认“我们都愿意去这个地方”。

## 它具体解决的痛点

强关系不是靠多聊天维持的。很多关系变淡，是因为每次要线下见面都卡在很小、很烦、没人愿意负责的决策上：

1. **群聊协商成本高。** “你想吃什么？”“都行”会无限循环，最后没人订。
2. **发起人压力大。** 主动提议的人要找地点、看评价、照顾预算、确认时间，还要承担“选得不好”的社交责任。
3. **推荐和决策分裂。** Google / TikTok / 小红书给灵感，群聊负责争论，日历/订座另开工具；链路太散。
4. **情侣和朋友不缺联系渠道，缺共同经历。** 微信/WhatsApp 让人能说话，但不自动创造下一次见面的理由。
5. **本地生活推荐太个人化。** 真正要出门时，重点不是“我喜欢什么”，而是“我们几个都能接受什么”。

## 关系增强机制

Cobble 的关系机制比它的“AI”更重要：

1. **把 vague intent 变成候选清单。** 用户不用先想清楚去哪儿，只要给城市/场景/偏好，系统给出可行动选项。
2. **把群聊争论变成投票。** yes/no/maybe 让含糊态度变成结构化信号，降低“都行但其实不行”的消耗。
3. **链接邀请降低安装门槛。** App Store 描述写 no app needed，这很关键：强关系工具不能一上来要求所有朋友迁移阵地。
4. **共同选择生成 commitment。** 一起投出来的地点比某个人拍脑袋选的地点更不容易被放鸽子。
5. **从一次计划延展到下一段行程。** App Store 描述提到 smart pairings，例如 dinner 后推荐 live music bar；这把单点地点变成一段共同经历。
6. **内容供给服务关系，而不是内容消费。** Cobble 不是让用户刷本地活动信息流，而是把内容作为“见面理由”的燃料。

## AI-native wedge

Cobble 现在的 AI wedge 可以表述为：

> 用户给出“和谁、在哪儿、想做什么、大概什么时候、预算/氛围偏好”；系统 30 秒内返回一组附近餐厅/酒吧/活动/组合行程，并生成可分享投票链接，让朋友直接 yes/no/maybe 表态，最后收敛到地点和时间。

这比“AI 聊天助手帮你推荐餐厅”强，因为它压缩的不是搜索，而是**多人关系里的协商和承诺**。

更 AI-native 的下一步不是加聊天机器人，而是：

- 根据每个成员历史偏好、距离、预算敏感度、饮食限制，自动给出“最不容易吵起来”的候选；
- 识别谁一直没回应，生成低压力提醒；
- 把投票结果翻译成一个明确行动：订哪家、几点、谁负责、下一步怎么说；
- 活动后生成共同记忆卡，下次自动推荐“你们上次喜欢 X，这次试 Y”。

## 为什么用户会来 / 留 / 传播 / 付钱

### 用户为什么会来

- 情侣和朋友真的厌烦“今晚去哪儿”的重复内耗。
- 发起人需要一个不显得强势、也不用自己背锅的决策工具。
- 新城市、新关系、新同事小群需要低尴尬的见面理由。
- AI 推荐 + 投票比在群聊里丢 8 个链接更快。

### 用户为什么会留

- 如果每次都能少花 20 分钟争论，多一次真实见面，用户会把它当成“出门前默认动作”。
- 历史偏好、保存 ideas、共同投票记录会形成关系记忆。
- 对情侣来说，它能从一次 date night 延伸成持续的共同计划习惯。
- 对朋友小群来说，它能成为固定饭局/周末活动/旅行计划的轻量操作台。

### 用户为什么会传播

- 产品天然需要分享链接给 partner / friend group；传播动作就是完成任务的一部分。
- “帮我们投一下今晚去哪儿”比“下载一个新社交 app”自然得多。
- 投票页、候选地点、最终计划都可以转发给小群。
- 如果体验好，朋友下次会反过来用 Cobble 发起新的局。

### 谁为什么付钱

- **用户个人/情侣/小群**：App Store 显示价格为 $0.99；用户为更快决策、更好 date/group plan 付小额费用是合理的，但订阅空间要看推荐质量和使用频率。
- **本地商家/活动方**：如果 Cobble 能证明带来真实到店/订座/购票，餐厅、bar、activity provider 会为分发、featured placement、转化付费。
- **城市生活/旅游合作方**：旅行计划、周末活动、城市体验包可以和票务、订座、旅游服务抽佣结合。

## 商业模式与分发渠道

商业模式：

- App Store 小额付费或未来订阅；
- 本地商家/活动推荐分发；
- 订座、票务、活动套餐、旅行体验的 affiliate / commission；
- 面向 group planning 的 premium AI：更好的偏好记忆、行程组合、无广告、多人同步。

分发渠道：

- App Store 搜索：date night、group planner、things to do；
- 用户把投票链接发给朋友带来的邀请传播；
- 本地生活 SEO / 内容：date ideas、weekend ideas、city guides；
- TikTok / Instagram / 小红书式的“今晚去哪儿”内容种草；
- 商家和活动方合作，把 Cobble 投票嵌进活动推广。

## 对中国市场、旦聚旦、巢聚的可迁移启发

### 对旦聚旦

Cobble 对旦聚旦最直接的启发是：**不要让校友活动停在报名页和微信群；把“谁和谁下一次见面、去哪儿、聊什么、怎么定下来”做成一个低尴尬决策工具。**

可迁移动作：

1. **校友小局投票卡**：活动后系统给同城/同行/同兴趣 3-5 人生成“下次小局候选”：咖啡、饭局、办公室参访、创业复盘、运动局。
2. **意向先行，不先建群。** 先收集 yes/no/maybe 和时间段，再决定是否拉群，避免一堆沉默群。
3. **AI 主理人减负。** 主理人只给主题和候选人，系统生成地点、分组理由、邀约文案、提醒节奏。
4. **关系行动卡。** 不要只沉淀照片；沉淀“我们决定了什么、谁负责订、下一步哪天发生”。
5. **从活动平台变成关系发生器。** 旦聚旦的价值不是发更多活动，而是让校友之间发生更多低成本、可信、可复访的小连接。

### 对巢聚

Cobble 的机制也能迁移到租房：

- 合租室友不是只看房源，也要一起决定预算、通勤、作息、区域、看房顺序。
- 可以做“看房小队投票”：系统给 3 套房 / 2 个中介 / 1 条看房路线，室友或情侣投 yes/no/maybe。
- 中介 AI 分身不该只回答房源问题，而要帮助多方收敛到“周六 14:00 看哪两套，哪些风险必须问”。
- 黑中介识别也可以嵌入投票卡：某候选房源被标注风险，所有参与者看到同一份风险解释。

## 风险、反证、需要继续查的问题

### 风险

1. **使用频率可能不够高。** 普通朋友小群不是每天出门；如果没有旅行、周末、情侣高频场景，留存会弱。
2. **本地供给质量决定体验。** 推荐不准、商家过时、城市覆盖不足，用户很快回到小红书/大众点评/Google Maps。
3. **AI 容易变成包装。** 如果只是普通地点推荐加一句 AI，壁垒不强；真正难的是多人偏好收敛和行动闭环。
4. **商家付费会污染信任。** 如果推荐被广告驱动，熟人小群会失去信任。
5. **巨头可复制入口。** Google Maps、Apple Maps、OpenTable、大众点评、微信小程序都能做多人投票；Cobble 需要靠关系工作流和品牌心智挡住。

### 反证

- 用户可能只在“计划失败时”想起 Cobble，而不是形成稳定习惯。
- 情侣 date night 和朋友 group planning 是相邻但不同的场景；扩展过快可能稀释定位。
- 真正的强关系来自线下共同经历，Cobble 只是促进器，不是关系本身。

### 需要继续查的问题

- Cobble 当前 AI 推荐的实际输入项、城市覆盖、是否有商家/订座/票务集成。
- App Store 价格从免费到 $0.99 的变化是否影响增长。
- 投票链接 no app needed 的转化率和二次发起率。
- 其从情侣 date night 转向 AI group planner 后，核心用户群是否变化。
- 对旦聚旦：校友小局中，“投票定局 + AI 地点/主题推荐 + 会后关系卡”能否比直接微信群约饭带来更高到场率和复访率。
