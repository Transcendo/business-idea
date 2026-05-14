import Link from "next/link";

const primaryRoutes = [
	{
		title: "强社交关系产品",
		description: "熟人、半熟人、小圈子、线下活动和身份信任，是近期最值得持续追踪的方向。",
		href: "/docs/social-relationship-products",
		label: "当前主线",
	},
	{
		title: "AI 智能体",
		description: "观察 AI 从聊天入口走向任务执行、业务流程和人机协作的真实产品形态。",
		href: "/docs/ai-agents",
		label: "执行层",
	},
	{
		title: "本周新增",
		description: "按周查看最新沉淀的 AI 创业机会，避免旧精选被误读成新推荐。",
		href: "/docs/weekly-new",
		label: "新信号",
	},
];

const categoryGroups = [
	{
		title: "应用与关系",
		items: [
			["消费级 AI", "/docs/consumer-ai"],
			["强社交关系", "/docs/social-relationship-products"],
			["情感陪伴", "/docs/emotional-companions"],
			["游戏", "/docs/gaming"],
			["开放世界", "/docs/open-world"],
		],
	},
	{
		title: "模型与工具",
		items: [
			["AI 智能体", "/docs/ai-agents"],
			["开发者工具", "/docs/developer-tools"],
			["基础模型", "/docs/foundation-models"],
			["网络安全", "/docs/cybersecurity"],
		],
	},
	{
		title: "行业与硬件",
		items: [
			["医疗健康", "/docs/healthcare"],
			["教育", "/docs/education"],
			["金融科技", "/docs/fintech"],
			["AI 硬件", "/docs/ai-hardware"],
			["机器人", "/docs/robotics"],
			["具身 AI", "/docs/embodied-ai"],
			["气候能源", "/docs/climate-energy"],
			["垂直 AI", "/docs/vertical-ai"],
		],
	},
];

const methodCards = [
	{
		title: "先看入口",
		description: "用户为什么会来、什么时候会回来、是否有自然传播理由。",
	},
	{
		title: "再看约束",
		description: "供给、数据、信任、合规、渠道和交付难度有没有真正被解决。",
	},
	{
		title: "看迁移",
		description: "判断机制能否迁移到更通用的产品机会、场景实验或商业模型里。",
	},
];

const featuredReads = [
	{
		title: "Luma",
		category: "活动组织",
		href: "/docs/social-relationship-products/luma",
		description: "活动页不只是报名工具，而是线下关系发生前的信任包装。",
	},
	{
		title: "Partiful",
		category: "朋友聚会",
		href: "/docs/social-relationship-products/partiful",
		description: "把聚会邀请做成低门槛社交表达，增长来自分享动作本身。",
	},
	{
		title: "Sierra",
		category: "AI 智能体",
		href: "/docs/ai-agents/sierra",
		description: "企业智能体产品最难的不是会聊，而是能安全接管真实流程。",
	},
	{
		title: "Perplexity",
		category: "消费级 AI",
		href: "/docs/consumer-ai/perplexity",
		description: "搜索体验被 AI 改写后，入口、分发和信任关系都会重新排队。",
	},
];

const stats = [
	["18+", "研究分类"],
	["40+", "项目样本"],
	["3", "固定判断维度"],
];

