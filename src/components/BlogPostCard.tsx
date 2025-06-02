import Link from "next/link";
import { Calendar } from "lucide-react";
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
      <Link href={`/blog/${post.slug.join("/")}`}>
        <span className="font-semibold">{post.title}</span>

        {post.description && (
          <p className="text-base mb-4">{post.description}</p>
        )}

        <TagList tags={post.tags} />

        <span className="flex flex-row items-center text-sm md:text-base justify-end">
          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
          {post.date}
        </span>
      </Link>
    </div>
  );
}
