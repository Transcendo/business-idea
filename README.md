# AI 分类研究库

这是一个面向中文读者的公开 AI 研究项目，用来按分类长期整理公司、产品切口和方向变化。

项目不是日报堆叠，也不是营销稿合集。新的研究内容会先做来源核查，再沉淀到稳定分类里，例如 AI 智能体、开发者工具、基础模型、医疗健康和垂直 AI。

## 快速开始

```bash
pnpm install
pnpm dev
```

打开 [localhost:3000](http://localhost:3000) 预览首页。如果 3000 端口被占用，可以使用：

```bash
pnpm exec next dev --port 3001
```

## 技术栈

- 框架：Next.js 16
- 文档系统：Fumadocs
- 样式：Tailwind CSS 4
- 包管理器：pnpm
- 部署目标：静态导出 / GitHub Pages

## 目录结构

```text
app/
  page.tsx                 首页
  docs/                    Fumadocs 路由与文档布局
  api/search/              搜索索引接口

components/
  docs/                    文档外壳与海报导出组件
  ui/                      通用 UI 组件

content/docs/
  weekly-new/              当前周新增或重点更新的公开页面
  weekly-picks/            长期保留的精选案例库
  ai-agents/               AI 智能体方向
  developer-tools/         开发者工具与基础设施
  foundation-models/       基础模型、平台与终端落地
  cybersecurity/           网络安全方向
  fintech/                 金融科技方向
  healthcare/              医疗健康方向
  education/               教育方向
  climate-energy/          气候与能源方向
  embodied-ai/             具身智能方向
  robotics/                机器人方向
  emotional-companions/    情感陪伴方向
  gaming/                  游戏方向
  open-world/              开放世界方向
  vertical-ai/             垂直 AI 方向
  themes/                  主题框架与判断方法

AI Knowledge/              研究草稿与知识笔记
references/                写作规范与来源策略
skills/                    本地研究工作流技能
```

## 内容规则

- 先找可信公开来源，再写判断。
- 区分事实、解释和待验证问题。
- 本周新增只展示当前周新增或重点更新的公开页面。
- 精选案例只保留适合长期反复参考的样本，不再伪装成当前周列表。
- 值得长期保留的内容继续迁入对应分类。
- 尽量先做内容结构调整，不轻易改框架代码。

## 常用命令

```bash
pnpm dev          # 启动本地开发服务
pnpm build        # 生产构建
pnpm start        # 预览 out/ 静态产物
pnpm typecheck    # TypeScript 类型检查
```
