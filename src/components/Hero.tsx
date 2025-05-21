"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";
import { Press_Start_2P } from "next/font/google";
import { useState, useRef } from "react";
import { Bird } from "lucide-react";

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
  const [showAltGreeting, setShowAltGreeting] = useState(false);
  const clickTimeoutRef = useRef(null);
  const [birdPosition, setBirdPosition] = useState("0%"); // State for bird's position

  const greeting = greetingMap[timeOfDay] ?? "Welcome, I'm Jenn.";

  let eveningAnimation = undefined;
  if (timeOfDay === "evening") {
    eveningAnimation = "pixel-pulse 1.5s ease-in-out infinite";
  }

  let nightGlow = undefined;
  if (timeOfDay === "night") {
    nightGlow = "glow 3s ease-in-out infinite";
  }

  const isMorning = timeOfDay === "morning";
  const isEvening = timeOfDay === "evening";

  const displayedGreeting =
    isEvening && showAltGreeting ? "(´｡•ᵕ•｡`) ♡" : greeting;

  const handleClick = () => {
    if (isEvening) {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      setShowAltGreeting(true);
      clickTimeoutRef.current = setTimeout(() => {
        setShowAltGreeting(false);
      }, 3000) as unknown as null;
    }
    // IMPORTANT: If you want the bird to *also* respond to a simple click
    // even in morning, you could add a toggle here like in the previous
    // solution for isMorning. But this would mean a click *also* moves the bird,
    // which might conflict with the touchstart/touchend behavior if not handled carefully.
    // For now, we'll keep the evening-specific click logic and let touch/hover handle the bird.
  };

  // --- Handlers for Bird Animation ---

  const handleEnterBirdState = () => {
    if (isMorning) {
      setBirdPosition("90%"); // Move to center
    }
  };

  const handleLeaveBirdState = () => {
    if (isMorning) {
      setBirdPosition("0%"); // Move back to left
    }
  };

  // Touch handlers
  const handleTouchStart = () => {
    // Prevent default touch behavior if you want to stop scrolling
    // Be cautious with this, it can impact user experience
    // e.preventDefault();
    handleEnterBirdState();
  };

  const handleTouchEnd = () => {
    handleLeaveBirdState();
  };

  const handleTouchCancel = () => {
    // handleTouchCancel is important for cases where a touch is interrupted (e.g., call, alert)
    handleLeaveBirdState();
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
            "cursor-pointer": isEvening || isMorning, // Add pointer for morning if bird is interactive
          }
        )}
        style={{
          borderColor: isMorning ? primaryColor : undefined,
        }}
        onClick={handleClick}
        onMouseEnter={handleEnterBirdState} // For desktop hover
        onMouseLeave={handleLeaveBirdState} // For desktop hover
        onTouchStart={handleTouchStart} // For mobile touch
        onTouchEnd={handleTouchEnd} // For mobile touch
        onTouchCancel={handleTouchCancel} // For mobile touch (interrupted)
      >
        {isMorning && (
          <Bird
            className="absolute -translate-y-14 transform transition-all duration-500 z-20"
            style={{ left: birdPosition, color: primaryColor }}
            size={40}
          />
        )}
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
