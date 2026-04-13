import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex min-h-dvh items-center justify-center p-6 text-center">
			<div className="space-y-4 max-w-2xl">
				<h1 className="text-2xl font-semibold">Business Idea</h1>
				<p className="text-sm text-muted-foreground">
					这个站点现在的主入口在文档区，先从 Business Ideas 开始看。
				</p>
				<div className="flex flex-col gap-2 text-sm">
					<Link className="underline" href="/docs/business-ideas">
						进入主页面 /docs/business-ideas
					</Link>
					<Link className="underline" href="/docs/business-ideas/daily-picks/2026-04-13%20-%20Sycamore">
						查看 Daily Pick 示例页
					</Link>
				</div>
			</div>
		</main>
	);
}
