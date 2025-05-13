import { useTimeThemeStore } from "@/store/useTimeThemeStore";

export const HeroBackground = () => {
  const themeTime = useTimeThemeStore((s) => s.themeTime);

  const themeMap = {
    morning: "fde2e4", // soft pink
    day: "cde7ff", // blue
    evening: "ffd6a5", // orange
    night: "1e1e2f", // dark blue
  };

  const color = themeMap[themeTime];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      <div className="relative w-full h-full">
        <img
          src="/toroto.png"
          alt="Toronto skyline"
          className="w-full h-full object-contain object-bottom sm:object-cover sm:object-top"
          style={{
            opacity: 1,
            mixBlendMode: "multiply",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: `#${color}`,
            mixBlendMode: "color",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};
