# Nabla｜把 ambient scribe 做成 health system 的临床文档入口

## 一句话判断

Nabla 不是又一个“录音转病历”小工具；它真正值得看的是：在 Abridge、Nuance/DAX 已经很强的市场里，仍然用更轻的产品体验、多 EHR 集成和真实临床试验信号，争夺医生工作流里的第一入口。

## 符合哪个现有目录/栏目

- `content/docs/healthcare`
- 主题：ambient clinical documentation、EHR integration、clinician workflow、医疗 AI 合规与部署

## 目标用户

- 医生、护士、NP/PA 等一线临床人员
- 需要减少文书时间和 burnout 的 health system
- 想把 ambient AI 原生嵌入产品的 EHR / 医疗 IT 厂商
- CMIO、临床运营、收入循环与合规团队

## 核心痛点

美国医疗里的病历文书不是普通行政负担。它同时影响医生下班时间、患者沟通质量、编码计费、审计追溯和医院运营效率。医生不想在诊间盯着电脑打字，医院也不想买一个需要复杂培训、难接 EHR、还引入安全风险的新工具。

## 产品形态

- Ambient AI assistant：听取医患交流，生成临床 notes。
- Dictation + note customization：支持医生自己的模板、dot phrases、note 格式偏好。
- EHR integration：Nabla 官网强调覆盖多 EHR，并推出 Nabla Connect，让 EHR 通过较轻的方式嵌入 ambient AI。
- Coding / documentation intelligence：EHR 页面提到 ICD-10、HCC、MCC coding suggestions，以及 documentation nudges。
- Security posture：官方安全页披露 HIPAA / GDPR、SOC 2 Type II、ISO 27001、年度第三方渗透测试等。

## 为什么现在值得看

1. **官方采用数据已经不小。** Nabla 首页显示其部署在 150+ health organizations、被 85,000+ clinicians 使用、每年覆盖 20M+ patient encounters。这类数字不能直接等同于收入，但说明它至少过了不少医疗机构的安全、采购和医生使用门槛。
2. **有临床试验型证据，而不只是客户 quote。** Nabla 官方 press release 引用 NEJM AI 随机临床试验：238 名医生、14 个专科、48,000+ outpatient visits；Nabla 组 time-in-note 相比 control 下降 9.5%，且官方表述称它是该试验中唯一在 primary efficiency outcome 上达到统计显著改善的 intervention group。
3. **从 scribe 往 EHR 内操作层走。** 如果只是“生成一段病历”，平台方迟早压价；但如果它能在 EHR 内做结构化 note、coding suggestion、documentation nudge，就更接近医院日常工作流的默认入口。
4. **市场正在进入硬碰硬阶段。** Abridge、Microsoft Nuance DAX、Suki、Nabla 都在抢 ambient clinical documentation。这个赛道不缺噪音，但也正因为竞争强，能留下来的公司大概率会有真实部署能力。

## 商业化路径

- 向 health system 按 clinician seat / usage / enterprise contract 收费。
- 向 EHR / 医疗 IT 厂商提供 Nabla Connect 或 API 型嵌入能力。
- 从 documentation 扩展到 coding assistance、quality measures、risk adjustment、clinical operations analytics。
- 通过高频临床入口，逐步卖给 CMIO、运营、收入循环团队，而不是只卖给单个医生。

## 风险/反证

- **差异化可能被压薄。** Ambient scribe 赛道太热，Abridge 和 Microsoft/DAX 都很强，Nabla 必须证明自己不是体验更顺一点的替代品。
- **官网数字有口径不一致。** 首页写 150+ organizations，EHR 页仍出现 130+ orgs，可能是页面更新时间不同；公开采用数据需要继续看客户名单、活跃 clinician、ARR 和续约。
- **EHR 平台方风险大。** Epic、Oracle Health、Microsoft/Nuance 都有动机把文书 AI 做进原系统。独立公司要靠速度、医生口碑、跨 EHR 能力和部署服务守住位置。
- **临床责任不是模型 benchmark 能解决的。** 文书遗漏、coding 建议错误、hallucination、consent 和隐私都会落到医院合规与责任体系里。
- **ROI 需要从“省医生时间”升级为财务指标。** 如果客户只把它看成医生福利工具，预算会受限；如果能证明回款、编码、质量指标收益，天花板才更高。

## 可借鉴点

- 医疗 AI 的好入口往往不是“替代医生判断”，而是先接管高频、痛苦、可审计的文书动作。
- 大模型产品在重监管行业里，真正的 moat 不是 prompt，而是工作流集成、安全材料、临床证据、医生习惯和采购路径。
- “AI note → coding suggestion → documentation nudge” 是一个很强的扩展路线：从节省时间，走到影响收入和合规。
- 如果做中国医疗场景，类似机会可能不在通用病历生成，而在专科模板、医保控费、质控、随访、病案首页、DRG/DIP 文书质量上。

## 来源链接

- 官网：https://www.nabla.com/
- EHR integration / Nabla Connect：https://www.nabla.com/ehr
- Security：https://www.nabla.com/security
- NEJM AI trial 官方 press release：https://www.nabla.com/press-release/nejm-ai-trial-reports-efficiency-gains-for-physicians-using-nablas-ambient-ai-assistant

## 推荐下一步

深化为正式 MDX；本轮已同步整理到 `content/docs/healthcare/nabla.mdx`。后续建议把 Nabla 与 Abridge 做一篇横向比较：谁更像医生端入口，谁更像 health system 的收入与合规基础设施。
