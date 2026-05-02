# Smithery：把 MCP 工具、连接和技能做成 agent marketplace

## 一句话判断

Smithery 值得进观察池：它押注的不是再做一个单点 agent，而是把 MCP server 的发现、发布、连接、OAuth、凭证托管、token scoping 和技能分发做成一层 agent 工具市场；如果 MCP 继续成为 agent 接外部系统的通用接口，这层会很像早期 API marketplace + Zapier + package registry 的混合体。

## 符合哪个现有目录/栏目

- 首选：`content/docs/developer-tools`
- 次选：`content/docs/vertical-ai` 中的 agent infrastructure / MCP ecosystem 条目
- 本轮处理：只进 `AI Knowledge/inbox`，暂不创建正式 MDX。原因是 Smithery 很适合和 Tavily、Browserbase、AgentMail、Composio、Firecrawl 等一起归到 agent infrastructure；现在仓库还没有独立 MCP / agent infrastructure 栏目，硬塞正式页会显得分类早熟。

## 目标用户

- 正在给 AI agent / copilot / workflow 产品接入外部工具的开发者团队
- 需要管理多用户 OAuth、凭证、连接生命周期和工具权限的 SaaS 团队
- 发布 MCP server、希望被更多 agent client 发现和调用的工具/API 提供方
- 想把 prompt-based skill、MCP server、企业内部工具统一成可搜索资源池的平台团队

## 核心痛点

MCP 把“模型调用工具”标准化了一部分，但真正上线时脏活还很多：怎么发现可信 server，怎么安装，怎么处理 OAuth，怎么给不同用户隔离连接，怎么刷新 token，怎么让浏览器/移动端安全调用，怎么审计工具使用，怎么让服务商分发自己的 MCP server。

Smithery 切的是这条中间层：不要让每个 agent 产品都重复做 MCP registry、OAuth app、credential store、connection lifecycle、tool schema browsing 和权限约束。

## 产品形态

从官网、官方文档和 GitHub 看，Smithery 更像一个 MCP/agent 工具基础设施平台，而不只是目录站：

- **Marketplace / Registry**：官网定位为 “marketplace for AI agents”，主张连接 100K+ tools and skills；文档里有 server registry、skills search、tool search 等 API。
- **CLI**：`@smithery/cli` 支持搜索 MCP server、添加连接、查看 tool schema、调用工具；GitHub API 本轮显示 `smithery-ai/cli` 为 TypeScript 项目，约 703 stars，2026-05-01 仍有更新。
- **Connect API**：为应用提供 MCP connection 的 REST 接口，处理 OAuth、credential storage、token refresh、session lifecycle。
- **Token Scoping**：官方文档把 service token 做成可按 namespace、resource、operation、metadata、TTL 约束的短期凭证，解决 agent / 浏览器端安全调用工具的问题。
- **Publish / Gateway**：允许 MCP server 通过 URL 或本地 stdio bundle 方式发布；Gateway 负责协议兼容、元数据增强、缓存、OAuth UI、扫描和 analytics。
- **Namespaces**：把 server、connection、skill 放进 namespace，用作 app / environment / team 的资源边界。

## 为什么现在值得看

1. **MCP 从“开发者新鲜玩具”进入生态争夺期。** 一旦 agent client、IDE、内部 copilot 都开始支持 MCP，谁掌握发现、连接、权限和分发层，谁就靠近生态入口。
2. **agent 最大的问题不是会不会调用工具，而是能不能安全地替用户调用工具。** OAuth、凭证托管、token refresh、短期 token、metadata 级隔离这些能力很无聊，但正是企业愿意付费的部分。
3. **工具市场比单个工具更有网络效应。** Server 发布者需要流量，agent 开发者需要可用工具；两边一旦形成循环，Smithery 的价值就不只是托管，而是分发。
4. **MCP 工具链还早，标准红利明显。** 现在围绕 MCP 的 registry、hosting、auth、observability、evaluation 都还没定型，创业公司有机会在大厂固化入口前卡位。

## 商业化路径

- **开发者 / 团队订阅**：按 namespace、连接数、seat、tool calls、日志保留、analytics、私有 registry 收费。
- **Connect usage-based pricing**：按 MCP connection、工具调用量、触发器、网关流量或托管运行量计费。
- **企业安全层**：SSO、审计、权限策略、私有部署/私有 registry、合规报表、数据驻留。
- **Marketplace take rate**：如果 MCP server / skill 未来有付费分发，Smithery 可以抽成或卖推广位；这条路更诱人，但也更依赖生态规模。
- **基础设施 API**：把 OAuth、credential storage、token scoping 做成 agent 产品的嵌入式后端，类似“给 agent 工具调用用的 Auth0 + Plaid”。

## 风险/反证

1. **MCP 标准可能被大厂平台内置吞掉。** OpenAI、Anthropic、Google、Microsoft、Cloudflare、Vercel 都有理由把 registry、auth、tool gateway 做进自家 agent 平台。
2. **Registry 容易变成低质量目录。** 100K+ 工具听起来强，但如果可用性、可信度、维护质量、权限说明和安全扫描跟不上，开发者会绕开目录直接接少数可信 server。
3. **安全事故会很贵。** Smithery 处理的是凭证、OAuth、跨应用工具调用和用户级权限；一旦权限边界出问题，伤害比普通开发者工具大得多。
4. **MCP adoption 仍需观察。** 如果 MCP 变成“很多 demo 支持、少数生产依赖”的标准，Smithery 的市场会小于叙事。
5. **商业化可能滞后于使用量。** 开发者工具 registry 常见问题是免费流量大、付费转化慢；必须尽早绑定团队权限、安全、审计和私有部署。

## 可借鉴点

- agent infra 的好切口不是“再做一个 agent”，而是做 agent 必须依赖、但大多数团队不想自己维护的控制面。
- MCP 生态里，**auth + permission + connection lifecycle** 可能比“工具列表”更值钱。
- Marketplace 不要只靠数量，要把可信度、权限边界、工具 schema、调用日志、版本/维护状态做成结构化信号。
- 对 business-idea 仓库来说，Smithery 可以和 Browserbase / Tavily 组成一条清晰主线：Tavily 管 Web 信息输入，Browserbase 管 Web 行为执行，Smithery 管外部工具连接与权限。

## 来源链接

- Smithery 官网：<https://smithery.ai/>
- Smithery documentation index：<https://smithery.ai/docs/llms.txt>
- Connect to MCPs 官方文档：<https://smithery.ai/docs/use/connect.md>
- Token Scoping 官方文档：<https://smithery.ai/docs/use/token-scoping.md>
- Namespaces 官方文档：<https://smithery.ai/docs/concepts/namespaces.md>
- Publish MCP server 官方文档：<https://smithery.ai/docs/build/publish.md>
- Server registry API 文档：<https://smithery.ai/docs/api-reference/servers/list-all-servers.md>
- Skills search API 文档：<https://smithery.ai/docs/api-reference/skills/list-or-search-skills.md>
- Smithery CLI GitHub：<https://github.com/smithery-ai/cli>

## 推荐下一步

**留在 inbox，后续深化为正式 MDX。**

正式发布前建议补三件事：

1. 横向比较 Smithery、Composio、Pipedream MCP、Zapier MCP、Cloudflare / Vercel / Anthropic 生态入口，判断它更像 registry、gateway 还是 embedded auth layer。
2. 核验 pricing 和真实企业采用信号，不要只凭 “100K+ tools and skills” 判断商业质量。
3. 如果仓库新增 `agent-infrastructure` / `mcp-ecosystem` 栏目，Smithery 是很适合的首批正式页候选。