import Link from "next/link";

import {
	EntryPointsMarquee,
	type EntryPoint,
} from "@/components/entry-points-marquee";

const heroImage =
	"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82";

const imageTiles = [
	{
		title: "AI 基础设施",
		href: "/docs/developer-tools",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
	},
	{
		title: "机器人",
		href: "/docs/robotics",
		image:
			"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
	},
	{
		title: "基础模型",
		href: "/docs/foundation-models",
		image:
			"https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80",
	},
];

const entryPoints: EntryPoint[] = [
	{
		title: "本周推荐",
		description: "上一周内容已下架，本周推荐等待重新整理后再发布。",
		href: "/docs/weekly-picks",
		count: "0 个推荐",
		kicker: "临时观察",
	},
	{
		title: "AI 智能体",
		description: "执行型软件、企业流程、智能体治理和真实业务动作。",
		href: "/docs/ai-agents",
		count: "2 个样本",
		kicker: "软件执行层",
	},
	{
		title: "基础模型",
		description: "中国基础模型、平台化路径、多模态能力和终端落地。",
		href: "/docs/foundation-models",
		count: "4 个样本",
		kicker: "模型平台",
	},
	{
		title: "垂直 AI",
		description: "围绕专业场景、数据密度和交付闭环观察 AI 应用机会。",
		href: "/docs/vertical-ai",
		count: "1 个样本",
		kicker: "行业深水区",
	},
	{
		title: "开发者工具",
		description: "关注 AI 基础设施、工程效率工具和新一代开发流程。",
		href: "/docs/developer-tools",
		count: "2 个样本",
		kicker: "生产工具链",
	},
	{
		title: "医疗健康",
		description: "判断医疗 AI 的真实落地空间、合规约束和服务闭环。",
		href: "/docs/healthcare",
		count: "2 个样本",
		kicker: "高门槛场景",
	},
	{
		title: "情感陪伴",
		description: "观察多模态陪伴、角色交互和消费级 AI 的长期留存。",
		href: "/docs/emotional-companions",
		count: "1 个样本",
		kicker: "消费入口",
	},
	{
		title: "具身 AI",
		description: "把模型能力放进物理世界，关注数据、控制和任务泛化。",
		href: "/docs/embodied-ai",
		count: "待补齐",
		kicker: "物理世界",
	},
	{
		title: "机器人",
		description: "整理机器人公司、供应链、应用场景和商业化节奏。",
		href: "/docs/robotics",
		count: "待补齐",
		kicker: "硬件落地",
	},
	{
		title: "教育",
		description: "观察 AI 对学习路径、内容生成和教学反馈的真实改变。",
		href: "/docs/education",
		count: "待补齐",
		kicker: "学习场景",
	},
	{
		title: "金融科技",
		description: "关注风控、投研、自动化运营和金融服务里的 AI 使用边界。",
		href: "/docs/fintech",
		count: "待补齐",
		kicker: "约束行业",
	},
	{
		title: "气候能源",
		description: "整理能源、气候、工业效率和 AI 优化问题之间的连接点。",
		href: "/docs/climate-energy",
		count: "待补齐",
		kicker: "长期议题",
	},
	{
		title: "网络安全",
		description: "跟踪 AI 对攻击、防守、自动化检测和安全运营的影响。",
		href: "/docs/cybersecurity",
		count: "待补齐",
		kicker: "攻防变化",
	},
	{
		title: "游戏",
		description: "关注生成式内容、AI NPC、玩法系统和制作管线变化。",
		href: "/docs/gaming",
		count: "待补齐",
		kicker: "互动内容",
	},
	{
		title: "开放世界",
		description: "观察 AI 与开放世界、模拟系统、虚拟社会之间的可能性。",
		href: "/docs/open-world",
		count: "待补齐",
		kicker: "空间叙事",
	},
	{
		title: "写作规范",
		description: "所有页面优先讲清事实、判断和风险，避免把项目研究写成营销材料。",
		href: "/docs/themes",
		count: "研究口径",
		kicker: "编辑标准",
	},
];

const operatingRules = [
	"先找可信来源，再写观点。",
	"每篇都要回答为什么值得看，也要回答为什么不能盲目乐观。",
	"每个项目都归入一个主分类，交叉关系在正文里说明。",
];

