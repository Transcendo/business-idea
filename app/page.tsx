import Link from "next/link";

const heroChips = [
	["Agent 安全评测", "/docs/cybersecurity/agentic-security-evaluation-harness"],
	["Agent 工具分发", "/docs/developer-tools/agent-tool-distribution-layer"],
	["手机 GUI 运行时", "/docs/ai-agents/mobile-gui-agent-runtime"],
	["失败回归测试", "/docs/developer-tools/agent-failure-regression-harness"],
];

const featuredSignals = [
	{
		title: "Agentic Security Evaluation Harness",
		tag: "安全评测",
		href: "/docs/cybersecurity/agentic-security-evaluation-harness",
		description: "把 agent、工具、身份、策略、攻击面和修复规则放进可重复运行的安全评测 harness。",
	},
	{
		title: "Agent Tool Distribution Layer",
		tag: "团队工作流",
		href: "/docs/developer-tools/agent-tool-distribution-layer",
		description: "把 MCP、commands、prompt skills 打包成可安装、可审计、可回滚的团队资产。",
	},
	{
		title: "Mobile GUI Agent Runtime",
		tag: "执行运行时",
		href: "/docs/ai-agents/mobile-gui-agent-runtime",
		description: "让 agent 操作真实手机界面，并留下截图、权限、失败回放和人工接管记录。",
	},
	{
		title: "Agent Failure Regression Harness",
		tag: "质量控制",
		href: "/docs/developer-tools/agent-failure-regression-harness",
		description: "把一次 agent 失败变成可重复测试，避免 prompt、模型或工具改动后旧任务静默坏掉。",
	},
	{
		title: "Agent Database Branching Sandbox",
		tag: "真实数据验证",
		href: "/docs/developer-tools/agent-database-branching-sandbox",
		description: "每个 coding-agent 任务一个隔离数据库分支，用真实数据形态验证 migration 和 schema 变更。",
	},
];

const researchTracks = [
	{
		title: "Agent Infra",
		href: "/docs/developer-tools",
		description: "控制平面、上下文、工具分发、数据库分支、失败复现。",
	},
	{
		title: "Agent Runtime",
		href: "/docs/ai-agents",
		description: "浏览器、手机、语音、状态机、任务执行和人工接管。",
	},
	{
		title: "Security & Policy",
		href: "/docs/cybersecurity",
		description: "身份、授权、凭证、越权、审计 receipt 和高危 diff 边界。",
	},
	{
		title: "Hardware & Robotics",
		href: "/docs/ai-hardware",
		description: "本地模型适配、边缘多模态、CAD agent、硬件原型链路。",
	},
];

const methodSteps = [
	["01", "找到真实任务", "不是追热点名词，而是确认谁在重复花时间、冒风险、等结果。"],
	["02", "判断 AI 压缩点", "看它到底压缩了哪段链路：搜索、执行、验证、交付、回放还是协作。"],
	["03", "保留证据链", "公开页面只写能被来源支撑的判断；弱信号留在 inbox，不污染目录。"],
];

const directoryGroups = [
	{
		title: "最新机会",
		items: [
			["本周新增", "/docs/weekly-new"],
			["精选案例", "/docs/weekly-picks"],
			["主题框架", "/docs/themes"],
		],
	},
	{
		title: "AI 工程化",
		items: [
			["AI 智能体", "/docs/ai-agents"],
			["开发者工具", "/docs/developer-tools"],
			["网络安全", "/docs/cybersecurity"],
			["基础模型", "/docs/foundation-models"],
		],
	},
	{
		title: "场景与行业",
		items: [
			["垂直 AI", "/docs/vertical-ai"],
			["医疗健康", "/docs/healthcare"],
			["教育", "/docs/education"],
			["金融科技", "/docs/fintech"],
			["AI 硬件", "/docs/ai-hardware"],
			["机器人", "/docs/robotics"],
		],
	},
	{
		title: "消费与关系",
		items: [
			["消费级 AI", "/docs/consumer-ai"],
			["强社交关系", "/docs/social-relationship-products"],
			["情感陪伴", "/docs/emotional-companions"],
			["游戏", "/docs/gaming"],
			["开放世界", "/docs/open-world"],
		],
	},
];

