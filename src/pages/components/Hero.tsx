import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { HeroBackground } from "./HeroBackground";
import { Dancing_Script } from "next/font/google";
import clsx from "clsx";

type TimeTheme = "morning" | "day" | "evening" | "night";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

const greetingMap: Record<TimeTheme, string> = {
  morning: "Hello, early bird.",
  day: "Hey there!",
  evening: "Hope your day went well.",
  night: "The world’s quiet — perfect time to create.",
};

export default function Hero() {
  const { themeTime, primaryColor } = useTimeThemeStore();
  const greeting = greetingMap[themeTime] ?? "Welcome, I'm Jenn.";

  return (
    <section
      className={clsx(
        "relative min-h-[100vh] flex items-center justify-center",
        dancingScript.className
      )}
    >
      <div
        className="relative z-10 text-center mx-10 p-5 rounded-md"
        style={{ color: primaryColor }}
      >
        <h1 className="text-5xl font-bold">{greeting}</h1>
        {/* <p className="text-3xl mt-2">
          {"I build tools that help developers work with joy and flow."}
        </p> */}
      </div>
      <HeroBackground />
    </section>
  );
}
