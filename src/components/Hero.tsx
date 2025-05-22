"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";
import { Press_Start_2P } from "next/font/google";
import { useState } from "react"; // useRef and useEffect are no longer needed for clearing timeout
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
  const [birdPosition, setBirdPosition] = useState("0%"); // State for bird's position

  const greeting = greetingMap[timeOfDay] ?? "Welcome, I'm Jenn.";

  let eveningAnimation = undefined;
  if (timeOfDay === "evening") {
    eveningAnimation = "pixel-pulse 1.5s ease-in-out infinite";
  }

  let nightGlow = undefined;
  if (timeOfDay === "night") {
    nightGlow = "glow 1s ease-in-out infinite";
  }

  const isMorning = timeOfDay === "morning";
  const isDay = timeOfDay === "day";
  const isEvening = timeOfDay === "evening";

  let displayedGreeting = greeting;
  if (showAltGreeting) {
    if (isEvening) {
      displayedGreeting = "Time to relax and unwind.";
    } else if (isDay) {
      displayedGreeting = "Good Luck!";
    }
  }

  let greetingFontStyle = "text-5xl md:text-7xl";
  if (timeOfDay == "evening") {
    greetingFontStyle = `${pixelFont.className} text-3xl md:text-5xl`;
  } else if (timeOfDay == "day") {
    greetingFontStyle = "text-8xl md:text-8xl";
  }

  // --- Handlers for Combined Hover/Touch Events ---
  const handleEnterInteractiveState = () => {
    // For Greeting (Day/Evening)
    if (isDay || isEvening) {
      setShowAltGreeting(true);
    }
    // For Bird (Morning)
    if (isMorning) {
      setBirdPosition("90%"); // Move to center
    }
  };

  const handleLeaveInteractiveState = () => {
    // For Greeting (Day/Evening)
    if (isDay || isEvening) {
      setShowAltGreeting(false); // Reset immediately on leave
    }
    // For Bird (Morning)
    if (isMorning) {
      setBirdPosition("0%"); // Move back to left immediately on leave
    }
  };

  // Touch handlers (simply call the combined handlers)
  const handleTouchStart = () => {
    handleEnterInteractiveState();
  };
  const handleTouchEnd = () => {
    handleLeaveInteractiveState();
  };
  const handleTouchCancel = () => {
    handleLeaveInteractiveState();
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
            "cursor-pointer": isEvening || isDay || isMorning, // Cursor pointer for all interactive states
          }
        )}
        style={{
          borderColor: isMorning ? primaryColor : undefined,
        }}
        onMouseEnter={handleEnterInteractiveState} // Combined handler for hover
        onMouseLeave={handleLeaveInteractiveState} // Combined handler for hover
        onTouchStart={handleTouchStart} // Combined handler for touch
        onTouchEnd={handleTouchEnd} // Combined handler for touch
        onTouchCancel={handleTouchCancel} // Combined handler for touch
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
            "font-bold select-none transition duration-1000",
            greetingFontStyle
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
