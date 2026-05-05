import type { Folder, Root } from "fumadocs-core/page-tree";
import type { LucideIcon } from "lucide-react";
import {
	Activity,
	Binoculars,
	Book,
	BotIcon,
	Briefcase,
	FileSearch,
	FlaskConical,
	Globe,
	GraduationCap,
	Headphones,
	HeartPulse,
	Search,
	ShieldCheck,
	Zap,
} from "lucide-react";
import type { ReactNode, SVGProps } from "react";

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

type SvgIconProps = SVGProps<SVGSVGElement>;

const svgBaseProps = {
	width: "1em",
	height: "1em",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.9,
	strokeLinecap: "round",
	strokeLinejoin: "round",
} as const;

function SocialGraphIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<circle cx="6" cy="8" r="2.2" />
			<circle cx="18" cy="8" r="2.2" />
			<circle cx="12" cy="17" r="2.2" />
			<path d="m8 9.2 3 5.6" />
			<path d="m16 9.2-3 5.6" />
			<path d="M8.5 8h7" />
		</svg>
	);
}

function EventTicketIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M5 7.5h14v3a2 2 0 0 0 0 3v3H5v-3a2 2 0 0 0 0-3v-3Z" />
			<path d="M9 9.5v5" />
			<path d="M13 10h3" />
			<path d="M13 14h2" />
		</svg>
	);
}

function SparkEventIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M7 17h10a3 3 0 0 0 0-6h-1" />
			<path d="M8 11H7a3 3 0 0 0 0 6" />
			<path d="M12 6v5" />
			<path d="m9.5 8.5 2.5 2.5 2.5-2.5" />
			<path d="M18.5 5.5 20 4l1.5 1.5L20 7l-1.5-1.5Z" />
		</svg>
	);
}

function SliceIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M12 4a8 8 0 1 1-7.4 5" />
			<path d="M12 4v8l-7.4-3" />
			<circle cx="15.5" cy="14" r="1" fill="currentColor" stroke="none" />
		</svg>
	);
}

function CircleTalkIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<circle cx="12" cy="11" r="6" />
			<path d="M8.5 17.5 6 20l.8-3.6" />
			<path d="M9 10.5h6" />
			<path d="M9.5 13.5h3" />
		</svg>
	);
}

function QuestionLoopIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M7 8a5 5 0 0 1 8.8-2.6" />
			<path d="M17 6v4h-4" />
			<path d="M17 16a5 5 0 0 1-8.8 2.6" />
			<path d="M7 18v-4h4" />
			<path d="M10.4 10a2 2 0 1 1 2.2 2v1.2" />
			<path d="M12 16h.01" />
		</svg>
	);
}

function MapFriendsIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M5 6.5 10 4l4 2 5-2.5v14l-5 2.5-4-2-5 2.5v-14Z" />
			<path d="M10 4v14" />
			<path d="M14 6v14" />
			<circle cx="12" cy="11.5" r="1.4" />
		</svg>
	);
}

function CoffeeChatIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M6 9h10v4a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V9Z" />
			<path d="M16 10h1.5a2 2 0 0 1 0 4H16" />
			<path d="M8 5.5v1" />
			<path d="M12 5.5v1" />
			<path d="M6 20h12" />
		</svg>
	);
}

function PhotoSignalIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<rect x="5" y="6" width="14" height="12" rx="2" />
			<circle cx="9" cy="10" r="1.2" />
			<path d="m7 16 3.2-3.2 2.3 2.3 1.5-1.5L17 16" />
			<path d="M18 4.5h2" />
			<path d="M19 3.5v2" />
		</svg>
	);
}

function MemoryRingIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M7 12a5 5 0 1 0 1.5-3.6" />
			<path d="M7 7v5h5" />
			<path d="M14.5 5.5A8 8 0 1 1 5 18" />
		</svg>
	);
}

function TableSeatIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<circle cx="12" cy="12" r="4" />
			<circle cx="12" cy="4.8" r="1.5" />
			<circle cx="19.2" cy="12" r="1.5" />
			<circle cx="12" cy="19.2" r="1.5" />
			<circle cx="4.8" cy="12" r="1.5" />
		</svg>
	);
}

function BreakfastIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M5 11h11v2a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-2Z" />
			<path d="M16 12h1a2 2 0 0 1 0 4h-1" />
			<path d="M7 7.5c1.2-1.2 2.8-1.2 4 0s2.8 1.2 4 0" />
			<path d="M4 20h16" />
		</svg>
	);
}

function PairIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<circle cx="8.5" cy="9" r="2.5" />
			<circle cx="15.5" cy="9" r="2.5" />
			<path d="M4.5 18a4 4 0 0 1 8 0" />
			<path d="M11.5 18a4 4 0 0 1 8 0" />
			<path d="M11 13h2" />
		</svg>
	);
}

function MeshClayIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M6 8c2-3 5-3 7-1s4 1.5 5 0" />
			<path d="M5 15c2.5-2 5-2 7 0s4 2 7-.5" />
			<circle cx="7" cy="8" r="1.6" />
			<circle cx="12" cy="14.5" r="1.6" />
			<circle cx="18" cy="7" r="1.6" />
		</svg>
	);
}

function NotesSparkIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<path d="M7 4.5h8l3 3v12H7v-15Z" />
			<path d="M15 4.5V8h3" />
			<path d="M9.5 12h5" />
			<path d="M9.5 15h3" />
			<path d="m4 7 1-1 1 1-1 1-1-1Z" />
		</svg>
	);
}

