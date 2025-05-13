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
          className="
    w-full h-full
    object-contain object-bottom
    sm:object-cover sm:object-top
  "
          style={{
            opacity: opacity,
            mixBlendMode: "multiply",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: `#${silhouetteColor}`,
            mixBlendMode: "color",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};
