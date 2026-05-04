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
		Icon: () => <Activity className="w-4 h-4 text-current" />,
		list: [
			{ title: "概览", href: "/docs/social-relationship-products", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Luma", href: "/docs/social-relationship-products/luma", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Partiful", href: "/docs/social-relationship-products/partiful", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Timeleft", href: "/docs/social-relationship-products/timeleft", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "The Breakfast", href: "/docs/social-relationship-products/the-breakfast", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "222", href: "/docs/social-relationship-products/222", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Mesh / Clay", href: "/docs/social-relationship-products/mesh-clay", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Granola", href: "/docs/social-relationship-products/granola", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Geneva / Bumble BFF", href: "/docs/social-relationship-products/geneva-bumble-bff", icon: () => <Activity className="w-4 h-4 text-current" /> },
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
