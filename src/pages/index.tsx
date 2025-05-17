"use client";

import { useEffect, useRef } from "react";
import { Footer } from "@/components/Footer";
import IntroduceSection from "@/components/IntroduceSection";
import CareerSection from "@/components/CareerSection";
import ProjectSection from "@/components/ProjectSection";
import EtcSection from "@/components/EtcSection";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import Hero from "@/components/Hero";

const sectionIds = ["welcome", "introduce", "career", "project", "etc"];

export default function Home() {
  const { backgroundColor } = useTimeThemeStore();

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // 1. hash 없으면 #welcome 강제 적용
    if (!window.location.hash) {
      window.location.hash = "#welcome";
    }

    // 2. IntersectionObserver로 현재 보이는 섹션 감지
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          history.replaceState(null, "", `#${visible.target.id}`);
        }
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      style={{
        backgroundColor,
      }}
    >
      <Hero />
      <IntroduceSection />
      <CareerSection />
      <ProjectSection />
      <EtcSection />
      <Footer />
    </div>
  );
}
