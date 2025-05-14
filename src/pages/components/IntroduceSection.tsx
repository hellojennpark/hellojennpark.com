import { useTimeThemeStore } from "@/store/useTimeThemeStore";

export default function IntroduceSection() {
  const { primaryColor } = useTimeThemeStore();

  return (
    <section
      id="introduce"
      className="relative min-h-[100dvh] flex flex-col items-start px-10 justify-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
    >
      <div className="text-5xl" style={{ color: primaryColor }}>
        <div>Hello, I’m Jenn.</div>
        <div>I build tools that help developers work with joy and flow.</div>
      </div>
    </section>
  );
}
