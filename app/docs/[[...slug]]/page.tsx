import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultMdxComponents from "fumadocs-ui/mdx";
import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
} from "fumadocs-ui/page";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExportPosterButton } from "@/components/docs/export-poster-button";
import { Callout } from "@/components/ui/callout";
import { createMetadata } from "@/lib/metadata";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";

const legacyDocsRoutes: Record<
	string,
	{ title: string; description: string; target: string; label: string }
> = {
	companies: {
		title: "公司页已迁移",
		description: "公司研究已经改为按主分类收纳。",
		target: "/docs",
		label: "查看研究目录",
	},
	"companies/sierra": {
		title: "Sierra 已迁移",
		description: "Sierra 现在归入 AI 智能体分类。",
		target: "/docs/ai-agents/sierra",
		label: "打开 Sierra",
	},
	"companies/sycamore": {
		title: "Sycamore 已迁移",
		description: "Sycamore 现在归入 AI 智能体分类。",
		target: "/docs/ai-agents/sycamore",
		label: "打开 Sycamore",
	},
	"companies/nimble": {
		title: "Nimble 已迁移",
		description: "Nimble 现在归入开发者工具分类。",
		target: "/docs/developer-tools/nimble",
		label: "打开 Nimble",
	},
	"companies/hebbia": {
		title: "Hebbia 已迁移",
		description: "Hebbia 现在归入垂直 AI 分类。",
		target: "/docs/vertical-ai/hebbia",
		label: "打开 Hebbia",
	},
	"companies/minimax": {
		title: "MiniMax 已迁移",
		description: "MiniMax 现在归入情感陪伴分类。",
		target: "/docs/emotional-companions/minimax",
		label: "打开 MiniMax",
	},
	"companies/zhipu": {
		title: "智谱已迁移",
		description: "智谱现在归入基础模型分类。",
		target: "/docs/foundation-models/zhipu",
		label: "打开智谱",
	},
	"companies/moonshot": {
		title: "月之暗面已迁移",
		description: "月之暗面现在归入基础模型分类。",
		target: "/docs/foundation-models/moonshot",
		label: "打开月之暗面",
	},
	"companies/stepfun": {
		title: "阶跃星辰已迁移",
		description: "阶跃星辰现在归入基础模型分类。",
		target: "/docs/foundation-models/stepfun",
		label: "打开阶跃星辰",
	},
	"companies/01ai": {
		title: "零一万物已迁移",
		description: "零一万物现在归入基础模型分类。",
		target: "/docs/foundation-models/01ai",
		label: "打开零一万物",
	},
	"companies/baichuan": {
		title: "百川智能已迁移",
		description: "百川智能现在归入医疗健康分类。",
		target: "/docs/healthcare/baichuan",
		label: "打开百川智能",
	},
	"business-ideas": {
		title: "创业想法入口已迁移",
		description: "临时想法列表已经并入长期研究目录。",
		target: "/docs",
		label: "查看研究目录",
	},
	"business-ideas/daily-picks": {
		title: "每日推荐已归档",
		description: "过期推荐不再保留为当前推荐页。",
		target: "/docs/weekly-new",
		label: "查看本周新增",
	},
	"business-ideas/daily-picks/luminai": {
		title: "Luminai 已迁移",
		description: "Luminai 现在归入医疗健康分类。",
		target: "/docs/healthcare/luminai",
		label: "打开 Luminai",
	},
	sectors: {
		title: "赛道页已迁移",
		description: "赛道入口已经改为直接按分类组织。",
		target: "/docs",
		label: "查看研究目录",
	},
	"sectors/education": {
		title: "教育已迁移",
		description: "教育现在是一级分类入口。",
		target: "/docs/education",
		label: "打开教育分类",
	},
	"sectors/healthcare": {
		title: "医疗健康已迁移",
		description: "医疗健康现在是一级分类入口。",
		target: "/docs/healthcare",
		label: "打开医疗健康分类",
	},
};

function getLegacyDocsRoute(slug?: string[]) {
	if (!slug) return;
	return legacyDocsRoutes[slug.join("/")];
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) {
	const { slug } = await params;
	const page = source.getPage(slug);
	const legacyRoute = getLegacyDocsRoute(slug);

	if (!page) {
		if (legacyRoute) {
			return (
				<DocsPage toc={[]} full={false} breadcrumb={{ enabled: false }}>
					<DocsTitle>{legacyRoute.title}</DocsTitle>
					<DocsDescription>{legacyRoute.description}</DocsDescription>
					<DocsBody>
						<p>
							这个旧地址仍然可访问，但内容已经迁入新的分类结构。
						</p>
						<p>
							<Link href={legacyRoute.target}>{legacyRoute.label}</Link>
						</p>
					</DocsBody>
				</DocsPage>
			);
		}
		return notFound();
	}

	const { body: MDX, toc } = await page.data.load();

	return (
		<DocsPage
			toc={toc}
			full={false}
			tableOfContent={{
				style: "clerk",
			}}
			breadcrumb={{ enabled: false }}
			editOnGithub={{
				owner: "Transcendo",
				repo: "business-idea",
				sha: "main",
				path: `content/docs/${page.path}`,
			}}
		>
			<div className="flex items-center justify-between gap-4">
				<DocsTitle className="mb-0">{page.data.title}</DocsTitle>
				<div className="flex items-center gap-2">
					<ExportPosterButton title={page.data.title} />
				</div>
			</div>
			{page.data.description && (
				<DocsDescription>{page.data.description}</DocsDescription>
			)}
			<DocsBody>
				<MDX
					components={{
						...defaultMdxComponents,
						Step,
						Steps,
						Tab,
						Tabs,
						Accordion,
						Accordions,
						File,
						Files,
						Folder,
						TypeTable,
						Callout: ({
							children,
							type,
							...props
						}: {
							children: React.ReactNode;
							type?: "info" | "warn" | "error" | "success" | "warning";
							[key: string]: any;
						}) => (
							<Callout type={type} {...props}>
								{children}
							</Callout>
						),
						iframe: (props: React.ComponentProps<"iframe">) => (
							<iframe
								title="Embedded content"
								{...props}
								className="w-full h-[500px]"
							/>
						),
						Link: ({
							className,
							...props
						}: React.ComponentProps<typeof Link>) => (
							<Link
								className={cn(
									"font-medium underline underline-offset-4",
									className,
								)}
								{...props}
							/>
						),
					}}
				/>
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return [
		...source.generateParams(),
		...Object.keys(legacyDocsRoutes).map((path) => ({
			slug: path.split("/"),
		})),
	];
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug?: string[] }>;
}) {
	const { slug } = await params;
	const page = source.getPage(slug);
	const legacyRoute = getLegacyDocsRoute(slug);
	if (!page) {
		if (legacyRoute) {
			return createMetadata({
				title: legacyRoute.title,
				description: legacyRoute.description,
			});
		}
		return notFound();
	}

	return createMetadata({
		title: page.data.title,
		description: page.data.description,
		openGraph: {
			title: page.data.title,
			description: page.data.description,
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: page.data.title,
			description: page.data.description,
		},
	});
}
