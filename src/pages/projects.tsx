// pages/posts/index.tsx
import PageLayout from "@/components/layout/PageLayout";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts } from "@/lib/getAllPosts";

type Post = {
  title: string;
  description?: string;
  tags?: string[];
  slug: string[];
  date: string;
};

function Page({ posts }: { posts: Post[] }) {
  const projectPosts = posts.filter((post) => post.tags?.includes("project"));

  return (
    <PageLayout>
      <div className="space-y-4">
        {projectPosts.map((post) => (
          <BlogPostCard key={post.slug.join("/")} post={post} reverse={true} />
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Page;
