import React from "react";
import AnimatedText from "../ui/animated-text";
import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function Contact() {
  return (
    <div id="footer" className="z-50 h-screen rounded-3xl">
      <div className="flex flex-col items-center gap-16">
        <AnimatedText
          text={[
            { text: "Wanna" },
            { text: "level up", color: "navy" },
            { text: "your next project?" },
          ]}
          className="px-4 md:px-12 text-5xl lg:text-6xl text-white font-extrabold text-center"
        />

        <Reveal>
          <Link href="/contact">
            <button className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl py-10 px-16 text-5xl text-white hover:border-navy hover:bg-navy/10 hover:text-navy hover:font-bold transition-all duration-500">
              get in touch <span className="">→</span>
            </button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
