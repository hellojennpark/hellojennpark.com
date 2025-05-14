import { useTimeThemeStore } from "@/store/useTimeThemeStore";

export default function IntroduceSection() {
  const { backgroundColor } = useTimeThemeStore();

  return (
    <section
      id="introduce"
      className="relative min-h-[100dvh] flex items-center justify-center snap-start shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)]"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div>Introduce Section</div>
    </section>
  );
}
