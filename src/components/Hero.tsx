"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";

const greetingMap = {
  morning: "Hello, early bird.",
  day: "Hey there!",
  evening: "Hope your day went well.",
  night: "The world’s quiet — perfect time to create.",
};

export default function Hero() {
  const { timeOfDay, primaryColor, backgroundColor } = useTimeThemeStore();
  const greeting = greetingMap[timeOfDay] ?? "Welcome, I'm Jenn.";
  return (
    <section
      id="welcome"
      className={clsx(
        "relative min-h-[100dvh] flex items-center justify-center text-2xl snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
      )}
      style={{ color: primaryColor }}
    >
      <div className="relative z-10 text-center mx-10 p-5 rounded-md">
        <h1
          className={clsx("text-5xl md:text-7xl font-bold")}
          style={{
            WebkitTextStroke: `1.2px ${backgroundColor}`,
            animation:
              timeOfDay === "night"
                ? "glow 3s ease-in-out infinite"
                : undefined,
          }}
        >
          {greeting}
        </h1>
      </div>
      <HeroBackground />
    </section>
  );
}
