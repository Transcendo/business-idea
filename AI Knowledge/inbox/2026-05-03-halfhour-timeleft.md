# Timeleft：把“交朋友”从刷人压缩成每周一次线下共同经历

## 名称 / 一句话判断

- 名称：Timeleft（Timeleft: Make New Friends IRL）
- 判断：Timeleft 不是陌生人信息流，也不是 dating / networking 的换皮。它的聪明点是把“我想认识新朋友但不知道约谁、去哪、怎么不尴尬”压缩成一个固定节奏：做测验、订一个 dinner / drinks / run，系统匹配 4-6 人小组、安排地点和破冰，到点出现。它强化的是弱关系转强关系、同城半熟人关系和线下小圈子关系。

## 可信来源链接

- 官方首页：https://timeleft.com/
  - 页面文案强调：The weekly gatherings turning strangers into friends；No bios, no swiping, no planning；Timeleft 会匹配 group 并处理 venue、group、logistics。
  - 首页列出 dinners、drinks、runs 三类活动；声称 3M+ members，覆盖 52 countries 和 200+ cities。该数字只作为本轮抓取快照。
- 官方 About：https://timeleft.com/about/
  - 官方把定位写成 “The Friendship App”，不是 dating app / networking app；并明确说从 matching group、first hello、chatting afterwards、future plans 到 lasting friendships 都有功能支持。
  - 核心哲学是 “You don't find friends, you become one. Start by showing up.”
- 官方 Newsroom：https://timeleft.com/newsroom/
  - Newsroom 描述：52 countries、200+ cities，使命是 restore friendship as infrastructure；强调不是 dating app、不是 networking app，而是 real people meeting face-to-face to build friendships。
- 官方 Affiliate：https://timeleft.com/affiliate/
  - 页面说 ambassador 帮助用户在城市里发现新友谊；官方列出 3M+ members、720 bookings a day、80,000+ dinners attended，并提供 referral links 的 50% commission。该页数字只作为本轮抓取快照。
- Apple iTunes Search API：https://itunes.apple.com/search?term=Timeleft&country=us&entity=software&limit=5
  - 返回 `Timeleft: Make New Friends IRL`，seller 为 Timeleft SAS，bundle id `com.timeleft.app`，类别 Social Networking。
  - App 描述写明：用户 take the quiz，选择 dinner / drinks / coffee / run；系统基于 personality、shared interests、age 匹配 4-6 人；活动当天透露 venue 和参会预览；有 Repeat、Connect、+1、in-app icebreakers 等功能。
  - 本轮抓取快照：iOS 评分约 4.66，评分数约 6,946。数字不当作长期事实。

说明：`web_search` / `web_extract` 当前因 Exa credits 402 不可用，本轮改用 Timeleft 官网页面和 Apple API 直连核验。未引用未打开正文的融资、估值或媒体细节。

## 产品服务的关系类型

Timeleft 强化的是四类关系：

1. **弱关系转强关系**：一开始是陌生人，但通过同桌吃饭、共同跑步、后续连接，进入半熟人甚至朋友关系。
2. **同城半熟人关系**：用户不只是在线上看到人，而是在同一个城市、同一个餐桌、同一个时间段真实见面。
3. **线下小组关系**：4-6 人小桌比大型活动更容易形成互相记住的共同经历。
4. **身份/安全边界关系**：虽然不是实名校友网络，但通过 booking、venue 安排、公开场所、group setting、women-only dinners 等机制降低陌生人见面的风险。

它不是强熟人维护工具，而是“把陌生人变成可继续联系的人”的线下关系生成器。

## 他们具体解决的痛点

成年人交朋友难，真正卡住的不是没有社交软件，而是五个现实摩擦：

1. **谁来选人**：用户不想像 dating app 一样刷头像、猜动机、反复尬聊。
2. **谁来组织**：约饭要定时间、餐厅、人数、预算、氛围；单个用户懒得做主理人。
3. **如何降低尴尬**：陌生人 1v1 太像面试或相亲；4-6 人小组更安全，也更容易有人接话。
4. **如何形成重复**：一次见面只是火花，每周固定 ritual 才可能变成朋友。
5. **如何避免错配**：纯地理附近不够，Timeleft 试图用 personality、shared interests、age 和活动形式做初筛。

它压缩的是“从想交朋友到真的坐在一桌”的组织、匹配和心理成本。

## 关系增强机制

Timeleft 让关系变强的机制很具体：

