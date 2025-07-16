import PageLayout from "@/components/layout/PageLayout";
import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { TagList } from "@/components/TagList";

type Post = {
  title: string;
  description?: string;
  tags?: string[];
  slug: string[];
  date: string;
};

function Page({
  posts,
  tags,
}: {
  posts: Post[];
  tags: { name: string; count: number }[];
}) {
  return (
    <PageLayout>
      <TagList tags={tags.map((tag) => tag.name)} />
      <div className="space-y-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug.join("/")} post={post} reverse={true} />
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return {
    props: {
      posts,
      tags,
    },
  };
}

export default Page;
