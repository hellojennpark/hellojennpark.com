"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";
import { Press_Start_2P } from "next/font/google";
import { useState } from "react"; // Import useState

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
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const greeting = greetingMap[timeOfDay] ?? "Welcome, I'm Jenn.";

  // Define the animation for evening
  let eveningAnimation = undefined;
  if (timeOfDay === "evening") {
    eveningAnimation = "pixel-pulse 1.5s ease-in-out infinite";
  }

  // Define the glow animation for night
  let nightGlow = undefined;
  if (timeOfDay === "night") {
    nightGlow = "glow 3s ease-in-out infinite";
  }

  const isMorning = timeOfDay === "morning";
  const isEvening = timeOfDay === "evening"; // New variable for evening check

  // Determine the displayed greeting
  const displayedGreeting = isEvening && isHovered ? "(´｡• ᵕ •｡`) ♡" : greeting;

  return (
    <section
      id="welcome"
      className={clsx(
        "relative min-h-[100dvh] flex items-center justify-center text-2xl snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
      )}
      style={{ color: primaryColor }}
    >
      <div
        className={clsx(
          "relative z-10 text-center mx-10 p-5 transition-transform duration-500",
          {
            "bg-white/70 border": isMorning,
            "rotate-[-5deg] hover:rotate-0 active:rotate-0": isMorning,
          }
        )}
        style={{
          borderColor: isMorning ? primaryColor : undefined,
        }}
        onMouseEnter={() => isEvening && setIsHovered(true)} // Set hovered to true on mouse enter if it's evening
        onMouseLeave={() => isEvening && setIsHovered(false)} // Set hovered to false on mouse leave if it's evening
      >
        <h1
          className={clsx(
            "font-bold select-none",
            timeOfDay === "evening"
              ? `${pixelFont.className} text-4xl md:text-5xl`
              : "text-5xl md:text-7xl"
          )}
          style={{
            WebkitTextStroke: `1.2px ${backgroundColor}`,
            animation: eveningAnimation || nightGlow,
          }}
        >
          {displayedGreeting}
        </h1>
      </div>
      <HeroBackground />
    </section>
  );
}
