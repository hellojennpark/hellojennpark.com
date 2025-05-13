import { HeroBackground } from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center text-white">
      <div className="relative z-10 text-center px-10">
        <h1 className="text-4xl font-bold">{"Welcome, I'm Jenn."}</h1>
        <p className="text-xl mt-2">
          {"I build tools that help developers work with joy and flow."}
        </p>
      </div>
      <HeroBackground />
    </section>
  );
}
