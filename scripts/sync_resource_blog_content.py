"""Create local, long-form resource article bodies from the Antbuildz marketplace.

The generated HTML is intentionally limited to editorial markup. Resource links
are rewritten to their readable Antbuildz AI paths, unsupported performance
claims are removed, and dense fragment lists are converted into prose.
"""

from __future__ import annotations

import concurrent.futures
import json
import re
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup, NavigableString, Tag


ROOT = Path(__file__).resolve().parents[1]
SEO_SOURCE = ROOT / "lib" / "resource-seo.ts"
OUTPUT_DIR = ROOT / "public" / "resource-articles" / "content"
SCHEMA_OUTPUT = ROOT / "lib" / "resource-blog-schema.ts"
SOURCE_ORIGIN = "https://antbuildz.com"
ALLOWED_TAGS = {
    "a",
    "blockquote",
    "br",
    "code",
    "em",
    "figcaption",
    "figure",
    "h2",
    "h3",
    "h4",
    "li",
    "ol",
    "p",
    "strong",
    "table",
    "tbody",
    "td",
    "th",
    "thead",
    "tr",
    "ul",
}
DROP_TAGS = {"audio", "button", "form", "iframe", "img", "picture", "script", "style", "svg", "video"}
TERMINAL_PUNCTUATION = re.compile(r"[.!?…]['\")\]]*$")
UNSUPPORTED_CLAIMS = (
    "According to Harvard Business Review, companies that respond to leads within 5 minutes",
    "A typical AI sales agent may processes 200-500 inquiries per month",
    "When implemented properly, an AI Sales Agent can handle up to 80%",
)
POSITIONING_REPLACEMENTS = {
    "The Core Idea: Webstore Gives the AI Agent Something Real to Work With": "The Core Idea: Approved Product Knowledge Makes the Agent More Accurate",
    "Webstore + AI Agent: The Real Advantage": "How Webstore Supports the AI Sales Agent",
    "Layman Explanation: Webstore Gives the AI Agent Eyes and Structure": "How Structured Product Data Gives the Agent More Context",
    "8. Webstore + AI Agent Creates a Full Digital Sales Engine": "8. Webstore Adds a Structured Product Layer",
    "The Big Idea: One Ecosystem, Not Four Separate Tools": "How the Products Work Together",
    "Without a Webstore, your product information may be scattered across PDFs, Excel files, WhatsApp chats, salespeople’s memory, brochures, old websites, and internal documents.": "Product information is often scattered across PDFs, Excel files, WhatsApp chats, salespeople’s memory, brochures, old websites and internal documents. The AI Sales Agent can use approved sources from these systems, while Webstore provides a more structured product layer when a business connects it.",
    "Antbuildz AI Agent can reason through the customer’s requirement, but it needs structured business data to do that properly. The Webstore provides that structure.": "Antbuildz AI Agent can reason through a customer’s requirement using approved business knowledge. Connecting Webstore adds structured product pages, specifications and inventory context that can make product matching more precise.",
    "A Webstore alone helps customers browse. An AI Agent alone helps customers ask questions. But Webstore + AI Agent creates something stronger:": "The AI Sales Agent leads the buyer conversation. When Webstore is connected, its structured product pages give the Agent more product context and give buyers a clearer place to continue their research.",
    "The real power is not Webstore alone or AI Agent alone.": "The AI Sales Agent is the core conversational product. Webstore strengthens it when structured product pages, searchable URLs and inventory context are needed.",
    "AI Agent can work without Webstore. AI Agent works better with Webstore. AI Agent + Webstore creates a stronger digital sales engine.": "The AI Sales Agent can work from approved catalogues, manuals, policies and business knowledge. Webstore is an optional supporting system that adds structured product and inventory context.",
    "Instead of treating Marketplace, Webstore, Catalogue, and AI Agent as separate tools, Antbuildz connects them into one digital sales ecosystem.": "Antbuildz AI Sales Agent is the core product for buyer conversations. Webstore can provide its structured product and inventory layer, while Marketplace remains an optional channel for discovery.",
    "The Marketplace helps customers discover you. The Webstore gives your business a branded product destination. The Catalogue structures your product knowledge. The AI Agent turns product interest into guided sales conversations and qualified enquiries.": "The AI Sales Agent turns product interest into guided conversations and qualified enquiries. Webstore can add a branded product destination and structured catalogue, while Marketplace can provide another discovery channel.",
    "The Webstore becomes the product database, visual product layer, rental and sales system, and business logic foundation for the AI Agent.": "Webstore can become the structured product and inventory layer that supports the AI Sales Agent, including product pages, specifications, rental or sales options and enquiry paths.",
    "A strong AI Webstore is not just a product display. It is the product data foundation for AI-powered sales.": "A well-structured Webstore is more than a product display. It can supply a connected AI Sales Agent with clearer product pages, specifications and inventory context.",
    "Antbuildz AI Agent works better with a Webstore because the Webstore gives the AI Agent the structure it needs to perform well.": "Connecting Webstore can improve product recommendations because it adds structured product pages, specifications and inventory context to the AI Sales Agent’s approved knowledge.",
}


