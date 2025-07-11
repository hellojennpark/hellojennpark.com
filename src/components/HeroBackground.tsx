import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { SpreadingParticles } from "./animation/SpreadingParticles";
import { useState } from "react";
import Image from "next/image";

export const HeroBackground = () => {
  const { timeOfDay } = useTimeThemeStore();

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {timeOfDay === "night" && <SpreadingParticles />}
      {timeOfDay === "evening" && (
        <div className="relative w-full h-full z-5">
          <Image
            src={"/toronto_pixel.png"}
            alt="Toronto skyline"
            fill
            className={`w-full h-full object-contain object-bottom sm:object-cover sm:object-top transition-opacity duration-1000 ease-in-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setImageLoaded(true)}
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </div>
      )}
    </div>
  );
};
