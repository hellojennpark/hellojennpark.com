import { Post } from "@/lib/getAllPosts";
import BlogPostCard from "./BlogPostCard";
import Link from "next/link";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";

export default function ProjectSection({ posts }: { posts: Post[] }) {
  const { primaryColor } = useTimeThemeStore();
  return (
    <section
      id="project"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)] px-4"
    >
      <div className="w-full max-w-2xl">
        <div
          className="flex justify-between items-center text-sm md:text-base mb-4"
          style={{ color: primaryColor }}
        >
          <div>Showing the 5 most recent posts.</div>
          <Link href="/blog" className={clsx("hover:underline ml-1 font-bold")}>
            View all posts {">"}
          </Link>
        </div>
        <div className="space-y-2 h-[70dvh] overflow-y-auto">
          {posts.slice(0, 5).map((post) => (
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
