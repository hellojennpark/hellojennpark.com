import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Clouds } from "./Clouds";

export const HeroBackground = () => {
  const { themeTime } = useTimeThemeStore();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {themeTime != "night" && <Clouds />}
      <div className="relative w-full h-full z-5">
        <img
          src="/toroto.png"
          alt="Toronto skyline"
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
