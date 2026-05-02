# OpenEvidence：从医生医学检索入口走向临床工作流操作层

## 一句话判断

OpenEvidence 值得本轮收录：它表面是医生版 evidence-based AI 搜索，真正更大的位置是从“回答医学问题”延伸到 EHR 内决策支持、临床编码、处方执行和 prior authorization；如果这条线跑通，它抢的不是搜索框，而是医生高频临床工作流入口。

## 符合哪个现有目录/栏目

- 首选：`content/docs/healthcare`
- 可横向比较：Abridge、Nabla、Qualified Health、Mandolin、Infinitus
- 本轮处理：进入 `AI Knowledge/inbox`，并额外创建正式 MDX：`content/docs/healthcare/openevidence.mdx`。原因是官方来源强、方向与 healthcare 栏目高度匹配，且仓库内未发现既有 OpenEvidence 条目。

## 目标用户

- 需要快速查找指南、研究证据和药物/治疗信息的医生与一线临床团队
- 希望把 evidence-based decision support 嵌入 Epic / EHR 流程的 health system
- 需要从临床文档自动生成 ICD-10、E/M、CPT 等编码建议的门诊/医疗集团
- 需要把处方、患者负担、prior authorization 和 appeal 链路自动化的 specialty medication 团队

## 核心痛点

医生遇到的不是“缺少医学信息”，而是信息太碎、更新太快、场景太急：临床指南、论文、药物标签、保险限制、编码规则和病历文档分散在不同系统里。真正昂贵的断点有三个：

1. **临床决策慢**：医生需要在有限时间内判断诊疗路径，但可靠证据检索成本高。
2. **EHR 外工具难留存**：再聪明的医学问答，如果离开医生工作流，也容易沦为偶尔打开的工具。
3. **决策之后没人接力**：诊疗建议之后还要编码、处方、prior auth、患者负担核验，很多价值死在后台操作里。

## 产品形态

从官方 About 与 2026 年公告看，OpenEvidence 正在形成四层产品：

- **医学证据问答入口**：面向 verified clinicians，回答需要引用、来源和医学文献 grounding 的临床问题。
- **权威内容合作层**：官网称已与 NEJM、JAMA、NCCN、Wiley、Cochrane 等签署内容协议；这不是普通 AI 搜索能轻易补齐的资产。
- **EHR 内临床决策支持**：Sutter Health 合作公告称，OpenEvidence 会进入 Epic EHR workflows，让医生在自然语言查询中找到指南、研究和临床证据。
- **工作流扩展层**：Coding Intelligence 自动生成 ICD-10 diagnoses、E/M level recommendations、CPT code suggestions；Tandem 合作则把 evidence-based prescribing 接到 prior authorization submission、appeals、affordability 和药房路由。

一句话：OpenEvidence 的产品边界正在从“告诉医生该怎么想”扩到“帮医生把后续动作做完”。

## 为什么现在值得看

1. **官方采用信号强。** OpenEvidence 官网称其是 verified U.S. clinicians 中使用最广的 medical AI，并称已支持超过 200M 次 AI-powered clinical consultations；Tandem 合作公告称其在美国每天支持超过 1M 次 clinical consultations。这些是官方口径，不能当审计数据吹，但足够说明它不是一个低频 demo。
2. **医疗 AI 正从 ambient note 进入决策与收入链路。** Abridge / Nabla 抢的是临床文书入口，OpenEvidence 则从医学知识入口切入，再向 coding 和 prescribing execution 扩张，路径不同但目标都是工作流控制权。
3. **EHR 嵌入是关键分水岭。** Sutter 合作公告明确提到 Epic workflows。医疗 AI 如果不能进入 EHR，分发和留存都会弱；能进入 EHR，才有机会成为医生每天实际使用的层。
4. **商业价值不只省时间。** Coding Intelligence 指向 reimbursement capture，Tandem 合作指向 prior auth 和药物可及性。这比“节省医生检索时间”更接近预算方愿意付费的 ROI。
5. **内容授权可能形成差异。** NEJM、JAMA、NCCN、Cochrane 这类来源对医生信任很关键。普通 RAG 产品可以抓网页，但很难同时解决授权、更新、引用、合规和临床责任。

## 商业化路径

- **Health system / enterprise subscription**：按机构、医生席位、调用量或 EHR 集成深度收费。
- **临床编码增收分成或 SaaS**：Coding Intelligence 如果能证明减少漏编、提高合理 reimbursement，可以绑定 revenue cycle ROI。
- **药物准入与 prior auth 工作流**：与 Tandem 类伙伴组合，围绕 specialty medication access、appeals、patient affordability 收费。
- **内容与合规护城河**：权威医学内容授权、临床引用链、审计记录、隐私安全和 EHR 集成可以成为企业版门槛。
- **从医生入口到平台层**：先免费/低成本占医生使用习惯，再向 health system、payer、pharma-adjacent workflow 卖更硬的后台能力。

## 风险/反证

1. **官方数字需要打折看。** “最广泛使用”“200M consultations”“1M/day”都是官方披露，缺少独立审计、ARR、活跃留存和付费转化细节。
2. **医学责任边界很难。** 临床决策支持一旦影响诊疗路径，引用质量、更新延迟、hallucination、医生依赖和责任归属都会被放大。
3. **EHR 平台可能内建。** Epic、Oracle Health、Microsoft/Nuance、Google Cloud、Abridge/Nabla 等都有机会把医学检索、文书、编码、prior auth 打包进更大的医疗软件栈。
4. **工作流扩展会变重。** 从问答进入编码、处方和 prior auth，需要更多集成、合规、payer 规则、药房网络和运营能力；这不是模型能力一个按钮能解决的。
5. **医生信任不等于采购转化。** 医生喜欢用和 health system 愿意长期付费是两回事，尤其当产品一开始对 clinicians 免费时，商业转化需要持续验证。

## 可借鉴点

- 医疗 AI 不要只做“聪明回答”，要把回答后的动作接上：记录、编码、处方、授权、路由、审计。
- 在高信任行业，内容授权和引用链本身就是产品，不是法务装饰。
- 从个人医生入口切入，再嵌入 health system 工作流，是比直接硬卖医院平台更轻的分发路径。
- “证据层 + 操作层”比单点 AI 工具更有机会形成预算：前者解决信任，后者解决 ROI。

## 来源链接

- OpenEvidence About：<https://www.openevidence.com/about>
- Sutter Health x OpenEvidence：<https://www.openevidence.com/announcements/sutter-health-collaborates-with-openevidence-to-bring-evidence-based-ai-powered-insights-into-physician-workflows>
- OpenEvidence Coding Intelligence：<https://www.openevidence.com/announcements/openevidence-launches-coding-intelligencetm-to-help-physicians-capture-every-dollar-theyve-earned>
- OpenEvidence x Tandem：<https://www.openevidence.com/announcements/openevidence-and-tandem-partner-to-streamline-evidence-based-prescribing-and-prior-authorizations>

## 推荐下一步

**深化为正式 MDX，并持续跟踪。**

下一步优先补三件事：

1. 核验 OpenEvidence 的付费模式、health system 客户数量、ARR 或融资披露，避免只被使用量数字带节奏。
2. 横向比较 OpenEvidence vs Abridge / Nabla / Microsoft Nuance / Epic-native AI：谁控制医生入口，谁控制收入链路。
3. 跟踪 Coding Intelligence 与 Tandem 合作是否拿出可量化 ROI，例如漏编减少、prior auth 周期缩短、处方完成率提升。