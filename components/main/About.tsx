import React from "react";
import AboutGrid from "../sub/AboutGrid";
import AnimatedText from "../ui/animated-text";

export default function About() {
  return (
    <section id="about" className="z-50 h-auto md:h-screen">
      <div className="container">
        <AnimatedText
          text={[{ text: "About" }, { text: "Me", color: "navy" }]}
          className="text-6xl text-white font-extrabold text-center"
        />
      </div>

      <AboutGrid />
    </section>
  );
}