- **共同经历**：同桌吃饭、一起跑步、活动后喝一杯，比线上互关更容易留下记忆。
- **重复互动**：weekly gatherings、one-tap rebooking、Repeat 功能，把交朋友从偶发事件变成习惯。
- **低尴尬匹配**：No bios、no swiping，用户不用公开展示自己，也不用写很假的自我介绍。
- **小组安全感**：4-6 人 group setting 比 1v1 更自然，降低社交失败的个人压力。
- **后续连接**：Connect 让用户和聊得来的人保持联系，+1 让新关系能带入老关系。
- **仪式感**：地点和 group 在活动前揭晓，既有未知感，也把决策负担从用户身上拿走。

## AI-native wedge

Timeleft 当前不是典型 AI-native 产品。值得学的是它的非 AI 关系楔子：它没有让用户聊天筛人，而是把关系发生的前置判断产品化。

如果迁移到 AI 关系助手，最小 wedge 不该是“AI 陪你聊天交朋友”。更好的形态是：

**用户给什么：**

- 城市、可用时间、预算、饮食限制；
- 想认识的人：同校、同职业、AI 创业者、刚搬来上海的人、租房互助人群；
- 本次目的：交朋友、找 cofounder 线索、同城饭局、租房避坑、校友互助；
- 可公开名片和禁忌边界。

**系统 30 秒内返回什么：**

- 一个 4-6 人小局建议：人数结构、候选人类型、为什么适合坐一桌；
- 低尴尬邀约文案和活动页；
- 场地/时间/预算建议；
- 入场前的互相认识卡和破冰问题；
- 活动后的 follow-up 建议：谁值得继续约、下次主题是什么、谁适合介绍给谁。

AI 的价值是降低“选人、组局、破冰、复盘”的判断成本，不是把微信群里的寒暄自动生成。

## 冷启动路径

Timeleft 的冷启动更像 **个人需求入口 + 城市密度 + 固定节奏**：

1. 单个用户因为孤独、搬城、想拓展朋友而报名。
2. 产品负责选活动形式、组桌、安排 venue。
3. 用户到场，完成一次线下共同经历。
4. 如果体验不尴尬，用户每周复购，或用 +1 / Connect 带来新用户。
5. 当一个城市有足够桌数和活动形式，匹配质量、地点选择和口碑会变好。

这条路径比“先做一个朋友社区”更健康，因为它从一个明确动作切入：这周见一桌人。

## 它有没有真实网络效应

有，但不是无脑社交网络效应。

- **真实部分**：同城用户越多，匹配池越大，年龄、兴趣、语言、活动形式和安全边界越容易做细；餐厅/venue 供给也会更稳定。
- **局部部分**：网络效应主要发生在城市级，不是全球级。上海有密度，不代表杭州立刻有密度。
- **脆弱部分**：如果匹配质量一般、现场体验尴尬、用户只来一次就走，它会退化成一次性 novelty event。
- **关键判断**：Timeleft 不是伪社交壳，因为它真的让人线下见面；但护城河不在 app，而在城市运营密度、匹配质量、安全感和重复到场习惯。

## 为什么用户会来 / 留 / 传播 / 付钱

### 为什么会来

用户来，不是因为想下载一个新社交产品，而是因为一个很具体的痛点：我想认识新朋友，但不想刷人、不想尬聊、不想自己组局。Timeleft 给的是“报名后你只要出现”。

### 为什么会留

留存来自 ritual：每周固定的 dinner / drinks / run，让交朋友变成可重复动作。用户如果在第一次见面后真的加到一个人、下次又遇到不错的人，就会把它当成城市生活基础设施，而不是一次体验消费。

### 为什么会传播

传播单元不是产品宣传，而是线下故事：

- “我昨晚和五个陌生人吃饭，还挺好玩”；
- “这个 app 帮我在新城市认识人”；
- “下周你要不要一起去？”

社交产品最强的传播不是 invite spam，而是用户能讲一个不丢人的故事。Timeleft 的 dinner 场景天然可讲。

### 谁为什么付钱

更可能付钱的是用户本人，而不是广告主：用户为一次被安排好的社交体验付费，类似为活动、餐厅 booking、匹配和组织服务付费。

潜在付费方还包括：

- 餐厅 / bar / coffee shop：为稳定客流和新客曝光付费或分成；
- 城市 ambassador / creator：通过 affiliate 分发拿佣金；
- 公司 / relocation / university：为新员工、留学生、校友城市融入购买团体体验。

但最健康的主线仍应是用户为高质量线下见面付钱。广告化会伤信任。

## 商业模式与分发渠道

### 商业模式

已核验事实：

