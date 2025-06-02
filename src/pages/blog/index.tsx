// pages/posts/index.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { TagList } from "@/components/TagList";
import clsx from "clsx";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Calendar } from "lucide-react";

type Post = {
  title: string;
  description?: string;
  tags?: string[];
  slug: string[];
  date: string;
};

function Page({ posts }: { posts: Post[] }) {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  return (
    <PageLayout>
      <div className="space-y-4">
        {posts.map((post) => (
          <p
            key={post.slug.join("/")}
            className={clsx(
              "p-4 rounded-md",
              isNight
                ? "bg-black/30 hover:bg-black/60 active:bg-black/60"
                : "bg-white/50 hover:bg-white/80 active:bg-white/80"
            )}
          >
            <Link href={`/blog/${post.slug.join("/")}`} className="space-y-2">
              <span>{post.title}</span>

              {post.description && (
                <p className="text-base mb-4">{post.description}</p>
              )}
              <TagList tags={post.tags} />
              <span className="flex flex-row items-center text-sm md:text-base justify-end">
                <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                {post.date}
              </span>
            </Link>
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

  return {
    props: {
      posts,
    },
  };
}

export default Page;
