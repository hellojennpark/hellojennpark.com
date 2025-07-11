import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Clovers } from "./animation/Clovers";
import { BearClover } from "./animation/BearClover";
import { SpreadingParticles } from "./animation/SpreadingParticles";

export const HeroBackground = () => {
  const { timeOfDay, primaryColor } = useTimeThemeStore();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {timeOfDay === "day" && (
        <>
          <Clovers />
          <BearClover />
        </>
      )}

      {timeOfDay === "night" && <SpreadingParticles />}
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
    </div>
  );
};
