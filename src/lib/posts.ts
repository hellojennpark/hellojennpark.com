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
  link?: string;
};

export function getAllTags(
  baseDir = path.join(process.cwd(), "src/content/blog")
): { name: string; count: number }[] {
  const posts = getAllPosts(baseDir);
  const tagCount: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      if (tag in tagCount) {
        tagCount[tag]++;
      } else {
        tagCount[tag] = 1;
      }
    });
  });

  const tags = Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);
  return tags;
}

export function getAllPosts(
  baseDir = path.join(process.cwd(), "src/content/blog")
): Post[] {
  const posts: Post[] = [];

  // 1. Internal MDX Posts
  const walk = (dir: string, parentSlugs: string[] = []) => {
    if (!fs.existsSync(dir)) return;
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

  // 2. External Posts
  const externalPostsPath = path.join(process.cwd(), "src/content/external-posts.json");
  if (fs.existsSync(externalPostsPath)) {
    const externalPostsData = fs.readFileSync(externalPostsPath, "utf-8");
    try {
      const externalPosts: Post[] = JSON.parse(externalPostsData);
      posts.push(...externalPosts);
    } catch (e) {
      console.error("Failed to parse external posts:", e);
    }
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}
