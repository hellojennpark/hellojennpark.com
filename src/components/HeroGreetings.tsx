"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import clsx from "clsx";
import { Press_Start_2P } from "next/font/google";
import { useState } from "react"; // useRef and useEffect are no longer needed for clearing timeout
import { Bird } from "lucide-react";
import { MenuDrawer } from "./MenuDrawer";

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

export default function HeroGreetings() {
  const { timeOfDay, primaryColor, backgroundColor } = useTimeThemeStore();
  const [showAltGreeting, setShowAltGreeting] = useState(false);
  const [birdPosition, setBirdPosition] = useState("0%"); // State for bird's position

  const greeting = greetingMap[timeOfDay] ?? "Welcome, I'm Jenn.";

  let eveningAnimation = undefined;
  if (timeOfDay === "evening") {
    eveningAnimation = "pixel-pulse 1.5s ease-in-out infinite";
  }

  let nightGlow = undefined;
  let slowGlow = undefined;
  if (timeOfDay === "night") {
    nightGlow = "glow 1s ease-in-out infinite";
    slowGlow = "glow 5s ease-in-out infinite";
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

  let font = "text-3xl";
  let greetingFontStyle = "text-5xl md:text-7xl";
  if (timeOfDay == "evening") {
    font = `${pixelFont.className} text-base`;
    greetingFontStyle = "text-3xl md:text-5xl";
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
    <div
      className={clsx(
        font,
        "flex flex-col z-10 w-full justify-center items-center gap-8"
      )}
    >
      <div
        className={clsx(
          "relative text-center mx-10 p-5 transition-transform duration-500",
          {
            "bg-white/70 border md:my-10": isMorning,
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
            "font-bold transition duration-1000",
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

      <div
        className="flex flex-col gap-8 font-black"
        style={{
          WebkitTextStroke: isEvening ? undefined : `1.2px ${backgroundColor}`,
          animation: slowGlow,
        }}
      >
        <MenuDrawer>
          <div className="group flex items-center">
            <span className="relative w-4 flex items-center justify-center">
              <span
                className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-active:opacity-0"
                style={{ top: "50%", transform: "translateY(-50%)" }} // Vertical centering
              >
                -
              </span>
              <span
                className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100"
                style={{ top: "50%", transform: "translateY(-50%)" }} // Vertical centering
              >
                &gt;
              </span>
            </span>
            <span>&nbsp;Open Menu</span>
          </div>
        </MenuDrawer>
        <a href="/blog" className="group flex items-center">
          <span className="relative w-4 flex items-center justify-center">
            <span
              className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-active:opacity-0"
              style={{ top: "50%", transform: "translateY(-50%)" }} // Vertical centering
            >
              -
            </span>
            <span
              className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100"
              style={{ top: "50%", transform: "translateY(-50%)" }} // Vertical centering
            >
              &gt;
            </span>
          </span>
          <span>&nbsp;Visit Blog</span>
        </a>
      </div>
    </div>
  );
}
