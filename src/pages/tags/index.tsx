import PageLayout from "@/components/layout/PageLayout";
import { Tag } from "@/components/TagList";
import { getAllPosts } from "@/lib/posts";

function Page({ tagCount }: { tagCount: Record<string, number> }) {
  const tags = Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
  return (
    <PageLayout>
      <ul className="space-y-2">
        {tags.map((tag) => (
          <li key={tag.name}>
            <Tag tag={tag.name} count={tag.count} />
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const tagCount: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      if (tag in tagCount) {
        tagCount[tag]++;
      } else {
        tagCount[tag] = 1;
      }
    });
  });

  return {
    props: {
      tagCount,
    },
  };
}

export default Page;
