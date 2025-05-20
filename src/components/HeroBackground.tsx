import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Clouds } from "./Clouds";
import Image from "next/image";

export const HeroBackground = () => {
  const { timeOfDay } = useTimeThemeStore();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {timeOfDay != "night" && <Clouds />}
      <div className="relative w-full h-full z-5">
        <Image
          src="/toroto.png"
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
