"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaArrowDown,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
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

export default function AboutGrid() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { amount: 0.3 });
  const scrollControls = useAnimation();

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
      className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-4 grid-rows-auto h-full md:mx-16 lg:mx-32 my-20 gap-4"
    >
      <motion.div
        className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] md:row-span-2 row-span-1 col-span-1 rounded-3xl md:h-full h-[20rem] relative w-full"
        initial="hidden"
        animate={scrollControls}
        variants={variants}
      >
        <Image
          src="/elon.jpg"
          fill
          alt="sample"
          className="object-cover w-full h-full rounded-3xl"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl md:col-span-2 col-span-1 row-span-1 p-4 xl:px-12 text-white flex flex-col items-left justify-center gap-4 md:gap-2 xl:gap-4 text-lg md:text-xs lg:text-sm 2xl:text-lg"
      >
        <p>
          Based in the Philippines, I'm currently a third-year student at{" "}
          <a href="https://su.edu.ph/" target="_blank">
            <span className="hover:text-navy transition-colors duration-500 font-bold">
              Silliman University
            </span>
          </a>
          . I primarily work with full-stack web development and machine
          learning. I also like to keep updated with AI and computational
          neuroscience developments. 💻
        </p>
        <p>Off the clock, I'm more or less rotting on video games! 🎮</p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl col-span-1 row-span-1 text-white p-4 font-bold flex flex-col items-center justify-center gap-0 md:gap-4 md:text-xl lg:text-xl"
      >
        <h1 className=" text-4xl md:text-4xl lg:text-5xl 2xl:text-7xl">4+</h1>
        <p className=" text-lg md:text-xl lg:text-2xl text-center 2xl:px-12">
          years of coding experience
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl col-span-1 row-span-1 text-white py-4 px-4 md:px-4 xl:px-12 flex flex-col gap-4 items-center justify-center text-center"
      >
        <h1 className="text-xl md:text-lg lg:text-xl xl:text-3xl font-bold">
          Full-stack Development
        </h1>
        <p className="text-md sm:text-sm md:text-sm xl:text-base">
          From a product's exploration to implementation.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl col-span-1 row-span-1 text-white py-4 px-4 md:px-4 xl:px-12 flex flex-col gap-4 items-center justify-center text-center"
      >
        <h1 className="text-xl xl:text-3xl font-bold">SEO</h1>
        <p className="text-md sm:text-sm md:text-sm xl:text-base">
          Propel websites to stellar heights in search engine rankings.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl col-span-1 row-span-1 text-white p-4 font-bold flex flex-col gap-3"
      >
        <h1 className="text-xl md:text-base lg:text-lg 2xl:text-2xl flex flex-row items-center gap-4 md:gap-1 lg:gap-4">
          Let's connect!
          <span>
            <FaArrowDown />
          </span>
        </h1>
        <ul className="list-disc lg:pl-7 md:pl-4 pl-7 text-lg md:text-base xl:text-xl ">
          <li>
            <a
              href="https://www.linkedin.com/in/stanleyaltonaga"
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-navy transition-colors duration-500"
            >
              <span>
                <FaLinkedin />
              </span>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/twapegg"
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-navy transition-colors duration-500"
            >
              <span>
                <FaGithub />
              </span>
              Github
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/users/726152625006968893"
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-navy transition-colors duration-500"
            >
              <span>
                <FaDiscord />
              </span>
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ppugppugi/"
              target="_blank"
              className="flex flex-row items-center gap-2 hover:text-navy transition-colors duration-500"
            >
              <span>
                <FaInstagram />
              </span>
              Instagram
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={scrollControls}
        variants={variants}
        className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl col-span-1 md:col-span-4 row-span-1 h-[5rem] flex flex-row gap-10 text-white text-3xl items-center overflow-hidden"
      >
        <motion.div
          ref={ref}
          className="flex flex-row gap-12 max-w-fit"
          style={{ x: xTranslation }}
        >
          {icons.map((icon) => icon)}
        </motion.div>
        <motion.div
          ref={ref}
          className="flex flex-row gap-12 max-w-fit"
          style={{ x: xTranslation }}
        >
          {icons.map((icon) => icon)}
        </motion.div>
      </motion.div>
    </div>
  );
}

const icons = [
  <FaPython key="python" />,
  <SiJavascript key="javascript" />,
  <SiCplusplus key="cplusplus" />,
  <SiNodedotjs key="nodejs" />,
  <SiExpress key="express" />,
  <SiTypescript key="typescript" />,
  <SiReact key="react" />,
  <SiNextdotjs key="nextjs" />,
  <SiMongodb key="mongodb" />,
  <SiMysql key="mysql" />,
  <SiPrisma key="prisma" />,
  <SiTailwindcss key="tailwindcss" />,
  <SiFramer key="framer" />,
  <SiFigma key="figma" />,
  <SiGithub key="github" />,
  <SiTensorflow key="tensorflow" />,
  <SiPytorch key="pytorch" />,
];
