"use client";
import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import clsx from "clsx";
import HeroGreetings from "./HeroGreetings";

export default function Hero() {
  const { primaryColor } = useTimeThemeStore();
  return (
    <section
      id="welcome"
      className={clsx(
        "relative min-h-[100dvh] flex items-center justify-center text-2xl snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
      )}
      style={{ color: primaryColor }}
    >
      <HeroGreetings />
      <HeroBackground />
    </section>
  );
}
