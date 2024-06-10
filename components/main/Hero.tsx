import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import HeroButton from "../ui/HeroButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <AuroraBackground />
      </div>

      <div className="absolute inset-0 flex flex-col items-center gap-4 justify-center">
        <p className="text-4xl sm:text-7xl font-bold z-20 text-white ">
          hello world!
        </p>

        <p className="text-xl sm:text-lg font-bold z-20 bg-clip-text text-transparent bg-slate-100 ">
          I dabble with full-stack and machine learning.
        </p>

        <HeroButton />
      </div>
    </section>
  );
}
