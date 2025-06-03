import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Calendar } from "lucide-react";
import BlogLayout from "@/components/layout/BlogLayout";
import { TagList } from "@/components/TagList";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { extractToc } from "@/lib/toc";
import { TOC } from "@/components/TOC";
import Head from "next/head";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    description?: string;
    tags?: string[];
    date: string;
    slug: string[];
  };
  toc: { id: string; text: string; level: number }[];
};

function Page({ source, frontMatter, toc }: Props) {
  const { timeOfDay } = useTimeThemeStore();
  const isNight = timeOfDay == "night";
  return (
    <BlogLayout title={frontMatter.title}>
      <Head>
        <title>{frontMatter.title} | HelloJennPark</title>
        <meta name="description" content={frontMatter.description} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
        <meta property="og:type" content="article" />
      </Head>
      <div
        className={clsx(
          "border-b space-y-2",
          isNight ? "border-white" : "border-black"
        )}
      >
        <span className="flex flex-row items-center justify-end text-sm md:text-base">
          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
          {frontMatter.date}
        </span>
        <h1 className="text-xl md:text-3xl">{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="mb-2">{frontMatter.description}</p>
        )}
      </div>

      <div className="mb-6">
        <TOC toc={toc} />
      </div>

      <article className="prose prose-neutral dark:prose-invert">
        <MDXRemote {...source} />
      </article>
      <TagList tags={frontMatter.tags} />
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
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    },
  });
  const toc = extractToc(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      toc,
    },
  };
};

export default Page;
