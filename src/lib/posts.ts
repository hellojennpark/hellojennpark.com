// lib/getAllPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  title: string;
  description?: string;
  tags?: string[];
  slug: string[];
  date: string;
};

export function getAllPosts(
  baseDir = path.join(process.cwd(), "src/content/blog")
): Post[] {
  const posts: Post[] = [];

  const walk = (dir: string, parentSlugs: string[] = []) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...parentSlugs, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        const fullPath = path.join(dir, entry.name);
        const fileContent = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(fileContent);
        const slug = [...parentSlugs, entry.name.replace(/\.mdx$/, "")];

        const post: Post = {
          title: data.title ?? slug.join(" / "),
          description: data.description ?? "",
          date: data.date,
          slug,
          tags: data.tags ?? [],
        };

        posts.push(post);
      }
    }
  };

  walk(baseDir);

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}
