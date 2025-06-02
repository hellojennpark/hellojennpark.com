import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import slugify from "slugify";
import { Node } from "unist";
import { Heading, Text, InlineCode } from "mdast"; // Import Text and InlineCode

export type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

// Type guard to check if a node is a Text or InlineCode node
function isTextOrInlineCode(node: Node): node is Text | InlineCode {
  return node.type === "text" || node.type === "inlineCode";
}

export function extractToc(content: string): HeadingItem[] {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(content);
  const headings: HeadingItem[] = [];

  visit(tree, "heading", (node: Heading) => {
    const level = node.depth;
    if (level !== 2 && level !== 3) return;

    const text = node.children
      .filter(isTextOrInlineCode) // Use the type guard here
      .map((n) => n.value) // TypeScript now knows 'n' will have 'value'
      .join("");

    const id = slugify(text, { lower: true, strict: true });

    headings.push({ id, text, level });
  });

  return headings;
}
