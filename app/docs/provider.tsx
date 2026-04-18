"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { createContext, use } from "react";

const SearchDialog = dynamic(() => import("@/components/search-dialog"), {
	ssr: false,
});

export interface PageEntry {
	name: string;
	url: string;
}

export const PagesContext = createContext<PageEntry[]>([]);

export function usePages() {
	return use(PagesContext);
}

export function DocsProvider({
	pages,
	children,
}: {
	pages: PageEntry[];
	children: ReactNode;
}) {
	return (
		<PagesContext value={pages}>
			<RootProvider
				search={{
					SearchDialog,
				}}
				i18n={{
					locale: "zh-CN",
					translations: {
						search: "搜索",
						searchNoResult: "没有找到结果",
						toc: "本页目录",
						tocNoHeadings: "暂无目录",
						lastUpdate: "最后更新于",
						nextPage: "下一页",
						previousPage: "上一页",
						chooseTheme: "主题",
						editOnGithub: "在 GitHub 编辑",
					},
				}}
			>
				{children}
			</RootProvider>
		</PagesContext>
	);
}
