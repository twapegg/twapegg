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
  description: string;
  skills: string[];
  imageUrl: string;
  imageAlt: string;
  link: string;
  year: number;
}

export default function ProjectHighlightCard({
  title,
  description,
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
        <CardContainer className="w-full">
          <CardBody className="bg-grey/20 border border-white/30 backdrop-filter backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-blue-500/20 text-white hover:border-white/50 w-full h-auto rounded-2xl p-8 flex items-center flex-col gap-8 md:flex-row md:gap-6 transition-all duration-300">
            <CardItem translateZ={80} className="mt-4 flex-shrink-0">
              <Image
                src={imageUrl}
                height="1000"
                width="1000"
                className="h-[14rem] w-[14rem] md:h-[12rem] md:w-[12rem] object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
                alt={imageAlt}
              />
            </CardItem>
            <div className="flex flex-col items-center md:items-start justify-center flex-1 px-4 md:px-8 gap-4 min-w-0">
              <CardItem translateZ={60} className="w-full z-50">
                <AnimatedText
                  text={title}
                  className="text-3xl md:text-4xl font-bold text-white text-center md:text-left"
                />
              </CardItem>

              <CardItem translateZ={50} className="w-full">
                <p className="text-white/80 text-sm md:text-base leading-relaxed text-center md:text-left">
                  {description}
                </p>
              </CardItem>

              <CardItem
                translateZ={40}
                className="flex flex-row flex-wrap gap-2 justify-center md:justify-start w-full"
              >
                {skills.map((skill, index) => (
                  <TechKeyword key={index} skill={skill} />
                ))}
              </CardItem>
            </div>

            <CardItem
              translateZ={60}
              className="flex-shrink-0 px-4 text-xl font-bold flex flex-row items-center justify-center gap-2 text-navy group-hover/card:text-navy/80 transition-colors duration-300"
            >
              {year}{" "}
              <span className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <FaArrowUpRightFromSquare className="text-base" />
              </span>
            </CardItem>
          </CardBody>
        </CardContainer>
      </Link>
    </motion.div>
  );
}
