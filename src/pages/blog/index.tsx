// pages/posts/index.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

type Post = {
  title: string;
  description?: string;
  tags?: string[];
  slug: string[];
};

function Page({ posts }: { posts: Post[] }) {
  return (
    <PageLayout>
      <div className="space-y-12 py-4">
        {posts.map((post) => (
          <p key={post.slug.join("/")}>
            <Link
              href={`/blog/${post.slug.join("/")}`}
              className="hover:underline text-lg"
            >
              {post.title}
            </Link>
            {post.description && (
              <p className="text-gray-500 text-sm">{post.description}</p>
            )}
            {post.tags && (
              <p className="text-gray-500 text-sm">{post.tags.join(", ")}</p>
            )}
          </p>
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const baseDir = path.join(process.cwd(), "src/content/blog");
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
          slug,
          tags: data.tags ?? [],
        };

        posts.push(post);
      }
    }
  };

  walk(baseDir);

  return {
    props: {
      posts,
    },
  };
}

export default Page;
