"use client";

import React from "react";
import AnimatedText from "../ui/animated-text";
import Reveal from "../ui/Reveal";

export default function Contact() {
  const scrollToConnect = () => {
    const connectSection = document.getElementById("connect-section");
    
    if (connectSection) {
      // Scroll directly to the connect section to ensure it's fully visible
      connectSection.scrollIntoView({ 
        behavior: "smooth", 
        block: "center",
        inline: "nearest"
      });
      
      // Add highlighting effect after scrolling
      setTimeout(() => {
        connectSection.classList.add("highlight-connect");
        setTimeout(() => {
          connectSection.classList.remove("highlight-connect");
        }, 3000);
      }, 800);
    }
  };

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
          <button
            onClick={scrollToConnect}
            className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl py-10 px-16 text-5xl text-white hover:border-navy hover:bg-navy/10 hover:text-navy hover:font-bold transition-all duration-500 cursor-pointer"
          >
            get in touch <span className="">→</span>
          </button>
        </Reveal>
      </div>
    </div>
  );
}