export default function HomePage() {
	return (
		<main className="min-h-dvh bg-[#f7f8f4] text-[#141611]">
			<section className="relative isolate min-h-[86svh] overflow-hidden bg-[#141611] text-white">
				<img
					src={heroImage}
					alt="用于表现 AI 基础设施的电子元件特写"
					className="absolute inset-0 h-full w-full object-cover opacity-48"
				/>
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,22,17,0.92),rgba(20,22,17,0.54),rgba(20,22,17,0.14))]" />
				<div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,#f7f8f4,rgba(247,248,244,0))]" />

				<div className="relative mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
					<nav className="flex items-center justify-between gap-4 text-sm">
						<Link className="font-semibold" href="/">
							AI 分类研究库
						</Link>
						<div className="hidden items-center gap-5 text-white/78 sm:flex">
							<Link className="hover:text-white" href="/docs/weekly-picks">
								本周推荐
							</Link>
							<Link className="hover:text-white" href="/docs/ai-agents">
								AI 智能体
							</Link>
							<Link className="hover:text-white" href="/docs/foundation-models">
								基础模型
							</Link>
						</div>
					</nav>

					<div className="grid items-end gap-10 pb-16 pt-16 lg:grid-cols-[minmax(0,1fr)_360px]">
						<div className="max-w-4xl">
							<p className="mb-5 inline-flex rounded-md border border-white/24 bg-white/10 px-3 py-1 text-sm text-white/84 backdrop-blur">
								公开 AI 分类研究档案
							</p>
							<h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
								把 AI 项目和方向，整理成可长期复用的分类判断系统。
							</h1>
							<p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
								这里跟踪 AI 公司、产品切口、分类变化和早期信号。内容不追求热闹，优先追求可查、可复盘、可扩展。
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<Link
									className="inline-flex rounded-md bg-[#d7ff5f] px-5 py-3 text-sm font-semibold text-[#141611] transition hover:bg-white"
									href="/docs/weekly-picks"
								>
									进入本周推荐
								</Link>
								<Link
									className="inline-flex rounded-md border border-white/28 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#141611]"
									href="/docs/ai-agents"
								>
									查看分类目录
								</Link>
							</div>
						</div>

						<div className="border-l border-white/20 pl-6 text-sm text-white/74">
							<p className="mb-4 text-white">研究口径</p>
							<ul className="space-y-4">
								{operatingRules.map((rule) => (
									<li className="flex gap-3" key={rule}>
										<span className="mt-2 h-2 w-2 shrink-0 bg-[#d7ff5f]" />
										<span>{rule}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<EntryPointsMarquee items={entryPoints} />

			<section className="border-y border-[#d9ded0] bg-white">
				<div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
					<div>
						<p className="text-sm font-semibold text-[#d34836]">
							编辑系统
						</p>
						<h2 className="mt-4 text-4xl font-semibold leading-tight">
							不是信息搬运，而是把机会拆成事实、风险和下一步观察。
						</h2>
						<p className="mt-6 leading-8 text-[#555b4f]">
							项目会持续整理 AI 智能体、垂直 AI、开发者工具、机器人、医疗、金融科技、游戏与开放世界等方向。每个方向都应该能回答一个问题：现在是否真的出现了新的机会窗口。
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-3">
						{imageTiles.map((tile) => (
							<Link
								className="group overflow-hidden border border-[#d9ded0] bg-[#f7f8f4]"
								href={tile.href}
								key={tile.title}
							>
								<img
									src={tile.image}
									alt={`${tile.title} 配图`}
									className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
								/>
								<div className="flex items-center justify-between p-4">
									<p className="font-semibold">{tile.title}</p>
									<span className="text-[#d34836]">查看</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
				<div className="border-l-4 border-[#d34836] pl-6">
					<h2 className="text-3xl font-semibold">当前重点</h2>
					<p className="mt-5 leading-8 text-[#555b4f]">
						先把已经收录的项目归入明确分类，再补齐教育、医疗、金融、气候能源等分类首页。临时观察进入本周推荐，成熟内容回流到对应分类。
					</p>
				</div>
				<div className="grid gap-3 sm:grid-cols-2">
					<Link className="border border-[#d9ded0] bg-white p-5 hover:border-[#141611]" href="/docs/ai-agents/sierra">
						<p className="text-sm text-[#6e7c3a]">AI 智能体</p>
						<p className="mt-3 text-xl font-semibold">Sierra</p>
					</Link>
					<Link className="border border-[#d9ded0] bg-white p-5 hover:border-[#141611]" href="/docs/vertical-ai/hebbia">
						<p className="text-sm text-[#6e7c3a]">垂直 AI</p>
						<p className="mt-3 text-xl font-semibold">Hebbia</p>
					</Link>
					<Link className="border border-[#d9ded0] bg-white p-5 hover:border-[#141611]" href="/docs/developer-tools/parasail">
						<p className="text-sm text-[#6e7c3a]">开发者工具</p>
						<p className="mt-3 text-xl font-semibold">Parasail</p>
					</Link>
					<Link className="border border-[#d9ded0] bg-white p-5 hover:border-[#141611]" href="/docs/emotional-companions/minimax">
						<p className="text-sm text-[#6e7c3a]">多模态 AI</p>
						<p className="mt-3 text-xl font-semibold">MiniMax</p>
					</Link>
				</div>
			</section>
		</main>
	);
}
