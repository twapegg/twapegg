"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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

import useMeasure from "react-use-measure";

import { animate, motion, useMotionValue } from "framer-motion";

export default function AboutGrid() {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = (-width * 2) / 2 - 54;

    let controls = animate(xTranslation, [0, finalPosition], {
      repeat: Infinity,
      repeatType: "loop",
      duration: 30,
      ease: "linear",
    });
    return () => controls.stop();
  }, [xTranslation, width]);

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-4 grid-rows-auto h-full md:mx-16 lg:mx-32 my-16 gap-4">
      <div className="md:row-span-2 row-span-1 col-span-1 border md:h-full h-[20rem] relative w-full">
        <Image
          src="/elon.jpg"
          fill
          alt="sample"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="border md:col-span-2 col-span-1 row-span-1 p-4 lg:px-12 text-white font-bold flex flex-col items-left justify-center gap-4 md:gap-0 lg:gap-4 text-lg md:text-sm lg:text-md">
        <p>
          Based in the Philippines, I'm currently a third-year student at{" "}
          <a href="https://su.edu.ph/" target="_blank">
            Silliman University.
          </a>{" "}
          I primarily work with full-stack web development and machine learning.
          I also like to keep updated with AI and computational neuroscience
          developments. 💻
        </p>
        <p>Off the clock, I'm more or less rotting on video games! 🎮</p>
      </div>
      <div className="border col-span-1 row-span-1 text-white p-4 font-bold flex flex-col items-center justify-center gap-0 md:gap-4 md:text-xl lg:text-xl">
        <h1 className="xl:text-7xl md:text-5xl text-4xl">4+</h1>
        <p className=" text-lg md:text-xl lg:text-3xl text-center">
          years of coding experience
        </p>
      </div>
      <div className="border col-span-1 row-span-1 text-white p-4 md:px-14 flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-xl font-bold">Full-stack Development</h1>
        <p className="text-md">
          From a product's exploration to implementation.
        </p>
      </div>
      <div className="border col-span-1 row-span-1 text-white py-4 px-4 md:px-12 flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-xl font-bold">Machine Learning</h1>
        <p className="text-md">Transform data into intelligent solutions.</p>
      </div>
      <div className="border col-span-1 row-span-1 text-white p-4 font-bold flex flex-col gap-3">
        <h1 className="text-xl md:text-base lg:text-xl xl:text-2xl flex flex-row items-center gap-4 md:gap-1 lg:gap-4">
          Connect with me!
          <span>
            <FaArrowDown />
          </span>
        </h1>
        <ul className="list-disc lg:pl-7 md:pl-4 pl-7 lg:text-base xl:text-xl ">
          <li>
            <a
              href="https://www.linkedin.com/in/stanleyaltonaga"
              target="_blank"
              className="flex flex-row items-center gap-2"
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
              className="flex flex-row items-center gap-2"
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
              className="flex flex-row items-center gap-2"
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
              className="flex flex-row items-center gap-2"
            >
              <span>
                <FaInstagram />
              </span>
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className="border col-span-1 md:col-span-4 row-span-1 h-[5rem] flex flex-row gap-10 text-white text-3xl items-center overflow-hidden">
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
      </div>
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
