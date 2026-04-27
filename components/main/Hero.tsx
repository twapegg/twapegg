"use client";

import { AuroraBackground } from "../ui/aurora-background";
import { useLightweightMode } from "../ui/lightweight-mode";

interface HeroProps {
  title: string;
  subtitle: string;
  highlight?: string;
}

export default function Hero({ title, subtitle, highlight = "" }: HeroProps) {
  const { isLightweightMode } = useLightweightMode();

  return (
    <section
      id="hero"
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {isLightweightMode ? (
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(127,199,186,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(243,211,106,0.14),transparent_40%),linear-gradient(180deg,#020617,#000000)]" />
        ) : (
          <AuroraBackground className="bg-transparent" />
        )}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
        <p className="text-6xl md:text-5xl lg:text-8xl text-center font-bold z-20 text-white ">
          {title}
        </p>

        <p className="text-base sm:text-lg md:text-md z-20 px-24 text-center text-white/80 ">
          {subtitle}{" "}
          <span className="text-navy font-semibold">{highlight}</span>
        </p>
      </div>
    </section>
  );
}
