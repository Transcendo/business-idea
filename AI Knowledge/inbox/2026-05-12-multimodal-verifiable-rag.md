# Multimodal verifiable RAG / source-grounded file search

- 方向：多模态 RAG、企业文件检索、证据定位、视觉资产搜索、PDF/图片混合知识库。
- 来源强度：中高。Google 把 File Search 做成 Gemini API 原语，HN 讨论热度高；但通用 RAG 基建会被大厂压价，创业机会必须卡到垂直工作流。
- 公开来源：
  - Google Keyword：`https://blog.google/innovation-and-ai/technology/developers-tools/expanded-gemini-api-file-search-multimodal-rag/`，2026-05-05 发布 Gemini API File Search 的 multimodal support、custom metadata、page-level citations；文中说 File Search 可以同时处理 image 和 text，并给 PDF 答案返回 page number。
  - HN：`https://news.ycombinator.com/item?id=48080702`，Algolia 抓到标题 `Gemini API File Search is now multimodal`，153 points、45 comments。评论里一个真实抱怨是：AI Studio 只能搜会话标题，搜不到会话内容，Ctrl+F 也不稳定；这不是模型能力问题，是产品里的“可验证记忆/检索”没做好。

## 为什么现在热

- RAG 正在从“把文本 chunk 塞进向量库”升级成“文件、图片、PDF 页码、元数据过滤、引用证据”一体化。
- 多模态模型变强后，企业旧资料里的截图、扫描件、商品图、设计稿、合同附件突然可被自然语言调用。
- 用户开始不满足于“AI 给答案”，而是要知道答案来自哪页、哪张图、哪个版本。

## 用户痛点

- 企业资料不是干净文本：PDF、截图、表格、PPT、设计图、聊天附件混在一起。
- 搜索结果不可信：AI 摘要说得像真的，但用户还要人工翻原文件核对。
- 资产库和知识库割裂：创意团队、法务、销售、客服都在重复找文件。

## AI 是否真的压缩任务

能压缩。传统搜索要求用户知道关键词、文件名、路径；多模态 RAG 可以让用户用“这张图的情绪”“这个条款的原始页”“客户截图里报错的原因”直接检索。关键不是再做一个聊天框，而是把模糊意图变成可点击证据。

## Users come / stay / spread / pay

- 来：找文件和核对证据太慢，尤其是 PDF/图片/扫描件多的团队。
- 留：每次检索、引用、人工确认都会让文件库的元数据更干净。
- 传播：用户会转发“答案 + 原文件页码 + 截图证据”的判断卡。
- 付费：按 seats、索引文件量、私有部署、合规审计、行业连接器收费。

## 可验证 MVP

- 别做通用知识库。选一个窄场景：保险理赔材料、法律 discovery、创意素材库、医疗设备维修手册、B2B 销售资料库。
- 输入 200-1000 个混合文件：PDF、图片、截图、PPT。
- 输出三件事：自然语言检索、答案卡、原文件页码/图片区域证据。
- 指标：首次命中率、人工核对时间下降、引用点击率、错误引用率。

## 风险 / 反例

- Google、OpenAI、Anthropic、Notion、Google Drive、Dropbox 都会做基础能力。
- 如果只是“上传文件问答”，毛利和壁垒都会被压扁。
- 真正难点在权限、版本、引用粒度、OCR 错误、行业 schema，而不是向量库。

## 下一步验证问题

- 哪个行业的“找证据”有直接金钱损失？
- 用户愿不愿意为“答案可验证”单独付钱，还是只把它当现有套件功能？
- 引用错误率低到多少，团队才敢在真实业务中用？
