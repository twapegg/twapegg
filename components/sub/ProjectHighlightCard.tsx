"use client";

import { motion, useInView } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import TechKeyword from "../ui/tech-keyword";
import AnimatedText from "../ui/animated-text";
import Reveal from "../ui/Reveal";
import { useRef } from "react";

interface ProjectHighlightCardProps {
  title: string;
  skills: string[];
  imageUrl: string;
  imageAlt: string;
  link: string;
  year: number;
}

export default function ProjectHighlightCard({
  title,
  skills,
  imageUrl,
  imageAlt,
  link,
  year,
}: ProjectHighlightCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

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

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Link href={link}>
        <CardContainer className="">
          <CardBody className="bg-grey/10 border border-white/50 relative group/card dark:hover:shadow-2xl text-white dark:hover:shadow-emerald-500/[0.1]  w-full h-auto rounded-2xl p-6 flex items-center flex-col gap-8 md:flex-row md:gap-4">
            <CardItem translateZ={80} className="mt-4">
              <Image
                src={imageUrl}
                height="1000"
                width="1000"
                className="h-[12rem] w-auto rounded-xl group-hover/card:shadow-xl"
                alt={imageAlt}
              />
            </CardItem>
            <div className="flex flex-col items-center justify-center px-4 md:px-12 gap-4">
              <CardItem translateZ={60} className="w-full z-50">
                <AnimatedText
                  text={title}
                  className="text-4xl font-bold  dark:text-white"
                />
              </CardItem>

              <CardItem
                translateZ={40}
                className="flex flex-row gap-2 sm:flex-wrap"
              >
                {skills.map((skill, index) => (
                  <TechKeyword key={index} skill={skill} />
                ))}
              </CardItem>
            </div>

            <CardItem
              translateZ={60}
              className="px-4 ml-4 text-lg font-bold flex flex-row items-center justify-center gap-2"
            >
              {year}{" "}
              <span className="invisible group-hover/card:visible">
                <FaArrowUpRightFromSquare />
              </span>
            </CardItem>
          </CardBody>
        </CardContainer>
      </Link>
    </motion.div>
  );
}
