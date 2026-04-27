"use client";

import { motion, useInView } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import TechKeyword from "../ui/tech-keyword";
import AnimatedText from "../ui/animated-text";
import { useRef } from "react";

interface ProjectHighlightCardProps {
  title: string;
  description: string;
  skills: string[];
  imageUrl: string;
  imageAlt: string;
  link: string;
  demoLink?: string;
  year: number;
}

export default function ProjectHighlightCard({
  title,
  description,
  skills,
  imageUrl,
  imageAlt,
  link,
  demoLink,
  year,
}: ProjectHighlightCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const websiteHref = link;
  const demoHref = demoLink || link;

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
      <CardContainer className="w-full">
        <CardBody className="bg-grey/20 border border-white/30 backdrop-filter backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-blue-500/20 text-white hover:border-white/50 w-full h-auto rounded-2xl p-8 flex items-center flex-col gap-8 md:flex-row md:gap-6 transition-all duration-300">
          <CardItem translateZ={80} className="mt-4 shrink-0">
            <Image
              src={imageUrl}
              height="1000"
              width="1000"
              loading="eager"
              className="h-56 w-56 md:h-48 md:w-48 object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-300"
              alt={imageAlt}
            />
          </CardItem>

          <div className="flex flex-col items-center md:items-start justify-center flex-1 px-4 md:px-8 gap-4 min-w-0">
            <CardItem
              translateZ={60}
              className="w-full z-50 flex items-center justify-center md:justify-between gap-3"
            >
              <AnimatedText
                text={title}
                className="text-3xl md:text-4xl font-bold text-white text-center md:text-left"
              />
              <span className="shrink-0 rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wide text-gold">
                {year}
              </span>
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
            translateZ={70}
            className="w-full md:w-44 md:self-stretch flex items-center"
          >
            <div className="flex w-full flex-row md:flex-col gap-3 justify-center md:items-center">
              <Link
                href={websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none md:w-32 inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Website
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </Link>
              <Link
                href={demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none md:w-32 inline-flex items-center justify-center gap-2 rounded-xl border border-gold/70 bg-gold/15 px-4 py-2.5 text-sm font-semibold text-gold transition-colors duration-300 hover:bg-gold/25"
              >
                Demo
                <FaArrowUpRightFromSquare className="text-[10px]" />
              </Link>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
