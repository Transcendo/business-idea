#!/usr/bin/env python3
"""Lightweight static checks for the business-idea Fumadocs content repo.

This intentionally does not run Next.js, start a dev server, or invoke Node.
It catches the boring mistakes before content gets pushed.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "content" / "docs"
SIDEBAR = ROOT / "components" / "sidebar-content.tsx"

BANNED_PHRASES = [
    "赋能",
    "闭环",
    "抓手",
    "生态位卡位",
    "降本增效",
    "总的来说",
    "值得注意的是",
    "不可忽视",
    "深入剖析",
    "希望对你有帮助",
    "Great question",
    "Absolutely",
    "Of course",
    "Happy to help",
    "I hope this helps",
]

SOURCE_HEADINGS = ["可信来源", "官方链接", "关键外链", "来源", "Sources", "官方链接 / 关键外链"]


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT))


def load_json(path: Path) -> object:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:  # noqa: BLE001
        raise AssertionError(f"{rel(path)} JSON 解析失败：{exc}") from exc


def page_path_from_href(href: str) -> Path | None:
    if not href.startswith("/docs"):
        return None
    slug = href.removeprefix("/docs").strip("/")
    if not slug:
        return DOCS / "index.mdx"
    return DOCS / slug / "index.mdx" if (DOCS / slug).is_dir() else DOCS / f"{slug}.mdx"


def check_meta_pages(errors: list[str]) -> None:
    for meta_path in DOCS.rglob("meta.json"):
        data = load_json(meta_path)
        if not isinstance(data, dict):
            errors.append(f"{rel(meta_path)} 顶层不是 object")
            continue
        pages = data.get("pages")
        if pages is None:
            continue
        if not isinstance(pages, list):
            errors.append(f"{rel(meta_path)} pages 不是 list")
            continue
        folder = meta_path.parent
        for page in pages:
            if not isinstance(page, str):
                errors.append(f"{rel(meta_path)} pages 中存在非字符串项：{page!r}")
                continue
            if page in {"---"} or page.startswith("http"):
                continue
            target = folder / "index.mdx" if page == "index" else folder / f"{page}.mdx"
            nested = folder / page / "index.mdx"
            if not target.exists() and not nested.exists():
                errors.append(f"{rel(meta_path)} 引用不存在页面：{page}")


def check_mdx_files(errors: list[str], warnings: list[str]) -> None:
    seen_slugs: dict[str, Path] = {}
    for mdx in sorted(DOCS.rglob("*.mdx")):
        text = mdx.read_text(encoding="utf-8")
        if not re.search(r"^#\s+\S", text, re.M):
            errors.append(f"{rel(mdx)} 缺少一级标题")
        if text.startswith("---"):
            end = text.find("\n---", 3)
            frontmatter = text[: end + 4] if end != -1 else ""
            if not re.search(r"^title:\s*\S", frontmatter, re.M):
                errors.append(f"{rel(mdx)} frontmatter 缺少 title")
        else:
            warnings.append(f"{rel(mdx)} 没有 frontmatter")

        if mdx.name != "index.mdx":
            if not any(h in text for h in SOURCE_HEADINGS):
                errors.append(f"{rel(mdx)} 缺少来源/外链段落")
            slug = mdx.stem
            if slug in seen_slugs and mdx.parent.name == seen_slugs[slug].parent.name:
                errors.append(f"重复 slug：{slug} in {rel(mdx)} 与 {rel(seen_slugs[slug])}")
            seen_slugs[slug] = mdx

        for phrase in BANNED_PHRASES:
            if phrase in text:
                warnings.append(f"{rel(mdx)} 含疑似空话/禁词：{phrase}")


def check_sidebar(errors: list[str]) -> None:
    if not SIDEBAR.exists():
        return
    text = SIDEBAR.read_text(encoding="utf-8")
    hrefs = sorted(set(re.findall(r'href:\s*"([^"]+)"', text)))
    for href in hrefs:
        target = page_path_from_href(href)
        if target is not None and not target.exists():
            errors.append(f"sidebar href 找不到页面：{href} -> {rel(target)}")


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []

    if not DOCS.exists():
        print(f"ERROR: docs folder missing: {DOCS}", file=sys.stderr)
        return 1

    check_meta_pages(errors)
    check_mdx_files(errors, warnings)
    check_sidebar(errors)

    for warning in warnings:
        print(f"WARN: {warning}")
    for error in errors:
        print(f"ERROR: {error}", file=sys.stderr)

    if errors:
        print(f"Validation failed: {len(errors)} error(s), {len(warnings)} warning(s)")
        return 1
    print(f"Validation passed: 0 errors, {len(warnings)} warning(s)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
