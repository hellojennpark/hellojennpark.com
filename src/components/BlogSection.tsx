import { Post } from "@/lib/posts";
import BlogPostCard from "./BlogPostCard";
import Link from "next/link";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";

export default function BlogSection({ posts }: { posts: Post[] }) {
  const { primaryColor } = useTimeThemeStore();
  return (
    <section
      id="blog"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center snap-start px-4"
    >
      <div className="w-full max-w-2xl">
        <div
          className="flex justify-between items-center text-sm md:text-base mb-4"
          style={{ color: primaryColor }}
        >
          <div>Showing the 10 most recent posts.</div>
          <Link href="/blog" className={clsx("hover:underline ml-1 font-bold")}>
            View all posts {">"}
          </Link>
        </div>
        <div className="space-y-2 h-[70dvh] overflow-y-auto">
          {posts.slice(0, 10).map((post) => (
            <BlogPostCard
              key={post.slug.join("/")}
              post={post}
              reverse={true}
              simple={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
