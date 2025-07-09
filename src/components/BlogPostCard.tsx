import clsx from "clsx";
import { TagList } from "./TagList";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { useRouter } from "next/navigation";

interface BlogPostCardProps {
  post: {
    title: string;
    description?: string;
    tags?: string[];
    slug: string[];
    date: string;
  };
  reverse?: boolean;
  simple?: boolean;
}

export default function BlogPostCard({
  post,
  reverse,
  simple = false,
}: BlogPostCardProps) {
  const router = useRouter();
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night" && reverse;
  return (
    <div
      key={post.slug.join("/")}
      className={clsx(
        "flex flex-col space-y-2 p-4 rounded-md",
        isNight
          ? "bg-black/30 text-white hover:bg-black/60 active:bg-black/60"
          : "bg-white/50 text-black hover:bg-white/80 active:bg-white/80"
      )}
      onClick={() => {
        router.push(`/blog/${post.slug.join("/")}`);
      }}
    >
      {!simple && <TagList tags={post.tags} />}

      <span className={!simple ? "font-semibold" : ""}>{post.title}</span>

      {!simple && post.description && (
        <span className="text-base">{post.description}</span>
      )}
      {!simple && (
        <span className="flex justify-end text-xs md:text-sm">{post.date}</span>
      )}
    </div>
  );
}
