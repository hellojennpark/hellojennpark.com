import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import slugify from "slugify";

export type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

export function extractToc(content: string): HeadingItem[] {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(content);
  const headings: HeadingItem[] = [];

  visit(tree, "heading", (node: any) => {
    const level = node.depth;
    if (level !== 2 && level !== 3) return;

    const text = node.children
      .filter((n: any) => n.type === "text" || n.type === "inlineCode")
      .map((n: any) => n.value)
      .join("");

    const id = slugify(text, { lower: true, strict: true });

    headings.push({ id, text, level });
  });

  return headings;
}
