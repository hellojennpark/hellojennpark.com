import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Clouds } from "./Clouds";
import Image from "next/image";

export const HeroBackground = () => {
  const { timeOfDay } = useTimeThemeStore();
  const isEarly = timeOfDay == "morning" || timeOfDay == "day";
  const isEvening = timeOfDay == "evening";

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {isEarly && <Clouds />}
      <div className="relative w-full h-full z-5">
        <Image
          src={isEvening ? "/toronto_pixel.png" : "/toroto.png"}
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
