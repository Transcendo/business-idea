import Link from "next/link";

export type EntryPoint = {
	count: string;
	description: string;
	href: string;
	kicker: string;
	title: string;
};

type EntryPointsMarqueeProps = {
	items: EntryPoint[];
};

export function EntryPointsMarquee({ items }: EntryPointsMarqueeProps) {
	const marqueeItems = [...items, ...items];

	return (
		<section className="mx-auto max-w-7xl px-5 pb-16 pt-3 sm:px-8 lg:px-10">
			<div className="mb-6 max-w-3xl">
				<p className="text-sm font-semibold text-[#d34836]">分类入口</p>
				<h2 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">
					持续滚动的方向索引
				</h2>
				<p className="mt-3 text-sm leading-6 text-[#555b4f]">
					模块会持续增加，新的方向先进入走马灯，再沉淀到对应分类页。
				</p>
			</div>

			<div className="relative overflow-hidden">
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,#f7f8f4,rgba(247,248,244,0))]" />
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,#f7f8f4,rgba(247,248,244,0))]" />

				<div
					aria-label="分类入口走马灯"
					className="flex w-max gap-4 [animation:marquee_58s_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:[animation:none]"
				>
					{marqueeItems.map((item, index) => (
						<Link
							aria-hidden={index >= items.length}
							className="group flex min-h-80 w-[82vw] max-w-[420px] flex-col justify-between rounded-md border border-[#d9ded0] bg-[#fffffb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#141611] hover:shadow-[0_18px_50px_rgba(20,22,17,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d34836] sm:w-[360px] lg:w-[390px]"
							href={item.href}
							key={`${item.title}-${index}`}
							tabIndex={index >= items.length ? -1 : undefined}
						>
							<div>
								<div className="flex items-center justify-between gap-4">
									<p className="text-xs font-semibold uppercase text-[#6e7c3a]">
										{item.count}
									</p>
									<span className="text-xs text-[#8b9184]">
										{String((index % items.length) + 1).padStart(2, "0")}
									</span>
								</div>
								<p className="mt-8 text-sm font-semibold text-[#d34836]">
									{item.kicker}
								</p>
								<h3 className="mt-3 text-3xl font-semibold tracking-normal">
									{item.title}
								</h3>
								<p className="mt-5 text-base leading-7 text-[#555b4f]">
									{item.description}
								</p>
							</div>

							<span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#141611]">
								进入
								<span
									aria-hidden="true"
									className="transition group-hover:translate-x-1"
								>
									{"->"}
								</span>
							</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
