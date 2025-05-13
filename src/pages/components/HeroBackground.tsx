interface HeroBackgroundProps {
  silhouetteColor?: string; // HEX: "ffc8dd"
  opacity?: number; // 0 ~ 1
}

export const HeroBackground = ({
  silhouetteColor = "ffc8dd",
  opacity = 1,
}: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      <div className="relative w-full h-full">
        <img
          src="/toroto.png"
          alt="Toronto skyline"
          className="w-full h-auto object-cover"
          style={{
            opacity: opacity,
            mixBlendMode: "multiply", // 또는 "screen", "overlay", 등도 테스트 가능
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: `#${silhouetteColor}`,
            mixBlendMode: "color", // 또는 "color", "overlay", 등 시도해볼 수 있음
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};
