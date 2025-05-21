"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import IntroduceSection from "@/components/IntroduceSection";
import CareerSection from "@/components/CareerSection";
import ProjectSection from "@/components/ProjectSection";
import EtcSection from "@/components/EtcSection";
import Hero from "@/components/Hero";

export default function Home() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handlePopState = () => {
      setKey((prev) => prev + 1);
      const hash = window.location.hash || "#welcome";
      const targetSection = document.getElementById(hash.replace("#", ""));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div
      key={key}
      className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
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
