import React from "react";
import ProjectHighlightCard from "../sub/ProjectHighlightCard";
import { projects } from "@/data/index";
import AnimatedText from "../ui/animated-text";

export default function Projects() {
  return (
    <section id="projects" className="z-50 py-20 md:py-32">
      <div className="container flex flex-col items-center px-4 md:px-8">
        <AnimatedText
          text={[{ text: "Projects" }, { text: "Highlight", color: "navy" }]}
          className="text-5xl md:text-6xl text-white font-extrabold text-center mb-4"
        />

        <div className="flex flex-col gap-6 mt-12 mb-8 w-full max-w-5xl">
          {projects.length > 0
            ? projects.map((project, index) => (
                <ProjectHighlightCard
                  key={index}
                  title={project.title}
                  description={project.description}
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
