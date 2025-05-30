"use client";

import { Footer } from "@/components/Footer";
import IntroduceSection from "@/components/IntroduceSection";
import CareerSection from "@/components/CareerSection";
import ProjectSection from "@/components/ProjectSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-proximity">
      <Hero />
      <IntroduceSection />
      <CareerSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
