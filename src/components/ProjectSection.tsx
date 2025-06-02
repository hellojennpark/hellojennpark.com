import BlogPostCard from "./BlogPostCard";

export default function ProjectSection() {
  const post = {
    title:
      "Building Withsy: Why I Created Yet Another AI Chat Platform (And What I Learned)",
    description:
      "A candid look at building a personal AI chat platform, from solving UI frustrations to achieving 97% performance improvements, and the honest lessons about product-market fit in a crowded AI landscape.",
    date: "2025-05-09",
    slug: ["project-withsy"],
    tags: [
      "project",
      "withsy",
      "ai",
      "chat interface",
      "product development",
      "next.js",
      "performance optimization",
    ],
  };
  return (
    <section
      id="project"
      className="relative min-h-[100dvh] flex items-center justify-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-5xl mx-auto">
        <BlogPostCard key={post.slug.join("/")} post={post} reverse={false} />
      </div>
    </section>
  );
}