export default function HomePage() {
	return (
		<main className="min-h-dvh overflow-hidden bg-[#050511] text-white">
			<section className="relative isolate min-h-dvh overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_64%,rgba(124,58,237,0.28),transparent_32%),radial-gradient(circle_at_30%_70%,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_74%_16%,rgba(96,165,250,0.17),transparent_26%),linear-gradient(180deg,#050511_0%,#080719_54%,#03030a_100%)]" />
				<div className="absolute left-1/2 top-[55%] h-[34rem] w-[78rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.30),rgba(59,130,246,0.12)_42%,transparent_70%)] blur-3xl" />
				<div className="absolute inset-x-0 top-0 h-px bg-white/10" />
				<div className="absolute inset-x-10 top-20 hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block" />

				<div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
					<nav className="flex items-center justify-between gap-4 text-sm">
						<Link className="group inline-flex items-center gap-3" href="/">
							<span className="grid size-8 place-items-center rounded-full border border-white/15 bg-white/8 text-white shadow-[0_0_34px_rgba(139,92,246,0.45)] backdrop-blur transition group-hover:border-white/30">
								<LogoMark />
							</span>
							<span className="font-medium tracking-tight">AI Opportunity Map</span>
							<span className="rounded-full border border-white/14 px-2 py-0.5 text-[11px] uppercase tracking-[0.18em] text-white/54">Live</span>
						</Link>

						<div className="hidden items-center gap-6 text-white/58 md:flex">
							<Link className="transition hover:text-white" href="/docs/weekly-new">本周新增</Link>
							<Link className="transition hover:text-white" href="/docs/developer-tools">Agent Infra</Link>
							<Link className="transition hover:text-white" href="/docs/themes">判断框架</Link>
						</div>

						<Link className="rounded-full bg-white px-4 py-2 font-medium text-[#070713] transition hover:bg-[#d8ccff]" href="/docs">
							打开目录
						</Link>
					</nav>

					<div className="flex flex-1 flex-col items-center justify-center py-16 text-center lg:py-20">
						<p className="mb-6 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/68 shadow-2xl shadow-black/30 backdrop-blur">
							每日扫描公开信号，筛掉噪声，留下能复用的 AI 创业机会。
						</p>

						<h1 className="max-w-5xl text-balance text-5xl font-normal leading-[1.03] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
							<span className="block">把 AI 热点整理成</span>
							<span className="block">可以判断的机会地图</span>
						</h1>

						<p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/62 sm:text-xl">
							这里不是新闻流。每条正式页面都要回答：真实痛点在哪，AI 压缩了哪段任务，为什么用户会来、会留、会付费。
						</p>

						<div className="relative mt-11 w-full max-w-4xl rounded-[2rem] border border-white/14 bg-[#18112f]/70 p-3 text-left shadow-[0_32px_140px_rgba(88,28,135,0.45)] backdrop-blur-xl">
							<div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent" />
							<div className="rounded-[1.55rem] border border-white/10 bg-[#080715]/82 p-5 sm:p-6">
								<div className="flex items-start gap-4">
									<span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full bg-[#8b5cf6]/20 text-[#c4b5fd] ring-1 ring-[#c4b5fd]/30">
										<SparkIcon />
									</span>
									<div className="min-w-0 flex-1">
										<p className="text-sm text-white/52">输入研究问题</p>
										<div className="mt-3 rounded-[1.15rem] border border-white/10 bg-white/[0.045] px-4 py-3 shadow-inner shadow-black/20">
											<p className="text-2xl leading-snug tracking-[-0.03em] text-white sm:text-3xl">
												找出最近最值得跟进的 agent 工程基础设施<span className="ml-1 text-[#c4b5fd]">|</span>
											</p>
										</div>
										<div className="mt-5 flex flex-wrap gap-2">
											{heroChips.map(([title, href]) => (
												<Link
													className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-sm text-white/68 transition hover:border-[#c4b5fd]/50 hover:text-white"
													href={href}
													key={href}
												>
													{title}
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
									<p className="text-sm text-white/58">从 HN、GitHub、Product Hunt、论文和官方文档里抽信号；公开页只保留证据够硬的判断。</p>
									<Link className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#070713] transition hover:bg-[#d8ccff]" href="/docs/weekly-new">
										看最新机会 <span className="ml-2">-&gt;</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative border-y border-white/10 bg-[#070713]">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_0%,rgba(45,212,191,0.10),transparent_28%)]" />
				<div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
					<div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
						<div>
							<p className="text-sm font-medium text-[#a78bfa]">最新信号</p>
							<h2 className="mt-3 max-w-3xl text-4xl font-normal tracking-[-0.055em] text-white sm:text-5xl">
								<span className="block">最近更值得看的不是泛应用，</span>
								<span className="block">而是 agent 变成生产力之后</span>
								<span className="block">冒出来的脏问题。</span>
							</h2>
						</div>
						<Link className="text-sm font-medium text-white/58 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white" href="/docs/weekly-new">
							查看本周全部
						</Link>
					</div>

					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{featuredSignals.map((signal, index) => (
							<Link
								className="group flex min-h-[23rem] flex-col justify-between rounded-[1.65rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-[#a78bfa]/45 hover:bg-white/[0.075]"
								href={signal.href}
								key={signal.href}
							>
								<div>
									<div className="flex items-center justify-between gap-4">
										<span className="text-xs text-white/32">{String(index + 1).padStart(2, "0")}</span>
										<span className="rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/10 px-2.5 py-1 text-xs text-[#d8ccff]">{signal.tag}</span>
									</div>
									<h3 className="mt-10 text-2xl font-normal leading-tight tracking-[-0.04em] text-white">{signal.title}</h3>
									<p className="mt-5 text-sm leading-7 text-white/62">{signal.description}</p>
								</div>
								<span className="mt-10 text-sm font-medium text-white/50 transition group-hover:translate-x-1 group-hover:text-white">阅读判断 -&gt;</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="border-y border-white/10 bg-[#0b0a18] text-white">
				<div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
					<div>
						<p className="text-sm font-medium text-[#7dd3fc]">研究方法</p>
						<h2 className="mt-3 text-5xl font-normal leading-[1.02] tracking-[-0.06em]">
							<span className="block">不是更多收藏夹，</span>
							<span className="block">是一套机会过滤器。</span>
						</h2>
						<p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
							公开资料每天都够多，真正稀缺的是判断顺序：先看任务，再看压缩，再看证据，最后才决定要不要进正式目录。
						</p>
					</div>

					<div className="grid gap-3">
						{methodSteps.map(([number, title, description]) => (
							<div className="grid gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-sm md:grid-cols-[72px_1fr]" key={title}>
								<span className="text-sm text-[#7dd3fc]">{number}</span>
								<div>
									<h3 className="text-2xl font-normal tracking-[-0.04em]">{title}</h3>
									<p className="mt-2 leading-7 text-white/62">{description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="relative bg-[#050511]">
				<div className="absolute inset-x-0 top-0 h-px bg-white/10" />
				<div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
					<div className="mb-10 max-w-3xl">
						<p className="text-sm font-medium text-[#7dd3fc]">机会地图</p>
						<h2 className="mt-3 text-4xl font-normal tracking-[-0.055em] text-white sm:text-5xl">
							<span className="block">四条主线直接进入，</span>
							<span className="block">不用在目录里挖矿。</span>
						</h2>
					</div>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{researchTracks.map((track) => (
							<Link className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#7dd3fc]/40 hover:bg-white/[0.07]" href={track.href} key={track.href}>
								<h3 className="text-2xl font-normal tracking-[-0.04em] text-white">{track.title}</h3>
								<p className="mt-4 min-h-20 text-sm leading-7 text-white/62">{track.description}</p>
								<span className="mt-7 inline-flex text-sm text-white/46 transition group-hover:translate-x-1 group-hover:text-white">进入 -&gt;</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-white/10 bg-[#080812] text-white">
				<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
					<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
						<div>
							<p className="text-sm font-medium text-white/54">目录</p>
							<h2 className="mt-3 text-3xl font-normal tracking-[-0.045em]">完整目录</h2>
						</div>
						<Link className="text-sm font-medium text-white/58 transition hover:text-white" href="/docs">全部文档 -&gt;</Link>
					</div>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{directoryGroups.map((group) => (
							<div className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5" key={group.title}>
								<h3 className="text-sm font-medium text-white/76">{group.title}</h3>
								<div className="mt-4 flex flex-wrap gap-2">
									{group.items.map(([title, href]) => (
										<Link className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/52 transition hover:border-white/30 hover:text-white" href={href} key={href}>
											{title}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

function LogoMark() {
	return (
		<svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
			<path d="M4 12.3h4.1l2.3-6.2 4.1 12.1 2.1-5.9H20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
		</svg>
	);
}

function SparkIcon() {
	return (
		<svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
			<path d="M12 3.5 13.7 9l5.8 1.7-5.8 1.7L12 18l-1.7-5.6-5.8-1.7L10.3 9 12 3.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
			<path d="m18.3 16.2.6 2 2.1.6-2.1.6-.6 2-.6-2-2.1-.6 2.1-.6.6-2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
		</svg>
	);
}
