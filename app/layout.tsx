import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import { createMetadata } from "@/lib/metadata";

const fontSans = localFont({
	src: "../assets/Geist.ttf",
	variable: "--font-sans",
});

const fontMono = localFont({
	src: "../assets/GeistMono.ttf",
	variable: "--font-mono",
});

export const metadata: Metadata = createMetadata({
	title: {
		template: "%s | AI 分类研究库",
		default: "AI 分类研究库",
	},
	description:
		"一个面向中文读者的公开 AI 研究档案，按分类整理公司、产品切口和长期问题。",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="zh-CN" suppressHydrationWarning data-scroll-behavior="smooth">
			<body
				className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
				suppressHydrationWarning
			>
				<Providers>
					<div className="relative min-h-dvh">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
