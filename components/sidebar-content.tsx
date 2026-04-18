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
			{ title: "Parasail", href: "/docs/developer-tools/parasail", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Nimble", href: "/docs/developer-tools/nimble", icon: () => <Globe className="w-4 h-4 text-current" /> },
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
		list: [{ title: "概览", href: "/docs/cybersecurity", icon: () => <Book className="w-4 h-4 text-current" /> }],
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
			{ title: "Luminai", href: "/docs/healthcare/luminai", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "百川智能", href: "/docs/healthcare/baichuan", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "教育",
		Icon: () => <GraduationCap className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/education", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "气候与能源",
		Icon: () => <FlaskConical className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/climate-energy", icon: () => <Book className="w-4 h-4 text-current" /> }],
	},
	{
		title: "具身智能",
		Icon: () => <Activity className="w-4 h-4 text-current" />,
		list: [{ title: "概览", href: "/docs/embodied-ai", icon: () => <Book className="w-4 h-4 text-current" /> }],
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
		],
	},
];

export const examples: Content[] = [];
