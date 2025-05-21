import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Clouds } from "./Clouds";
import Image from "next/image";

export const HeroBackground = () => {
  const { timeOfDay, primaryColor } = useTimeThemeStore();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {timeOfDay === "day" && <Clouds />}

      {timeOfDay === "morning" && (
        <div
          className="absolute inset-0 z-0"
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

      <div className="relative w-full h-full z-5">
        <Image
          src={timeOfDay === "evening" ? "/toronto_pixel.png" : "/toroto.png"}
          alt="Toronto skyline"
          fill
          className="w-full h-full object-contain object-bottom sm:object-cover sm:object-top"
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            mixBlendMode: "color",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};