function FriendGroupIcon(props: SvgIconProps = {}) {
	return (
		<svg aria-hidden="true" {...svgBaseProps} {...props}>
			<circle cx="12" cy="8" r="2.5" />
			<circle cx="6.5" cy="10" r="2" />
			<circle cx="17.5" cy="10" r="2" />
			<path d="M7.5 18a4.5 4.5 0 0 1 9 0" />
			<path d="M3.5 17a3.2 3.2 0 0 1 4-2.6" />
			<path d="M16.5 14.4a3.2 3.2 0 0 1 4 2.6" />
		</svg>
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
		Icon: () => <Briefcase className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/weekly-picks", icon: () => <Book className="w-4 h-4 text-current" /> },
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
		Icon: () => <Search className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/consumer-ai", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Perplexity", href: "/docs/consumer-ai/perplexity", icon: () => <Search className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "强社交关系产品",
		Icon: SocialGraphIcon,
		list: [
			{ title: "概览", href: "/docs/social-relationship-products", icon: SocialGraphIcon },
			{ title: "Luma", href: "/docs/social-relationship-products/luma", icon: EventTicketIcon },
			{ title: "Partiful", href: "/docs/social-relationship-products/partiful", icon: SparkEventIcon },
			{ title: "Pie", href: "/docs/social-relationship-products/pie", icon: SliceIcon },
			{ title: "Heylo", href: "/docs/social-relationship-products/heylo", icon: CircleTalkIcon },
			{ title: "Howbout", href: "/docs/social-relationship-products/howbout", icon: QuestionLoopIcon },
			{ title: "Mozi", href: "/docs/social-relationship-products/mozi", icon: MapFriendsIcon },
			{ title: "Cappuccino", href: "/docs/social-relationship-products/cappuccino", icon: CoffeeChatIcon },
			{ title: "Locket", href: "/docs/social-relationship-products/locket", icon: PhotoSignalIcon },
			{ title: "Retro", href: "/docs/social-relationship-products/retro", icon: PhotoSignalIcon },
			{ title: "Maia", href: "/docs/social-relationship-products/maia", icon: CircleTalkIcon },
			{ title: "Remento", href: "/docs/social-relationship-products/remento", icon: MemoryRingIcon },
			{ title: "Timeleft", href: "/docs/social-relationship-products/timeleft", icon: TableSeatIcon },
			{ title: "The Breakfast", href: "/docs/social-relationship-products/the-breakfast", icon: BreakfastIcon },
			{ title: "222", href: "/docs/social-relationship-products/222", icon: PairIcon },
			{ title: "Mesh / Clay", href: "/docs/social-relationship-products/mesh-clay", icon: MeshClayIcon },
			{ title: "Granola", href: "/docs/social-relationship-products/granola", icon: NotesSparkIcon },
			{ title: "Geneva / Bumble BFF", href: "/docs/social-relationship-products/geneva-bumble-bff", icon: FriendGroupIcon },
		],
	},
	{
		title: "AI 智能体",
		Icon: () => <BotIcon className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/ai-agents", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Sierra", href: "/docs/ai-agents/sierra", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Sycamore", href: "/docs/ai-agents/sycamore", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "开发者工具",
		Icon: () => <Zap className="w-4 h-4 text-current" />,
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
		Icon: () => <Globe className="w-4 h-4 text-current" />,
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
		Icon: () => <ShieldCheck className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/cybersecurity", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Capsule Security", href: "/docs/cybersecurity/capsule-security", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "金融科技",
		Icon: () => <Activity className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/fintech", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "医疗健康",
		Icon: () => <HeartPulse className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/healthcare", icon: () => <Book className="w-4 h-4 text-current" /> },
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
		Icon: () => <Activity className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/ai-hardware", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Era World", href: "/docs/ai-hardware/era-world", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Rebellions", href: "/docs/ai-hardware/rebellions", icon: () => <Activity className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "教育",
		Icon: () => <GraduationCap className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/education", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Chalkie", href: "/docs/education/chalkie", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "MagicSchool", href: "/docs/education/magicschool", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "Brisk", href: "/docs/education/brisk", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "EnlightenAI", href: "/docs/education/enlightenai", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "Amira", href: "/docs/education/amira", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "气候与能源",
		Icon: () => <FlaskConical className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/climate-energy", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "具身智能",
		Icon: () => <Activity className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/embodied-ai", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Antioch", href: "/docs/embodied-ai/antioch", icon: () => <Activity className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "机器人",
		Icon: () => <Activity className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/robotics", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "情感陪伴",
		Icon: () => <HeartPulse className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/emotional-companions", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "MiniMax", href: "/docs/emotional-companions/minimax", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "游戏",
		Icon: () => <GraduationCap className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/gaming", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "开放世界",
		Icon: () => <Globe className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/open-world", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "垂直 AI",
		Icon: () => <Binoculars className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/vertical-ai", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Hebbia", href: "/docs/vertical-ai/hebbia", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Hightouch", href: "/docs/vertical-ai/hightouch", icon: () => <Briefcase className="w-4 h-4 text-current" /> },
			{ title: "Harvey", href: "/docs/vertical-ai/harvey", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
		],
	},
];

export const examples: Content[] = [];
