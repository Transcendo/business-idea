import type { Folder, Root } from "fumadocs-core/page-tree";
import type { LucideIcon } from "lucide-react";
import {
	Activity,
	Armchair,
	Binoculars,
	Book,
	BotIcon,
	Boxes,
	BrainCircuit,
	Briefcase,
	CalendarDays,
	Coffee,
	Code2,
	ContactRound,
	FileSearch,
	Gamepad2,
	Globe,
	Globe2,
	GraduationCap,
	Headphones,
	HeartPulse,
	History,
	Image,
	Leaf,
	MapPinned,
	MessageCircle,
	Network,
	NotebookTabs,
	PartyPopper,
	Repeat2,
	Search,
	ShieldCheck,
	Sparkles,
	UsersRound,
	Utensils,
	Zap,
} from "lucide-react";
import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

export interface SubpageItem {
	title: string;
	href?: string;
	icon?: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	group?: boolean;
}

export interface ListItem {
	title: string;
	href?: string;
	icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	group?: boolean;
	separator?: boolean;
	isNew?: boolean;
	subpages?: SubpageItem[];
	external?: boolean;
}

interface Content {
	title: string;
	href?: string;
	expandSectionForPathPrefix?: string;
	Icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	isNew?: boolean;
	list: ListItem[];
}

const moduleLogoStyles = {
	weekly:
		"bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-950/35 dark:text-amber-300 dark:ring-amber-800/60",
	consumer:
		"bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-950/35 dark:text-sky-300 dark:ring-sky-800/60",
	social:
		"bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200 dark:bg-fuchsia-950/35 dark:text-fuchsia-300 dark:ring-fuchsia-800/60",
	agents:
		"bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-950/35 dark:text-violet-300 dark:ring-violet-800/60",
	developer:
		"bg-cyan-50 text-cyan-700 ring-cyan-200 dark:bg-cyan-950/35 dark:text-cyan-300 dark:ring-cyan-800/60",
	model:
		"bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-950/35 dark:text-indigo-300 dark:ring-indigo-800/60",
	security:
		"bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-950/35 dark:text-rose-300 dark:ring-rose-800/60",
	fintech:
		"bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-950/35 dark:text-emerald-300 dark:ring-emerald-800/60",
	healthcare:
		"bg-red-50 text-red-700 ring-red-200 dark:bg-red-950/35 dark:text-red-300 dark:ring-red-800/60",
	hardware:
		"bg-orange-50 text-orange-700 ring-orange-200 dark:bg-orange-950/35 dark:text-orange-300 dark:ring-orange-800/60",
	education:
		"bg-lime-50 text-lime-700 ring-lime-200 dark:bg-lime-950/35 dark:text-lime-300 dark:ring-lime-800/60",
	energy:
		"bg-green-50 text-green-700 ring-green-200 dark:bg-green-950/35 dark:text-green-300 dark:ring-green-800/60",
	embodied:
		"bg-purple-50 text-purple-700 ring-purple-200 dark:bg-purple-950/35 dark:text-purple-300 dark:ring-purple-800/60",
	robotics:
		"bg-slate-50 text-slate-700 ring-slate-200 dark:bg-slate-900/60 dark:text-slate-300 dark:ring-slate-700/70",
	companion:
		"bg-pink-50 text-pink-700 ring-pink-200 dark:bg-pink-950/35 dark:text-pink-300 dark:ring-pink-800/60",
	gaming:
		"bg-teal-50 text-teal-700 ring-teal-200 dark:bg-teal-950/35 dark:text-teal-300 dark:ring-teal-800/60",
	world:
		"bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-950/35 dark:text-blue-300 dark:ring-blue-800/60",
	vertical:
		"bg-stone-50 text-stone-700 ring-stone-200 dark:bg-stone-900/60 dark:text-stone-300 dark:ring-stone-700/70",
};

function ModuleLogo({
	children,
	className,
	variant,
}: {
	children: ReactNode;
	className?: string;
	variant: keyof typeof moduleLogoStyles;
}) {
	return (
		<span
			className={cn(
				"inline-flex size-5 shrink-0 items-center justify-center rounded-[5px] ring-1 [&>svg]:size-[13px]",
				moduleLogoStyles[variant],
				className,
			)}
		>
			{children}
		</span>
	);
}

function contentToPageTree(content: Content): Folder {
	return {
		type: "folder",
		icon: <content.Icon />,
		name: content.title,
		index: content.href
			? {
					icon: <content.Icon />,
					name: content.title,
					type: "page",
					url: content.href,
				}
			: undefined,
		children: content.list
			.filter((item) => !item.group && (item.href || item.separator))
			.filter((item) => !item.external)
			.map((item) =>
				item.separator
					? ({ type: "separator", name: item.title } as const)
					: ({ type: "page", url: item.href!, name: item.title, icon: <item.icon /> } as const),
			),
	};
}

export function getPageTree(): Root {
	return {
		$id: "root",
		name: "docs",
		children: [
			{
				type: "folder",
				root: true,
				name: "研究目录",
				description: "按分类组织的 AI 研究目录。",
				children: contents.map(contentToPageTree),
			},
		],
	};
}

