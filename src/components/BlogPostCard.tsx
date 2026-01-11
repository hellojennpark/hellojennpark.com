import clsx from "clsx";
import { TagList } from "./TagList";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { useRouter } from "next/navigation";
import { Post } from "@/lib/posts";
import { ExternalLink } from "lucide-react";

interface BlogPostCardProps {
  post: Post;
  reverse?: boolean;
  simple?: boolean;
}

export default function BlogPostCard({
  post,
  reverse,
  simple = false,
}: BlogPostCardProps) {
  const router = useRouter();
  const { isNight } = useTimeThemeStore();

  const handleCardClick = () => {
    if (post.link) {
      window.open(post.link, "_blank");
    } else {
      router.push(`/blog/${post.slug.join("/")}`);
    }
  };

  return (
    <div
      key={post.slug.join("/")}
      className={clsx(
        "flex flex-col space-y-2 p-4 rounded-md cursor-pointer",
        isNight() && reverse
          ? "bg-black/30 text-white hover:bg-black/60 active:bg-black/60"
          : "bg-white/50 text-black hover:bg-white/80 active:bg-white/80"
      )}
      onClick={handleCardClick}
    >
      {!simple && <TagList tags={post.tags} />}

      <div className="flex items-center gap-2">
        <span className={!simple ? "font-semibold" : ""}>{post.title}</span>
        {post.link && <ExternalLink size={16} className="opacity-70" />}
      </div>

      {!simple && post.description && (
        <span className="text-base">{post.description}</span>
      )}
      {!simple && (
        <span className="flex justify-end text-xs md:text-sm">{post.date}</span>
      )}
    </div>
  );
}