- Timeleft 通过 app / 网站让用户 book dinners、drinks、runs 等线下体验；
- 官方 affiliate 页面提供 50% commission on sales through referral links；
- iOS 描述强调用户可以选择活动形式、neighborhood，并支持 women-only dinners、coffee、runs、last drinks 等 formats。

合理判断：

- 核心收入更像体验 booking / 活动服务费；
- 城市 ambassador affiliate 帮它低成本获客；
- venue 合作可能带来供给端收益，但不宜压过用户体验；
- 企业/学校/迁居人群的团体 onboarding 是可延展方向。

### 分发渠道

- App Store / Google Play 搜索“make friends”“new city”“IRL friends”；
- 用户线下故事和 TikTok / Instagram / 小红书式体验分享；
- ambassador referral links；
- 餐厅、跑团、coffee、women-only dinners 等垂直场景；
- 新搬城市、留学、毕业、换工作、独居成年人这类人生节点。

## 对中国市场、旦聚旦、巢聚或现有项目的可迁移启发

### 对中国市场

中国不是没有社交软件，也不是没有活动报名工具。缺的是低尴尬、可信、能反复发生的小桌关系。

可迁移点：

1. **别让用户刷人，帮用户组局。** 强关系产品要压缩判断，不是增加信息流。
2. **4-6 人小桌比大群更适合关系生成。** 大群热闹但没人负责，1v1 压力太大。
3. **安全与身份要前置。** 女性局、校友局、同公司/同园区局、实名名片，比泛陌生人饭局更适合中国冷启动。
4. **活动后复盘决定留存。** 只让人见一次不够，要沉淀谁和谁聊得来、下次适合什么主题、谁可以带谁来。

### 对旦聚旦

Timeleft 对旦聚旦的启发非常直接：旦聚旦不该先做泛校友社区，而应该先做“校友小桌匹配 + 活动后关系沉淀”。

最小楔子：

- 用户填写复旦身份、城市、行业、当前目标、可见名片；
- 系统每周推荐一个 4-6 人小桌：AI 创业、求职转型、创始人互助、上海新校友、女性成长、租房互助；
- 输出活动页、身份边界、互相认识卡、破冰问题、到场提醒；
- 活动后生成 follow-up：谁值得单独约、谁适合介绍给谁、下一桌缺什么角色。

这比“校友广场 + 发帖 + 私信”强很多。用户不缺发帖地方，缺的是可信的人、见面的理由和不尴尬的组织方式。

### 对巢聚 / 租房

Timeleft 不是租房产品，但它能迁移到“可信租房小桌 / 小群”场景：

- 复旦校友上海租房饭局；
- 北京亦庄新员工通勤和合租小桌；
- 同小区租客避坑 coffee；
- 可信中介/租客/房东三方答疑局。

巢聚如果只做房源平台，会掉进红海。更小的关系楔子是：把有共同身份的人组织到一个可信场景里，围绕租房决策互相校验信息，再把可信中介名片、黑中介风险和后续互助沉淀下来。

## 风险、反证、需要继续查的问题

### 风险

1. **体验不稳定**：只要一桌人不合拍，用户会把问题归因给产品，而不是偶然事件。
2. **安全压力大**：陌生人线下见面涉及骚扰、酒精、地点、身份、女性安全和投诉处理。
3. **城市运营重**：每个城市都要有足够用户、餐厅/活动供给、退款和客服，不是纯软件。
4. **新鲜感衰减**：如果用户来了几次都没有后续朋友，ritual 会变成消费疲劳。
5. **中国迁移会被微信吞底层沟通**：新产品必须赢在匹配、身份、场景和复盘，别幻想替代群聊。

### 反证

- 如果用户核心需求其实是 dating 或职业 networking，Timeleft 的 friendship 定位可能会被两边挤压。
- 如果“系统匹配的人”不能显著优于朋友介绍、微信群、跑团和小红书同城活动，用户不会长期付费。
- 如果餐厅/venue 合作主导体验，产品可能从关系工具滑向团购或活动票务。

### 需要继续查的问题

1. Timeleft 的复购率、每城市桌数、从第一次 dinner 到第二次 booking 的转化有没有公开数据？
2. 它的匹配算法主要依赖 personality quiz，还是更多依赖年龄、语言、地理和历史反馈？
3. 付费价格、退款机制和餐厅分成在不同国家是否一致？
4. Women-only dinners 的安全和留存表现是否显著更好？
5. 对旦聚旦，第一版该做“AI 组桌 + 活动页”，还是先做人肉高质量小桌，用数据训练后再自动化？我的判断：先半自动，别一上来全自动匹配。
