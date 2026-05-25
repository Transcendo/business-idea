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
	Database,
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
	weeklyNew:
		"bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-950/35 dark:text-amber-300 dark:ring-amber-800/60",
	weekly:
		"bg-stone-50 text-stone-700 ring-stone-200 dark:bg-stone-900/60 dark:text-stone-300 dark:ring-stone-700/70",
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
		title: "本周新增",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="weeklyNew">
				<CalendarDays />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/weekly-new", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "2026-05-25", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Agent Identity Policy Runtime", href: "/docs/cybersecurity/agent-identity-policy-runtime", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "2026-05-24", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Agent-Native Compiler Contract", href: "/docs/developer-tools/agent-native-compiler-contract-layer", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Local LLM Tool-Calling Compatibility", href: "/docs/developer-tools/local-llm-tool-calling-compatibility-layer", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Computer-Use Trajectory Data", href: "/docs/ai-agents/computer-use-trajectory-data-foundry", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Agent Database Access Firewall", href: "/docs/cybersecurity/agent-database-access-firewall", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Dev-Machine Exposure Scanner", href: "/docs/cybersecurity/agent-dev-machine-exposure-scanner", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "2026-05-23", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Agent Execution Sandbox", href: "/docs/cybersecurity/agent-execution-layer-security-sandbox", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Messaging-Native Coding Agent", href: "/docs/developer-tools/messaging-native-coding-agent-command-center", icon: () => <MessageCircle className="w-4 h-4 text-current" /> },
			{ title: "Agent-Readable DB Contract", href: "/docs/developer-tools/agent-readable-database-contract-layer", icon: () => <Database className="w-4 h-4 text-current" /> },
			{ title: "2026-05-22", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Side-Effect Replay Ledger", href: "/docs/developer-tools/agent-side-effect-replay-ledger", icon: () => <Repeat2 className="w-4 h-4 text-current" /> },
			{ title: "AI App Unit Economics", href: "/docs/developer-tools/ai-app-unit-economics-ledger", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Codebase Retrieval Compression", href: "/docs/developer-tools/agent-codebase-retrieval-compression-layer", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Repo Preference Pack", href: "/docs/developer-tools/repo-preference-pack-for-coding-agents", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "2026-05-21", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "MCP Cross-Client Testing", href: "/docs/developer-tools/mcp-cross-client-testing-layer", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Design System Extraction", href: "/docs/developer-tools/design-system-extraction-layer-for-coding-agents", icon: () => <Image className="w-4 h-4 text-current" /> },
			{ title: "Package Hallucination Firewall", href: "/docs/cybersecurity/ai-coding-package-hallucination-firewall", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "2026-05-20", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "On-Call Runbook Agent", href: "/docs/developer-tools/on-call-runbook-execution-agent", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "AI Search Visibility", href: "/docs/vertical-ai/ai-search-visibility-action-layer", icon: () => <Search className="w-4 h-4 text-current" /> },
			{ title: "Demo-to-Agent Workflow", href: "/docs/ai-agents/demonstration-to-agent-workflow-trainer", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "AI Coding Token Cost", href: "/docs/developer-tools/ai-coding-token-cost-profiler", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Mobile AI Test Agent", href: "/docs/developer-tools/mobile-ai-test-agent", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "2026-05-19", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Geospatial FM Eval", href: "/docs/vertical-ai/geospatial-foundation-model-evaluation-layer", icon: () => <MapPinned className="w-4 h-4 text-current" /> },
			{ title: "Durable Agent Workflow", href: "/docs/developer-tools/durable-agent-workflow-runtime", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "AI QA Release Gate", href: "/docs/developer-tools/ai-qa-release-gate", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "2026-05-18", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Research Agent Citation Verifier", href: "/docs/ai-agents/research-agent-citation-verifier", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Voice Agent QA Scorecard", href: "/docs/ai-agents/voice-agent-qa-scorecard", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Agent PR Review Evidence", href: "/docs/developer-tools/agent-pr-review-evidence-layer", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Spreadsheet-Native AI Data Analyst", href: "/docs/developer-tools/spreadsheet-native-ai-data-analyst", icon: () => <Database className="w-4 h-4 text-current" /> },
			{ title: "2026-05-17", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "AI Debug Evidence Recorder", href: "/docs/developer-tools/ai-debug-evidence-recorder", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Agent-Native API Payment", href: "/docs/fintech/agent-native-api-payment-layer", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Computer-Use Agent Sandbox", href: "/docs/ai-agents/computer-use-agent-sandbox-runtime", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Agentic Commerce Discovery", href: "/docs/consumer-ai/agentic-commerce-product-discovery", icon: () => <Search className="w-4 h-4 text-current" /> },
			{ title: "2026-05-16", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "AI SOC Triage Runtime", href: "/docs/cybersecurity/ai-soc-triage-runtime", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Tool Distribution Layer", href: "/docs/developer-tools/agent-tool-distribution-layer", icon: () => <Boxes className="w-4 h-4 text-current" /> },
			{ title: "Mobile GUI Agent Runtime", href: "/docs/ai-agents/mobile-gui-agent-runtime", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Local LLM Hardware Fit Layer", href: "/docs/ai-hardware/local-llm-hardware-fit-layer", icon: () => <Boxes className="w-4 h-4 text-current" /> },
			{ title: "2026-05-15", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Realtime Voice Agent Runtime", href: "/docs/ai-agents/realtime-voice-agent-runtime", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Agent Identity Policy Runtime", href: "/docs/cybersecurity/agent-identity-policy-runtime", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Failure Regression Harness", href: "/docs/developer-tools/agent-failure-regression-harness", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Agent Database Branching Sandbox", href: "/docs/developer-tools/agent-database-branching-sandbox", icon: () => <Database className="w-4 h-4 text-current" /> },
			{ title: "Text-to-CAD Hardware Agents", href: "/docs/robotics/text-to-cad-hardware-design-agents", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "2026-05-14", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Agent Traffic Analytics Layer", href: "/docs/ai-agents/agent-traffic-analytics-layer", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Tiny Tool-Calling Router", href: "/docs/developer-tools/tiny-tool-calling-router", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Agent Structural Memory Layer", href: "/docs/developer-tools/agent-structural-memory-layer", icon: () => <BrainCircuit className="w-4 h-4 text-current" /> },
			{ title: "Agent Context Sandbox Layer", href: "/docs/developer-tools/agent-context-sandbox-layer", icon: () => <Boxes className="w-4 h-4 text-current" /> },
			{ title: "Browser Agent Execution Harness", href: "/docs/ai-agents/browser-agent-execution-harness", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "2026-05-13", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "Statewright Guardrails", href: "/docs/ai-agents/statewright-agent-state-machine-guardrails", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "InsForge Agentic Backend", href: "/docs/developer-tools/insforge-agentic-backend", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Hypercubic Hopper", href: "/docs/vertical-ai/hypercubic-hopper-mainframe-agents", icon: () => <Briefcase className="w-4 h-4 text-current" /> },
			{ title: "Code Agent Git Guardrails", href: "/docs/cybersecurity/code-agent-git-boundary-guardrails", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "MiniCPM-V Edge Agents", href: "/docs/ai-hardware/minicpm-v-edge-multimodal-agents", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "2026-05-12", separator: true, icon: () => <CalendarDays className="w-4 h-4 text-current" /> },
			{ title: "MCP Agent Security Gateway", href: "/docs/cybersecurity/mcp-agent-security-gateway", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Suki Nursing Assistant", href: "/docs/healthcare/suki-nursing-assistant", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
			{ title: "AI Coding Agent Control Plane", href: "/docs/developer-tools/ai-coding-agent-control-plane", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Agent Session Supervision Layer", href: "/docs/developer-tools/agent-session-supervision-layer", icon: () => <Binoculars className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "精选案例",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="weekly">
				<Briefcase />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/weekly-picks", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Lovable", href: "/docs/weekly-picks/lovable", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Firecrawl", href: "/docs/weekly-picks/firecrawl", icon: () => <Globe className="w-4 h-4 text-current" /> },
			{ title: "Cursor（Anysphere）", href: "/docs/weekly-picks/cursor-anysphere", icon: () => <Code2 className="w-4 h-4 text-current" /> },
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
			{ title: "Agentic Commerce Discovery", href: "/docs/consumer-ai/agentic-commerce-product-discovery", icon: () => <Search className="w-4 h-4 text-current" /> },
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
			{ title: "Demonstration-to-Agent Workflow Trainer", href: "/docs/ai-agents/demonstration-to-agent-workflow-trainer", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Research Agent Citation Verifier", href: "/docs/ai-agents/research-agent-citation-verifier", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Computer-Use Agent Sandbox Runtime", href: "/docs/ai-agents/computer-use-agent-sandbox-runtime", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Computer-Use Trajectory Data Foundry", href: "/docs/ai-agents/computer-use-trajectory-data-foundry", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Mobile GUI Agent Runtime", href: "/docs/ai-agents/mobile-gui-agent-runtime", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
			{ title: "Realtime Voice Agent Runtime", href: "/docs/ai-agents/realtime-voice-agent-runtime", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "AI Video Demo Agent", href: "/docs/ai-agents/ai-video-demo-agent", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Agentic Video Editing Command Layer", href: "/docs/ai-agents/agentic-video-editing-command-layer", icon: () => <Image className="w-4 h-4 text-current" /> },
			{ title: "Agentic HTML Deliverable Compiler", href: "/docs/ai-agents/agentic-html-deliverable-compiler", icon: () => <Image className="w-4 h-4 text-current" /> },
			{ title: "Voice Agent QA Scorecard", href: "/docs/ai-agents/voice-agent-qa-scorecard", icon: () => <Headphones className="w-4 h-4 text-current" /> },
			{ title: "Browser Agent Execution Harness", href: "/docs/ai-agents/browser-agent-execution-harness", icon: () => <Globe className="w-4 h-4 text-current" /> },
			{ title: "Statewright Agent State Machine Guardrails", href: "/docs/ai-agents/statewright-agent-state-machine-guardrails", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Traffic Analytics Layer", href: "/docs/ai-agents/agent-traffic-analytics-layer", icon: () => <Activity className="w-4 h-4 text-current" /> },
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
			{ title: "Lovable", href: "/docs/developer-tools/lovable", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Cursor（Anysphere）", href: "/docs/developer-tools/cursor-anysphere", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "AI Coding Agent Control Plane", href: "/docs/developer-tools/ai-coding-agent-control-plane", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "AI Coding Token Cost Profiler", href: "/docs/developer-tools/ai-coding-token-cost-profiler", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "AI App Unit Economics Ledger", href: "/docs/developer-tools/ai-app-unit-economics-ledger", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Agent Virtual Filesystem Layer", href: "/docs/developer-tools/agent-virtual-filesystem-layer", icon: () => <Database className="w-4 h-4 text-current" /> },
			{ title: "Agent Codebase Retrieval Compression", href: "/docs/developer-tools/agent-codebase-retrieval-compression-layer", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Repo Preference Pack", href: "/docs/developer-tools/repo-preference-pack-for-coding-agents", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Design System Extraction Layer", href: "/docs/developer-tools/design-system-extraction-layer-for-coding-agents", icon: () => <Image className="w-4 h-4 text-current" /> },
			{ title: "Agent-Readable Docs Readiness", href: "/docs/developer-tools/agent-readable-docs-readiness-layer", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Agent-Native Compiler Contract", href: "/docs/developer-tools/agent-native-compiler-contract-layer", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "MCP Cross-Client Testing", href: "/docs/developer-tools/mcp-cross-client-testing-layer", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Agent Tool-Calling Guardrails", href: "/docs/developer-tools/agent-tool-calling-guardrails-layer", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Local LLM Tool-Calling Compatibility", href: "/docs/developer-tools/local-llm-tool-calling-compatibility-layer", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Agent Side-Effect Replay Ledger", href: "/docs/developer-tools/agent-side-effect-replay-ledger", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Messaging-Native Coding Agent Command Center", href: "/docs/developer-tools/messaging-native-coding-agent-command-center", icon: () => <MessageCircle className="w-4 h-4 text-current" /> },
			{ title: "Agent Failure Regression Harness", href: "/docs/developer-tools/agent-failure-regression-harness", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Agent Database Branching Sandbox", href: "/docs/developer-tools/agent-database-branching-sandbox", icon: () => <Database className="w-4 h-4 text-current" /> },
			{ title: "Agent-Readable Database Contract", href: "/docs/developer-tools/agent-readable-database-contract-layer", icon: () => <Database className="w-4 h-4 text-current" /> },
			{ title: "InsForge Agentic Backend", href: "/docs/developer-tools/insforge-agentic-backend", icon: () => <Boxes className="w-4 h-4 text-current" /> },
			{ title: "Agent Session Supervision Layer", href: "/docs/developer-tools/agent-session-supervision-layer", icon: () => <NotebookTabs className="w-4 h-4 text-current" /> },
			{ title: "Agent Structural Memory Layer", href: "/docs/developer-tools/agent-structural-memory-layer", icon: () => <BrainCircuit className="w-4 h-4 text-current" /> },
			{ title: "Agent Context Sandbox Layer", href: "/docs/developer-tools/agent-context-sandbox-layer", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "AI Debug Evidence Recorder", href: "/docs/developer-tools/ai-debug-evidence-recorder", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "AI QA Release Gate", href: "/docs/developer-tools/ai-qa-release-gate", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Mobile AI Test Agent", href: "/docs/developer-tools/mobile-ai-test-agent", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "On-Call Runbook Execution Agent", href: "/docs/developer-tools/on-call-runbook-execution-agent", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Agent Plan Review Layer", href: "/docs/developer-tools/agent-plan-review-layer", icon: () => <NotebookTabs className="w-4 h-4 text-current" /> },
			{ title: "Agent PR Review Evidence Layer", href: "/docs/developer-tools/agent-pr-review-evidence-layer", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Execution Provenance Container", href: "/docs/developer-tools/agent-execution-provenance-container", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Durable Agent Workflow Runtime", href: "/docs/developer-tools/durable-agent-workflow-runtime", icon: () => <Activity className="w-4 h-4 text-current" /> },
			{ title: "Headless Coding Agent Runtime", href: "/docs/developer-tools/headless-coding-agent-runtime", icon: () => <Code2 className="w-4 h-4 text-current" /> },
			{ title: "Spreadsheet-Native AI Data Analyst", href: "/docs/developer-tools/spreadsheet-native-ai-data-analyst", icon: () => <Database className="w-4 h-4 text-current" /> },
			{ title: "Tiny Tool-Calling Router", href: "/docs/developer-tools/tiny-tool-calling-router", icon: () => <Zap className="w-4 h-4 text-current" /> },
			{ title: "Agent Tool Distribution Layer", href: "/docs/developer-tools/agent-tool-distribution-layer", icon: () => <Boxes className="w-4 h-4 text-current" /> },
			{ title: "Firecrawl", href: "/docs/developer-tools/firecrawl", icon: () => <Globe className="w-4 h-4 text-current" /> },
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
			{ title: "Agent Database Access Firewall", href: "/docs/cybersecurity/agent-database-access-firewall", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Dev-Machine Exposure Scanner", href: "/docs/cybersecurity/agent-dev-machine-exposure-scanner", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Execution-Layer Security Sandbox", href: "/docs/cybersecurity/agent-execution-layer-security-sandbox", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "AI Coding Package Hallucination Firewall", href: "/docs/cybersecurity/ai-coding-package-hallucination-firewall", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agentic Security Evaluation Harness", href: "/docs/cybersecurity/agentic-security-evaluation-harness", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "AI SOC Triage Runtime", href: "/docs/cybersecurity/ai-soc-triage-runtime", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Agent Identity Policy Runtime", href: "/docs/cybersecurity/agent-identity-policy-runtime", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Capsule Security", href: "/docs/cybersecurity/capsule-security", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "MCP Agent Security Gateway", href: "/docs/cybersecurity/mcp-agent-security-gateway", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
			{ title: "Code Agent Git Boundary Guardrails", href: "/docs/cybersecurity/code-agent-git-boundary-guardrails", icon: () => <ShieldCheck className="w-4 h-4 text-current" /> },
		],
	},
	{
		title: "金融科技",
		Icon: ({ className }: SVGProps<any> = {}) => (
			<ModuleLogo className={className} variant="fintech">
				<Activity />
			</ModuleLogo>
		),
		list: [
			{ title: "概览", href: "/docs/fintech", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Agent-Native API Payment", href: "/docs/fintech/agent-native-api-payment-layer", icon: () => <Activity className="w-4 h-4 text-current" /> },
		],
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
			{ title: "Suki Nursing Assistant", href: "/docs/healthcare/suki-nursing-assistant", icon: () => <HeartPulse className="w-4 h-4 text-current" /> },
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
			{ title: "Local LLM Hardware Fit Layer", href: "/docs/ai-hardware/local-llm-hardware-fit-layer", icon: () => <Boxes className="w-4 h-4 text-current" /> },
			{ title: "MiniCPM-V Edge Multimodal Agents", href: "/docs/ai-hardware/minicpm-v-edge-multimodal-agents", icon: () => <Boxes className="w-4 h-4 text-current" /> },
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
			{ title: "Gemini x Classroom", href: "/docs/education/gemini-classroom", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
			{ title: "Khan Academy Districts + Khanmigo", href: "/docs/education/khan-academy-districts-khanmigo", icon: () => <GraduationCap className="w-4 h-4 text-current" /> },
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
		list: [
			{ title: "概览", href: "/docs/robotics", icon: () => <Book className="w-4 h-4 text-current" /> },
			{ title: "Text-to-CAD Hardware Agents", href: "/docs/robotics/text-to-cad-hardware-design-agents", icon: () => <BotIcon className="w-4 h-4 text-current" /> },
		],
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
			{ title: "Screeps: World", href: "/docs/gaming/screeps-world-programming-mmo", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "while True: learn()", href: "/docs/gaming/while-true-learn-steam-ai-education-game", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "The Farmer Was Replaced", href: "/docs/gaming/the-farmer-was-replaced-steam-coding-game", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "CodeCombat AI HackStack", href: "/docs/gaming/codecombat-ai-hackstack", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Synthesis Tutor / Teams", href: "/docs/gaming/synthesis-tutor-teams", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Wayground / Quizizz AI", href: "/docs/gaming/wayground-quizizz-ai", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Kahoot! AI tools", href: "/docs/gaming/kahoot-ai-tools", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Duolingo Max / Adventures", href: "/docs/gaming/duolingo-max-adventures", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Praktika AI Tutor", href: "/docs/gaming/praktika-ai-language-tutor", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Curipod AI Writing Feedback", href: "/docs/gaming/curipod-ai-writing-feedback", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Content Warning", href: "/docs/gaming/content-warning-steam-free-launch", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Balatro", href: "/docs/gaming/balatro-steam-review-flywheel", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Manor Lords", href: "/docs/gaming/manor-lords-steam-wishlist", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Blue Prince", href: "/docs/gaming/blue-prince-steam-puzzle-roguelite", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Tiny Glade", href: "/docs/gaming/tiny-glade-steam-demo", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "R.E.P.O.", href: "/docs/gaming/repo-steam-coop-horror", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "PEAK", href: "/docs/gaming/peak-steam-coop-climbing", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "WEBFISHING", href: "/docs/gaming/webfishing-steam-cozy-multiplayer", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Lethal Company", href: "/docs/gaming/lethal-company-steam-coop-horror", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Supermarket Together", href: "/docs/gaming/supermarket-together-steam-free-coop", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Buckshot Roulette", href: "/docs/gaming/buckshot-roulette-steam-itch-viral", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Bongo Cat", href: "/docs/gaming/bongo-cat-steam-free-idle-dlc", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Schedule I", href: "/docs/gaming/schedule-i-steam-early-access", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Abiotic Factor", href: "/docs/gaming/abiotic-factor-steam-early-access-to-1-0", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Deep Rock Galactic: Survivor", href: "/docs/gaming/deep-rock-galactic-survivor-steam-ea-dlc", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Backpack Battles", href: "/docs/gaming/backpack-battles-steam-demo-open-development", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "Dungeon Clawler", href: "/docs/gaming/dungeon-clawler-steam-claw-machine-roguelike", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "UEFN / Fortnite Creator Economy", href: "/docs/gaming/uefn-fortnite-creator-economy", icon: () => <Gamepad2 className="w-4 h-4 text-current" /> },
			{ title: "开放世界 / Open World", separator: true, icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "The Planet Crafter", href: "/docs/gaming/the-planet-crafter-terraforming-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Valheim", href: "/docs/gaming/valheim-procedural-coop-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Kenshi", href: "/docs/gaming/kenshi-squad-sandbox-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Eco", href: "/docs/gaming/eco-ecosystem-governance-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Satisfactory", href: "/docs/gaming/satisfactory-factory-automation-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "V Rising", href: "/docs/gaming/v-rising-vampire-survival-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Soulmask", href: "/docs/gaming/soulmask-tribe-automation-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Nightingale", href: "/docs/gaming/nightingale-realm-cards-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Aloft", href: "/docs/gaming/aloft-sky-island-survival-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Enshrouded", href: "/docs/gaming/enshrouded-survival-craft-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "BitCraft Online", href: "/docs/gaming/bitcraft-online-single-world-mmo", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Pax Dei", href: "/docs/gaming/pax-dei-player-driven-sandbox-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Dune: Awakening", href: "/docs/gaming/dune-awakening-open-world-survival-rpg", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Once Human", href: "/docs/gaming/once-human-cross-platform-open-world-survival", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Light No Fire", href: "/docs/gaming/light-no-fire-procedural-open-world", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "No Man's Sky", href: "/docs/gaming/no-mans-sky-procedural-open-world-live-service", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Convai", href: "/docs/gaming/convai-ai-npc-open-world-infrastructure", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "NVIDIA ACE", href: "/docs/gaming/nvidia-ace-ai-characters-open-world-inference", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "World Creator", href: "/docs/gaming/world-creator-terrain-open-world-toolchain", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
			{ title: "Palworld", href: "/docs/gaming/palworld-open-world-survival-automation", icon: () => <Globe2 className="w-4 h-4 text-current" /> },
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
			{ title: "AI Search Visibility", href: "/docs/vertical-ai/ai-search-visibility-action-layer", icon: () => <Search className="w-4 h-4 text-current" /> },
			{ title: "Geospatial FM Eval", href: "/docs/vertical-ai/geospatial-foundation-model-evaluation-layer", icon: () => <MapPinned className="w-4 h-4 text-current" /> },
			{ title: "Hypercubic Hopper", href: "/docs/vertical-ai/hypercubic-hopper-mainframe-agents", icon: () => <Briefcase className="w-4 h-4 text-current" /> },
			{ title: "Hebbia", href: "/docs/vertical-ai/hebbia", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
			{ title: "Hightouch", href: "/docs/vertical-ai/hightouch", icon: () => <Briefcase className="w-4 h-4 text-current" /> },
			{ title: "Harvey", href: "/docs/vertical-ai/harvey", icon: () => <FileSearch className="w-4 h-4 text-current" /> },
		],
	},
];

export const examples: Content[] = [];
