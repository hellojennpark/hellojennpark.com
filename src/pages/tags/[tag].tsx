import BlogPostCard from "@/components/BlogPostCard";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogLayout from "@/components/layout/BlogLayout";

type Post = {
  title: string;
  description?: string;
  tags?: string[];
  slug: string[];
  date: string;
};

type Props = {
  tag: string;
  posts: Post[];
};

export default function TagPage({ tag, posts }: Props) {
  return (
    <BlogLayout tag={tag}>
      <div className="space-y-4">
        {posts.map((post) => (
          <BlogPostCard key={post.slug.join("/")} post={post} reverse={true} />
        ))}
      </div>
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  const paths = tags.map((tag) => ({
    params: { tag: tag.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) => post.tags?.includes(tag));

  return {
    props: {
      tag,
      posts: filteredPosts,
    },
  };
};
