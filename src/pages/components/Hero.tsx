import { HeroBackground } from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center text-white">
      <HeroBackground silhouetteColor="ffc8dd" opacity={0.9} />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Page</h1>
        <p className="text-lg mt-2">Beautiful, dark, and customizable</p>
      </div>
    </section>
  );
}
