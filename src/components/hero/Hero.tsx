"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";
import HeroSocialMediaCard from "./HeroSocialMediaCard";

export default function Hero() {
  const { timeOfDay, primaryColor } = useTimeThemeStore();

  const isNight = timeOfDay == "night";
  const greetingMap = {
    morning: ["Hello, early bird.", "Take a deep breath and start fresh."],
    day: ["Good day.", "Wishing you a productive and fulfilling day ahead."],
    evening: [
      "Good evening.",
      "Hope your day went well—now it’s time to unwind.",
    ],
    night: [
      "Quiet night.",
      "The world is calm—perfect time to create and reflect.",
    ],
  };

  const greetings = greetingMap[timeOfDay] || [];

  return (
    <section
      id="welcome"
      className={clsx(
        "relative min-h-[100dvh] items-center justify-center snap-start flex flex-col md:flex-row"
      )}
      style={{ color: primaryColor }}
    >
      <div
        className={clsx(
          "absolute z-10",
          "top-[55%] left-1/2 -translate-x-1/2",
          "md:top-1/2 md:left-[75%] md:-translate-y-1/2"
        )}
      >
        <HeroSocialMediaCard />
      </div>

      <div
        className={clsx(
          "absolute top-[10%]",
          "w-full min-h-[50dvh]",
          "md:w-1/2 md:min-h-[100dvh] md:top-[0%] md:left-[0%] md:text-xl",
          "flex flex-col items-start justify-center p-10 space-y-5 md:space-y-10"
        )}
      >
        {greetings.map((text, idx) => (
          <div
            key={idx}
            className={clsx(
              "rounded-xl px-6 py-4 max-w-[90%]",
              isNight ? "text-white" : "text-black"
            )}
            style={{ backgroundColor: primaryColor }}
          >
            {text}
          </div>
        ))}
      </div>
      <HeroBackground />
    </section>
  );
}