def parse_redirects() -> list[tuple[str, str]]:
    source = SEO_SOURCE.read_text(encoding="utf-8")
    block = source.split("export const RESOURCE_URL_REDIRECTS", 1)[1].split("};", 1)[0]
    matches = re.findall(r"^\s+(?:(\w+)|'([^']+)'):\s*'([^']+)',", block, re.MULTILINE)
    return [(plain or quoted, canonical) for plain, quoted, canonical in matches]


def oxford_join(items: list[str]) -> str:
    clean = [item.strip().rstrip(".,;") for item in items if item.strip()]
    if len(clean) == 1:
        return clean[0]
    if len(clean) == 2:
        return f"{clean[0]} and {clean[1]}"
    return f"{', '.join(clean[:-1])}, and {clean[-1]}"


def lower_fragment(text: str) -> str:
    if re.match(r"^(?:AI|CRM|FAQ|GEO|PDF|SEO|SOP|URL|WhatsApp)\b", text):
        return text
    return text[:1].lower() + text[1:] if text else text


def is_plain_paragraph(tag: Tag) -> bool:
    return tag.name == "p" and not tag.find(True)


def replace_fragment_lists(body: Tag) -> None:
    children = [child for child in body.children if isinstance(child, Tag)]
    index = 0
    while index < len(children):
        intro = children[index]
        intro_text = intro.get_text(" ", strip=True)
        if not (is_plain_paragraph(intro) and intro_text.endswith(":") and index + 3 < len(children)):
            index += 1
            continue

        fragments: list[Tag] = []
        cursor = index + 1
        while cursor < len(children):
            candidate = children[cursor]
            text = candidate.get_text(" ", strip=True)
            if not is_plain_paragraph(candidate) or len(text) > 90 or text.endswith(":") or TERMINAL_PUNCTUATION.search(text):
                break
            fragments.append(candidate)
            cursor += 1
        if len(fragments) < 3:
            index += 1
            continue

        intro.string = f"{intro_text[:-1]} {oxford_join([lower_fragment(item.get_text(' ', strip=True)) for item in fragments])}."
        for fragment in fragments:
            fragment.decompose()
        children = [child for child in body.children if isinstance(child, Tag)]
        index += 1


def merge_short_paragraphs(body: Tag) -> None:
    children = [child for child in body.children if isinstance(child, Tag)]
    index = 0
    while index < len(children):
        first = children[index]
        if not is_plain_paragraph(first):
            index += 1
            continue
        group = [first]
        total = len(first.get_text(" ", strip=True))
        cursor = index + 1
        while cursor < len(children) and len(group) < 4:
            candidate = children[cursor]
            text = candidate.get_text(" ", strip=True)
            if not is_plain_paragraph(candidate) or len(text) > 180 or total + len(text) > 520:
                break
            group.append(candidate)
            total += len(text)
            cursor += 1
        if len(group) > 1:
            merged = " ".join(item.get_text(" ", strip=True) for item in group)
            first.string = re.sub(r"\s+", " ", merged)
            for item in group[1:]:
                item.decompose()
            children = [child for child in body.children if isinstance(child, Tag)]
        index += 1


def reduce_excess_lists(body: Tag, keep: int = 2) -> None:
    lists = body.find_all(["ul", "ol"])
    for list_tag in lists[keep:]:
        items = [re.sub(r"\s+", " ", item.get_text(" ", strip=True)) for item in list_tag.find_all("li", recursive=False)]
        if not items:
            list_tag.decompose()
            continue
        paragraph = body.new_tag("p")
        previous = list_tag.find_previous_sibling("p")
        joined = "; ".join(item.rstrip(".;") for item in items) + "."
        if previous and previous.get_text(" ", strip=True).endswith(":") and not previous.find(True):
            previous.string = f"{previous.get_text(' ', strip=True)} {joined}"
            list_tag.decompose()
        else:
            paragraph.string = joined
            list_tag.replace_with(paragraph)