export default function HomePage() {
	return (
		<main className="min-h-dvh bg-[#f7f8f4] text-[#141611]">
			<section className="relative isolate overflow-hidden border-b border-[#d9ded0] bg-[#10130f] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(215,255,95,0.22),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(211,72,54,0.20),transparent_30%),linear-gradient(135deg,#10130f_0%,#1c2118_52%,#070806_100%)]" />
				<div className="absolute inset-x-8 top-20 hidden h-px bg-white/10 lg:block" />
				<div className="absolute bottom-0 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-[#d7ff5f]/12 blur-3xl" />

				<div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
					<nav className="flex items-center justify-between gap-4 text-sm">
						<Link className="group inline-flex items-center gap-2 font-semibold" href="/">
							<span className="grid size-7 place-items-center rounded-md bg-[#d7ff5f] text-[#10130f] transition group-hover:rotate-6">
								<LogoGlyph />
							</span>
							<span>AI 分类研究库</span>
						</Link>
						<div className="hidden items-center gap-5 text-white/72 sm:flex">
							<Link className="hover:text-white" href="/docs/social-relationship-products">
								强社交关系
							</Link>
							<Link className="hover:text-white" href="/docs/ai-agents">
								AI 智能体
							</Link>
							<Link className="hover:text-white" href="/docs/themes">
								研究口径
							</Link>
						</div>
					</nav>

					<div className="grid min-h-[76svh] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:py-20">
						<div className="max-w-4xl">
							<p className="mb-5 inline-flex rounded-full border border-white/16 bg-white/8 px-3 py-1 text-sm text-white/76 backdrop-blur">
								面向创业判断的公开 AI 产品档案
							</p>
							<h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
								别把 AI 新闻越攒越乱，整理成能复用的机会地图。
							</h1>
							<p className="mt-7 max-w-2xl text-lg leading-8 text-white/74">
								这里不是项目黄页。每个样本都尽量回答三件事：用户为什么要用，商业化卡在哪里，哪些机制有可复用价值。
							</p>
							<div className="mt-9 flex flex-wrap gap-3">
								<Link
									className="inline-flex rounded-md bg-[#d7ff5f] px-5 py-3 text-sm font-semibold text-[#141611] transition hover:bg-white"
									href="/docs/social-relationship-products"
								>
									从强社交关系开始
								</Link>
								<Link
									className="inline-flex rounded-md border border-white/28 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#141611]"
									href="/docs"
								>
									浏览全部目录
								</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-white/14 bg-white/[0.07] p-5 shadow-2xl shadow-black/30 backdrop-blur">
							<div className="flex items-center justify-between border-b border-white/12 pb-4">
								<p className="text-sm font-semibold text-white">研究库怎么用</p>
								<span className="rounded-full bg-[#d7ff5f]/16 px-2.5 py-1 text-xs text-[#d7ff5f]">
									Start here
								</span>
							</div>
							<div className="mt-5 space-y-3">
								{primaryRoutes.map((route, index) => (
									<Link
										className="group block rounded-xl border border-white/10 bg-[#10130f]/56 p-4 transition hover:-translate-y-0.5 hover:border-[#d7ff5f]/50 hover:bg-[#10130f]/76"
										href={route.href}
										key={route.title}
									>
										<div className="flex items-start gap-3">
											<span className="mt-0.5 text-xs text-white/42">{String(index + 1).padStart(2, "0")}</span>
											<div>
												<p className="text-xs font-semibold text-[#d7ff5f]">{route.label}</p>
												<h2 className="mt-1 text-xl font-semibold">{route.title}</h2>
												<p className="mt-2 text-sm leading-6 text-white/62">{route.description}</p>
											</div>
										</div>
										<span className="mt-4 inline-flex text-sm font-semibold text-white/72 transition group-hover:translate-x-1 group-hover:text-white">
											进入 -&gt;
										</span>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-3 lg:px-10">
				{stats.map(([value, label]) => (
					<div className="rounded-2xl border border-[#d9ded0] bg-white p-6" key={label}>
						<p className="text-4xl font-semibold tracking-[-0.04em]">{value}</p>
						<p className="mt-2 text-sm text-[#60675d]">{label}</p>
					</div>
				))}
			</section>

			<section className="border-y border-[#d9ded0] bg-white">
				<div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
					<div>
						<p className="text-sm font-semibold text-[#d34836]">清晰入口</p>
						<h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.035em]">
							把目录改成能直接做决策的路线图。
						</h2>
						<p className="mt-6 leading-8 text-[#555b4f]">
							首页不再用自动滚动索引硬塞所有分类，而是把近期重点、完整目录和代表样本分开。想快速看机会，从左边三条主线进；想查资料，从下面分类进。
						</p>
					</div>

					<div className="grid gap-4 md:grid-cols-3">
						{methodCards.map((card, index) => (
							<div className="rounded-2xl border border-[#d9ded0] bg-[#f7f8f4] p-6" key={card.title}>
								<p className="text-sm font-semibold text-[#d34836]">0{index + 1}</p>
								<h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{card.title}</h3>
								<p className="mt-4 text-sm leading-7 text-[#555b4f]">{card.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
				<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
					<div>
						<p className="text-sm font-semibold text-[#d34836]">分类目录</p>
						<h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em]">按问题找项目，而不是按热度刷新闻。</h2>
					</div>
					<Link className="text-sm font-semibold text-[#141611] underline decoration-[#d34836]/40 underline-offset-4 hover:decoration-[#d34836]" href="/docs">
						查看完整文档
					</Link>
				</div>

				<div className="grid gap-5 lg:grid-cols-3">
					{categoryGroups.map((group) => (
						<div className="rounded-2xl border border-[#d9ded0] bg-white p-6" key={group.title}>
							<h3 className="text-xl font-semibold">{group.title}</h3>
							<div className="mt-5 flex flex-wrap gap-2">
								{group.items.map(([title, href]) => (
									<Link
										className="rounded-full border border-[#d9ded0] bg-[#f7f8f4] px-3 py-2 text-sm text-[#4d5449] transition hover:border-[#141611] hover:text-[#141611]"
										href={href}
										key={href}
									>
										{title}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="border-t border-[#d9ded0] bg-[#10130f] text-white">
				<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
					<div className="mb-8 max-w-3xl">
						<p className="text-sm font-semibold text-[#d7ff5f]">代表样本</p>
						<h2 className="mt-3 text-4xl font-semibold tracking-[-0.035em]">先读这些，能最快理解研究库的判断方式。</h2>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{featuredReads.map((read) => (
							<Link
								className="group flex min-h-64 flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-[#d7ff5f]/50 hover:bg-white/[0.09]"
								href={read.href}
								key={read.href}
							>
								<div>
									<p className="text-sm font-semibold text-[#d7ff5f]">{read.category}</p>
									<h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{read.title}</h3>
									<p className="mt-4 text-sm leading-7 text-white/64">{read.description}</p>
								</div>
								<span className="mt-8 text-sm font-semibold text-white/72 transition group-hover:translate-x-1 group-hover:text-white">
									阅读 -&gt;
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

function LogoGlyph() {
	return (
		<svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
			<path d="M4 13.5 8.2 5l3.5 14L16 8.8l4 4.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" />
		</svg>
	);
}