export const contents: Content[] = [
	{
		title: "本周推荐",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="weekly">
				<Briefcase />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/weekly-picks", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Hume AI", href: "/docs/weekly-picks/hume-ai", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "Decagon", href: "/docs/weekly-picks/decagon", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Perplexity", href: "/docs/weekly-picks/perplexity", icon: () => <Search className="w-4 h-4 text-current" /> },
			{ title: "Harvey", href: "/docs/weekly-picks/harvey", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Rebellions", href: "/docs/weekly-picks/rebellions", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Era World", href: "/docs/weekly-picks/era-world", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Antioch", href: "/docs/weekly-picks/antioch", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Capsule Security", href: "/docs/weekly-picks/capsule-security", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "AgentMail", href: "/docs/weekly-picks/agentmail", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Abridge", href: "/docs/weekly-picks/abridge", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "No Barrier", href: "/docs/weekly-picks/no-barrier", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "Qodo", href: "/docs/weekly-picks/qodo", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "NeuBird", href: "/docs/weekly-picks/neubird", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Hightouch", href: "/docs/weekly-picks/hightouch", icon: () => <Briefcase className="w-4 h-4 text-current" /> },
			{ title: "Gitar", href: "/docs/weekly-picks/gitar", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "InsightFinder", href: "/docs/weekly-picks/insightfinder", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Factory", href: "/docs/weekly-picks/factory", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Sapiom", href: "/docs/weekly-picks/sapiom", icon: () => <Zap className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "消费级 AI",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="consumer">
				<Search />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/consumer-ai", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Perplexity", href: "/docs/consumer-ai/perplexity", icon: () => <Search className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "强社交关系产品",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="social">
				<Network />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/social-relationship-products", icon: () => <Network className="w-4 h-4 text-current" /> },
			{ title: "Luma", href: "/docs/social-relationship-products/luma", icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Partiful", href: "/docs/social-relationship-products/partiful", icon: () => <PartyPopper className="w-4 h-4 text-current" /> },
			{ title: "Pie", href: "/docs/social-relationship-products/pie", icon: () => <Sparkles className="w-4 h-4 text-current" /> },
			{ title: "Heylo", href: "/docs/social-relationship-products/heylo", icon: () => <MessageCircle className="w-4 h-4 text-current" /> },
			{ title: "Intros.ai", href: "/docs/social-relationship-products/intros-ai", icon: () => <Network className="w-4 h-4 text-current" /> },
			{ title: "Dex", href: "/docs/social-relationship-products/dex", icon: () => <ContactRound className="w-4 h-4 text-current" /> },
			{ title: "Pally", href: "/docs/social-relationship-products/pally", icon: () => <ContactRound className="w-4 h-4 text-current" /> },
			{ title: "Donut", href: "/docs/social-relationship-products/donut", icon: () => <UsersRound className="w-4 h-4 text-current" /> },
			{ title: "Supermomos", href: "/docs/social-relationship-products/supermomos", icon: () => <UsersRound className="w-4 h-4 text-current" /> },
			{ title: "Beli", href: "/docs/social-relationship-products/beli", icon: () => <Utensils className="w-4 h-4 text-current" /> },
			{ title: "Cobble", href: "/docs/social-relationship-products/cobble", icon: () => <UsersRound className="w-4 h-4 text-current" /> },
			{ title: "Paired", href: "/docs/social-relationship-products/paired", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "Cupla", href: "/docs/social-relationship-products/cupla", icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Howbout", href: "/docs/social-relationship-products/howbout", icon: () => <Repeat2 className="w-4 h-4 text-current" /> },
			{ title: "Mozi", href: "/docs/social-relationship-products/mozi", icon: () => <MapPinned className="w-4 h-4 text-current" /> },
			{ title: "Cappuccino", href: "/docs/social-relationship-products/cappuccino", icon: () => <Coffee className="w-4 h-4 text-current" /> },
			{ title: "Locket", href: "/docs/social-relationship-products/locket", icon: () => <Image className="w-4 h-4 text-current" /> },
			{ title: "Retro", href: "/docs/social-relationship-products/retro", icon: () => <Image className="w-4 h-4 text-current" /> },
			{ title: "Maia", href: "/docs/social-relationship-products/maia", icon: () => <MessageCircle className="w-4 h-4 text-current" /> },
			{ title: "Remento", href: "/docs/social-relationship-products/remento", icon: () => <History className="w-4 h-4 text-current" /> },
			{ title: "Timeleft", href: "/docs/social-relationship-products/timeleft", icon: () => <Armchair className="w-4 h-4 text-current" /> },
			{ title: "The Breakfast", href: "/docs/social-relationship-products/the-breakfast", icon: () => <Utensils className="w-4 h-4 text-current" /> },
			{ title: "222", href: "/docs/social-relationship-products/222", icon: () => <UsersRound className="w-4 h-4 text-current" /> },
			{ title: "Mesh / Clay", href: "/docs/social-relationship-products/mesh-clay", icon: () => <Network className="w-4 h-4 text-current" /> },
			{ title: "Granola", href: "/docs/social-relationship-products/granola", icon: () => <NotebookTabs className="w-4 h-4 text-current" /> },
			{ title: "Geneva / Bumble BFF", href: "/docs/social-relationship-products/geneva-bumble-bff", icon: () => <ContactRound className="w-4 h-4 text-current" /> },
			{ title: "Kndrd", href: "/docs/social-relationship-products/kndrd", icon: () => <UsersRound className="w-4 h-4 text-current" /> },
			{ title: "Letterloop", href: "/docs/social-relationship-products/letterloop", icon: () => <NotebookTabs className="w-4 h-4 text-current" /> },
			{ title: "Favs", href: "/docs/social-relationship-products/favs", icon: () => <UsersRound className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "AI 智能体",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="agents">
				<BotIcon />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/ai-agents", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Decagon", href: "/docs/ai-agents/decagon", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Sierra", href: "/docs/ai-agents/sierra", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Sycamore", href: "/docs/ai-agents/sycamore", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "开发者工具",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="developer">
				<Code2 />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/developer-tools", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "AgentMail", href: "/docs/developer-tools/agentmail", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Qodo", href: "/docs/developer-tools/qodo", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Langfuse", href: "/docs/developer-tools/langfuse", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "E2B", href: "/docs/developer-tools/e2b", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Parasail", href: "/docs/developer-tools/parasail", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Baseten", href: "/docs/developer-tools/baseten", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Nimble", href: "/docs/developer-tools/nimble", icon: () => <Globe className="w-4 h-4 text-current" /> },
			{ title: "NeuBird", href: "/docs/developer-tools/neubird", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Gitar", href: "/docs/developer-tools/gitar", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "InsightFinder", href: "/docs/developer-tools/insightfinder", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Factory", href: "/docs/developer-tools/factory", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Sapiom", href: "/docs/developer-tools/sapiom", icon: () => <Zap className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "基础模型",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="model">
				<BrainCircuit />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/foundation-models", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "智谱", href: "/docs/foundation-models/zhipu", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "月之暗面", href: "/docs/foundation-models/moonshot", icon: () => <Globe className="w-4 h-4 text-current" /> },
			{ title: "阶跃星辰", href: "/docs/foundation-models/stepfun", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "零一万物", href: "/docs/foundation-models/01ai", icon: () => <Zap className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "网络安全",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="security">
				<ShieldCheck />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/cybersecurity", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Capsule Security", href: "/docs/cybersecurity/capsule-security", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "金融科技",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="fintech">
				<Activity />
			</ModuleLogo>
		),
		list: [{ title: "概览", href: "/docs/fintech", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "医疗健康",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="healthcare">
				<HeartPulse />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/healthcare", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "DrSwarm", href: "/docs/healthcare/drswarm", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "Abridge", href: "/docs/healthcare/abridge", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "Nabla", href: "/docs/healthcare/nabla", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "OpenEvidence", href: "/docs/healthcare/openevidence", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "No Barrier", href: "/docs/healthcare/no-barrier", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "Luminai", href: "/docs/healthcare/luminai", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "百川智能", href: "/docs/healthcare/baichuan", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "AI 硬件",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="hardware">
				<Boxes />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/ai-hardware", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Era World", href: "/docs/ai-hardware/era-world", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Rebellions", href: "/docs/ai-hardware/rebellions", icon: () => <Activity className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "教育",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="education">
				<GraduationCap />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/education", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "ChatGPT Edu", href: "/docs/education/chatgpt-edu", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "Chalkie", href: "/docs/education/chalkie", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "MagicSchool", href: "/docs/education/magicschool", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "Brisk", href: "/docs/education/brisk", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "EnlightenAI", href: "/docs/education/enlightenai", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "Amira", href: "/docs/education/amira", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "气候与能源",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="energy">
				<Leaf />
			</ModuleLogo>
		),
		list: [{ title: "概览", href: "/docs/climate-energy", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "具身智能",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="embodied">
				<Activity />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/embodied-ai", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Antioch", href: "/docs/embodied-ai/antioch", icon: () => <Activity className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "机器人",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="robotics">
				<BotIcon />
			</ModuleLogo>
		),
		list: [{ title: "概览", href: "/docs/robotics", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "情感陪伴",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="companion">
				<HeartPulse />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/emotional-companions", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Hume AI", href: "/docs/emotional-companions/hume-ai", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "MiniMax", href: "/docs/emotional-companions/minimax", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "游戏",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="gaming">
				<Gamepad2 />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/gaming", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "UEFN / Fortnite Creator Economy", href: "/docs/gaming/uefn-fortnite-creator-economy", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "开放世界",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="world">
				<Globe2 />
			</ModuleLogo>
		),
		list: [{ title: "概览", href: "/docs/open-world", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "垂直 AI",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="vertical">
				<Binoculars />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/vertical-ai", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Hebbia", href: "/docs/vertical-ai/hebbia", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Hightouch", href: "/docs/vertical-ai/hightouch", icon: () => <Briefcase className="w-4 h-4 text-current" /> },
			{ title: "Harvey", href: "/docs/vertical-ai/harvey", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
		],
	},
];

export const examples: Content[] = [];
