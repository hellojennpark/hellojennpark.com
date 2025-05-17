"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Typewriter } from "react-simple-typewriter";

const keywords = ["4 years", "CI/CD", "Fullstack"];

export default function IntroduceSection() {
  const { primaryColor } = useTimeThemeStore();

  return (
    <section
      id="introduce"
      className="relative min-h-[100dvh] flex flex-col items-start px-6 md:px-10 justify-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)] space-y-10"
    >
      <div className="flex gap-3 flex-wrap mt-4">
        {keywords.map((keyword) => (
          <p
            key={keyword}
            // onClick={() => handleClick(keyword)}
            className={`text-sm md:text-base px-3 py-1 rounded-full border transition-colors duration-200 text-white/80 border-white/30 hover:border-white hover:text-white`}
          >
            # {keyword}
          </p>
        ))}
      </div>
      <div
        className="w-full flex flex-col sm:flex-row gap-4"
        style={{ color: primaryColor }}
      >
        <div className="w-full h-full flex flex-col justify-center items-start text-2xl md:text-5xl space-y-5 md:space-y-10">
          <div className="px-3 md:px-5">
            Hello, I’m Yejin — Jenn to friends.
          </div>
          <div className=" border-white/30 rounded-md px-3 md:px-5">
            {"> "}
            <Typewriter
              words={[
                "I build tools for joyful, productive devs.",
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
      </div>
    </section>
  );
}
