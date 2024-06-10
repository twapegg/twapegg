"use client";
import { motion, useMotionTemplate } from "framer-motion";
import { useState, useEffect } from "react";

const RadialGradientBackground = ({ positionX, positionY }: any) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Ensure the code runs only on the client side
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial setting of window dimensions
    updateDimensions();

    // Add event listeners for resize and scroll
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientCenterX = windowWidth * 0.85; // Position the gradient center at 90% of the window width
  const gradientCenterY = windowHeight / 2 + scrollY; // Position the gradient center at the middle of the window height

  return (
    <motion.div
      className="z-50 pointer-events-none absolute inset-0"
      style={{
        background: useMotionTemplate`
      radial-gradient(circle 200px at ${gradientCenterX}px ${gradientCenterY}px, #6A0DAD 10%, transparent 100%)
    `,
      }}
    />
  );
};

export default RadialGradientBackground;
