import React from "react";
import AboutGrid from "../sub/AboutGrid";

export default function About() {
  return (
    <section id="about" className="z-50 h-screen">
      <div className="container">
        <p className="text-6xl text-white font-extrabold text-center">
          About Me
        </p>
      </div>

      <AboutGrid />
    </section>
  );
}