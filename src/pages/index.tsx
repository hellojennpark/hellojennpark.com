"use client";

import { Footer } from "@/components/Footer";
import IntroduceSection from "@/components/IntroduceSection";
import CareerSection from "@/components/CareerSection";
import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";
import { getAllPosts, Post } from "@/lib/getAllPosts";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-proximity">
      <Hero />
      <IntroduceSection />
      <CareerSection />
      <ProjectSection posts={posts} />
      <Footer />
    </div>
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
