"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const keywords = ["3+ years", "CI/CD", "Fullstack"];

export default function IntroduceSection() {
  const { primaryColor } = useTimeThemeStore();
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (keyword: string) => {
    setSelected(keyword === selected ? null : keyword);
  };

  return (
    <section
      id="introduce"
      className="relative min-h-[100dvh] flex flex-col items-start px-6 md:px-10 justify-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)] space-y-5"
    >
      <div className="flex gap-3 flex-wrap mt-4">
        {keywords.map((keyword) => (
          <button
            key={keyword}
            onClick={() => handleClick(keyword)}
            className={`text-sm md:text-base px-3 py-1 rounded-full border transition-colors duration-200
              ${
                selected === keyword
                  ? "bg-white/20 text-white border-white"
                  : "text-white/80 border-white/30 hover:border-white hover:text-white"
              }`}
          >
            # {keyword}
          </button>
        ))}
      </div>
      <div
        className="text-2xl md:text-5xl space-y-6"
        style={{ color: primaryColor }}
      >
        <div className="p-3 md:p-5">Hello, I’m Yejin — Jenn to friends.</div>
        <div className="border border-white/30 rounded-md p-3 md:p-5">
          <Typewriter
            words={[
              "I build tools that help developers work with joy and flow.",
              "Let's make better tools together.",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>
    </section>
  );
}
