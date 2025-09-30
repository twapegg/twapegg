"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTrophy,
  FaMedal,
  FaAward,
} from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { IoMail } from "react-icons/io5";

import useMeasure from "react-use-measure";
import {
  animate,
  motion,
  useAnimation,
  useInView,
  useMotionValue,
} from "framer-motion";
import { awards, techStack, contacts } from "@/data";

export default function AboutGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef as any, { amount: 0.1 });
  const scrollControls = useAnimation();

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const getAwardIcon = (iconType: string) => {
    switch (iconType) {
      case "trophy":
        return FaTrophy;
      case "medal":
        return FaMedal;
      case "award":
        return FaAward;
      default:
        return FaTrophy;
    }
  };

  const getTechIcon = (iconType: string) => {
    switch (iconType) {
      case "SiReact":
        return SiReact;
      case "SiNextdotjs":
        return SiNextdotjs;
      case "SiTypescript":
        return SiTypescript;
      case "SiTailwindcss":
        return SiTailwindcss;
      case "SiNodedotjs":
        return SiNodedotjs;
      case "SiExpress":
        return SiExpress;
      case "FaPython":
        return FaPython;
      case "SiMongodb":
        return SiMongodb;
      case "SiPytorch":
        return SiPytorch;
      case "SiOpenai":
        return SiOpenai;
      default:
        return SiReact;
    }
  };

  const getContactIcon = (iconType: string) => {
    switch (iconType) {
      case "IoMail":
        return IoMail;
      case "FaLinkedin":
        return FaLinkedin;
      case "FaGithub":
        return FaGithub;
      case "FaInstagram":
        return FaInstagram;
      default:
        return IoMail;
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  useEffect(() => {
    if (isInView) {
      scrollControls.start("visible");
    } else {
      scrollControls.start("hidden");
    }

    let finalPosition = (-width * 2) / 2 - 54;

    let controls = animate(xTranslation, [0, finalPosition], {
      repeat: Infinity,
      repeatType: "loop",
      duration: 30,
      ease: "linear",
    });
    return () => controls.stop();
  }, [xTranslation, width, isInView, scrollControls]);

  return (
    <div
      ref={scrollRef}
      className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8 md:mt-16"
    >
      <motion.div
        className="col-span-1 md:col-span-3 lg:col-span-3 bg-gradient-to-br from-grey/20 to-grey/5 border border-white/20 backdrop-filter backdrop-blur-md rounded-2xl p-1 group hover:border-navy/50 transition-all duration-500"
        initial="hidden"
        animate={scrollControls}
        variants={variants}
      >
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-xl">
          <Image
            src="/stan.jpg"
            fill
            alt="Stanley Altonaga - Full Stack Developer"
            className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              Stanley Altonaga
            </h3>
            <p className="text-white/90 text-sm font-medium drop-shadow-md">
              Full-Stack | AI/ML
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="col-span-1 md:col-span-3 lg:col-span-5 bg-gradient-to-br from-grey/20 to-grey/5 border border-white/20 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 text-white hover:border-navy/50 transition-all duration-500"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Summary
        </h2>
        <div className="space-y-3 sm:space-y-4 text-white/90 leading-relaxed">
          <p className="text-sm sm:text-base md:text-lg">
            Based in the Philippines, I&apos;m a fourth-year student at{" "}
            <a
              href="https://su.edu.ph/"
              target="_blank"
              className="relative group"
            >
              <span className="text-navy font-semibold hover:text-navy/80 transition-colors duration-300 border-b border-navy/30 hover:border-navy/60">
                Silliman University
              </span>
            </a>
            , building at the intersection of web development and AI/ML.
          </p>
          <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
            <span>
              My focus today is on{" "}
              <span className="text-navy font-semibold hover:text-navy/80 transition-colors duration-300 border-navy/30 hover:border-navy/60">
                generative and agentic AI
              </span>
              , and on designing multi-pipeline systems where data, models, and
              automation click together like puzzle pieces.
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
            <span>
              I&apos;m passionate about turning ideas into real-world solutions,{" "}
              <span className="text-navy font-semibold hover:text-navy/80 transition-colors duration-300 border-navy/30 hover:border-navy/60">
                earning recognition in regional and provincial hackathons.
              </span>
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
            <span>
              Outside of code, I&apos;m drawn to{" "}
              <span className="text-navy font-semibold hover:text-navy/80 transition-colors duration-300 border-navy/30 hover:border-navy/60">
                neuroscience and the future of brain-computer interfaces.
              </span>{" "}
              Off the clock, I&apos;m more or less rotting in video games 🎮
            </span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-navy/20 to-navy/5 border border-navy/30 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white flex flex-col items-center justify-center text-center hover:border-navy/60 hover:from-navy/30 hover:to-navy/10 transition-all duration-500 group min-h-[120px] sm:min-h-[140px]"
      >
        <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-b from-navy to-navy/70 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
          10+
        </div>
        <p className="text-base sm:text-lg font-semibold text-navy/90 mb-1">
          Months
        </p>
        <p className="text-xs sm:text-sm text-white/70 text-center px-2">
          Professional Coding Experience
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="col-span-1 md:col-span-4 lg:col-span-6 bg-gradient-to-br from-navy/20 to-navy/5 border border-navy/30 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white hover:border-navy/60 transition-all duration-500 group"
      >
        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-navy flex items-center gap-2">
          <span>Tech Stack</span>
          <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">
            🚀
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {techStack.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">
              <h4 className="text-sm font-semibold text-navy/80 uppercase tracking-wider">
                {category.category}
              </h4>
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent =
                    tech.icon === "emoji" ? null : getTechIcon(tech.icon);
                  return (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-navy/20 transition-all duration-300 group/item"
                    >
                      {tech.icon === "emoji" ? (
                        <span className="text-lg text-navy font-bold group-hover/item:scale-110 transition-transform duration-300">
                          🦜
                        </span>
                      ) : (
                        IconComponent && (
                          <IconComponent className="text-lg text-navy group-hover/item:scale-110 transition-transform duration-300" />
                        )
                      )}
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="col-span-1 md:col-span-3 lg:col-span-4 bg-gradient-to-br from-grey/20 to-grey/5 border border-white/20 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white hover:border-navy/50 transition-all duration-500"
      >
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
          <span>Let&apos;s Connect</span>
          <span className="text-navy">🤝</span>
        </h3>
        <div className="flex flex-col gap-3">
          {contacts.map((contact, index) => {
            const IconComponent = getContactIcon(contact.icon);
            return (
              <a
                key={index}
                href={contact.url}
                {...(contact.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-white/5 hover:bg-navy/20 hover:text-navy transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <IconComponent className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{contact.name}</span>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="col-span-1 md:col-span-3 lg:col-span-4 bg-gradient-to-br from-navy/20 to-navy/5 border border-navy/30 backdrop-filter backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white hover:border-navy/60 hover:from-navy/30 hover:to-navy/10 transition-all duration-500 group"
      >
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
          <span>Awards & Recognition</span>
          <FaTrophy className="text-navy group-hover:rotate-12 transition-transform duration-300" />
        </h3>
        <div className="space-y-3">
          {awards.map((award, index) => {
            const IconComponent = getAwardIcon(award.icon);
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-navy/20 transition-all duration-300 group/item"
              >
                <IconComponent
                  className={`text-xl ${award.iconColor} group-hover/item:scale-110 transition-transform duration-300`}
                />
                <div className="flex-1">
                  <span className="font-medium text-sm block">
                    {award.title}
                  </span>
                  <span className="text-xs text-white/70">{award.event}</span>
                  <span className="text-xs text-white/50 block mt-1">
                    {award.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="col-span-1 md:col-span-6 lg:col-span-8 bg-gradient-to-r from-grey/20 via-grey/10 to-grey/20 border border-white/20 backdrop-filter backdrop-blur-md rounded-2xl h-16 sm:h-20 flex items-center overflow-hidden hover:border-navy/50 transition-all duration-500 group"
      >
        <motion.div
          ref={ref}
          className="flex items-center gap-6 sm:gap-8 text-3xl sm:text-4xl text-white/80 group-hover:text-white transition-colors duration-500"
          style={{ x: xTranslation }}
        >
          {icons.map((icon, index) => (
            <div
              key={index}
              className="hover:text-navy hover:scale-125 transition-all duration-300 cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex items-center gap-6 sm:gap-8 text-3xl sm:text-4xl text-white/80 group-hover:text-white transition-colors duration-500"
          style={{ x: xTranslation }}
        >
          {icons.map((icon, index) => (
            <div
              key={`duplicate-${index}`}
              className="hover:text-navy hover:scale-125 transition-all duration-300 cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const icons = [
  <FaPython key="python" />,
  <SiJavascript key="javascript" />,
  <SiNodedotjs key="nodejs" />,
  <SiExpress key="express" />,
  <SiTypescript key="typescript" />,
  <SiReact key="react" />,
  <SiNextdotjs key="nextjs" />,
  <SiMongodb key="mongodb" />,
  <SiTailwindcss key="tailwindcss" />,
  <SiFramer key="framer" />,
  <SiFigma key="figma" />,
  <SiGithub key="github" />,
  <SiPytorch key="pytorch" />,
  <SiOpenai key="openai" />,
];
