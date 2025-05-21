"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const greetingMap = {
  morning: "Hello, early bird.",
  day: "Hey there!",
  evening: "Hope your day went well.",
  night: "The world’s quiet — perfect time to create.",
};

export default function Hero() {
  const { timeOfDay, primaryColor, backgroundColor } = useTimeThemeStore();
  const greeting = greetingMap[timeOfDay] ?? "Welcome, I'm Jenn.";

  // Define the animation for evening
  let eveningAnimation = undefined;
  if (timeOfDay === "evening") {
    // This animation will give a subtle "pixelated" bounce feel using text-shadow
    eveningAnimation = "pixel-pulse 1.5s ease-in-out infinite";
  }

  // Define the glow animation for night (if you still want it)
  let nightGlow = undefined;
  if (timeOfDay === "night") {
    nightGlow = "glow 3s ease-in-out infinite";
  }

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
          className={clsx(
            "font-bold",
            timeOfDay === "evening"
              ? `${pixelFont.className} text-4xl md:text-5xl`
              : "text-5xl md:text-7xl"
          )}
          style={{
            WebkitTextStroke: `1.2px ${backgroundColor}`,
            // Apply evening specific animation, or night glow, otherwise undefined
            animation: eveningAnimation || nightGlow,
          }}
        >
          {greeting}
        </h1>
      </div>
      <HeroBackground />
    </section>
  );
}
