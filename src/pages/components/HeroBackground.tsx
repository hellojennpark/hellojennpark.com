import { useTimeThemeStore } from "@/store/useTimeThemeStore";

export const HeroBackground = () => {
  const backgroundColor = useTimeThemeStore((s) => s.backgroundColor);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      <div className="relative w-full h-full">
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
            backgroundColor: backgroundColor,
            mixBlendMode: "color",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};
