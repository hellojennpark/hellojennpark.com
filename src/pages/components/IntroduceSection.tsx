"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Typewriter } from "react-simple-typewriter";

export default function IntroduceSection() {
  const { primaryColor } = useTimeThemeStore();

  return (
    <section
      id="introduce"
      className="relative min-h-[100dvh] flex flex-col items-start px-10 justify-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
    >
      <div
        className="text-3xl md:text-5xl space-y-5"
        style={{ color: primaryColor }}
      >
        <div>Hello, I’m Yejin — Jenn to friends.</div>
        <div className="border">
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
