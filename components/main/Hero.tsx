import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

interface HeroProps {
  title: string;
  subtitle: string;
  highlight?: string;
}

export default function Hero({ title, subtitle, highlight = "" }: HeroProps) {
  return (
    <section
      id="hero"
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <AuroraBackground />
      </div>

      <div className="absolute inset-0 flex flex-col items-center gap-4 justify-center">
        <p className="text-6xl md:text-5xl lg:text-8xl text-center font-bold z-20 text-white ">
          {title}
        </p>

        <p className="text-base sm:text-lg md:text-md z-20 px-24 text-center bg-clip-text text-transparent bg-slate-100 ">
          {subtitle}{" "}
          <span className="text-navy font-semibold">{highlight}</span>
        </p>
      </div>
    </section>
  );
}
