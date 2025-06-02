import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import BlogLayout from "@/components/layout/BlogLayout";
import { TagList } from "@/components/TagList";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    description?: string;
    tags?: string[];
  };
};

function Page({ source, frontMatter }: Props) {
  return (
    <BlogLayout title={frontMatter.title}>
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center text-sm hover:underline"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </Link>

      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      {frontMatter.description && (
        <p className="mb-8">{frontMatter.description}</p>
      )}

      <article className="prose prose-neutral dark:prose-invert">
        <MDXRemote {...source} />
      </article>
      <TagList tags={frontMatter.tags} />
      <div className="mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm hover:underline"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </Link>
      </div>
    </BlogLayout>
  );
}

// MDX 파일 경로 가져오는 헬퍼
function getFile(slugArray: string[]) {
  const mdxPath =
    path.join(process.cwd(), "src/content/blog", ...slugArray) + ".mdx";
  return mdxPath;
}

// 모든 가능한 경로 정의
export const getStaticPaths: GetStaticPaths = async () => {
  const baseDir = path.join(process.cwd(), "src/content/blog");
  const paths: string[][] = [];

  const walk = (dir: string, parentSlugs: string[] = []) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...parentSlugs, entry.name]);
      } else if (entry.name.endsWith(".mdx")) {
        const name = entry.name.replace(/\.mdx$/, "");
        paths.push([...parentSlugs, name]);
      }
    }
  };

  walk(baseDir);

  return {
    paths: paths.map((slugParts) => ({
      params: { slug: slugParts },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[];
  const mdxPath = getFile(slug);

  const fileContent = fs.readFileSync(mdxPath, "utf-8");
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default Page;
