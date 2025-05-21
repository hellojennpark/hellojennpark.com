"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";
import { Press_Start_2P } from "next/font/google";
import { useState, useRef } from "react"; // Import useRef

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
  const [showAltGreeting, setShowAltGreeting] = useState(false); // State to control alternative greeting
  const clickTimeoutRef = useRef(null); // Ref to store the timeout ID for the click

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
  const isEvening = timeOfDay === "evening";

  // Determine the displayed greeting
  const displayedGreeting =
    isEvening && showAltGreeting ? "(´｡•ᵕ•｡`) ♡" : greeting;

  const handleClick = () => {
    if (isEvening) {
      // Clear any existing timeout to prevent multiple triggers
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      setShowAltGreeting(true); // Show the alternative greeting immediately on click

      // Set a timeout to revert to the original greeting after 3 seconds
      clickTimeoutRef.current = setTimeout(() => {
        setShowAltGreeting(false);
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  };

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
            "cursor-pointer": isEvening, // Add a pointer cursor for evening clicks
          }
        )}
        style={{
          borderColor: isMorning ? primaryColor : undefined,
        }}
        onClick={handleClick} // Use onClick instead of onMouseEnter/onMouseLeave
      >
        <h1
          className={clsx(
            "font-bold select-none",
            timeOfDay === "evening"
              ? `${pixelFont.className} text-3xl md:text-5xl`
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
