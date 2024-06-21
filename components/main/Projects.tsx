import React from "react";
import ProjectHighlightCard from "../sub/ProjectHighlightCard";
import { projects } from "@/data/index";
import AnimatedText from "../ui/animated-text";

export default function Projects() {
  return (
    <section id="projects" className="z-50 h-auto md:h-screen">
      <div className="container flex flex-col items-center">
        <AnimatedText
          text={[{ text: "Projects" }, { text: "Highlight", color: "navy" }]}
          className="text-6xl text-white font-extrabold text-center"
        />

        <div className="flex flex-col gap-4 my-20">
          {projects.length > 0
            ? projects.map((project, index) => (
                <ProjectHighlightCard
                  key={index}
                  title={project.title}
                  skills={project.skills}
                  imageUrl={project.imageUrl}
                  imageAlt={project.imageAlt}
                  link={project.link}
                  year={project.year}
                />
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