def sanitise(body: Tag, redirects: dict[str, str]) -> None:
    for tag in list(body.find_all(True)):
        if tag.name in DROP_TAGS:
            tag.decompose()
            continue
        if tag.name not in ALLOWED_TAGS:
            tag.unwrap()
            continue
        attributes: dict[str, str] = {}
        if tag.name == "a":
            href = tag.get("href", "")
            parsed = urlparse(href)
            if parsed.netloc in {"antbuildz.com", "www.antbuildz.com"} and parsed.path.startswith("/resources/"):
                legacy = parsed.path.rstrip("/").split("/")[-1]
                canonical = redirects.get(legacy)
                if canonical:
                    href = f"/resources/{canonical}"
            if href.startswith(("/", "https://", "http://", "mailto:")):
                attributes["href"] = href
        if tag.name == "figure" and "table" in (tag.get("class") or []):
            attributes["class"] = "table"
        tag.attrs = attributes


def clean_claims(body: Tag) -> None:
    for paragraph in list(body.find_all("p")):
        text = paragraph.get_text(" ", strip=True)
        if any(claim in text for claim in UNSUPPORTED_CLAIMS):
            paragraph.decompose()


def apply_positioning(body: Tag) -> None:
    for element in body.find_all(["h2", "h3", "h4", "p", "li"]):
        inline_tags = element.find_all(True)
        if any(tag.name != "br" for tag in inline_tags):
            continue
        original = element.get_text(" ", strip=True)
        updated = original
        for phrase, replacement in POSITIONING_REPLACEMENTS.items():
            updated = updated.replace(phrase, replacement)
        if updated != original:
            element.string = updated


def clean_heading_spacing(body: Tag) -> None:
    for heading in body.find_all(["h2", "h3", "h4"]):
        if heading.find(True):
            continue
        text = heading.get_text(" ", strip=True)
        heading.string = re.sub(r"^(\d+)\.(?=\S)", r"\1. ", text)


def fetch_article(pair: tuple[str, str], redirects: dict[str, str]) -> tuple[str, str, str, int]:
    legacy, canonical = pair
    request = Request(f"{SOURCE_ORIGIN}/resources/{legacy}", headers={"User-Agent": "Mozilla/5.0"})
    html = urlopen(request, timeout=30).read()
    soup = BeautifulSoup(html, "html.parser")
    body = soup.select_one(".resource-article-body")
    if body is None:
        raise RuntimeError(f"Article body not found for {legacy}")

    sanitise(body, redirects)
    clean_claims(body)
    apply_positioning(body)
    clean_heading_spacing(body)
    replace_fragment_lists(body)
    if not canonical.startswith("ai-agent-console-"):
        reduce_excess_lists(body)
    merge_short_paragraphs(body)
    apply_positioning(body)

    content = "\n".join(str(child) for child in body.children if not isinstance(child, NavigableString) or child.strip())
    article_body = re.sub(r"\s+", " ", body.get_text(" ", strip=True)).strip()
    word_count = len(re.findall(r"\b[\w’'-]+\b", article_body))
    return canonical, content.strip() + "\n", article_body, word_count


def main() -> None:
    pairs = parse_redirects()
    redirects = dict(pairs)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        articles = list(executor.map(lambda pair: fetch_article(pair, redirects), pairs))
    for canonical, content, _, _ in articles:
        (OUTPUT_DIR / f"{canonical}.html").write_text(content, encoding="utf-8")
    schema = {
        canonical: {"articleBody": article_body, "wordCount": word_count}
        for canonical, _, article_body, word_count in articles
    }
    schema_source = (
        "// Generated by scripts/sync_resource_blog_content.py.\n"
        f"export const RESOURCE_BLOG_SCHEMA = {json.dumps(schema, ensure_ascii=False, indent=2)} as const;\n\n"
        "export function getResourceBlogSchema(slug: string) {\n"
        "  return RESOURCE_BLOG_SCHEMA[slug as keyof typeof RESOURCE_BLOG_SCHEMA];\n"
        "}\n"
    )
    SCHEMA_OUTPUT.write_text(schema_source, encoding="utf-8")
    total_words = sum(word_count for _, _, _, word_count in articles)
    print(f"Generated {len(articles)} long-form resource articles ({total_words:,} words).")


if __name__ == "__main__":
    main()
