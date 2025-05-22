import { useState } from "react"; // Add this import
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import Image from "next/image";
import { Clovers } from "./animation/Clovers";

export const HeroBackground = () => {
  const { timeOfDay, primaryColor } = useTimeThemeStore();
  const [imageLoaded, setImageLoaded] = useState(false); // New state

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {timeOfDay === "day" && <Clovers />}

      {timeOfDay === "morning" && (
        <div
          className="absolute inset-0 z-0 animate-grid-shimmer"
          style={{
            width: "150%",
            height: "150%",
            top: "-25%",
            left: "-25%",
            backgroundImage: `
        linear-gradient(${primaryColor} 1px, transparent 1px),
        linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
            transform: "rotate(-15deg)",
            transformOrigin: "center",
            opacity: 0.8,
          }}
        />
      )}

      {timeOfDay != "day" && (
        <div className="relative w-full h-full z-5">
          <Image
            src={timeOfDay === "evening" ? "/toronto_pixel.png" : "/toroto.png"}
            alt="Toronto skyline"
            fill
            className={`w-full h-full object-contain object-bottom sm:object-cover sm:object-top transition-opacity duration-1000 ease-in-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`} // Modified className
            onLoadingComplete={() => setImageLoaded(true)} // New prop
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </div>
      )}
    </div>
  );
};
