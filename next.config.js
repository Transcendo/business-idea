import { createMDX } from "fumadocs-mdx/next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "business-idea";
const basePath = isGithubPages ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	basePath,
	assetPrefix: basePath || undefined,
	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"framer-motion",
			"@radix-ui/react-tabs",
			"@radix-ui/react-scroll-area",
		],
	},
	turbopack: {
		root: import.meta.dirname,
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
			},
		],
	},
};

const withMDX = createMDX({
	contentDirBasePath: "/content/docs",
});
export default withMDX(nextConfig);
