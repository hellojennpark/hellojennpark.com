import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { SpreadingParticles } from "@/components/animation/SpreadingParticles";

export const HeroBackground = () => {
  const { timeOfDay } = useTimeThemeStore();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {timeOfDay === "night" && <SpreadingParticles />}
    </div>
  );
};
