import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex h-dvh flex-col items-center justify-center bg-[#f7f8f4] px-6 text-center text-[#141611]">
			<div className="max-w-md">
				<p className="font-mono text-sm text-[#d34836]">404</p>
				<h1 className="mt-4 text-3xl font-semibold">这条研究路径还没有页面。</h1>
				<p className="mt-4 leading-7 text-[#555b4f]">
					可能是旧模板残留链接，也可能是还没整理好的方向。先回到当前有效的研究目录。
				</p>
				<Link
					className="mt-7 inline-flex rounded-md bg-[#141611] px-5 py-3 text-sm font-semibold text-white hover:bg-[#d34836]"
					href="/docs/weekly-new"
				>
					查看本周新增
				</Link>
			</div>
		</div>
	);
}
