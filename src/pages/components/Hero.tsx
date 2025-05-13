import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";

export default function Hero() {
  const primaryColor = useTimeThemeStore((s) => s.primaryColor);
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center">
      <div
        className="relative z-10 text-center mx-10 p-5 rounded-md"
        style={{ color: primaryColor }}
      >
        <h1 className={`text-4xl font-bold`}>{"Welcome, I'm Jenn."}</h1>
        <p className="text-2xl mt-2">
          {"I build tools that help developers work with joy and flow."}
        </p>
      </div>
      <HeroBackground />
    </section>
  );
}
