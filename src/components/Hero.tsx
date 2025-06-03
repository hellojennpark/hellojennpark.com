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
        "relative min-h-[100dvh] flex items-center justify-center text-2xl snap-start"
      )}
      style={{ color: primaryColor }}
    >
      <HeroGreetings />
      <HeroBackground />
    </section>
  );
}
