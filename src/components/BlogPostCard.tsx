import Link from "next/link";
import clsx from "clsx";
import { TagList } from "./TagList";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";

interface BlogPostCardProps {
  post: {
    title: string;
    description?: string;
    tags?: string[];
    slug: string[];
    date: string;
  };
  reverse?: boolean;
}

export default function BlogPostCard({ post, reverse }: BlogPostCardProps) {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night" && reverse;
  return (
    <div
      key={post.slug.join("/")}
      className={clsx(
        "space-y-2 p-4 rounded-md",
        isNight
          ? "bg-black/30 text-white hover:bg-black/60 active:bg-black/60"
          : "bg-white/50 text-black hover:bg-white/80 active:bg-white/80"
      )}
    >
      <Link href={`/blog/${post.slug.join("/")}`} className="space-y-4">
        <span className="font-semibold">{post.title}</span>

        {post.description && <p className="text-base">{post.description}</p>}

        <TagList tags={post.tags} />
      </Link>
    </div>
  );
}
